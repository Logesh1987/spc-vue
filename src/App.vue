<template>
  <div id="app">
    <div v-if="campaignData">
      <ThemeAlpha v-if="campaignData.theme_settings.bg_theme == '1'"></ThemeAlpha>
      <ThemeBeta v-else-if="campaignData.theme_settings.bg_theme == '2'"></ThemeBeta>
      <div v-else>No Theme</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"; // @ is an alias to /src
import { mapState } from "vuex";
const ThemeAlpha = () =>
  import(/* webpackChunkName: "theme1" */ "./views/Theme-1.vue");
const ThemeBeta = () =>
  import(/* webpackChunkName: "theme2" */ "./views/Theme-2.vue");

export default {
  name: "Home",
  components: {
    ThemeAlpha,
    ThemeBeta
  },
  computed: {
    ...mapState(["campaignData"])
  },
  mounted: function() {
    axios
      .get(
        "https://logesh1987.github.io/spc-vue/src/api.json"
      )
      .then(({ data }) => {
        this.$store.commit("updateLoggedIn", data.is_user_logged_in);
        this.$store.commit("updateCampaignData", data);
        this.$store.commit("updateCallbackUrl", data.callback_url);
        this.$store.commit("updateLang", data.lang);
        this.$store.commit("updateTransactions", data.user_entries);
      })
      .catch(err => console.log(err));
  }
};
</script>
