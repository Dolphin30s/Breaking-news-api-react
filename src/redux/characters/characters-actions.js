import Api from "../../utilis/Api";

export const getAllCharacters = (count) => async dispatch => {
    try {

        const res = await Api.get(`/characters?category=Breaking+Bad&limit=${count}&offset=count`)

        dispatch({
            type: 'GET_ALL_CHARACTERS',
            payload: res.data
        })

    }
    catch (e) {
        console.log(e);
    }
}

export const getCharactersById = (name) => async dispatch => {
    try {

        const res = await Api.get(`/characters?name=${name}`)

        dispatch({
            type: 'GET_CHARACTERS_BY_ID',
            payload: res.data
        })
        return Promise.resolve()

    }
    catch (e) {
        console.log(e);
    }
}
export const deleteCharacter = () => dispatch => {

    dispatch({
        type: 'DELETE_CHARACTER'
    })
}
export const updateCount = (count) => dispatch => {

    dispatch({
        type: 'UPDATE_COUNT',
        payload: count
    })
    return Promise.resolve()
}
