import React, { useEffect } from 'react'
import { MDBCard } from 'mdbreact'
import { useParams } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getCharactersById } from '../../redux/characters/characters-actions'

//components
import Spinner from '../../components/Spinner/Spinner';

//css
import './character.css'

const Character = () => {
    const dispatch = useDispatch()
    let { characterName } = useParams();
    let characterState = useSelector((state) => state.charactersReducer.character)

    useEffect(() => {
        dispatch((getCharactersById(characterName)))
    }, [characterName])


    return (
        <div className='container charactersContainer'>
            <MDBCard className='col-sm-12 cardOfCharacters'>
                {
                    characterState != undefined ?

                        characterState.length == 0 ?
                            <h1>No results founded</h1>

                            : characterState.map(character => {
                                return (
                                    <div key={character.name} className='col-sm-12 row rowOfCcharacter animated fadeIn'>
                                        <img className='col-lg-6 col-sm-12' src={character.img} alt='character' />

                                        <div className='col-lg-6 col-sm-12'>
                                            <h1 className='attribute'>{character.name}</h1>

                                            {character.birthday != 'Unknown' && <p> <span className='attribute'>Birth day:</span> {character.birthday}</p>}
                                            {character.nickname != 'Unknown' && <p><span className='attribute'>Nick Name:</span> {character.nickname}</p>}
                                            {character.status != 'Unknown' && <p><span className='attribute'>Status: </span>{character.status}</p>}

                                            {
                                                character.occupation.length > 0 ?
                                                    character.occupation.map((occ, i) =>
                                                        i != character.occupation.length - 1 ?
                                                            <React.Fragment key={i}>
                                                                {i == 0 && <p className='font-weight-bold'>Occupation:</p>}
                                                                <span>{occ},</span>
                                                            </React.Fragment>
                                                            : <span>{occ}</span>
                                                    )
                                                    : ''
                                            }
                                        </div>

                                    </div>
                                )
                            })
                        : <Spinner />
                }
            </MDBCard>
        </div>
    )
}

export default Character
