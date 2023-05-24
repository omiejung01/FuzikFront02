export const state = () => ({
  is_auth: false,
  username: "",
  thumbnail: "",
  email: "",
  rank: "",
  rank_icon: "",
  fans: 0,
})

export const mutations = {

  SET_AUTH(state, payload) {
    state.is_auth = true
    state.username = "JamesKung"
    state.thumbnail = "/profile.webp"
    state.email = ""
    state.rank = "Artist"
    state.rank_icon = "/rank_star.webp"
    state.fans = 23
  },

  SIGN_OUT(state, payload) {
    state.is_auth = false
    state.username = ""
    state.thumbnail = ""
    state.email = ""
    state.rank = ""
    state.rank_icon = ""
    state.fans = 0
  }

}