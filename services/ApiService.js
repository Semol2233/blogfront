import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://cdn.resultonlinebd.com`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    GetHomeArticles() {
        return apiClient.get('/')
    },
    GetAuthorArticles(authorName) {
        return apiClient.get('/channel/' + authorName)
    },

    getdetailsCard(slug) {
        return apiClient.get('/details/' + slug)
    },


    GetProgrammingArticles() {
        return apiClient.get('/channeldel?search=Programming')
    },

}
