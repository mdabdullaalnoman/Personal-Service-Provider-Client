import service from "../../fakeData.json";

const initialState = {
    upcomingService: service,
    underReview: [],
    reviewed: []
}

function serviceReducer(state = initialState, action) {


    switch (action.type) {

        case 'ADD_TO_UNDER_REVIEW': {
            const newState = { ...state, underReview: [...state.underReview, action.payload] };
            return newState;
        }

        case 'REMOVE_FROM_UNDER_REVIEW': {
            const newState = {...state , underReview: state.underReview.filter( (service) => service.id !== action.payload)}
            return newState
        }

        default:
            return state
    }




    // if(action.type === 'ADD_TO_UNDER_REVIEW'){
    //    const newState = [...state , action.payload];
    //    return newState;
    // }
    // else if(action.type === 'REMOVE_FROM_UNDER_REVIEW'){
    //     const newState = state.filter( (service) => service.id !== action.payload);
    //     return newState
    // }


}
export default serviceReducer;