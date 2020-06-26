import ApiService from '~/services/ApiService.js'
export const namespaced = true
export const state = () => ({
    PageNumber: 2,
    HealthArticles: [],
    TagArticlesNextLink: []
})

export const mutations = {
    SET_HEALTH_ARTICLES(state, payload) {
        state.HealthArticles = payload
    },
    SET_MORE_HEALTH_ARTICLES(state, payload) {
        state.HealthArticles.push(payload)
    },
    INCREASE_PAGE_NUMBER(state) {
        state.PageNumber++;
    },

    SET_TAG_NEXT_DATA_LINK(state, payload) {
        state.TagArticlesNextLink = payload
    },
    SET_MORE_TAG_ARTICLES(state, payload) {
        state.HealthArticles.push(payload)
    }
}
export const actions = {

    FetchHealthArticles({ commit }, posts) {
        commit('SET_HEALTH_ARTICLES', posts)
    },
    FetchMoreHealthArticles({ commit, rootState }) {
        return ApiService.GetMoreHealthArticles(rootState.health.PageNumber).then(response => {
            response.data.results.forEach(element => {
                commit('SET_MORE_HEALTH_ARTICLES', element)
            });
            commit('INCREASE_PAGE_NUMBER')
        })
    },
    SetTagNextDataLink({ commit }, posts) {
        commit('SET_TAG_NEXT_DATA_LINK', posts)
    },
    SetMoreTagArticles({ commit }, posts) {
        commit('SET_MORE_TAG_ARTICLES', posts)
    }
}
