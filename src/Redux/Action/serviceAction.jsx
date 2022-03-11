// {
//     type: 'ADD_TO_UNDER_REVIEW',
//         payload: {

//     }
// }

export function addToUnderReview(payload) {
    return {
        type: 'ADD_TO_UNDER_REVIEW',
        payload
    }
}

export function removeToUnderReview(payload){
    return {
        type: 'REMOVE_FROM_UNDER_REVIEW',
        payload
    }
}