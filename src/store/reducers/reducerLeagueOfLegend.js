import {FETCH_ROMANTIC_MOVIES} from "../actions";

export default function reducerLeagueOfLegend(state = {}, action) {
    switch (action.type) {
        case FETCH_ROMANTIC_MOVIES:
            const data = action.payload.data.results;
            return {...state, data}
        default:
            return state;
    }
}