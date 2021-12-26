export const updateSearch = (serach) => dispatch => {
    dispatch({
        type: 'UPDATE_SEARCH',
        payload: serach
    })
}

export const updateSeason = (season) => dispatch => {

    dispatch({
        type: 'UPDATE_SEASON',
        payload: season
    })
}
export const updateSort = (typeOfSort) => dispatch => {

    dispatch({
        type: 'UPDATE_SORT',
        payload: typeOfSort
    })
}


