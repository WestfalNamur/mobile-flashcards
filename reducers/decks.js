import {
  RECEIVE_DECKS,
  ADD_DECK,
  ADD_CARD_TO_DECK
} from '../actions/decks'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        [action.name]: {
          name: action.name,
          cards: []
        }
      }
    case ADD_CARD_TO_DECK : {
      return {
        ...state,
        [action.deck.name]: action.deck
      }
    }
    default :
      return state
  }
}

export default decks
