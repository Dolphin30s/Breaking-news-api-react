import React, { useEffect, useState } from 'react'
import { MDBCard, MDBCol, MDBRow } from 'mdbreact'
import { Link, useNavigate } from "react-router-dom";
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getAllCharacters, deleteCharacter, updateCount } from '../../redux/characters/characters-actions'

//components
import Spinner from '../../components/Spinner/Spinner';

//css
import './characters.css'

const Characters = () => {
    const dispatch = useDispatch()
    let navigate = useNavigate()
    let charactersState = useSelector((state) => state.charactersReducer.characters)
    let countState = useSelector((state) => state.charactersReducer.count)
    const [reAPICall, setReAPICall] = useState(false)

    useEffect(() => {

        //initial Characters list
        if (JSON.stringify(charactersState) === JSON.stringify([]))
            dispatch((getAllCharacters(countState)))

        dispatch(deleteCharacter())

    }, [countState])

    //update Characters list when click Load More button...
    useEffect(() => {
        if (reAPICall)
            dispatch((getAllCharacters(countState)))
    }, [countState])

    return (
        <div className='container charactersContainer'>

            <MDBRow>
                <h1 className='col-sm-12 text-center'>Characters</h1>
            </MDBRow>

            <MDBRow>

                {
                    charactersState !== undefined && charactersState.length ?

                        // charactersState.length === 0 ?
                        //     <h1>No results founded</h1>

                        //     : 

                        charactersState.map((character, i) => {
                            return (
                                <React.Fragment key={character.name}>
                                    <MDBCol sm='12' md='6' lg='3'>
                                        <MDBCard className='cardOfCharacters animated fadeIn'
                                            //  onClick={() => navigate(`/character/${character.name.replace(/\s/g, '+')}`)}
                                            onClick={() => {
                                                navigate(`/character/${character.name.replace(/\s/g, '+')}`, { state: { portrayedName: character.portrayed } })
                                            }}
                                        >
                                            <img src={character.img}
                                                alt={character.name}
                                            />
                                            <h1><Link to={`/character/${character.name.replace(/\s/g, '+')}`}>{character.name}</Link></h1>
                                            <div className='characterAttributes animated fadeIn'>

                                                {
                                                    character.appearance.length > 0 ?
                                                        character.appearance.map((app, i) =>
                                                            i != character.appearance.length - 1 ?
                                                                <React.Fragment key={`appearance${i}`}>
                                                                    {i == 0 && <p className='font-weight-bold'>Seasons:</p>}
                                                                    <span>{app}, </span>
                                                                </React.Fragment>
                                                                : character.appearance.length === 1 ?
                                                                    <span>Seasons: {app}</span>
                                                                    : <span>{app}</span>
                                                        )
                                                        : ''
                                                }
                                                <hr />
                                                {
                                                    character.occupation.length > 0 ?
                                                        character.occupation.map((occ, i) =>
                                                            i != character.occupation.length - 1 ?
                                                                <React.Fragment key={`occupation ${i}`}>
                                                                    {i == 0 && <p className='font-weight-bold'>Occupation:</p>}
                                                                    <span>{occ}, </span>
                                                                </React.Fragment>
                                                                : character.occupation.length === 1 ?
                                                                    <>
                                                                        <p className='font-weight-bold'>Occupation:</p>
                                                                        <span>{occ}</span>
                                                                    </>
                                                                    : <span>{occ}</span>
                                                        )
                                                        : ''
                                                }
                                                <hr />
                                                <p className='font-weight-bold'>Portrayed:</p>
                                                <p>{character.portrayed}</p>
                                            </div>
                                        </MDBCard>

                                    </MDBCol>
                                    <div className='loadBtnDiv' >
                                        {
                                            countState !== 72 && charactersState.length - 1 === i &&
                                            charactersState !== undefined &&
                                            //  charactersState.length > 0 &&
                                            <input type='button' className='btn col-sm-12 loadBtn' value={'Load more...'}
                                                onClick={() => {
                                                    setReAPICall(true)
                                                    dispatch(updateCount(12))
                                                }

                                                    // setCount(prevState => prevState + 12)
                                                }
                                            />
                                        }
                                    </div>
                                </React.Fragment>

                            )
                        })
                        : <Spinner />
                }
            </MDBRow>
            {/* <MDBRow>
                {
                    count !== 84 &&
                    charactersState !== undefined &&
                    //  charactersState.length > 0 &&
                    <input type='button' className='btn col-sm-3 loadBtn' value={'Load more...'}
                        onClick={() => setCount(prevState => prevState + 12)}
                    />
                }
            </MDBRow> */}
        </div>
    )
}

export default Characters
