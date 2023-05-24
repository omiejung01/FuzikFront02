export const state = () => ({
  toggleSideMenu: false,
  toggleDesktopSideMenu: false,

})

export const mutations = {

  TOGGLE_SIDE_MENU(state, payload) {
    state.toggleSideMenu = !state.toggleSideMenu
  },

  TOGGLE_DESKTOP_SIDE_MENU(state, payload) {
    state.toggleDesktopSideMenu = !state.toggleDesktopSideMenu
  }

}