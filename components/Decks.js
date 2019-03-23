import React from 'react'
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { exampleDecks } from '../utils/DummyData'
import { handleReceiveDecks } from '../actions/shared'
import DeckThumb from './DeckThumb'

class Decks extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleReceiveDecks(exampleDecks))
  }

  render() {
    const { decks } = this.props

    if (Object.keys(decks).length > 0) {
      return (
        <View style={{flex: 1}}>
            <View style={styles.dashboardList}>
              <ScrollView>
                {Object.keys(decks).map((key) => (
                  <View key={key}>
                    <DeckThumb 
                      deck={decks[key]}
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
        </View>
      )
    } else {
      return (
        <View style={{flex: 1}}>
            <Text style={styles.dashboardNoDecks}>
              No decks yet...
            </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
   dashboardList: {
      flex: 10,
   }, 
})

function mapStateToProps ({ decks }) {
  return {
    decks: decks
  }
}

export default connect(mapStateToProps)(Decks)