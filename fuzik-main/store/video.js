export const state = () => ({
  amount_videos: 0,
  
})

export const mutations = {

  SET_AMOUNT(state, payload) {
    state.amount_videos = payload.amount
  }

}