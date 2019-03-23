import { _receiveDecks, _addDeck, _addCardToDeck } from '../utils/api'
import { receiveDecks, addDeck, addCardToDeck } from './decks'

export function handleReceiveDecks (decks) {
  return (dispatch) => {
    return _receiveDecks().then(decks => {
      dispatch(receiveDecks(decks))
    })
  }
}

export function handleAddDeck (name) {
  return (dispatch) => {
    dispatch(addDeck(name))
    return _addDeck(name)
  }
}

export function handleAddCardToDeck (deck) {
  return (dispatch) => {
    dispatch(addCardToDeck(deck))
    return _addCardToDeck(deck)
  }
}