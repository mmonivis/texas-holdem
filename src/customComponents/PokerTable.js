import React, { Component } from 'react';
import PokerHand from './PokerHand';

import Deck from '../utilityClasses/Deck';
import Buttons from './Buttons';

var cards = new Deck()

class PokerTable extends Component{
	constructor(props) {
		super(props);
		this.state = {
			dealersHand: ['deck','deck'],
			playersHand: ['deck','deck'],
			communityCards: ['deck','deck','deck','deck','deck']
		}
		this.prepDeck = this.prepDeck.bind(this)
	}

	prepDeck(){
		cards.createDeck();
		cards.shuffleDeck();
		// The deck is now ready for a new hand
		// Set up the playersHand and the dealersHand
		var card1 = cards.deck.shift();
		var card2 = cards.deck.shift();
		var card3 = cards.deck.shift();
		var card4 = cards.deck.shift();
		// cards.deck is now 4 items fewer -- we mutated it!
		var playersStartingHand = [card1,card3];
		var dealersStartingHand = [card2,card4];
		this.setState({
			playersHand: playersStartingHand,
			dealersHand: dealersStartingHand
		})
	}

	render(){
		// this.prepDeck() // removed because we are updating setState in prepDeck function. Would continuously rerender...
		// console.log(cards.deck)
		return(
			<div className="col-sm-12 the-table">
				{ /* <DealerHand /> */ }
				{ /* <PlayerHand /> */ }
				<PokerHand cards={this.state.dealersHand} /> { /* The computer's hand */ }
				<PokerHand cards={this.state.communityCards}/> { /* Community Cards */ }
				<PokerHand cards={this.state.playersHand}/> { /* The player's hand */ }
				<Buttons deal={this.prepDeck} />
			</div>
		)
	}
}

export default PokerTable;