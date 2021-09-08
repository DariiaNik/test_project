import React from "react";
import {makeStyles} from "@material-ui/styles";
import styled from "@emotion/styled";
import {Button, TextField} from "@material-ui/core";
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


const UpdatePost = (props) => {
    const classes = useStyles();
    const [titleValue, setTitleValue] = React.useState(props.fullPost.title);
    const [bodyValue, setBodyValue] = React.useState(props.fullPost.body);

    const handleTitleChange = (event) => {
        setTitleValue(event.target.value);
    };
    const handleBodyChange = (event) => {
        setBodyValue(event.target.value);
    };

    function handleEnter(event) {
        if (event.key === 'Enter' && titleValue !== '') {
            props.updatePost(props.fullPost.id, titleValue, bodyValue)
        }
    }

    function handleClick() {
        props.updatePost(props.fullPost.id, titleValue, bodyValue)
    }

    return (
        <div className={'new-post-wrapper'}>
            <div>
                <TextField className={classes.root}
                           id="comments-multiline"
                           multiline
                           rows={2}
                           fullWidth={true}
                           value={titleValue}
                           onChange={handleTitleChange}
                           onKeyDown={handleEnter}
                />
            </div>
            <div>
                <TextField className={classes.root}
                           id="comments-multiline"
                           multiline
                           rows={25}
                           fullWidth={true}
                           value={bodyValue}
                           onChange={handleBodyChange}
                           onKeyDown={handleEnter}
                />
                <MyButton variant="outlined"
                          onClick={handleClick}>Update</MyButton>
            </div>
        </div>
    )
}


UpdatePost.propTypes = {
    updatePost: PropTypes.func,
    fullPost: PropTypes.object,
}


export default UpdatePost;