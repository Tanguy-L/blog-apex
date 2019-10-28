export const state = () => ({
  statusPage: 'Categories',
  status: [
    {
      level: 'Categories',
      name: 'void',
      text: 'Liste Categories',
      id: 0,
      status: 'choosen'
    },
    {
      level: 'Articles',
      name: 'void',
      text: 'Liste Articles',
      id: 1,
      status: 'waiting'
    },
    {
      level: 'Article',
      name: 'void',
      text: "Lecture de l'article",
      id: 2,
      status: 'waiting'
    }
  ]
})

// test of the font
export const mutations = {
  UPDATE_STATUSPAGE(state, payload) {
    state.statusPage = payload
  },
  UPDATE_STATUS(state, payload) {
    const { key, name } = payload
    state.status[key + 1].name = name
    state.status[key + 1].text = name
    state.status[key].status = 'validate'
    state.status[key + 1].status = 'choosen'
  },
  UPDATE_STATUS_BREAD(state, payload) {
    const { key } = payload
    const defaultText = [
      'Liste Catégories',
      'Liste Articles',
      "Lecture de l'article"
    ]
    state.status.forEach((breadCrumb) => {
      if (breadCrumb.id >= key) {
        breadCrumb.status = 'waiting'
        breadCrumb.text = defaultText[breadCrumb.id]
        breadCrumb.name = 'void'
      }
    })
    state.status[key].status = 'choosen'
    state.status[key].name = 'void'
  },
  UPDATEKEEP_STATUS(state, payload) {
    const { key } = payload
    const defaultText = [
      'Liste Catégories',
      'Liste Articles',
      "Lecture de l'article"
    ]
    state.status.forEach((breadCrumb) => {
      if (breadCrumb.id > key) {
        breadCrumb.status = 'waiting'
        breadCrumb.text = defaultText[breadCrumb.id]
        breadCrumb.name = 'void'
      } else if (key === breadCrumb.id) {
        breadCrumb.status = 'choosen'
      }
    })
  }
}

export const actions = {
  updateStatusPage({ commit }, payload) {
    commit('UPDATE_STATUSPAGE', payload)
  },
  updateStatus({ commit }, payload) {
    commit('UPDATE_STATUS', payload)
  },
  updateStatusBread({ commit }, payload) {
    commit('UPDATE_STATUS_BREAD', payload)
  },
  updateAndKeepCategory({ commit }, payload) {
    commit('UPDATEKEEP_STATUS', payload)
  }
}

export const getters = {
  statusPage: (state) => {
    return state.statusPage
  },
  status: (state) => {
    return state.status
  }
}
