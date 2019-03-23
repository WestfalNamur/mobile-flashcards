export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck (name) {
  return {
    type: ADD_DECK,
    name
  }
}

export function addCardToDeck (deck) {
  return {
    type: ADD_CARD_TO_DECK,
    deck
  }
}