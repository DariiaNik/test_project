import React from "react";
import './App.css';
import Header from "./component/header/Header";
import {Route} from "react-router-dom";
import MainPageContainer from "./component/main_page/MainPageContainer";
import FullPost from "./component/main_page/post/fullPost/FullPostContainer";
import AddNewPostPageContainer from "./component/add_new_post_page/AddNewPostPageContainer";
import UpdatePostContainer from "./component/update_post/UpdatePostContainer";

function App() {
    return (
        <div className={'wrapper'}>
            <Header/>
            <div className={'content'}>
                <Route path={'/main'}
                       render={() => <MainPageContainer/>}/>
                <Route path={'/addNewPost'}
                       render={() => <AddNewPostPageContainer/>}/>
                <Route path={'/full'}
                       render={() => <FullPost/>}/>
                <Route path={'/update'}
                       render={() => <UpdatePostContainer/>}/>
            </div>
        </div>
    );
}

export default App;
