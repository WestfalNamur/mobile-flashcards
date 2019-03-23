import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'MobileFlashcards:deck:'

/* 
 * Returns:
 * [Unhandled promise rejection: TypeError: undefined is not a function (near 
 * '..._reactNative.AsyncStorage.getAllKeys.then...')].
 * Taking easier solution for now .....
 * export const _receiveDecks = async () => {
 *   let decks = {}
 *   AsyncStorage.getAllKeys.then((keys) => {
 *     return AsyncStorage.multiGet(keys)
 *       .then((result) => {
 *         result.map(req => JSON.parse(req).forEach(
 *           hasOwnProperty('name') && (
 *             decks[deck.name] = deck
 *           )
 *         ))
 *       })
 *   })
 *   return decks
 * }
 */

export const _receiveDecks = async () => {
  const allKeys = await AsyncStorage.getAllKeys()
  const storedDecks = await AsyncStorage.multiGet(allKeys)
  let decks = {}
  for (const storedDeck of storedDecks) {
    const deck = JSON.parse(storedDeck[1])
    if (deck.hasOwnProperty('name')) {
      decks[deck.name] = deck
    }
  }
  return decks
}


export const _addDeck = (name) => {
  // https://facebook.github.io/react-native/docs/asyncstorage#setitem
  const storageKey = STORAGE_KEY + name
  const newDeck = { name, cards: [] }
  return AsyncStorage.setItem(storageKey, JSON.stringify(newDeck))
}

export const _addCardToDeck = (deck) => {
  const storageKey = STORAGE_KEY + deck.name
  return AsyncStorage.setItem(storageKey, JSON.stringify(deck))
}