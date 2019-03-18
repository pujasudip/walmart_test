import actionTypes from "../action/types";

const INITIAL_STATE = [
    {id:100, src:'https://source.unsplash.com/random/800x600', title: 'Unsplash Random Image'}
];

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_IMAGE:
            const {src, title} = action.payload;
            let newState = state.slice();
            let newId = ++newState[newState.length -1].id;
            return [{id: newId, src: src, title: title}, ...newState]
        default:
            return state;
    }
}