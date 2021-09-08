import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://bloggy-api.herokuapp.com/',
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
        return instance.get(`posts/${id}?_embed=comments`)
            .then(response => {
                return response;
            })
            .catch(error => console.error(error))

    },
    postNewComment(postId, text) {
        instance.post('comments/', {"postId": postId, "body": text})
            .catch(error => console.error(error))
    },
    postNewArticle(title, body) {
        instance.post('posts/', {title, body})
            .catch(error => console.error(error))
    },
    deletePost(id) {
        instance.delete(`posts/${id}`)
            .catch(error => console.error(error))
    },
    updatePost(id, title, body) {
        instance.put(`posts/${id}`, {title, body})
    }
}
