import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    password: null,
    currentHero: null,
    currentTeam: null,
    currentOrg : null,

    heroes: [],
    teams: [],
    orgs : [],
    
  }),
  getters: {
  },
  mutations: {
    setHero(state, hero) {
      state.currentHero = hero;
    },
    setHeroes(state, heroes) {
      state.heroes = heroes;
    },
    addHero(state, hero) {
      state.heroes.push(hero);
    },
    removeHero(state, heroId) {
      state.heroes = state.heroes.filter(hero => hero._id !== heroId);
    },

    setTeam(state, team) {
      state.currentTeam = team;
    },
    setTeams(state, teams) {
      state.teams = teams;
    },
    addTeam(state, team) {
      state.teams.push(team);
    },
    removeTeam(state, teamId) {
      state.teams = state.teams.filter(team => team._id !== teamId);
    },

    setOrg(state, org) {
      state.currentOrg = org;
    },
    setOrgs(state, orgs) {
      state.orgs = orgs;
    },
    addOrg(state, org) {
      state.orgs.push(org);
    },
    removeOrg(state, orgId) {
      state.orgs = state.orgs.filter(org => org._id !== orgId);
    },

    setOrgPassword(state, password) {
      state.password = password;
    },
  },
  actions: {
    setHero({ commit }, hero) {
      commit('setHero', hero);
    },
    setHeroes({ commit }, heroes) {
      commit('setHeroes', heroes);
    },
    addHero({ commit }, hero) {
      commit('addHero', hero);
    },
    removeHero({ commit }, heroId) {
      commit('removeHero', heroId);
    },
  
    setTeam({ commit }, team) {
      commit('setTeam', team);
    },
    setTeams({ commit }, teams) {
      commit('setTeams', teams);
    },
    addTeam({ commit }, team) {
      commit('addTeam', team);
    },
    removeTeam({ commit }, teamId) {
      commit('removeTeam', teamId);
    },
  
    setOrg({ commit }, org) {
      commit('setOrg', org);
    },
    setOrgs({ commit }, orgs) {
      commit('setOrgs', orgs);
    },
    addOrg({ commit }, org) {
      commit('addOrg', org);
    },
    removeOrg({ commit }, orgId) {
      commit('removeOrg', orgId);
    },
  
    setOrgPassword({ commit }, password) {
      commit('setOrgPassword', password);
    },

  },
  modules: {
  }
})
