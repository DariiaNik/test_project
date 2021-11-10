import {commonAPI} from "../api/commonAPI";

const SET_POSTS = 'SET_POSTS';
const SET_FULL_POSTS = 'SET_FULL_POSTS';
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT';
const ADD_NEW_ARTICLE = 'ADD_NEW_ARTICLE';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';

let initialState = {
    posts: [],
    fullPost: {},
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {
                ...state, posts: action.posts
            }
        }
        case SET_FULL_POSTS: {
            return {
                ...state, fullPost: action.post
            }
        }
        case ADD_NEW_COMMENT: {
            let stateCopy = {
                ...state,
                fullPost: {...state.fullPost}
            }
            stateCopy.fullPost.comments.push({
                postId: action.id,
                body: action.text,
            })
            return stateCopy;
        }
        case ADD_NEW_ARTICLE: {
            let stateCopy = {
                ...state,
                posts: [...state.posts]
            }
            stateCopy.posts.push({
                title: action.title,
                body: action.body,
            })
            return stateCopy;
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.id)
            };
        }
        case UPDATE_POST: {
            return {
                ...state,
                posts: state.posts.map(post => post._id === action.id
                    ? {title: action.title, body: action.body, ...post}
                    : post)
            }
        }
        default :
            return state;
    }
}

export const setPostsAC = (posts) => ({type: SET_POSTS, posts});
export const setFullPostsAC = (post) => ({type: SET_FULL_POSTS, post});
export const addNewCommentAC = (id, text) => ({type: ADD_NEW_COMMENT, id, text});
export const addNewArticleAC = (title, body) => ({type: ADD_NEW_ARTICLE, title, body});
export const deletePostAC = (id) => ({type: DELETE_POST, id});
export const updatePostAC = (id, title, body) => ({type: UPDATE_POST, id, title, body});

export const getPostsTC = () => {
    return (dispatch) => {
        commonAPI.getPosts().then(response => {
            if (response.status === 200) {
                dispatch(setPostsAC(response.data.result))
            }
        })
    }
}

export const getFullPostsTC = (id) => {
    return (dispatch) => {
        commonAPI.getFullPost(id).then(response => {
            dispatch(setFullPostsAC(response.data))
        })
    }
}

export const postNewCommentTC = (id, text) => {
    return (dispatch) => {
        commonAPI.postNewComment(id, text)
        dispatch(addNewCommentAC(id, text))
    }
}

export const postNewArticleTC = (title, body) => {
    return (dispatch) => {
        commonAPI.postNewArticle(title, body)
        dispatch(addNewArticleAC(title, body))
    }
}
export const deletePostTC = (id) => {
    return (dispatch) => {
        commonAPI.deletePost(id)
        dispatch(deletePostAC(id))
    }
}
export const updatePostTC = (id, title, body) => {
    return (dispatch) => {
        console.log(id, title, body)
        commonAPI.updatePost(id, title, body)
        dispatch(updatePostAC(id, title, body))
    }
}


export default mainReducer;
