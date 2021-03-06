import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';


function NewPostForm(props) {
    let Title = null;
    let Topic = null;
    let Content = null;

    function handleNewPostFormSubmit(e) {
        const { dispatch } = props;
        console.log(dispatch);
        e.preventDefault();
        const action = {
            type: 'ADD_POST',
            Id: v4(),
            Title: Title.value,
            Topic: Topic.value,
            Content: Content.value,
            Vote: 0
        };
        dispatch(action);
        Title.value = '';
        Topic.value = '';
        Content.value = '';
    }

    return (
        <div>
            <form onSubmit={handleNewPostFormSubmit}>
                <input
                    type="text"
                    id='title'
                    placeholder='Post Title'
                    ref={(input) => { Title = input; }}
                />
                <input
                    type='text'
                    id='topic'
                    placeholder='Post Topic'
                    ref={(input) => { Topic = input; }}
                />
                <input
                    type="text"
                    id='content'
                    placeholder='Post Body'
                    ref={(textarea) => { Content = textarea; }}
                />
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default connect()(NewPostForm);