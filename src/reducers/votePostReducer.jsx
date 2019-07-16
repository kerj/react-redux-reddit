export default (state = {}, action) => {
    let newState;
    let newVote = newState.Vote + 1;
    switch (action.type) {
        case 'plus':
        console.log(action);
            newVote = newState.Vote + 1;
            newState = Object.assign({}, state, {
            Vote: newVote
            })
            console.log(newState);
            return newState;
        case 'minus':
            console.log(action);
            newState = Object.assign({}, state);
            newState.Vote--;
            return newState;
        default:
        console.log(state);
        
            return state;
    }
}