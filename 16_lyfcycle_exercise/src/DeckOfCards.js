import React, { Component } from 'react'
import axios from 'axios'
import './DeckOfCards.css';
import Card from './Card';
class DeckOfCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckId: '',
            remainingCards: 52,
            cards: [],
        }
    }
    async componentDidMount() {
        const response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/');
        // console.log(response.data);
        this.setState({
            deckId: response.data.deck_id,
        })
    }
    handleClick = async () => {
        const url = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`
        const response = await axios.get(url);
        // console.log(response.data);
        const card = response.data.cards[0];
        const newCard = {
            image: card.image,
            name: `${card.value} ${card.suit}`
        }
        this.setState((prevState) => ({
            cards: [...prevState.cards, newCard],
            remainingCards: response.data.remaining,
        }))
    }
    render() {
        return (
            <div className='Deck'>
                <h1 className='Deck-title'>♦ Card Dealer ♦</h1>
                <h2 className='Deck-title subtitle'>
                    ♦ A little demo made with React ♦
                </h2>
                {this.state.remainingCards > 0
                    ?
                    <button
                        onClick={this.handleClick}
                        className='Deck-btn'
                    >Draw a new card</button>
                    :
                    <p>No more cards remaining!</p>
                }
                <div className='Deck-cardarea'>
                    {this.state.cards.map(card => (
                        <Card
                            key={card.name}
                            image={card.image}
                            name={card.name}
                        />
                    ))}
                </div>
            </div>
        )
    }
}
export default DeckOfCards