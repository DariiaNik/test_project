import React from "react";
import AddNewPostPage from "./AddNewPostPage";
import {postNewArticleTC} from "../../redux/mainReducer";
import PropTypes from "prop-types";
import {connect} from "react-redux";


class AddNewPostPageContainer extends React.Component {
    render() {
        return (
            <AddNewPostPage postNewArticle={this.props.postNewArticleTC}/>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        postNewArticleTC: (title, body) => {
            dispatch(postNewArticleTC(title, body));
        },
    }
}

AddNewPostPageContainer.propTypes = {
    postNewArticleTC: PropTypes.func
}

export default connect(null, mapDispatchToProps)(AddNewPostPageContainer);