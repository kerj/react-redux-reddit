import newPostReducer from './../../reducers/newPostReducer';


describe('postListReducer', () => {

    let action;
    const samplePost = {
        Title: 'My dog peed on my cat',
        Topic: 'Bad day',
        Content: 'I got home and there was pee on my cat',
        Vote: 0,
        PostTime: 1500000000000,
        id: 0
    }

    test('It should return default state if no action type', () => {
        expect(newPostReducer({}, { type: null})).toEqual({});
    });

    test('It should return a state', () => {
        const { Title, Topic, Content, Vote, PostTime, Id} = samplePost;
        action ={
            type: 'ADD_POST',
            Title: Title,
            Topic: Topic,
            Content: Content,
            Vote: Vote,
            PostTime: PostTime,
            Id: Id
        }
        expect(newPostReducer({}, action)).toEqual({
            [Id]: {
                Title: Title,
                Topic: Topic,
                Content: Content,
                Vote: Vote,
                Id: Id,
                PostTime: PostTime
            }
        });
    });
});