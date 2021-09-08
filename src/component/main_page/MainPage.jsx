import React from "react";
import './MainPage.scss'
import Post from "./post/Post";
import PropTypes from "prop-types";

const MainPage = (props) => {

    let postElement = props.posts.map(post => (
        <Post key={post.id} title={post.title} body={post.body} id={post.id} deletePost={props.deletePost}/>
    ))

    return (
        <div className={'main_page'}>
            {postElement}
        </div>
    )
}

MainPage.propTypes = {
    posts: PropTypes.array,
    deletePost: PropTypes.func
}

export default MainPage;