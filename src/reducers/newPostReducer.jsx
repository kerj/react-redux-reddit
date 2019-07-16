export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_POST':
            const { Title, Topic, Content, Vote, Id } = action;
            console.log(action);
            
            let newState = Object.assign({}, state, {
                [Id]: {
                    Title: Title,
                    Topic: Topic,
                    Content: Content,
                    Vote: Vote,
                    Id: Id
                }
            });
            console.log(newState);
            return newState;
        default:
            return state;
    }
}