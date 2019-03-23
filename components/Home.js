import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Decks from './Decks'

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Decks />
        <Button
          title="Add a new deck"
          onPress={() => this.props.navigation.navigate('AddDeck')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})