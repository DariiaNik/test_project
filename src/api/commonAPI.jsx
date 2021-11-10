import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/',
   /* baseURL: 'https://bloggy-api.herokuapp.com/',*/
})

export const commonAPI = {
    getPosts() {
        return instance.get('posts/')
            .then(response => {
                return response;
            })
            .catch(error => console.error(error))
    },
    getFullPost(id) {
        return instance.get(`post/?id=${id}`)
            .then(response => {
                return response;
            })
            .catch(error => console.error(error))

    },
    postNewComment(id, text) {
        instance.post(`comments/?id=${id}`, { "body": text})
            .catch(error => console.error(error))
    },
    postNewArticle(title, body) {
        instance.post('posts/', {title, body})
            .catch(error => console.error(error))
    },
    deletePost(id) {
        instance.delete(`posts/?id=${id}`)
            .catch(error => console.error(error))
    },
    updatePost(id, title, body) {
        instance.put(`posts/?id=${id}`, {title, body})
    }
}
