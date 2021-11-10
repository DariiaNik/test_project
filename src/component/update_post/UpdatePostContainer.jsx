import React from "react";
import UpdatePost from "./UpdatePost";
import {getFullPostsTC, updatePostTC} from "../../redux/mainReducer";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class UpdatePostContainer extends React.Component {

    componentDidMount() {

        let str = this.props.location.pathname;
        let id = str.slice(str.lastIndexOf('/') + 1);
        this.props.getFullPostsTC(id)
    }

    render() {
        let str = this.props.location.pathname;
        let id = str.slice(str.lastIndexOf('/') + 1);
        if (this.props.fullPost._id === id) {
            return (
                <UpdatePost fullPost={this.props.fullPost} updatePost={this.props.updatePostTC}/>
            )
        } else return <div/>
    }
}

let mapStateToProps = (state) => ({
    fullPost: state.common.fullPost
});


let mapDispatchToProps = (dispatch) => {
    return {
        updatePostTC: (id, title, body) => {
            dispatch(updatePostTC(id, title, body));
        },
        getFullPostsTC: (id) => {
            dispatch(getFullPostsTC(id));
        },

    }
}

UpdatePostContainer.propTypes = {
    getFullPostsTC: PropTypes.func,
    updatePostTC: PropTypes.func,
    location: PropTypes.object,
    fullPost: PropTypes.object,
}


export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(UpdatePostContainer);
