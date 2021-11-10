import React from "react";
import {Button, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import styled from "@emotion/styled";
import './AddNewPostPage.scss'
import PropTypes from "prop-types";


const useStyles = makeStyles(() => ({
    root: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "dimgray"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "dimgray"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "dimgray"
        },
    }
}));

const MyButton = styled(Button)({
    background: '#F2F2EB',
    borderRadius: 3,
    color: '#8C857B',
    height: 48,
    width: 120,
    borderColor: '#746f68',
    marginTop: '10px',
    padding: '0 30px',
    float: 'right',
    '&:hover': {
        background: '#f1e8d3',
        color: '#8C857B',
        borderColor: '#8C857B'
    }
});

const AddNewPostPage = (props) => {

    const classes = useStyles();
    const [titleValue, setTitleValue] = React.useState('');
    const [bodyValue, setBodyValue] = React.useState('');

    const handleTitleChange = (event) => {
        setTitleValue(event.target.value);
    };
    const handleBodyChange = (event) => {
        setBodyValue(event.target.value);
    };

    function handleEnter(event) {
        if (event.key === 'Enter' && titleValue !== '') {
            props.postNewArticle(titleValue, bodyValue)
            setTitleValue('');
            setBodyValue('');
        }
    }

    function handleClick() {
        props.postNewArticle(titleValue, bodyValue)
        setBodyValue('');
        setTitleValue('');
    }

    return (
        <div className={'new-post-wrapper'}>
            <div>
                <TextField className={classes.root}
                           id="comments-multiline"
                           label="Title"
                           multiline
                           rows={1}
                           fullWidth={true}
                           value={titleValue}
                           onChange={handleTitleChange}
                           onKeyDown={handleEnter}
                />
            </div>
            <div>
                <TextField className={classes.root}
                           id="comments-multiline"
                           label="Body"
                           multiline
                           rows={25}
                           fullWidth={true}
                           value={bodyValue}
                           onChange={handleBodyChange}
                           onKeyDown={handleEnter}
                />
                <MyButton variant="outlined"
                          onClick={handleClick}>Add</MyButton>
            </div>
        </div>
    )
}


AddNewPostPage.propTypes = {
    postNewArticle: PropTypes.func
}

export default AddNewPostPage;
