import React from 'react';
import PropTypes from 'prop-types';

export default function PostDetail(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h3>{props.votes}</h3>
            <h4>{props.topic}</h4>
            <p>{props.content}</p>
        </div>
    )
}

PostDetail.PropTypes = {
    selectedPost = PropTypes.object
}