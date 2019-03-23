import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { withNavigation } from 'react-navigation'

class Deck extends React.Component {
  render() {
    const { decks } = this.props
    const { deckName } = this.props.navigation.state.params
    const { navigate } = this.props.navigation
    const deck = decks[deckName]

    return (
      <View style={{flex: 1}}>
        <Text style={styles.title}>{deckName}</Text>
        {deck.cards.length > 0
          ? <View style={styles.input}>
            <Button
              title="Start Quiz"
              onPress={() => navigate(
                'Quiz', { 
                  deckName: deckName,
                  nCards: deck.cards.length
                }
              )}/>
            </View>
          : <View>
              <Text style={styles.noQuestions}>
                No questions yet... 
              </Text>
            </View>
        }
          <View style={styles.button}>
            <Button
              title="Add a new card"
              onPress={() => navigate(
                'AddCard',
                { deck: deck }
              )}/>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  button: {
    flex: 1,
    },
  quiz: {
    flex: 10,
  },
  title: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20   
  },
  noQuestions: {
    marginTop: 20,
    textAlign: 'center',
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 15   
  }, 
})

function mapStateToProps ({ decks }) {
  return {
    decks: decks
  }
}

export default withNavigation(connect(mapStateToProps)(Deck))