
import React, { useEffect } from 'react'
import { MDBRow, MDBCard, MDBCol } from 'mdbreact'
import { Link, useNavigate } from 'react-router-dom';

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getEpisodes } from '../../redux/episodes/episodes-actions';
import { updateSearch, updateSeason, updateSort } from '../../redux/Inputs/Inputs-actions';

//components
import Spinner from '../../components/Spinner/Spinner';

//css
import './episodes.css'

const Episodes = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    let episodesState = useSelector((state) => state.episodesReducer.episodes)
    let searchState = useSelector((state) => state.inputsReducer.search)
    let seasonState = useSelector((state) => state.inputsReducer.season)
    let sortState = useSelector((state) => state.inputsReducer.sort)

    useEffect(() => {
        dispatch(getEpisodes())
    }, [])

    return (
        <div className='container animated fadeIn'>
            <h1 className='text-center'>List of Episodes</h1>
            <MDBRow>

                <MDBCol sm='2' style={{ margin: 'auto' }}>
                    <span className='sort'
                        onClick={() => sortState == 'Ascending' ? dispatch(updateSort('Descending')) : dispatch(updateSort('Ascending'))}
                    >
                        {sortState}&nbsp;
                        <i className=" fas fa-sort"></i>
                    </span>
                </MDBCol>

                <MDBCol sm='4'>
                    <select
                        defaultValue={seasonState}
                        className='form-control'
                        onChange={e => e.target.value != 0 ? dispatch(updateSeason(e.target.value)) : dispatch(updateSeason(null))}>
                        <option value={0}>Select... </option>
                        <option value={1}>season 1</option>
                        <option value={2}>season 2</option>
                        <option value={3}>season 3</option>
                        <option value={4}>season 4</option>
                        <option value={5}>season 5</option>
                    </select>
                </MDBCol>

                <MDBCol sm='6'>
                    <input
                        className='form-control'
                        placeholder='Search...'
                        value={searchState}
                        onChange={(e) => dispatch(updateSearch(e.target.value))}
                        type='search'
                    />
                </MDBCol>

            </MDBRow>
            <MDBRow>
                {
                    episodesState != undefined && episodesState.length > 0 ?
                        episodesState
                            .filter(episode => {
                                if (searchState === '')
                                    return episode;
                                else if (
                                    episode.title.toLowerCase().includes(searchState.toLowerCase())
                                )
                                    return episode;
                            })
                            .filter(episode => seasonState != null ? episode.season == seasonState : episode)
                            .sort((a, b) => {
                                return sortState === 'Descending' ?
                                    new Date(b.air_date) - new Date(a.air_date)
                                    : new Date(a.air_date) - new Date(b.air_date)
                            })
                            .map((episode, index) => {
                                return <MDBCol key={episode.episode_id} sm='12' md='6' lg='3'>

                                    <MDBCard className='cardOfEisode' onClick={() => navigate(`episode/${episode.episode_id}`)}>

                                        <Link to={`episode/${episode.episode_id}`}><h2
                                            title={`episode/${episode.episode_id}`}
                                            style={{
                                                background:
                                                    episode.season == 1 ? 'rgb(54, 32, 32)'
                                                        : episode.season == 2 ? 'rgb(53 50 116)'
                                                            : episode.season == 3 ? 'rgb(140 111 111)'
                                                                : episode.season == 4 ? 'rgb(220 60 60)'
                                                                    : episode.season == 5 ? 'rgb(97 216 43)'
                                                                        : ''
                                            }
                                            }
                                        >{episode.episode}. {episode.title}</h2>
                                        </Link>
                                        <div className='episodesAttributes animated fadeIn'>
                                            <p style={{ fontSize: 'x-large' }}>Episode {episode.episode}</p>
                                            <p>Air date: {new Date(episode.air_date).toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).replace(/\D/g, '/')}</p>
                                        </div>
                                        <img src={
                                            episode.season == 1 ?
                                                'season1.jpg'
                                                : episode.season == 2 ?
                                                    'season2.jpg'
                                                    : episode.season == 3 ?
                                                        'season3.jpg'
                                                        : episode.season == 4 ?
                                                            'season4.jpg'
                                                            : episode.season == 5 ?
                                                                'season5.jpg'
                                                                : ''
                                        }

                                            className='cardImg' />
                                        <div className='season'
                                            style={{
                                                background:
                                                    episode.season == 1 ? 'rgb(54, 32, 32)'
                                                        : episode.season == 2 ? 'rgb(53 50 116)'
                                                            : episode.season == 3 ? 'rgb(140 111 111)'
                                                                : episode.season == 4 ? 'rgb(220 60 60)'
                                                                    : episode.season == 5 ? 'rgb(97 216 43)'
                                                                        : ''
                                            }}>
                                            <span>season {episode.season}</span>
                                        </div>
                                    </MDBCard>
                                </MDBCol>

                            })
                        : <Spinner />
                }
            </MDBRow>

        </div>
    )
}

export default Episodes
