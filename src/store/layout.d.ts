// store/layout.ts
import { createStore, Store } from "vuex";
import { defaultState } from "./defaultDetails";
// Define the initial state
const state = {
  layoutStyle: localStorage.getItem("layout") || defaultState.layoutStyle,
  layoutTheme: localStorage.getItem("layoutTheme") || defaultState.layoutTheme,
  sidebarColor:
    localStorage.getItem("sidebarColor") || defaultState.sidebarColor,
  layoutDir: localStorage.getItem("layoutDir") || defaultState.layoutDir,
  contentWidth:
    localStorage.getItem("contentWidth") || defaultState.contentWidth,
  sidebarSize: localStorage.getItem("sidebar") || defaultState.sidebarSize,
  primaryColor: localStorage.getItem("colors") || defaultState.primaryColor,
  language: localStorage.getItem("language") || "en",
  darkModeColors:
    localStorage.getItem("darkModeColors") || defaultState.darkModeColor,
  navigationType:
    localStorage.getItem("navType") || defaultState.navigationType,
  isSidebarShow: false,
};

export default createStore({
  state,
  mutations: {
    setLayoutTheme(state, newTheme) {
      state.layoutTheme = newTheme;
    },
    setLayoutStyle(state, newLayout) {
      state.layoutStyle = newLayout;
    },
    setContentWidth(state, newContentWidth) {
      state.contentWidth = newContentWidth;
    },
    setSidebarSize(state, newSidebarSize) {
      state.sidebarSize = newSidebarSize;
    },
    setLayoutDir(state, newLayoutDir) {
      state.layoutDir = newLayoutDir;
    },
    setSidebarColor(state, newSidebarColor) {
      state.sidebarColor = newSidebarColor;
    },
    setPrimaryColor(state, newPrimaryColor) {
      state.primaryColor = newPrimaryColor;
    },
    setSidebarShow(state, newSidebarVisibleValue) {
      state.isSidebarShow = newSidebarVisibleValue;
    },
    setLanguage(state, newLanguage) {
      state.language = newLanguage;
    },
    setDarkModeColors(state, newDarkModeColors) {
      state.darkModeColors = newDarkModeColors;
    },
    setNavType(state, newType) {
      state.navigationType = newType;
    },
  },

  actions: {
    updateLayoutTheme({ commit }, newTheme) {
      commit("setLayoutTheme", newTheme);
      localStorage.setItem("layoutTheme", newTheme);
    },
    updateLayoutStyle({ commit }, newLayout) {
      commit("setLayoutStyle", newLayout);
      localStorage.setItem("layout", newLayout);
    },
    updateContentWidth({ commit }, newContentWidth) {
      commit("setContentWidth", newContentWidth);
      localStorage.setItem("contentWidth", newContentWidth);
    },
    updateSidebarSize({ commit }, newSidebarSize) {
      commit("setSidebarSize", newSidebarSize);
      localStorage.setItem("sidebar", newSidebarSize);
    },
    updateLayoutDir({ commit }, newLayoutDir) {
      commit("setLayoutDir", newLayoutDir);
      localStorage.setItem("layoutDir", newLayoutDir);
    },
    updateSidebarColor({ commit }, newSidebarColor) {
      commit("setSidebarColor", newSidebarColor);
      localStorage.setItem("sidebarColor", newSidebarColor);
    },
    updatePrimaryColor({ commit }, newPrimaryColor) {
      commit("setPrimaryColor", newPrimaryColor);
      localStorage.setItem("colors", newPrimaryColor);
    },
    updateSidebarVisibleValue({ commit }, newVisibleValue) {
      commit("setSidebarShow", newVisibleValue);
    },
    updateLanguage({ commit }, newLanguage) {
      commit("setLanguage", newLanguage);
      localStorage.setItem("language", newLanguage);
    },
    updateDarkModeColors({ commit }, newDarkModeColors) {
      commit("setDarkModeColors", newDarkModeColors);
      localStorage.setItem("darkModeColors", newDarkModeColors);
    },
    updateNavType({ commit }, newType) {
      commit("setNavType", newType);
      localStorage.setItem("navType", newType);
    },
  },

  getters: {
    layoutTheme: (state) => state.layoutTheme,
    layoutStyle: (state) => state.layoutStyle,
    contentWidth: (state) => state.contentWidth,
    sidebarSize: (state) => state.sidebarSize,
    layoutDir: (state) => state.layoutDir,
    sidebarColor: (state) => state.sidebarColor,
    primaryColor: (state) => state.primaryColor,
    isSidebarShow: (state) => state.isSidebarShow,
    language: (state) => state.language,
    darkModeColors: (state) => state.darkModeColors,
    navigationType: (state) => state.navigationType,
  },
});
