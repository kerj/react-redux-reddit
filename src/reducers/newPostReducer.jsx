export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_POST':
            const { Title, Topic, Content, Vote, Id, PostTime } = action;
            let newState = Object.assign({}, state, {
                [Id]: {
                    Title: Title,
                    Topic: Topic,
                    Content: Content,
                    Vote: Vote,
                    Id: Id,
                    PostTime: PostTime
                }
            });
            return newState;
        default:
            return state;
    }
}