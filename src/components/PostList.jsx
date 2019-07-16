import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default function PostList(props) {
    return (
        <div>
            {Object.keys(props.masterPostList).map((postId) => {
                let post = props.masterPostList[postId];
                return <Post
                Title={post.Title}
                Topic={post.Topic}
                Vote={post.Vote}
                key={postId}
                />
            })}
        </div>
    )
}

PostList.propTypes = {
    masterPostList: PropTypes.object,
    // onPostSelect: PropTypes.func
}