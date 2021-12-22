import Api from "../../utilis/Api";

export const getCharactersById = (name) => async dispatch => {
    try {

        const res = await Api.get(`/characters?name=${name}`)

        dispatch({
            type: 'GET_CHARACTERS_BY_ID',
            payload: res.data
        })

    }
    catch (e) {
        console.log(e);
    }
}

