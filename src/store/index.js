import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


const getFormattedTime = function (time) {
    return ("0" + time).slice(-2);
};


const paginatedData = function (data) {
    var perPage = 5;
    var from = this.currentPage * perPage - perPage;
    var to = this.currentPage * perPage;
    return data.slice(from, to);
}

export default new Vuex.Store({
    state: {
        restricted: false,
        mobileMenu: false,
        countdownTimer: null,
        campaignData: null,
        loggedIn: null,
        callbackUrl: null,
        lang: null,
        transactions: null,
        pageView: "beforeLogin",
        prizeView: "daily",
        winnerView: "daily",
        participateError: null,
        isTerms: 0,
        acceptTerms: false,
        currentPage: 1
    },
    mutations: {
        updateRestricted: (state, payload) => {
            state.restricted = payload;
        },
        updateMobileMenu: (state, payload) => {
            state.mobileMenu = payload;
        },
        updateCountdownTimer: (state, payload) => {
            state.countdownTimer = payload;
        },
        updateCampaignData: (state, payload) => {
            state.campaignData = payload;
        },
        updateLoggedIn: (state, payload) => {
            state.loggedIn = payload;
        },
        updateCallbackUrl: (state, payload) => {
            state.callbackUrl = payload;
        },
        updateLang: (state, payload) => {
            state.lang = payload;
        },
        updateTransactions: (state, payload) => {
            state.transactions = payload;
        },
        updatePageView: (state, payload) => {
            state.pageView = payload;
        },
        updatePrizeView: (state, payload) => {
            state.prizeView = payload;
        },
        updateWinnerView: (state, payload) => {
            state.winnerView = payload;
        },
        updateParticipateError: (state, payload) => {
            state.participateError = payload;
        },
        updateIsTerms: (state, payload) => {
            state.isTerms = payload;
        },
        updateAcceptTerms: (state, payload) => {
            state.acceptTerms = payload;
        },
        updateCurrentPage: (state, payload) => {
            state.currentPage = payload;
        },
    },
    getters: {
        hasMultiplePrizeTypes: function (state) {
            return (
                state.campaignData.prizes.map(function (prize) {
                    return prize.type;
                }).length > 1
            );
        },
        hasDailyPrize: function (state) {
            return state.campaignData.prizes.some(function (prize) {
                return prize.type === "daily";
            });
        },
        hasWeeklyPrize: function (state) {
            return state.campaignData.prizes.some(function (prize) {
                return prize.type === "weekly";
            });
        },
        hasMonthlyPrize: function (state) {
            return state.campaignData.prizes.some(function (prize) {
                return prize.type === "monthly";
            });
        },
        hasGrandPrize: function (state) {
            return state.campaignData.prizes.some(function (prize) {
                return prize.type === "grand";
            });
        },
        hasMultipleWinnerTypes: function (state) {
            return (
                state.campaignData.winners.map(function (winner) {
                    return winner.type;
                }).length > 1
            );
        },
        hasDailyWinner: function (state) {
            return state.campaignData.winners.some(function (winner) {
                return winner.type === "daily";
            });
        },
        hasWeeklyWinner: function (state) {
            return state.campaignData.winners.some(function (winner) {
                return winner.type === "weekly";
            });
        },
        hasMonthlyWinner: function (state) {
            return state.campaignData.winners.some(function (winner) {
                return winner.type === "monthly";
            });
        },
        hasGrandWinner: function (state) {
            return state.campaignData.winners.some(function (winner) {
                return winner.type === "grand";
            });
        },
        filteredPrize: function (state) {
            return state.campaignData.prizes.filter(function (prize) {
                return prize.type === state.prizeView;
            });
        },
        filteredWinner: function (state) {
            return state.campaignData.winners.filter(function (winner) {
                return winner.type === state.winnerView;
            });
        },
        transactionPageCount: function (state) {
            return Math.ceil(state.transactions.length / 5);
        },
        displayedTdata: function (state) {
            return paginatedData(state.transactions);
        }
    },
    actions: {
        getImageUrl: function ({state}, img_uri) {
            if (img_uri.length > 0 && img_uri.charAt(0) != "/")
                img_uri = "/" + img_uri;

            return state.campaignData.aws_cdn_url + img_uri;
        },
        entryLogin: function () {
            var _this = this;
            if (this.is_terms == 1 && this.accept_terms == false) {
                _this.showParticipateError(this.lang.error_accept_terms_conditions);
                return false;
            }

            var postData = "id_site=" + this.campaignData.competition.id_site;
            postData +=
                "&id_competition=" + this.campaignData.competition.id_competition;
            postData += "&email=" + this.campaignData.user.email;
            postData += "&order_id=" + this.campaignData.order_id;
            postData += "&mavtoken=" + this.campaignData.mavtoken;
            if (this.is_terms == 1) {
                var terms = null;

                if (this.accept_terms == true) terms = 1;
                else terms = 0;

                postData += "&terms_cond=" + terms;
            }

            fetch(this.callback_url + "/user/purchaseSignup", {
                method: "post",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: postData
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    if (data.error == 0) {
                        window.parent.postMessage({ action: "remove-orderid" }, "*");
                        window.location.reload();
                        return false;
                    } else {
                        _this.showParticipateError(data.msg);
                    }
                });
        },
        continueShopping: function () {
            window.parent.postMessage(
                { id_widget: this.campaignData.id_widget, action: "close-popin" },
                "*"
            );
            window.top.location.href = this.campaignData.continue_shopping_url;
        },

        clickPagination: function ({ commit }, page) {
            commit('updateCurrentPage', page)

            if (document.getElementById("transaction_focus") != null)
                document.getElementById("transaction_focus").focus();
        },
        showParticipateError: function ({ commit, state }, error) {
            commit('updateParticipateError', error);
            if (state.participateError !== null) {
                setTimeout(function () {
                    commit('updateParticipateError', null);
                }, 10000);
            }
        },
        handleHomeClick: function ({ commit, state }) {
            commit('updateMobileMenu', false);

            if (state.loggedIn == "1") commit('updatePageView', 'home');
            else commit('updatePageView', 'beforeLogin');
        },
        handleAcceptTerms: function ({ commit, state }) {
            if (state.acceptTerms == 1) commit('updateAcceptTerms', 0);
            else commit('updateAcceptTerms', 1);

            alert(state.acceptTerms);
        },
        showTimer: function ({ commit }) {
            // var endDate = unix(this.campaignData.competition.date_end);
            setInterval(function () {
                // var timeLeft = duration(endDate.diff(new Date));
                var timeLeft = 32535435345;

                // Reload on time end
                if (timeLeft._milliseconds < 0) {
                    location.reload();
                } else {
                    var formatted = {
                        hours: getFormattedTime(timeLeft.hours()),
                        minutes: getFormattedTime(timeLeft.minutes()),
                        seconds: getFormattedTime(timeLeft.seconds())
                    };
                    commit('updateCountdownTimer', formatted)
                }
            }, 1000);
        }
    },
});
