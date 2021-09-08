import React from "react";
import PropTypes from "prop-types";
import './Comments.scss'


const Comments = (props) => {
    return (
        <div className={'comment'}>
            {props.body}
        </div>
    )
}

Comments.propTypes = {
    body: PropTypes.string,
}

export default Comments;