import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import MainPage from "./MainPage";
import {deletePostTC, getPostsTC} from "../../redux/mainReducer";

class MainPageContainer extends React.Component {

    componentDidMount() {
        this.props.getPostsTC();
    }

    render() {
        return (
            <MainPage posts={this.props.posts} deletePost={this.props.deletePostTC}/>
        )
    }
}

let mapStateToProps = (state) => ({
    posts: state.common.posts
});

let mapDispatchToProps = (dispatch) => {
    return {
        getPostsTC: () => {
            dispatch(getPostsTC());
        },
        deletePostTC: (id) => {
            dispatch(deletePostTC(id));
        },
    }
}

MainPageContainer.propTypes = {
    posts: PropTypes.array,
    getPostsTC: PropTypes.func,
    deletePostTC: PropTypes.func,

}

export default connect(mapStateToProps,mapDispatchToProps)(MainPageContainer);

