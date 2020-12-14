<template>
  <div id="sp-controller" v-if="campaignData">
    <div
      class="campaign-overlay-wrapper"
      :class="['font-'+campaignData.theme_settings.font, 'theme-'+campaignData.theme_settings.bg_theme]"
      :style="{'--btn-color': campaignData.theme_settings.button_color, '--primary-color':  campaignData.theme_settings.primary_color, '--secondary-color':  campaignData.theme_settings.secondary_color}"
    >
      <div
        class="campaign-container"
        :class="{login: pageView === 'beforeLogin'}"
        v-if="!restricted"
      >
        <div class="campaign-beforeLogin" v-if="pageView == 'beforeLogin'">
          <div
            class="campaign-beforeLogin-container"
            :class="'theme-'+campaignData.theme_settings.bg_theme"
          >
            <span v-if="campaignData.theme_settings.bg_theme == '1'">
              <svg viewBox="0 0 136.8 173.4" class="top-bg" preserveAspectRatio="xMinYMin meet">
                <g>
                  <path
                    class="st0"
                    d="M0.1,0.4h136.8c0,0-29.4,30.3-64.4,49s-64.7,90-72.3,93.7V0.4z"
                  />
                  <path class="st1" d="M104.4,0.4c0,0-47.7,23.3-67,60.3S7.8,161.4,0.4,173.1" />
                </g>
              </svg>
              <svg viewBox="0 0 171.5 199.5" class="bottom-bg" preserveAspectRatio="xMaxYMax meet">
                <g>
                  <path
                    class="st0"
                    d="M0.6,199.3h170.3V0c0,0-13.7,44-70.7,79.3C52.4,109-6.4,163.7,0.6,199.3z"
                  />
                  <path class="st1" d="M33.6,199c0,0,110.3-37,138.7-116.3" />
                </g>
              </svg>
            </span>
            <span v-if="campaignData.theme_settings.bg_theme == '2'">
              <svg viewBox="0 0 482 65" class="top-bg" preserveAspectRatio="xMinYMin meet">
                <polygon
                  points="0,55.4 3.3,58.7 8.3,53.7 13.4,58.7 18.5,53.7 23.5,58.7 28.6,53.7 33.6,58.7 38.7,53.7 43.8,58.7 48.8,53.7 
53.9,58.7 58.9,53.7 64,58.7 69.1,53.7 74.1,58.7 79.2,53.7 84.2,58.7 89.3,53.7 94.4,58.7 99.4,53.7 104.5,58.7 109.5,53.7 
114.6,58.7 119.6,53.7 124.7,58.7 129.8,53.7 134.8,58.7 139.9,53.7 144.9,58.7 150,53.7 155.1,58.7 160.1,53.7 165.2,58.7 
170.2,53.7 175.3,58.7 180.4,53.7 185.4,58.7 190.5,53.7 195.5,58.7 200.6,53.7 205.7,58.7 210.7,53.7 215.8,58.7 220.8,53.7 
225.9,58.7 231,53.7 236,58.7 241.1,53.7 246.1,58.7 251.2,53.7 256.3,58.7 261.3,53.7 266.4,58.7 271.4,53.7 276.5,58.7 
281.5,53.7 286.6,58.7 291.7,53.7 296.7,58.7 301.8,53.7 306.8,58.7 311.9,53.7 317,58.7 322,53.7 327.1,58.7 332.1,53.7 
337.2,58.7 342.3,53.7 347.3,58.7 352.4,53.7 357.4,58.7 362.5,53.7 367.6,58.7 372.6,53.7 377.7,58.7 382.7,53.7 387.8,58.7 
392.9,53.7 397.9,58.7 403,53.7 408,58.7 413.1,53.7 418.2,58.7 423.2,53.7 428.3,58.7 433.3,53.7 438.4,58.7 443.4,53.7 
448.5,58.7 453.6,53.7 458.6,58.7 463.7,53.7 468.7,58.7 473.8,53.7 478.9,58.7 482,55.6 482,0 0,0 "
                />
              </svg>
              <svg viewBox="0 0 482 156.4" class="bottom-bg" preserveAspectRatio="xMaxYMax meet">
                <polygon
                  style="opacity: 0.5;"
                  points="482,81.9 400.1,0 294.6,105.5 189.2,0 83.7,105.5 0,21.9 0,156.4 482,156.4 "
                />
                <polygon
                  style="opacity: 0.5;"
                  points="482,23.7 400.1,105.5 294.6,0 189.2,105.5 83.7,0 0,83.7 0,156.4 482,156.4 "
                />
              </svg>
            </span>
            <span v-if="campaignData.theme_settings.bg_theme == '3'">
              <svg viewBox="0 0 482 654" preserveAspectRatio="xMinYMin slice">
                <ellipse id="Oval" class="st0" cx="241" cy="288.5" rx="225" ry="224.5" />
              </svg>
            </span>
            <span v-if="campaignData.theme_settings.bg_theme == '4'">
              <svg viewBox="0 0 482 242.4" preserveAspectRatio="xMaxYMax meet">
                <g class="g1">
                  <path
                    d="M336.6,122.9c-89-51.5-258.4,9.7-336.6,94.2v25.3h432.3C417.1,193.7,384.3,150.4,336.6,122.9z"
                  />
                  <path
                    id="Oval_Copy_6"
                    d="M133.4,48.4c-24.6,5.7-44.2,49.9-38.4,74.8c5.7,24.9,20.4,3.3,45-2.4s54.1-12.6,48.4-37.5
                      C182.6,58.3,158,42.7,133.4,48.4z"
                  />
                </g>
                <g class="g2">
                  <path
                    d="M482,144.1c-24.6-47.1-103.2,9.3-201.6,9.3c-54.4,0-113.7,0.1-162.2,11.6c-16.7-27.5-42.8-49.5-75.6-60.9
c-13-4.5-27.4-5.6-42.6-4.1v142.4h482V144.1z"
                  />
                  <path d="M482,0c-32.9,28.3-51.3,61.1-28.3,101c7.7,13.4,17.4,25.1,28.3,34.9V0z" />
                </g>
              </svg>
            </span>
            <span v-if="campaignData.theme_settings.bg_theme == '5'">
              <svg viewBox="0 0 482 654" preserveAspectRatio="xMinYMin slice">
                <path
                  class="p1"
                  d="M44,638.9V633L0,648.1v5.9L44,638.9z M44,615.9V610L0,625.1v5.9L44,615.9z M44,591.9V586
L0,601.1v5.9L44,591.9z M44,568.9V563L0,578.1v5.9L44,568.9z M44,544.9V539L0,554.1v5.9L44,544.9z M44,520.9V515L0,530.1v5.9
L44,520.9z M44,497.9V492L0,507.1v5.9L44,497.9z M44,473.9V468L0,483.1v5.9L44,473.9z M44,450.9V445L0,460.1v5.9L44,450.9z
M44,426.9V421L0,436.1v5.9L44,426.9z M44,403.9V398L0,413.1v5.9L44,403.9z M44,379.9V374L0,389.1v5.9L44,379.9z M44,356.9V351
L0,366.1v5.9L44,356.9z M44,332.9V327L0,342.1v5.9L44,332.9z M44,311.9V306L0,321.1v5.9L44,311.9z M44,288.9V283L0,298.1v5.9
L44,288.9z M44,264.9V259L0,274.1v5.9L44,264.9z M44,241.9V236L0,251.1v5.9L44,241.9z M44,217.9V212L0,227.1v5.9L44,217.9z
M44,193.9V188L0,203.1v5.9L44,193.9z M44,170.9V165L0,180.1v5.9L44,170.9z M44,146.9V141L0,156.1v5.9L44,146.9z M44,123.9V118
L0,133.1v5.9L44,123.9z M44,99.9V94L0,109.1v5.9L44,99.9z M44,76.9V71L0,86.1V92L44,76.9z M44,52.9V47L0,62.1V68L44,52.9z M44,29.9
V24L0,39.1V45L44,29.9z M44,5.9V0L0,15.1V21L44,5.9z"
                />
                <path
                  class="p2"
                  d="M482,654v-5.9L438,633v5.9L482,654z M482,631v-5.9L438,610v5.9L482,631z M482,607
                  v-5.9L438,586v5.9L482,607z M482,584v-5.9L438,563v5.9L482,584z M482,560v-5.9L438,539v5.9L482,560z M482,536v-5.9L438,515v5.9
L482,536z M482,513v-5.9L438,492v5.9L482,513z M482,489v-5.9L438,468v5.9L482,489z M482,466v-5.9L438,445v5.9L482,466z M482,442
v-5.9L438,421v5.9L482,442z M482,419v-5.9L438,398v5.9L482,419z M482,395v-5.9L438,374v5.9L482,395z M482,372v-5.9L438,351v5.9
L482,372z M482,348v-5.9L438,327v5.9L482,348z M482,327v-5.9L438,306v5.9L482,327z M482,304v-5.9L438,283v5.9L482,304z M482,280
v-5.9L438,259v5.9L482,280z M482,257v-5.9L438,236v5.9L482,257z M482,233v-5.9L438,212v5.9L482,233z M482,209v-5.9L438,188v5.9
L482,209z M482,186v-5.9L438,165v5.9L482,186z M482,162v-5.9L438,141v5.9L482,162z M482,139v-5.9L438,118v5.9L482,139z M482,115
v-5.9L438,94v5.9L482,115z M482,92v-5.9L438,71v5.9L482,92z M482,68v-5.9L438,47v5.9L482,68z M482,45v-5.9L438,24v5.9L482,45z
M482,21v-5.9L438,0v5.9L482,21z"
                />
              </svg>
            </span>
            <span v-if="campaignData.theme_settings.bg_theme == '6'">
              <svg viewBox="0 0 482 654" preserveAspectRatio="xMinYMin slice">
                <g class="g1">
                  <path style="opacity: 0.1;" d="M54,0v72H0V0H54" />
                  <path style="opacity: 0.3;" d="M0,144h128V72H0V144z" />
                  <path style="opacity: 0.12;" d="M200,447h72v-72h-72V447z" />
                  <path style="opacity: 0.05;" d="M342,307h72V90h-72V307z" />
                  <path style="opacity: 0.06;" d="M198,654h-72V520.4h72V654" />
                </g>
                <g class="g2">
                  <path style="opacity: 0.2;" d="M482,374.9v71.6h-70.2v-71.6H482" />
                  <path style="opacity: 0.15;" d="M0,145h54v72H0V145" />
                  <path style="opacity: 0.15;" d="M414,306v72H200v-72H414" />
                  <path style="opacity: 0.25;" d="M414,233h68v-72h-68V233z" />
                  <path style="opacity: 0.17;" d="M197,654v-62.1h72V654H197" />
                </g>
                <g class="g3">
                  <path style="opacity: 0.15;" d="M127,72h214V0H127V72z" />
                  <path style="opacity: 0.2;" d="M127.6,376.9v-71.8H199v71.8L127.6,376.9" />
                  <path style="opacity: 0.08;" d="M272,307h72v-72h-72V307z" />
                  <path style="opacity: 0.13;" d="M414,654h-72V446.9h72V654" />
                  <path style="opacity: 0.16;" d="M0,521h129v-72H0V521z" />
                </g>
                <g class="g4">
                  <path style="opacity: 0.05;" d="M199.1,71.4h71.4v71.7h-71.4V71.4" />
                  <path style="opacity: 0.1;" d="M342,449v72H128v-72H342" />
                  <path style="opacity: 0.06;" d="M0,654h59v-72H0V654z" />
                  <path style="opacity: 0.15;" d="M414,593v-72h72v72H410" />
                  <path style="opacity: 0.05;" d="M0,520.7h56.5v71.5H0V520.7" />
                </g>
              </svg>
            </span>
            <section
              class="prizeCards"
              v-if="campaignData.theme_settings.bg_theme == '8' && campaignData.prizes.length"
            >
              <figure v-for="data in campaignData.prizes" :key="data.id_gift">
                <img :src="getImageUrl(data.icon_img)" :alt="data.description" />
              </figure>
            </section>
            <div>
              <div class="campaignEndToday text-center" v-if="countdownTimer">
                <p>{{lang.campaign_end_today}}</p>
                <ul class="campaign-upcoming-timer">
                  <li>
                    <span>{{ countdownTimer.hours }}</span>
                    {{lang.hours}}
                  </li>
                  <li>
                    <span>{{ countdownTimer.minutes }}</span>
                    {{lang.minutes}}
                  </li>
                  <li>
                    <span>{{ countdownTimer.seconds }}</span>
                    {{lang.seconds}}
                  </li>
                </ul>
              </div>
              <!-- <figure class="logo">
                <img src="%{Kohana::config('cloudinary')->cdn_raw_url}/assets/img/purchase-fo/logo-solr.png" alt="">
              </figure>-->
              <small
                v-if="campaignData.is_user_logged_in == '1'"
              >{{lang.logged_in_as}} {{ campaignData.user.name }}</small>
              <h2>{{ campaignData.competition.name }}</h2>
              <p>{{ campaignData.competition.description }}</p>
              <div class="campaign-error-msg" v-if="participateError">{{ participateError }}</div>
              <div v-if="campaignData.show_partcipate_now == 1">
                <button
                  class="campaign-btn-primary"
                  @click.prevent="entryLogin"
                >{{ campaignData.theme_settings.btntxt_after_login }}</button>
                <div v-if="is_terms == 1">
                  <input type="checkbox" name="terms_cond" id="terms_cond" v-model="accept_terms" />
                  {{lang.form_accept_terms_text}} {{lang.terms_and_condition}}
                </div>
              </div>
              <div v-else>
                <a
                  href="javaScript:void(0);"
                  @click="continueShopping()"
                  class="campaign-btn-primary"
                >{{ campaignData.theme_settings.btntxt_before_login }}</a>
                <div
                  v-if="campaignData.is_user_logged_in == '0' && campaignData.competition.is_show_gdpr == '1'"
                  class="gdpr-card"
                >
                  <div>
                    <strong>{{lang.gdpr_appsmav_title}}</strong>
                    <div>
                      {{lang.gdpr_appsmav_text}}
                      <a
                        href="https://appsmav.com/privacy.php"
                        target="_blank"
                      >{{lang.privacy_policy}}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="others">
                <p
                  class="min-order-value"
                  v-if="campaignData.entry.settings.is_minimum_order == 1 && campaignData.entry.settings.minimum_order_value != 0"
                >
                  <strong>{{campaignData.minimum_spend_text}}</strong>
                </p>
                <div class="writeOffs" v-if="campaignData.theme_settings.bg_theme !== '8'">
                  <div>
                    <a
                      href="#"
                      v-if="campaignData.competition.terms_text_type === 'text'"
                      @click.prevent="pageView = 'terms'"
                      class="tc"
                    >
                      <small>{{lang.terms_and_condition}}</small>
                    </a>
                    <a
                      v-if="campaignData.competition.terms_text_type === 'url'"
                      :href="campaignData.competition.terms_text_content"
                      target="_blank"
                      class="tc"
                    >
                      <small>{{lang.terms_and_condition}}</small>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      v-if="campaignData.competition.privacy_text_type === 'text'"
                      @click.prevent="pageView = 'policy'"
                      class="tc"
                    >
                      <small>{{lang.privacy_policy}}</small>
                    </a>
                    <a
                      v-if="campaignData.competition.privacy_text_type === 'url'"
                      :href="campaignData.competition.privacy_text_content"
                      target="_blank"
                      class="tc"
                    >
                      <small>{{lang.privacy_policy}}</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <nav class="campaign-beforeLogin-menu">
              <button
                v-if="campaignData.is_winners == '1'"
                class="btn-winners"
                @click.prevent="pageView = 'winner'"
              >
                <span>{{lang.winners}}</span>
              </button>
              <button
                v-if="campaignData.is_prizes == '1'"
                class="btn-prizes"
                @click.prevent="pageView = 'prize'"
              >
                <span>{{lang.prizes}}</span>
              </button>
            </nav>
            <div class="writeOffs" v-if="campaignData.theme_settings.bg_theme == 8">
              <div>
                <a
                  href="#"
                  v-if="campaignData.competition.terms_text_type === 'text'"
                  @click.prevent="pageView = 'terms'"
                  class="tc"
                >
                  <small>{{lang.terms_and_condition}}</small>
                </a>
                <a
                  v-if="campaignData.competition.terms_text_type === 'url'"
                  :href="campaignData.competition.terms_text_content"
                  target="_blank"
                  class="tc"
                >
                  <small>{{lang.terms_and_condition}}</small>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  v-if="campaignData.competition.privacy_text_type === 'text'"
                  @click.prevent="pageView = 'policy'"
                  class="tc"
                >
                  <small>{{lang.privacy_policy}}</small>
                </a>
                <a
                  v-if="campaignData.competition.privacy_text_type === 'url'"
                  :href="campaignData.competition.privacy_text_content"
                  target="_blank"
                  class="tc"
                >
                  <small>{{lang.privacy_policy}}</small>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="campaign-terms" v-if="pageView === 'terms'">
          <h2>{{lang.terms_and_condition}}</h2>
          <div v-html="campaignData.competition.terms_text_content"></div>
          <nav>
            <button
              class="campaign-btn-primary"
              @click.prevent="pageView = 'beforeLogin'"
            >{{lang.close}}</button>
          </nav>
        </div>

        <div class="campaign-terms" v-if="pageView === 'policy'">
          <h2>{{lang.privacy_policy}}</h2>
          <div v-html="campaignData.competition.privacy_text_content"></div>
          <nav>
            <button
              class="campaign-btn-primary"
              @click.prevent="pageView = 'beforeLogin'"
            >{{lang.close}}</button>
          </nav>
        </div>

        <div
          class="campaign-afterLogin"
          v-if="pageView !== 'beforeLogin' && pageView !== 'terms' && pageView !== 'policy'"
        >
          <div class="mobileMenuBar">
            <h4>{{ campaignData.competition.name }}</h4>
            <a href="#" @click.prevent="mobileMenu = !mobileMenu">
              <i class="fas fa-bars" v-if="mobileMenu === false"></i>
              <i class="fal fa-times" v-else></i>
            </a>
          </div>
          <nav :class="{active: mobileMenu === true}">
            <a
              :class="{active: pageView === 'home'}"
              @click.prevent="handleHomeClick"
              href="#"
            >{{lang.menu_home}}</a>
            <a
              v-if="campaignData.winners.length"
              :class="{active: pageView === 'winner'}"
              @click.prevent="pageView = 'winner', mobileMenu = false"
              href="#"
            >{{lang.winners}}</a>
            <a
              v-if="campaignData.prizes.length"
              :class="{active: pageView === 'prize'}"
              @click.prevent="pageView = 'prize', mobileMenu = false"
              href="#"
            >{{lang.prizes}}</a>
            <a
              v-if="transactions.length"
              :class="{active: pageView === 'transaction'}"
              @click.prevent="pageView = 'transaction', mobileMenu = false"
              href="#"
            >{{lang.entries}}</a>
          </nav>
          <div class="campaign-home" v-if="pageView == 'home'">
            <div
              class="notification notification-danger"
              id="notification_user_restricted"
              v-if="campaignData.blocker_show != 0"
              style="margin-bottom: 30px;"
            >
              <div class="notification-content">
                <i class="fa fa-lock"></i>
                <p>{{lang.fo_user_restriction}}</p>
              </div>
            </div>

            <h4>{{lang.logged_in_as}} {{ campaignData.user.name }}</h4>
            <section class="relative">
              <p>{{ campaignData.theme_settings.thankyou_msg }}</p>
              <div class="entry-box">
                <span>{{lang.your_entries}}</span>
                <span>
                  <strong>{{ (campaignData.total_entries != null && campaignData.total_entries != '0') ? campaignData.total_entries : 0 }}</strong>
                  <em>#{{lang.entries}}</em>
                </span>
              </div>
              <a
                href="#"
                class="history"
                v-if="transactions.length"
                @click.prevent="pageView = 'transaction'"
              >
                <svg width="14.167" height="14.167" viewBox="0 0 14.167 14.167">
                  <path
                    d="M7.083,14.167a7.083,7.083,0,1,1,7.083-7.083A7.091,7.091,0,0,1,7.083,14.167Zm0-12.75A5.667,5.667,0,1,0,12.75,7.083,5.673,5.673,0,0,0,7.083,1.417ZM9.917,7.792H7.083a.709.709,0,0,1-.708-.708V4.25a.708.708,0,1,1,1.417,0V6.375H9.917a.708.708,0,1,1,0,1.417Z"
                  />
                </svg>
                <u>{{lang.label_transaction_history}}</u>
              </a>
              <div class="profile-lock" v-if="campaignData.blocker_show != 0">
                <i class="fa fa-lock"></i>
              </div>
            </section>
            <a
              href="javaScript:void(0);"
              @click="continueShopping()"
              class="campaign-btn-primary"
            >{{ campaignData.theme_settings.btntxt_before_login }}</a>
          </div>
          <div class="campaign-winner" v-if="pageView == 'winner'">
            <div class="campaign-head">
              <img
                src="%{Kohana::config('cloudinary')->cdn_raw_url}/assets/img/purchase-fo/winners.png"
                alt
              />
            </div>
            <div class="campaign-wp-body">
              <nav v-if="hasMultipleWinnerTypes">
                <a
                  href="#"
                  v-if="hasDailyWinner"
                  @click.prevent="winnerView = 'daily'"
                  :class="{active: winnerView === 'daily'}"
                >{{lang.prize_daily}}</a>
                <a
                  href="#"
                  v-if="hasWeeklyWinner"
                  @click.prevent="winnerView = 'weekly'"
                  :class="{active: winnerView === 'weekly'}"
                >{{lang.prize_weekly}}</a>
                <a
                  href="#"
                  v-if="hasMonthlyWinner"
                  @click.prevent="winnerView = 'monthly'"
                  :class="{active: winnerView === 'monthly'}"
                >{{lang.prize_monthly}}</a>
                <a
                  href="#"
                  v-if="hasGrandWinner"
                  @click.prevent="winnerView = 'grand'"
                  :class="{active: winnerView === 'grand'}"
                >{{lang.prize_grand}}</a>
              </nav>
              <ul>
                <li v-for="(data, index) in filteredWinner" :key="index">
                  <div class="campaign-winner-card">
                    <div class="dateTime">
                      <strong>{{ data.date_won }}</strong>
                      <span>{{ data.time_won }}</span>
                    </div>
                    <div class="info">
                      <figure>
                        <img :src="getImageUrl(data.icon_img)" alt />
                      </figure>
                      <div>
                        <h6>{{ data.pname }}</h6>
                        <ul>
                          <li>
                            <!--<figure><img src="https://picsum.photos/300/300?random=28">
                            </figure>-->
                            <span>{{ data.uname }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="campaign-prize" v-if="pageView == 'prize'">
            <div class="campaign-head">
              <img
                src="%{Kohana::config('cloudinary')->cdn_raw_url}/assets/img/purchase-fo/prizes.png"
                alt
              />
            </div>
            <div class="campaign-wp-body">
              <nav v-if="hasMultiplePrizeTypes">
                <a
                  href="#"
                  v-if="hasDailyPrize"
                  @click.prevent="prizeView = 'daily'"
                  :class="{active: prizeView === 'daily'}"
                >{{lang.prize_daily}}</a>
                <a
                  href="#"
                  v-if="hasWeeklyPrize"
                  @click.prevent="prizeView = 'weekly'"
                  :class="{active: prizeView === 'weekly'}"
                >{{lang.prize_weekly}}</a>
                <a
                  href="#"
                  v-if="hasMonthlyPrize"
                  @click.prevent="prizeView = 'monthly'"
                  :class="{active: prizeView === 'monthly'}"
                >{{lang.prize_monthly}}</a>
                <a
                  href="#"
                  v-if="hasGrandPrize"
                  @click.prevent="prizeView = 'grand'"
                  :class="{active: prizeView === 'grand'}"
                >{{lang.prize_grand}}</a>
              </nav>
              <ul>
                <li v-for="(data, index) in filteredPrize" :key="index">
                  <div class="campaign-prize-card">
                    <figure>
                      <img :src="getImageUrl(data.icon_img)" alt />
                    </figure>
                    <div>
                      <p>{{ data.name }}</p>
                      <hr />
                      <span style="display: block;margin: 0 0 10px;">{{ data.description }}</span>
                      <span>
                        {{lang.prizes}}:
                        <strong>{{ data.quantity }}</strong>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="campaign-transaction" v-if="pageView == 'transaction'">
            <div class="campaign-head">
              <h3>{{lang.your_entries}}</h3>
              <div
                class="notification notification-danger"
                id="notification_user_restricted"
                v-if="campaignData.blocker_show != 0"
                style="margin-bottom: 30px;"
              >
                <div class="notification-content">
                  <i class="fa fa-lock"></i>
                  <p>{{lang.fo_user_restriction}}</p>
                </div>
              </div>
              <div class="campaign-transaction-box" v-if="campaignData.blocker_show == 0">
                <span>{{ campaignData.total_entries }}</span>
                <small>#{{lang.entries}}</small>
              </div>
            </div>
            <div class="campaign-wp-body">
              <input
                type="text"
                style="position: absolute; width: 1px; height:5px; right:0; opacity: 0;"
                readonly="readonly"
                id="transaction_focus"
              />
              <ul>
                <li v-for="(data, index) in displayedTdata" :key="index">
                  <div class="campaign-transaction-card">
                    <div class="dateTime">
                      <strong>{{ data.date_won }}</strong>
                      <span>{{ data.time_won }}</span>
                    </div>
                    <div class="info">
                      <div class="info-card">
                        <div>
                          <svg viewBox="0 0 32 32">
                            <path
                              d="M16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 Z M7.00857143,10.7507143 C7.00428571,10.9607143 7,11.1728571 7,11.3828571 L7,11.3828571 L7,20.4707143 C7.32142857,20.6185714 7.63857143,20.7835714 7.95571429,20.9357143 C8.74,21.3128571 9.52642857,21.6921429 10.3107143,22.0692857 C11.2171429,22.5064286 12.1257143,22.9435714 13.0321429,23.3807143 C13.78,23.7407143 14.53,24.105 15.28,24.465 C15.3764286,24.5121429 15.4707143,24.5571429 15.5671429,24.6042857 C15.5692857,24.3921429 15.5714286,24.1778571 15.5714286,23.9657143 L15.5714286,23.9657143 L15.5714286,14.88 C15.2607143,14.7342857 14.9542857,14.58 14.6457143,14.4321429 L14.6457143,14.4321429 L12.3035714,13.3028571 L9.565,11.9828571 C9.56285714,11.9807143 9.55857143,11.9807143 9.55642857,11.9785714 C9.10642857,11.7621429 8.65857143,11.5457143 8.20857143,11.3292857 C7.90857143,11.1835714 7.61071429,11.04 7.31071429,10.8964286 L7.31071429,10.8964286 Z M25,10.7442857 L21.355,12.5014286 C21.355,12.5014286 21.3549956,12.5054442 21.3549871,12.5131919 L21.3540016,13.5013531 L21.3540016,13.5013531 L21.3539286,13.5816964 L21.3530026,14.8291313 L21.3530026,14.8291313 L21.3529658,14.9054718 L21.3528571,15.3128571 C21.3528571,15.6728571 21.0592857,15.9407143 20.71,15.9557143 C20.3628571,15.9707143 20.0671429,15.6492857 20.0671429,15.3128571 L20.0671429,15.3128571 L20.0679512,14.8453638 C20.0680467,14.795668 20.0681481,14.7434127 20.068254,14.6892857 L20.06893,14.3475661 C20.0690476,14.2887037 20.0691667,14.2293452 20.0692857,14.1701786 L20.0699882,13.8229828 C20.0701014,13.7673347 20.0702116,13.713254 20.0703175,13.6614286 L20.0708877,13.3830423 C20.07097,13.3429894 20.071045,13.3065675 20.0711111,13.2744643 L20.0714286,13.1207143 L16.4328571,14.8692857 L16.4285714,24.6 L24.9935714,20.4771429 L25,10.7442857 Z M11.0435714,8.4 L10.5110714,8.65392857 L9.97857143,8.90785714 L7.72857143,9.98785714 C7.675,10.0135714 7.62142857,10.0392857 7.56785714,10.065 C7.65142857,10.1057143 7.735,10.1485714 7.82071429,10.1892857 C7.85714286,10.2064286 7.89142857,10.2235714 7.92785714,10.2407143 C7.93857143,10.2471429 7.95142857,10.2514286 7.96214286,10.2578571 C8.74642857,10.6371429 9.53071429,11.0142857 10.315,11.3914286 C10.9942857,11.7192857 11.6757143,12.045 12.355,12.3728571 C12.58,12.4821429 12.8071429,12.5914286 13.0342857,12.7007143 C13.1521429,12.7564286 13.2678571,12.8121429 13.3835714,12.8678571 C14.0157143,13.1721429 14.65,13.4764286 15.2821429,13.7807143 L15.2821429,13.7807143 L15.4621429,13.8664286 C15.64,13.9521429 15.82,14.0378571 16,14.1235714 L16,14.1235714 L16.4746429,13.8980357 L16.9492857,13.6757143 C17.7335714,13.2985714 18.5178571,12.9192857 19.3021429,12.5421429 L19.3021429,12.5421429 L19.4821429,12.4542857 C19.3964286,12.4135714 19.3107143,12.3728571 19.225,12.3342857 C18.4407143,11.955 17.6542857,11.5778571 16.87,11.2007143 C15.9635714,10.7635714 15.055,10.3285714 14.1485714,9.89142857 C13.4007143,9.52928571 12.6507143,9.16928571 11.9007143,8.80928571 C11.6157143,8.67 11.3285714,8.52857143 11.0435714,8.4 L11.0435714,8.4 Z M16.0085714,6 C15.6935714,6.15857143 15.37,6.30642857 15.0528571,6.45857143 C14.2685714,6.83571429 13.4821429,7.215 12.6978571,7.59214286 C12.6378571,7.62 12.58,7.65 12.52,7.67785714 C12.6057143,7.71857143 12.6914286,7.76142857 12.7771429,7.80214286 C13.5614286,8.17928571 14.3478571,8.55857143 15.1321429,8.93571429 C16.0385714,9.37285714 16.9471429,9.81 17.8535714,10.2471429 C18.6014286,10.6071429 19.3514286,10.9692857 20.1014286,11.3292857 C20.3735714,11.46 20.9585714,11.7428571 20.9585714,11.7428571 L20.9585714,11.7428571 L22.0214286,11.2307143 C22.0214286,11.2307143 22.6551786,10.9256089 23.3041838,10.6131702 L23.3041838,10.6131702 L23.6025558,10.4695312 C23.8483482,10.3512054 24.0823214,10.2385714 24.2692857,10.1485714 L24.2692857,10.1485714 C24.3314286,10.1207143 24.385,10.0928571 24.4407143,10.0671429 L24.4407143,10.0671429 L24.2425,9.97071429 L24.0442857,9.87428571 C23.26,9.49714286 22.4735714,9.11785714 21.6892857,8.74071429 C20.7828571,8.30357143 19.8742857,7.86642857 18.9678571,7.42928571 C18.22,7.06928571 17.47,6.705 16.72,6.345 C16.4842857,6.23142857 16.2464286,6.11571429 16.0085714,6 Z"
                            />
                          </svg>
                          <strong>{{ data.order_id }}</strong>
                        </div>
                        <div>
                          <svg viewBox="0 0 32 32">
                            <path
                              d="M16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 Z M14.8088963,8.00803941 L9.39094346,8.4626928 C8.89840229,8.50058058 8.50058058,8.89840229 8.4626928,9.39094346 L8.00803941,14.8088963 C7.95120774,15.5098203 8.19747832,16.1918004 8.69001949,16.6843415 L17.7073117,25.7016337 C18.1051334,26.0994554 18.7492257,26.0994554 19.1470474,25.7016337 L25.7016337,19.1470474 C26.0994554,18.7302818 26.0994554,18.1051334 25.7016337,17.7073117 L16.6843415,8.69001949 C16.1918004,8.19747832 15.5098203,7.95120774 14.8088963,8.00803941 Z M12,10 C13.106383,10 14,10.893617 14,12 C14,13.106383 13.106383,14 12,14 C10.893617,14 10,13.106383 10,12 C10,10.893617 10.893617,10 12,10 Z"
                            />
                          </svg>
                          <strong>{{campaignData.currency_symbol}}{{ data.order_amt }}</strong>
                        </div>
                        <div>
                          <svg viewBox="0 0 32 32">
                            <path
                              d="M16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 Z M16,6 C15.3096441,6 14.75,6.55964406 14.75,7.25 C14.75,7.89720869 15.2418747,8.4295339 15.8721948,8.49354639 L15.8721948,8.49354639 L16,8.5 L16.2427311,8.50385357 C20.2725256,8.63198248 23.5,11.9390827 23.5,16 C23.5,20.1421356 20.1421356,23.5 16,23.5 C11.8578644,23.5 8.5,20.1421356 8.5,16 C8.5,15.3096441 7.94035594,14.75 7.25,14.75 C6.60279131,14.75 6.0704661,15.2418747 6.00645361,15.8721948 L6.00645361,15.8721948 L6,16 L6.0038418,16.2799048 C6.15206828,21.6733292 10.5707601,26 16,26 C21.5228475,26 26,21.5228475 26,16 C26,10.4771525 21.5228475,6 16,6 Z M20.1061276,12.8675983 C19.6082007,12.3843073 18.8163097,12.3843073 18.3183828,12.8675983 L18.3183828,12.8675983 L15.0524321,16.0375513 L13.8840323,14.8776227 L13.7820369,14.7865999 C13.2890451,14.3918799 12.5693709,14.4179714 12.1061276,14.8675983 C11.6231735,15.3363568 11.6116655,16.1078722 12.080424,16.5908264 L12.080424,16.5908264 L14.1585597,18.6403463 L14.2650943,18.7327732 C14.4876957,18.9049416 14.7650112,19 15.0524321,19 C15.3877565,19 15.7093263,18.8706149 15.9463045,18.6403463 L15.9463045,18.6403463 L20.1061276,14.602795 L20.1957207,14.5059484 C20.5846935,14.0369295 20.5657013,13.3403173 20.1316294,12.8931001 L20.1316294,12.8931001 Z M9.12403579,10.2828382 C8.52617001,9.94297062 7.76168201,10.1446631 7.41650404,10.733331 C7.07132607,11.3219988 7.27617001,12.0747255 7.87403579,12.414593 C8.47190157,12.7544605 9.23638958,12.552768 9.58156755,11.9641002 C9.92674552,11.3754323 9.72190157,10.6227057 9.12403579,10.2828382 Z M12.7065675,7.66050665 C12.3613896,7.07183881 11.5969016,6.87014631 10.9990358,7.21001385 C10.40117,7.54988139 10.1963261,8.30260804 10.541504,8.89127588 C10.886682,9.47994373 11.65117,9.68163623 12.2490358,9.34176869 C12.8469016,9.00190115 13.0517455,8.2491745 12.7065675,7.66050665 Z"
                            />
                          </svg>
                          <strong>{{ data.order_status }}</strong>
                        </div>
                        <hr />
                        <div>
                          <svg viewBox="0 0 32 32">
                            <path
                              d="M16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 Z M16.7252234,8.23321779 C15.9136613,7.83268796 14.9310667,8.16589544 14.5305369,8.97745751 L14.5305369,8.97745751 L13.5264149,11.0120309 C13.2350908,11.6023179 12.6719597,12.0114566 12.0205393,12.1061135 L12.0205393,12.1061135 L9.77525429,12.4323725 C9.41861692,12.484195 9.08900895,12.6521386 8.83745753,12.9102039 C8.20574455,13.5582747 8.21900525,14.5957445 8.86707613,15.2274575 L8.86707613,15.2274575 L10.4917797,16.811152 C10.9631518,17.2706264 11.1782488,17.9326268 11.0669729,18.5814149 L11.0669729,18.5814149 L10.6834324,20.8176275 C10.6225115,21.1728238 10.6803809,21.538197 10.8480819,21.8571832 C11.2692239,22.6582428 12.2600141,22.966227 13.0610737,22.545085 L13.0610737,22.545085 L15.0693177,21.4892886 C15.6519658,21.1829724 16.3480342,21.1829724 16.9306823,21.4892886 L16.9306823,21.4892886 L18.9389263,22.545085 C19.2579124,22.7127859 19.6232857,22.7706554 19.978482,22.7097344 C20.870475,22.5567456 21.4695563,21.7096205 21.3165676,20.8176275 L21.3165676,20.8176275 L20.9330271,18.5814149 C20.8217512,17.9326268 21.0368482,17.2706264 21.5082203,16.811152 L21.5082203,16.811152 L23.1329239,15.2274575 C23.3909891,14.9759061 23.5589327,14.6462981 23.6107552,14.2896608 C23.7408952,13.3940488 23.1203576,12.5625126 22.2247457,12.4323725 L22.2247457,12.4323725 L19.9794607,12.1061135 C19.3280403,12.0114566 18.7649092,11.6023179 18.4735851,11.0120309 L18.4735851,11.0120309 L17.4694631,8.97745751 C17.3099701,8.65428924 17.0483917,8.39271087 16.7252234,8.23321779 Z"
                            />
                          </svg>
                          <div class="entry">
                            <i>{{lang.entries}}</i>
                            <span
                              v-if="data.status == 1"
                              style="background-color:green;"
                            >+ {{ data.nb_worth }}</span>
                            <span
                              v-if="data.status == 0"
                              style="background-color:red;"
                            >- {{ data.nb_worth }}</span>
                            <span
                              v-if="data.status == 3"
                              style="background-color:yellow; color: black;"
                            >+ {{ data.nb_worth }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="campaign-pagination-wrapper" v-if="transactions.length > 5">
                <paginate
                  :page-count="transactionPageCount"
                  container-class="campaign-pagination"
                  prev-text="prev"
                  next-text="next"
                  :click-handler="clickPagination"
                ></paginate>
              </div>
              <div class="profile-lock" v-if="campaignData.blocker_show != 0">
                <i class="fa fa-lock"></i>
              </div>
            </div>
          </div>
        </div>

        <div
          class="campaign-footer wl"
          v-if="campaignData.competition.is_wl == '1' && campaignData.competition.logo"
        >
          <figure>
            <img :src="getImageUrl(campaignData.competition.logo)" alt />
          </figure>
        </div>
        <div class="campaign-footer" v-else>
          <div class="campaign-footerCreds">
            Gratisfaction
            <i class="fas fa-circle"></i>
            Made with
            <i class="fas fa-heart"></i>
            by Apps Mav
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      restricted: false,
      mobileMenu: false,
      countdownTimer: null,
      campaignData: null,
      loggedIn: null,
      callback_url: null,
      lang: null,
      transactions: null,
      pageView: "beforeLogin",
      prizeView: "daily",
      winnerView: "daily",
      participateError: null,
      is_terms: 0,
      accept_terms: false,
      currentPage: 1
    };
  },
  computed: {
    hasMultiplePrizeTypes: function() {
      return (
        this.campaignData.prizes.map(function(prize) {
          return prize.type;
        }).length > 1
      );
    },
    hasDailyPrize: function() {
      return this.campaignData.prizes.some(function(prize) {
        return prize.type === "daily";
      });
    },
    hasWeeklyPrize: function() {
      return this.campaignData.prizes.some(function(prize) {
        return prize.type === "weekly";
      });
    },
    hasMonthlyPrize: function() {
      return this.campaignData.prizes.some(function(prize) {
        return prize.type === "monthly";
      });
    },
    hasGrandPrize: function() {
      return this.campaignData.prizes.some(function(prize) {
        return prize.type === "grand";
      });
    },
    hasMultipleWinnerTypes: function() {
      return (
        this.campaignData.winners.map(function(winner) {
          return winner.type;
        }).length > 1
      );
    },
    hasDailyWinner: function() {
      return this.campaignData.winners.some(function(winner) {
        return winner.type === "daily";
      });
    },
    hasWeeklyWinner: function() {
      return this.campaignData.winners.some(function(winner) {
        return winner.type === "weekly";
      });
    },
    hasMonthlyWinner: function() {
      return this.campaignData.winners.some(function(winner) {
        return winner.type === "monthly";
      });
    },
    hasGrandWinner: function() {
      return this.campaignData.winners.some(function(winner) {
        return winner.type === "grand";
      });
    },
    filteredPrize: function() {
      var _this = this;
      return this.campaignData.prizes.filter(function(prize) {
        return prize.type === _this.prizeView;
      });
    },
    filteredWinner: function() {
      var _this = this;
      return this.campaignData.winners.filter(function(winner) {
        return winner.type === _this.winnerView;
      });
    },
    transactionPageCount: function() {
      return Math.ceil(this.transactions.length / 5);
    },
    displayedTdata: function() {
      return this.paginatedData(this.transactions);
    }
  },
  methods: {
    clickPagination: function(page) {
      this.currentPage = page;

      if (document.getElementById("transaction_focus") != null)
        document.getElementById("transaction_focus").focus();
    },
    paginatedData: function(data) {
      var perPage = 5;
      var from = this.currentPage * perPage - perPage;
      var to = this.currentPage * perPage;
      return data.slice(from, to);
    },
    showParticipateError: function(error) {
      this.participateError = error;
      if (this.participateError !== null) {
        setTimeout(function() {
          this.participateError = null;
        }, 10000);
      }
    },
    handleHomeClick: function() {
      this.mobileMenu = false;

      if (this.loggedIn == "1") this.pageView = "home";
      else this.pageView = "beforeLogin";
    },
    getImageUrl: function(img_uri) {
      if (img_uri.length > 0 && img_uri.charAt(0) != "/")
        img_uri = "/" + img_uri;

      return this.campaignData.aws_cdn_url + img_uri;
    },
    entryLogin: function() {
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
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (data.error == 0) {
            window.parent.postMessage({ action: "remove-orderid" }, "*");
            window.location.reload();
            return false;
          } else {
            _this.showParticipateError(data.msg);
          }
        });
    },
    continueShopping: function() {
      window.parent.postMessage(
        { id_widget: this.campaignData.id_widget, action: "close-popin" },
        "*"
      );
      window.top.location.href = this.campaignData.continue_shopping_url;
    },
    acceptTerms: function() {
      if (this.accept_terms == 1) this.accept_terms = 0;
      else this.accept_terms = 1;

      alert(this.accept_terms);
    },
    getFormattedTime: function(time) {
      return ("0" + time).slice(-2);
    },
    showTimer: function() {
      // var endDate = unix(this.campaignData.competition.date_end);
      var _this = this;
      setInterval(function() {
        // var timeLeft = duration(endDate.diff(new Date));
        var timeLeft = 32535435345;

        // Reload on time end
        if (timeLeft._milliseconds < 0) {
          location.reload();
        } else {
          var formatted = {
            hours: _this.getFormattedTime(timeLeft.hours()),
            minutes: _this.getFormattedTime(timeLeft.minutes()),
            seconds: _this.getFormattedTime(timeLeft.seconds())
          };
          _this.countdownTimer = formatted;
        }
      }, 1000);
    }
  },
  mounted: function() {
    axios
      .get(
        "https://raw.githubusercontent.com/Logesh1987/gr-sp-vue/master/campaign.json"
      )
      .then(({ data }) => {
        this.loggedIn = data.is_user_logged_in;
        this.campaignData = data;
        this.callback_url = data.callback_url;
        this.lang = data.lang;
        this.transactions = data.user_entries;
      })
      .catch(err => console.log(err));
    setTimeout(function() {
      document.querySelector("#sp-controller").classList.add("play");
      document
        .querySelector(".campaign-loading-container")
        .classList.add("hide");
    }, 1000);
  }
};
</script>
<style lang="less" scoped>
.campaign {
  &-pagination {
    text-align: center;
    width: 100%;
    display: block;
    border: 0;
    color: var(--btn-color);
    li {
      display: inline-block;
      margin: 0 2px;

      &.disabled {
        opacity: 0.5;
        pointer-events: none;
      }
      &.active a {
        background-color: var(--btn-color);
        color: #fff;
      }
    }
    a {
      padding: 5px 10px;
      background: #eee;
      color: #000;
      border: 1px solid rgba(0, 0, 0, 0.1);
      text-transform: capitalize;
      border-radius: 2px;
      font-size: 12px;
      display: block;
      outline: none;
    }
  }
  &-btn-primary {
    display: inline-block;
    text-decoration: none;
    background-color: var(--btn-color);
    color: #fff;
    border: none;
    padding: 1em 2em;
    border-radius: 0.2em;
    box-shadow: 0 1em 1em rgba(0, 0, 0, 0.2);
    font-size: 1em;
    font-weight: 500;
    margin: 1em 0;
    outline: none;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0.2em 0.5em rgba(0, 0, 0, 0.2);
      filter: brightness(1.3);
    }
  }
  &-error-msg {
    background-color: #fff;
    padding: 5px 10px;
    color: #f00;
    max-width: 100%;
    font-size: 0.8em;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  &-terms {
    width: 100%;
    // position: absolute;
    // left: 0;
    // top: 0;
    padding: 2em;
    background: #fff;
    z-index: 10;
    display: flex;
    flex-direction: column;
    h2 {
      font-weight: 300;
      text-align: center;
      margin-top: 0;
    }
    > div {
      max-height: 50vh;
      overflow: auto;
      font-size: 0.8em;
      word-break: break-word;
      padding-right: 1em;
    }
    nav {
      text-align: center;
    }
    button {
      font-size: 0.8em;
      padding: 0.7em 3em;
    }
  }
  &-restricted {
    width: 100%;
    max-width: 550px;
    background-color: #fff;
    padding: 2em;
    text-align: center;
  }
  &-overlay-wrapper {
    font-family: "Roboto", sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    z-index: 1000;
    &.font {
      &-monsterrat {
        font-family: "Montserrat", sans-serif;
      }
      &-open-sans {
        font-family: "Open Sans", sans-serif;
      }
      &-roboto {
        font-family: "Roboto", sans-serif;
      }
      &-muli {
        font-family: "Mulish", sans-serif;
      }
      &-barlow-condensed {
        font-family: "Barlow", sans-serif;
      }
      &-quicksand {
        font-family: "Quicksand", sans-serif;
      }
      &-merriweather {
        font-family: "Merriweather", serif;
      }
      &-lora {
        font-family: "Lora", serif;
      }
      &-zilla-slab {
        font-family: "Zilla Slab", serif;
      }
      &-special-elite {
        font-family: "Special Elite", cursive;
      }
      &-fredericka-the-great {
        font-family: "Fredericka the Great", cursive;
      }
      &-mountains-of-christmas {
        font-family: "Mountains of Christmas", cursive;
      }
      &-overlock {
        font-family: "Overlock", cursive;
      }
      &-handlee {
        font-family: "Handlee", cursive;
      }
      &-kalam {
        font-family: "Kalam", cursive;
      }
      &-caveat {
        font-family: "Caveat", cursive;
      }
      &-roboto-mono {
        font-family: "Roboto Mono", monospace;
      }
      &-fira-code {
        font-family: "Fira Code", monospace;
      }
      &-source-code-pro {
        font-family: "Source Code Pro", monospace;
      }
    }
    &.theme-1 .campaign-beforeLogin-container {
      padding: 2em 3em 7em;
      svg {
        width: 30%;
        &.top-bg {
          left: 0;
          top: 0;
        }
        &.bottom-bg {
          right: 0;
          bottom: 2.8em;
        }
      }
      path.st0 {
        fill: var(--secondary-color);
      }
    }
    &.theme-2 .campaign-beforeLogin-container {
      padding: 5em 3em 9em;
      .top-bg {
        left: 0;
        top: 0;
      }
      .bottom-bg {
        right: 0;
        bottom: 2.8em;
      }
      polygon {
        fill: var(--secondary-color);
      }
    }
    &.theme-3 .campaign-beforeLogin-container {
      padding: 3em 3em 6em;
      text-align: center;
      svg {
        width: 100%;
        left: 0;
        top: 1em;
      }
      ellipse {
        fill: var(--secondary-color);
      }
      .logo {
        margin: 2em auto;
      }
    }
    &.theme-4 .campaign-beforeLogin-container {
      padding: 3em 3em 13em;
      svg {
        width: 100%;
        left: 0;
        bottom: 2.8em;
      }
      path {
        fill: var(--secondary-color);
        opacity: 0.8;
      }
    }
    &.theme-5 .campaign-beforeLogin-container {
      padding: 4em 4em 7em;
      svg {
        width: 100%;
        left: 0;
        top: 0;
      }
      path {
        fill: var(--secondary-color);
      }
    }
    &.theme-6 .campaign-beforeLogin-container {
      padding: 4em 4em 7em;
      svg {
        width: 100%;
        left: 0;
        top: 0;
      }
      path {
        fill: #fff;
      }
    }
    &.theme-7 .campaign-beforeLogin-container {
      padding: 4em;
    }
    &.theme-8 .campaign-container {
      max-width: 620px;
    }
  }
  &-container {
    max-width: 560px;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    * {
      box-sizing: border-box;
    }
  }
  &-footerCreds {
    font-family: sans-serif;
    background-color: var(--primary-color);
    color: #fff;
    font-size: 0.8em;
    padding: 0.7em;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      color: var(--secondary-color);
      &.fa-circle {
        font-size: 0.5em;
        padding: 0 2em;
      }
      &.fa-heart {
        font-size: 0.8em;
        padding: 0 0.5em;
      }
    }
  }
  &-footer {
    background-color: #303030;
    text-align: center;
    &.wl {
      figure {
        margin: 0;
      }
      img {
        max-width: 100%;
      }
    }
    img {
      max-width: 394px;
      width: 100%;
    }
  }
  &-beforeLogin {
    &-container {
      background-color: var(--primary-color);
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
      }
      path.st1 {
        fill: none;
        stroke: #ffffff;
        stroke-miterlimit: 10;
      }
      > div {
        position: relative;
        z-index: 1;
        color: #fff;
      }
      h5 {
        color: var(--btn-color);
        font-weight: normal;
        text-align: center;
        font-size: 1.1em;
        margin-top: 0;
        margin-bottom: 3em;
      }
      h2 {
        font-weight: 500;
        font-size: 2.5em;
        line-height: 1;
        margin: 1.5em 0 0.6em;
      }
      .logo {
        width: 20%;
        margin: 2em 0;
        img {
          max-width: 100%;
        }
      }
      .min-order-value {
        margin-bottom: 0;
        font-size: 0.8em;
      }
      .tc {
        color: inherit;
        font-size: 0.8em;
        opacity: 0.8;
      }
    }
    &-menu {
      background: #dfdfdf;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      button {
        width: 50%;
        padding: 0.8em 1.2em;
        font-size: 1em;
        background-color: #fff;
        border-radius: 0;
        border: none;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s;
        &:hover {
          background-color: #f5f5f5;
        }
        &:first-of-type {
          border-right: 1px solid #ccc;
        }
        &:before {
          content: "";
          background-size: 100%;
          width: 1.2em;
          height: 1.2em;
          margin-right: 0.5em;
        }
        span {
          padding-top: 0.3em;
        }
        &.btn-winners:before {
          background-image: url("../assets/star.svg");
        }
        &.btn-prizes:before {
          background-image: url("../assets/gift.svg");
        }
      }
    }
  }
  &-afterLogin {
    .mobileMenuBar {
      display: none;
    }
    > nav {
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        padding: 1em 2em;
        text-decoration: none;
        text-transform: uppercase;
        position: relative;
        color: #828282;
        transition: color 0.3s;
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 0;
          left: 0;
          bottom: 0;
          background-color: #fff;
          transition: all 0.5s;
        }
        &:hover {
          color: var(--btn-color);
        }
        &.active {
          color: var(--btn-color);
          &:after {
            height: 4px;
            background-color: currentColor;
          }
        }
      }
    }
    .noData {
      text-align: center;
      padding: 2em 0;
      h3 {
        margin-bottom: 2em;
        font-weight: 300;
      }
    }
  }
  &-head {
    background-image: url("../assets/image-dots.png");
    background-repeat: repeat-y;
    background-size: 100%;
    background-color: var(--primary-color);
    color: #fff;
    overflow: hidden;
    text-align: center;
    padding: 0;
    img {
      vertical-align: middle;
      max-width: 100%;
    }
    h3 {
      font-size: 1.8em;
      font-weight: 500;
    }
  }
  &-wp-body {
    background-color: #fff;
    padding: 1em 15%;
  }
  &-home {
    background-color: var(--primary-color);
    background-image: url("../assets/image-dots.png");
    background-repeat: repeat-y;
    background-size: 100%;
    overflow: hidden;
    padding: 3em 4em;
    text-align: center;
    color: #fff;
    h4 {
      margin: 0;
      font-weight: 500;
      font-size: 1.2em;
    }
    p {
      margin: 0;
    }
    section {
      border: 1px dashed rgba(255, 255, 255, 0.2);
      border-radius: 0.5em;
      padding: 2em 20%;
      margin: 1.5em 0 0.5em;
    }
    .entry-box {
      background: #fff;
      border-radius: 2em;
      padding: 0.5em;
      text-transform: uppercase;
      display: flex;
      margin-top: 2em;
      span {
        padding: 0.5em;
        width: 50%;
        &:first-child {
          color: var(--btn-color);
          border-right: 1px solid #ccc;
          font-weight: 500;
        }
        &:last-child {
          color: #000;
          display: inline-flex;
          flex-direction: column;
        }
        strong {
          padding-right: 5px;
        }
      }
      em {
        font-style: normal;
        white-space: nowrap;
      }
    }
    .history {
      text-decoration: none;
      display: inline-block;
      margin: 20px 0 0;
      font-size: 0.9em;
      color: var(--btn-color);
      path {
        fill: var(--btn-color);
      }
    }
  }
  &-prize,
  &-winner {
    nav {
      display: flex;
      margin-bottom: 2.5em;
      align-items: center;
      justify-content: center;
      a {
        color: #828282;
        padding: 0.75em;
        font-size: 1em;
        text-decoration: none;
        width: 25%;
        text-align: center;
        position: relative;
        transition: color 0.5s;
        &:before {
          content: "";
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transition: all 0.3s;
          position: absolute;
          left: 0;
          bottom: 0;
          transform: translateY(1px);
        }
        &:hover {
          color: #00a2a0;
        }
        &.active {
          color: #00a2a0;
          &:before {
            height: 4px;
            background-color: currentColor;
          }
        }
      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
  &-prize {
    &-card {
      background-color: #fff;
      box-shadow: 0 0.2em 0.2em rgba(0, 0, 0, 0.2);
      padding: 1.5em;
      margin: 1em 0;
      border: 1px solid #ccc;
      display: flex;
      align-items: flex-start;
      font-size: 0.8em;
      img {
        width: 100%;
      }
      figure {
        width: 25%;
        margin: 0;
      }
      div {
        width: 75%;
        padding-left: 1.5em;
      }
      p {
        margin: 0;
        font-weight: 500;
      }
      hr {
        border-style: solid;
        border-width: 1px 0 0;
        opacity: 0.2;
        margin: 0.8em 0;
      }
      strong {
        color: #00a2a0;
      }
    }
  }
  &-winner {
    &-card {
      display: flex;
      align-items: start;
      img {
        width: 100%;
      }
      figure {
        margin: 0;
      }
      .dateTime {
        width: 40%;
        font-size: 0.8em;
        text-align: right;
        padding-right: 5em;
        position: relative;
        strong {
          display: block;
        }
        &:after {
          content: "";
          position: absolute;
          width: 1.3em;
          height: 1.3em;
          border-radius: 50%;
          background-color: #00a2a0;
          right: 1.8em;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }
      }
      .info {
        display: flex;
        position: relative;
        width: 60%;
        &:before {
          content: "";
          position: absolute;
          left: -2em;
          top: 0;
          height: 100%;
          border-right: 1px dashed #ccc;
        }
        > figure {
          width: 3em;
          height: 3em;
          min-width: 3em;
        }
        > div {
          flex-grow: 1;
          padding-left: 1.5em;
        }
      }
      h6 {
        font-size: 1em;
        margin: 0;
        display: flex;
        align-items: center;
      }
      ul {
        margin-bottom: 2em;
      }
      li {
        display: flex;
        align-items: center;
        padding: 0.5em 0;
        &:not(:last-of-type) {
          border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
        }
        figure {
          width: 1.3em;
          height: 1.3em;
          border-radius: 50%;
          overflow: hidden;
        }
        span {
          font-size: 0.8em;
          padding-left: 1em;
        }
      }
    }
  }
  &-transaction {
    .campaign-wp-body {
      padding: 1em 10%;
      position: relative;
    }
    .campaign-head {
      h3 {
        margin-bottom: 0.5em;
      }
      h3,
      h4 {
        padding: 0 10px;
      }
      .campaign-transaction-box {
        text-transform: uppercase;
        background-color: #fff;
        border-radius: 3em;
        color: var(--primary-color);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 1em;
        * {
          padding: 0.5em 1.5em;
        }
        span {
          font-size: 1.4em;
          padding-right: 0;
        }
      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 30px 0;
    }
    &-card {
      display: flex;
      align-items: start;
      .dateTime {
        width: 40%;
        font-size: 0.8em;
        text-align: right;
        padding-right: 5em;
        position: relative;
        strong {
          display: block;
        }
        &:after {
          content: "";
          position: absolute;
          width: 1.3em;
          height: 1.3em;
          border-radius: 50%;
          background-color: #00a2a0;
          right: 1.8em;
          top: 12%;
          transform: translateY(-50%);
          z-index: 1;
        }
        figure {
          margin: 10px 0 0 auto;
          width: 50%;
          min-width: 40px;
          img {
            width: 100%;
          }
        }
      }
      .info {
        display: flex;
        position: relative;
        width: 60%;
        &:before {
          content: "";
          position: absolute;
          left: -2em;
          top: 0;
          height: 100%;
          border-right: 1px dashed #ccc;
        }
        &-card {
          border: 1px solid #ccc;
          padding: 1.5em;
          width: 100%;
          margin-bottom: 2em;
          border-radius: 10px;
          font-size: 0.9em;
          div {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
          }
          hr {
            border: none;
            background: #ccc;
            height: 1px;
            margin: 15px 0;
          }
          path {
            fill: var(--primary-color);
          }
          svg {
            vertical-align: middle;
            margin-right: 10px;
            width: 25px;
          }
          h3 {
            margin: 0;
          }
        }
        .entry {
          display: inline-flex;
          background: var(--primary-color);
          border-radius: 5px;
          padding: 2px;
          color: #fff;
          margin: 10px 0;
          i {
            padding: 0.3em 1em;
            font-style: normal;
          }
          span {
            padding: 0.3em 1em;
            border-radius: 2px;
            background-color: var(--secondary-color);
          }
        }
      }
    }
  }
  &-upcoming-timer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2em 0;
    padding: 0;
    text-align: center;
    list-style: none;
    li {
      padding: 0 0.8em;
      min-width: 4.2em;
      font-size: 0.9em;
    }
    span {
      font-size: 1.6em;
      width: 100%;
      height: 2em;
      color: #fff;
      margin: auto;
      background-color: var(--primary-color);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      margin-bottom: 2px;
    }
  }
  &-hourGlassIcon {
    width: 4.5em;
    height: 6.15em;
    border-style: solid;
    border-color: var(--secondary-color) transparent;
    border-radius: 10%;
    position: relative;
    display: block;
    margin: 30px auto;
    font-size: 8px;
    padding: 0.2em;
    box-sizing: border-box;
    animation: hourGlassSpin 5s linear infinite;
    i {
      box-sizing: border-box;
      width: 3.5em;
      height: 5em;
      border-style: solid;
      border-width: 2.5em 1.2em;
      border-color: var(--secondary-color) transparent;
      border-radius: 10%;
      position: relative;
      display: block;
      &:before {
        box-sizing: border-box;
        content: "";
        width: 2.3em;
        height: 4.5em;
        border-style: solid;
        border-width: 2.25em 1.1em;
        border-color: rgba(255, 255, 255, 0.4) transparent transparent;
        border-radius: 10%;
        position: absolute;
        top: -2.25em;
        left: -0.6em;
        animation: hourGlassSlideOut 5s linear infinite;
      }
      &:after {
        box-sizing: border-box;
        content: "";
        width: 2.3em;
        height: 4.5em;
        border-style: solid;
        border-width: 0em 1.1em;
        border-color: transparent transparent rgba(255, 255, 255, 0.8);
        border-radius: 10%;
        position: absolute;
        top: -2.25em;
        left: -0.6em;
        animation: hourGlassSlideIn 5s linear infinite;
      }
    }
  }
  &-loading-container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    &.hide {
      display: none;
    }
  }
  &-loader,
  &-loader:before,
  &-loader:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: load7 1.8s infinite ease-in-out;
  }
  &-loader {
    color: #ffffff;
    font-size: 10px;
    margin: 0 auto 60px;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -0.16s;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 0;
    }
    &:before {
      left: -3.5em;
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    &:after {
      left: 3.5em;
    }
  }
}

@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}

@keyframes hourGlassSpin {
  0% {
    -webkit-transform: rotation(0deg);
    transform: rotation(0deg);
  }
  90% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}
@keyframes hourGlassSlideOut {
  0% {
    top: -2.25em;
    width: 2.5;
    border-width: 2.25em 1.1em;
  }
  90% {
    top: 0em;
    width: 0;
    border-width: 0em 0em;
    left: 0.55em;
  }
  100% {
    top: 0em;
    width: 0;
    border-width: 0em 0em;
    left: 0.55em;
  }
}
@keyframes hourGlassSlideIn {
  0% {
    border-width: 0em 1.1em;
  }
  90% {
    border-width: 2.25em 1.1em;
  }
  100% {
    border-width: 2.25em 1.1em;
  }
}

.campaignEndToday {
  background: rgba(255, 255, 255, 0.7);
  padding: 1.5em 2em;
  text-align: center;
  color: #000;
  border-radius: 2em;
  display: table;
  margin: 0 auto;

  .campaign-upcoming-timer {
    margin: 1em 0;
    li {
      min-width: 5.5em;
      padding: 0 0.4em;
    }
    span {
      background-color: var(--btn-color);
    }
    span {
      background-color: var(--btn-color);
    }
  }
}

/*** GDPR Styles ***/
.gdpr-card {
  color: #000;
  font-size: 10px;
  font-family: sans-serif;
  position: relative;
  margin: 15px 0;
  padding-left: 64px;
  &:before {
    content: "";
    background-color: #00349a;
    // background-image: url("../../img/img-gdpr.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border-radius: 4px 0 0 4px;
    display: inline-block;
    position: absolute;
    width: 64px;
    height: 100%;
    left: 0;
    top: 0;
  }
  & > div {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 0 4px 4px 0;
    border-left-width: 0;
    text-align: left;
    padding: 12px;
  }
  & strong {
    display: block;
    font-weight: bold;
    margin-bottom: 3px;
  }
  & strong + div {
    color: #666;
  }
  & a {
    color: #222;
    text-decoration: underline;
  }
  html[dir="RTL"] & {
    padding-left: 0;
    padding-right: 64px;
    &:before {
      border-radius: 0 4px 4px 0;
      left: auto;
      right: 0;
    }
    & > div {
      text-align: right;
      border-radius: 4px 0 0 4px;
      border-right-width: 0;
      border-left-width: 1px;
    }
  }
  @media only screen and (max-width: 418px) {
    font-size: 10px;
    padding-left: 0;
    padding-top: 42px;
    &:before {
      width: 100%;
      height: 42px;
      background-size: 35px auto;
      border-radius: 4px 4px 0 0;
    }
    & > div {
      border-radius: 0 0 4px 4px;
      border-left-width: 1px;
      border-top-width: 0;
      padding: 10px;
    }
  }
}

div#notification_user_restricted {
  max-width: 390px;
  margin: 0 auto;
}
.notification.notification-danger {
  background: #fff;
  color: #e42f2f;

  .notification-content {
    display: flex;

    i {
      background: #e42f2f;
      color: #fff;
      width: 50px;
      position: relative;
      min-width: 50px;

      &:before {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    p {
      margin: 0;
      padding: 15px;
      flex-grow: 1;
      text-align: left;
    }
  }
}
.profile-lock {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  background: rgba(253, 237, 237, 90%);
  width: 100%;
  height: 100%;
  text-align: center;
}
.relative {
  position: relative;
}
.profile-lock .fa-lock {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  opacity: 0.9;
  color: #f54545;
}

@media only screen and (max-width: 418px) {
  .campaign-wp-body {
    padding: 1em;
  }
  .campaign-home {
    padding: 2em;
  }
  .campaign-home section {
    padding: 1em;
  }
  .campaign-home .entry-box {
    display: block;
    border-radius: 6px;
    padding: 1em 0.5em;
    max-width: 10em;
    margin: 2em auto 0;
  }
  .campaign-home .entry-box span {
    width: 100%;
    padding: 0.2em 0;
  }
  .campaign-home .entry-box span:first-child {
    border: 0;
  }
  .campaign-afterLogin {
    .mobileMenuBar {
      display: block;
      padding: 10px;
      position: relative;
      border-bottom: 1px solid #000;
      background-color: #fff;
      h4 {
        font-size: 1.2em;
        margin: 0;
        padding-right: 3em;
      }
      a {
        font-size: 1.4em;
        color: #000;
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    > nav {
      align-items: stretch;
      position: absolute;
      flex-direction: column;
      width: 100%;
      left: 0;
      top: 44px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
      z-index: 50;
      transform: translateY(-150%);
      transition: transform 0.5s;
      a.active:after {
        height: 100%;
        width: 10px;
      }
      &.active {
        transform: translateY(0);
      }
    }
  }
  .campaign-transaction {
    .campaign-wp-body {
      padding: 1em 20px;
    }
    .campaign-transaction-card {
      .info-card {
        font-size: 0.8em;
        padding: 10px;
        div:last-of-type svg {
          display: none;
        }
        svg {
          margin-right: 5px;
          width: 20px;
        }
      }
      .info .entry span {
        padding: 0.3em;
      }
    }
  }
}
.campaign-overlay-wrapper {
  &.theme-1 {
    svg {
      transition: transform 0.3s;
    }
    .top-bg {
      transform: translateX(-100%);
    }
    .bottom-bg {
      transform: translateX(100%);
    }
    .play & {
      svg {
        transform: translateX(0);
      }
    }
  }
  &.theme-2 {
    svg {
      transition: transform 0.3s;
    }
    .top-bg {
      transform: translateY(-100%);
    }
    .bottom-bg {
      transform: translateY(100%);
    }
    .play & {
      svg {
        transform: translateY(0);
      }
    }
  }
  &.theme-3 {
    svg {
      transition: all 0.3s cubic-bezier(0.38, 1.71, 0.64, 1);
      transform: scale(0.2);
      opacity: 0;
    }
    .play & {
      svg {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
  &.theme-4 {
    .g1 {
      transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      transform: translate(0, 100%);
    }
    .g2 {
      transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
      transform: translate(-30%, 100%);
    }
    .play & {
      .g1,
      .g2 {
        transform: translate(0, 0);
      }
    }
  }
  &.theme-5 {
    .p1 {
      transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      transform: translate(-100%, 0) scaleX(2);
    }
    .p2 {
      transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      transform: translate(100%, 0) scaleX(2);
    }
    .play & {
      .p1,
      .p2 {
        transform: translate(0, 0) scaleX(1);
      }
    }
  }
  &.theme-6 {
    .play & {
      .g1 {
        animation: bg-flicker 3s linear 30;
      }
      .g2 {
        animation: bg-flicker 5s linear 30 1s;
      }
      .g3 {
        animation: bg-flicker 2s linear 30 0.5s;
      }
      .g4 {
        animation: bg-flicker 4s linear 30 0.3s;
      }
    }
  }
}
.campaign-beforeLogin-container {
  h2,
  p,
  > div > div {
    opacity: 0;
    transform: translateY(-10%);
    transition-duration: 0.3s;
    transition-property: all;
    .play & {
      opacity: 1;
      transform: translateY(0);
    }
  }
  h2 {
    transition-delay: 0.2s;
  }
  p {
    transition-delay: 0.4s;
  }
  > div > div {
    transition-delay: 0.6s;
  }
}
.theme-8.campaign-overlay-wrapper {
  margin: 11.5em 0 0;
  .prizeCards {
    position: absolute;
    width: 13em;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    img {
      width: 100%;
      vertical-align: middle;
    }
    figure {
      border-radius: 1.5em;
      overflow: hidden;
      margin: 0;
      width: 100%;
      position: absolute;
      bottom: 0;
      box-shadow: 0 0.8em 1em rgba(0, 0, 0, 0.2);
      &:nth-child(1) {
        transform: rotate(-5deg);
        z-index: 1;
      }
      &:nth-child(2) {
        transform: translate(-70%, 10%) rotate(-20deg);
      }
      &:nth-child(3) {
        transform: translate(70%, 10%) rotate(20deg);
        z-index: 2;
      }
    }
  }
  .campaign {
    &-beforeLogin-container {
      border-radius: 1em;
      padding: 2em 2em 1.5em;
      text-align: center;
      overflow: visible;
      .campaign-btn-primary {
        margin-bottom: 0;
      }
      .writeOffs {
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          padding: 0 0.5em;
        }
      }
    }
    &-footer,
    &-footerCreds {
      background-color: transparent;
    }
    &-btn-primary {
      border-radius: 2em;
      box-shadow: 0 1.5em 1.5em rgba(0, 0, 0, 0.2);
    }
    &-beforeLogin-menu {
      background-color: var(--secondary-color);
      margin: 2em -3em 1em;
      width: auto;
      position: static;
      button {
        background: transparent;
        border: none;
        color: #fff;
        font-weight: 600;
        width: auto;
      }
    }
  }
}

@keyframes bg-flicker {
  0% {
    opacity: 0.5;
  }
  2% {
    opacity: 1;
  }
  8% {
    opacity: 0.5;
  }
  9% {
    opacity: 1;
  }
  12% {
    opacity: 0.5;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.7;
  }
  30% {
    opacity: 1;
  }

  70% {
    opacity: 0.8;
  }

  72% {
    opacity: 0.4;
  }

  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}
</style>
