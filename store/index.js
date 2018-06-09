import Vuex from 'vuex'
import contentful from '~/plugins/contentful.js'
const client = contentful.createClient()

const state = {
  isMenuOpen: false,
  isContactOpen: false,
  isScrolled:false,
  worksEntries:[],
  currentEntry:[],
}

const mutations = {
  toggleMenu(state,value) {
    state.isMenuOpen = value;
  },
  toggleContact(state,value) {
    state.isContactOpen = value;
  },
  isScrolled(state,value) {
    state.isScrolled = value;
  },
  setWorksEntries(state,value){
    state.worksEntries = value;
  },
  setCurrentEntry(state,value){
    state.currentEntry = value;
  },
}

const actions = {
  async nuxtServerInit({dispatch},context) {
    await dispatch('fetchWorks',context)
  },
  toggleMenu({commit}, value) {
    commit('toggleMenu', value)
  },
  toggleContact({commit}, value) {
    commit('toggleContact', value)
  },
  isScrolled({commit}, value) {
    commit('isScrolled', value)
  },
  seekCurrent({commit},context){
    const current = context.store.state.worksEntries.filter(function (item) {
      return item.fields.slug === context.params.slug
    })

    if(current.length > 0 ){
      commit('setCurrentEntry',current[0])
    }
    else{
      commit('setCurrentEntry',context.store.state.worksEntries[0])
    }
  },
  async fetchWorks({commit,dispatch},context){
    const response = await client.getEntries({
      'content_type': process.env.CTF_WORKS_TYPE_ID,
    })
    const entries = JSON.parse(response.stringifySafe())
    commit('setWorksEntries', entries.items)
    dispatch('seekCurrent',context)
  },
}


export default () => new Vuex.Store({
  state,
  mutations,
  actions,
})
