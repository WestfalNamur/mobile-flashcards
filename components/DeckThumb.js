import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

class DeckThumb extends React.Component {
  render() {
    const { name, cards } = this.props.deck
    const { navigate } = this.props.navigation

    return (
      <View>
        <TouchableOpacity onPress={() => navigate(
          'Deck', 
          { deckName: name }
          )}>
          <Text style={styles.container}>
            Deckname: {name}, Cards: {cards.length}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#FFD700',
      alignItems: 'center',
   },
   text: {
      color: 'black'
   }
})

export default withNavigation(DeckThumb)