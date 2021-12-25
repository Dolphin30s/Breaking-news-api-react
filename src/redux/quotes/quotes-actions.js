import Api from "../../utilis/Api";

export const getEpisodes = () => async dispatch => {
    try {

        const res = await Api.get(`episodes`)

        dispatch({
            type: 'GET_EPISODES',
            payload: res.data
        })

    }
    catch (e) {
        console.log(e);
    }
}

export const getQuotesByName = (name) => async dispatch => {
    try {

        const res = await Api.get(`quote?author=${name}`)

        dispatch({
            type: 'GET_QUOTES_BY_NAME',
            payload: res.data
        })


    }
    catch (e) {
        console.log(e);
    }
}

