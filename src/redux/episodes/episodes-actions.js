import Api from "../../utilis/Api";

export const getEpisodes = () => async dispatch => {
    try {

        const res = await Api.get(`episodes?series=Breaking+Bad`)

        dispatch({
            type: 'GET_EPISODES',
            payload: res.data
        })

    }
    catch (e) {
        console.log(e);
    }
}

export const getEpisodeById = (id) => async dispatch => {
    try {

        const res = await Api.get(`episodes/${id}`)

        dispatch({
            type: 'GET_EPISODE_BY_ID',
            payload: res.data
        })

    }
    catch (e) {
        console.log(e);
    }
}

