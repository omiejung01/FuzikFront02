import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 'null', //  change 'null' to your Facebook Page ID,
  theme_color: '#FFFFFF', // theme color in HEX
  locale: 'th_TH', // default 'en_US'
})