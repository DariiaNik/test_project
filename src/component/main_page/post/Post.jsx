import React from "react";
import './Post.scss'
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const Post = (props) => {
    return (
        <div className={'post'}>
            <div className={'post-title'}>
                {props.title}
            </div>
            <div className={'post-body'}>
                {props.body}
            </div>
            <div className={'post-bottom'}>
                <div className={'post-delete-update'}>
                    <div onClick={() => props.deletePost(props.id)} className={'post-delete'}>Delete</div>
                    <NavLink to={'/update/' + props.id}>
                        <div className={'post-update'}>
                            Update
                        </div>
                    </NavLink>
                </div>
                <NavLink to={'/full/' + props.id}>
                    <div className={'post-more'}>
                        More
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

Post.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.string,
    deletePost: PropTypes.func

}

export default Post;
