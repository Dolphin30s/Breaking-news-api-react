import React, { useEffect, useState } from 'react'
import { MDBCard, MDBCol, MDBRow } from 'mdbreact'
import { useParams } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';

//Redux
import { useSelector, useDispatch } from 'react-redux'
import { getCharactersById } from '../../redux/characters/characters-actions'
import { getQuotesByName } from '../../redux/quotes/quotes-actions';
//components
import Spinner from '../../components/Spinner/Spinner';

//css
import './character.css'

const Character = () => {
    const dispatch = useDispatch()
    let { characterName } = useParams();
    let characterState = useSelector((state) => state.charactersReducer.character)
    let quotesState = useSelector((state) => state.quotesReducer.quotes)
    const [copy, setCopy] = useState('')
    const [display, setDisplay] = useState([])

    useEffect(() => {
        dispatch((getCharactersById(characterName)))
        dispatch(getQuotesByName(characterName))

    }, [characterName])

    useEffect(() => {
        if (quotesState.length > 0) {
            let displayForIcons = []
            for (let index = 0; index < quotesState.length; index++) {
                displayForIcons.push('none')
            }
            setDisplay(displayForIcons)

        }

    }, [quotesState])

    const updateDisplay = (index) => {
        console.log(index)

        let displayForIcons = display.map((d, i) => i === index ? 'block' : 'none')

        setDisplay(displayForIcons)
        console.log('displayForIcons', displayForIcons)
    }

    return (
        <div className='container'>
            <MDBCard className='col-sm-12 cardOfCharacters'>
                {
                    characterState !== undefined ?

                        characterState.length === 0 ?
                            <h1>No results founded</h1>

                            : characterState.map(character => {
                                return (
                                    <div key={character.name} className='col-sm-12 row rowOfCcharacter animated fadeIn'>
                                        <img className='col-lg-6 col-sm-12' src={character.img} alt='character' />

                                        <div className='col-lg-6 col-sm-12'>
                                            <h1 className='attribute'>{character.name}</h1>

                                            {character.birthday != 'Unknown' && <p> <span className='attribute'>Birth day:</span>
                                                {new Date(character.birthday).toLocaleDateString('he-IL', { timeZone: 'Asia/Jerusalem' }).replace(/\D/g, '/')}
                                            </p>}
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
                <MDBCol sm='12' className='QuotesColumn'>
                    {
                        quotesState != undefined &&
                        quotesState.map((quotes, index) => {
                            return <React.Fragment key={quotes.quote}>
                                {index === 0 && <h2 className='text-left px-3 my-3'>Quotes</h2>}
                                {index !== 0 && index !== quotesState.length ? < hr /> : < hr className='colHr' />}
                                <div className='px-3 row copyQuote'>
                                    <p className='text-left col-lg-8'
                                        style={{ margin: '0' }}
                                    ><i className="fas fa-quote-right"></i>&nbsp;&nbsp;<q>{quotes.quote}</q></p>

                                    <CopyToClipboard text={quotes.quote}
                                    // onCopy={() => setCopy(quotes.quote)}
                                    >
                                        {/* <span>Copy to clipboard with span</span> */}
                                        <div className='copyQuoteIcon col-lg-4'>
                                            <i className="far fa-copy fa-2x"
                                                title='Copy'
                                                onClick={() => updateDisplay(index)}></i>
                                            <span style={{ display: display[index] }}>Copied!</span>
                                        </div>
                                    </CopyToClipboard>
                                </div>
                            </React.Fragment>

                        })
                    }
                </MDBCol>
            </MDBCard>
        </div >
    )
}

export default Character
