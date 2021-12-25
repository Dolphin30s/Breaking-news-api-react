
import React, { useState, useEffect } from 'react'
import { MDBRow, MDBCard, MDBCol } from 'mdbreact'
import { Link } from 'react-router-dom';

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getEpisodes } from '../../redux/episodes/episodes-actions';

//components
import Spinner from '../../components/Spinner/Spinner';

//css
import './episodes.css'

const Episodes = () => {
    const [search, setSearch] = useState('')
    const [season, setSeason] = useState(null)
    const [sortText, setSortText] = useState('Ascending')
    const dispatch = useDispatch()

    let episodesState = useSelector((state) => state.episodesReducer.episodes)

    useEffect(() => {
        dispatch(getEpisodes())
    }, [])

    return (
        <div className='container animated fadeIn'>
            <h1 className='text-center'>List of Episodes</h1>
            <MDBRow>
                <MDBCol sm='2'>
                    <span className='sort'
                        onClick={() => sortText == 'Ascending' ? setSortText('Descending') : setSortText('Ascending')}
                    >
                        {sortText}&nbsp;
                        <i className=" fas fa-sort"></i>
                    </span>
                </MDBCol>

                <MDBCol sm='4'>
                    <select
                        className='form-control'
                        onChange={e => e.target.value != 0 ? setSeason(e.target.value) : setSeason(null)}>
                        <option value={0}>Select... </option>
                        <option value={1}>season 1</option>
                        <option value={2}>season 2</option>
                        <option value={3}>season 3</option>
                        <option value={4}>season 4</option>
                    </select>
                </MDBCol>

                <MDBCol sm='6'>
                    <input
                        className='form-control'
                        placeholder='Search...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type='search'
                    />
                </MDBCol>

            </MDBRow>
            <MDBRow>
                {
                    episodesState != undefined && episodesState.length > 0 ?
                        episodesState
                            .filter(episode => {
                                if (search === '')
                                    return episode;
                                else if (
                                    episode.title.toLowerCase().includes(search.toLowerCase())
                                )
                                    return episode;
                            })
                            .filter(episode => season != null ? episode.season == season : episode)
                            .sort((a, b) => {
                                return sortText === 'Descending' ?
                                    new Date(b.air_date) - new Date(a.air_date)
                                    : new Date(a.air_date) - new Date(b.air_date)
                            })

                            .map(episode => {
                                return <MDBCol key={episode.episode_id} sm='12' md='6' lg='3' >

                                    <MDBCard className='cardOfEisode'>
                                        <Link to={`episode/${episode.episode_id}`}><h2>{episode.title}</h2></Link>
                                        <p>{new Date(episode.air_date).toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).replace(/\D/g, '/')}</p>

                                        <div className='season'
                                            style={{
                                                background:
                                                    episode.season == 1 ? 'rgb(140 111 111)'
                                                        : episode.season == 2 ? 'rgb(54, 32, 32)'
                                                            : episode.season == 3 ? 'rgb(53 50 116)'
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
