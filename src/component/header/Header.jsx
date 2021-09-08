import React from "react";
import './Header.scss'
import {Button} from "@material-ui/core";
import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";


const MyButton = styled(Button)({
    background: '#8C857B',
    borderRadius: 3,
    color: '#F2F2EB',
    height: 48,
    borderColor: '#746f68',
    padding: '0 30px',
    '&:hover': {
        background: '#ebddbd',
        color: '#8C857B',
        borderColor: '#8C857B'
    }
});

const Header = () => {
    return (
        <div className={'header-wrapper'}>
            <div className={'header-content'}>
                <NavLink to={'/main'}>
                    <div className={'header-title'}>My little blog</div>
                </NavLink>
                <NavLink to={'/addNewPost'}>
                    <MyButton variant="outlined">New Post</MyButton>
                </NavLink>
            </div>
        </div>
    )
}

export default Header;