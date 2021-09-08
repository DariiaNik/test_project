import React from "react";
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {compose} from "redux";
import {getFullPostsTC, postNewCommentTC} from "../../../../redux/mainReducer";
import PropTypes from "prop-types";
import FullPost from "./FullPost";


class FullPostContainer extends React.Component {

    componentDidMount() {
        let str = this.props.location.pathname;
        let id = str.slice(str.lastIndexOf('/') + 1);
        this.props.getFullPostsTC(id)
    }

    render() {
        return (
            <div>
                <FullPost fullPost={this.props.fullPost} postNewComment={this.props.postNewCommentTC}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    fullPost: state.common.fullPost
});

let mapDispatchToProps = (dispatch) => {
    return {
        getFullPostsTC: (id) => {
            dispatch(getFullPostsTC(id));
        },
        postNewCommentTC: (id, text) => {
            dispatch(postNewCommentTC(id, text))
        }
    }
}


FullPostContainer.propTypes = {
    getFullPostsTC: PropTypes.func,
    postNewCommentTC: PropTypes.func,
    location: PropTypes.object,
    fullPost: PropTypes.object

}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(FullPostContainer);