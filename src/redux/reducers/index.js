import { USER } from '../types/index'
const intialState = {
    user_type: '',
}
const reducer = (state = intialState, action) => {
    switch (action.type) {

        case USER: {
            return {
                ...state,
                user_type: action.payload,
            }
        }
        default:
            return state
    }
}
export default reducer;