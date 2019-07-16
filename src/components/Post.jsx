import React from 'react'
import { makeStyles } from '@material-ui/core';



export default function Post(props) {
    return (
        <div onCLick={viewPost}>
            <h2>{props.Title}</h2>
            <h3>{props.Topic}</h3>
            <h4>{props.Vote}</h4>
            <button onClick={voteUp}>&#9650</button>
            <button onClick={voteDown}>&#9660</button>
        </div>
    )
}

Post.propTypes = {
    Title: PropTypes.string,
    Topic: PropTypes.string,
    Content: PropTypes.string,
    Vote: PropTypes.string,
    Id: PropTypes.string,
    PostTime: PropTypes.string,
}