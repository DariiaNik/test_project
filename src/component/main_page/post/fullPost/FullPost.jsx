import React from "react";
import './FullPost.scss'
import PropTypes from "prop-types";
import Comments from "./comments/Comments";
import NewComment from "./comments/NewComment";


const FullPost = (props) => {
    console.log(props)

    if (props.fullPost.comments) {

        let commentsElement = props.fullPost.comments.map(comment => (
            <Comments key={comment.id} body={comment.body}/>
        ))

        return (
            <div className={'full-post-wrapper'}>
                <div className={'full-post-title'}>{props.fullPost.title}</div>
                <div className={'full-post-body'}>{props.fullPost.body}</div>
                <div className={'full-post-new-comment'}><NewComment postID={props.fullPost.id}
                                                                     postNewComment={props.postNewComment}/></div>
                <div className={'full-post-comments'}>
                    Comments:
                    {commentsElement}
                </div>
            </div>
        )
    } else return (
        <div/>
    )
}


FullPost.propTypes = {
    fullPost: PropTypes.object,
    postNewComment: PropTypes.func,

}

export default FullPost;