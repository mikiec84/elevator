import { ADD_ROOM } from '../actions';

export default function (state = {}, action) {
    console.log(action);
    switch(action.type) {
        case ADD_ROOM:
            return Object.assign({}, state, {
                name: action.payload.data.name,
                job: action.payload.data.job
            })
        default:
            return state;
    }
}