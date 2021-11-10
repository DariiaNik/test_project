import React from "react";
import {Button, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import styled from "@emotion/styled";
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


const NewComment = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    function handleEnter(event) {
        if (event.key === 'Enter' && value !== '') {
            props.postNewComment(props.postID,value)
            setValue('');
        }
    }
    function handleClick(){
        props.postNewComment(props.postID,value)
        setValue('');
    }

    return (
        <form noValidate autoComplete="off">
            <div>
                <TextField className={classes.root}
                           id="comments-multiline"
                           label="Add New Comment"
                           multiline
                           rows={5}
                           fullWidth={true}
                           value={value}
                           onChange={handleChange}
                           onKeyDown={handleEnter}
                />
                <MyButton variant="outlined"
                          onClick={handleClick}>Add</MyButton>
            </div>
        </form>
    )
}


NewComment.propTypes = {
    postID:PropTypes.string,
    postNewComment:PropTypes.func

}


export default NewComment;
