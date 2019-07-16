import React from 'react'
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Post(props) {

    function handleVotes(vote) {
        const { dispatch } = props;
        console.log(dispatch);
        
        const action = {
            type: vote
        };
        dispatch(action);
    }

    return (
        <div>
            {/* onCLick={viewPost} */}
            <h2>{props.Title}</h2>
            <h3>{props.Topic}</h3>
            <h4>{props.Vote}</h4>
            <button onClick={() => handleVotes('plus')}>&#9650;</button>
            <button onClick={() => handleVotes('minus')}>&#9660;</button>
        </div>
    )
}

Post.propTypes = {
    Title: PropTypes.string,
    Topic: PropTypes.string,
    Content: PropTypes.string,
    Vote: PropTypes.number,
    Id: PropTypes.string
}

export default connect()(Post);