import './episode.css'
import { MDBCard, MDBRow } from 'mdbreact'
import React, { useEffect } from 'react'
import { Link, useParams } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getEpisodeById } from '../../redux/episodes/episodes-actions';

import Spinner from '../../components/Spinner/Spinner';

//css
import './episode.css'

const Episode = () => {
    const dispatch = useDispatch()
    let { episodeId } = useParams();
    let episodeState = useSelector((state) => state.episodesReducer.episode)

    useEffect(() => {
        dispatch((getEpisodeById(episodeId)))
    }, [])

    return (
        <div className='container'>
            <MDBRow>
                <MDBCard className='col-sm-12 cardOfEpisode animated fadeIn'>
                    {
                        episodeState != undefined ?
                            episodeState.map(episode => {
                                return (
                                    <div key={episode.title}>
                                        <h1>{episode.title}</h1>
                                        {/* <p>{episode.air_date}</p> */}
                                        <p>{new Date(episode.air_date).toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).replace(/\D/g, '/')}</p>

                                        {
                                            episode.characters.length > 0 ?
                                                episode.characters.map((character, i) =>
                                                    i != episode.characters.length - 1 ?
                                                        <React.Fragment key={character}>
                                                            <Link to={`/character/${character.replace(/\s/g, '+')}`}>{character}</Link>
                                                            <span>,</span>
                                                        </React.Fragment>
                                                        : <Link to={`/character/${character.replace(/\s/g, '+')}`}>{character}</Link>
                                                )
                                                : ''
                                        }
                                    </div>
                                )
                            })
                            : <Spinner />
                    }
                </MDBCard>
            </MDBRow>
        </div>
    )
}

export default Episode
