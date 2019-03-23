import React from 'react'
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  TextInput,
  Button,
} from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions/shared'

class AddDeck extends React.Component {
  constructor(props) {
    super(props)
    this.state = { newDeckName: '' }
    this.handleNewDeckName = this.handleNewDeckName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNewDeckName (text) {
    this.setState({ newDeckName: text })
  }

  handleSubmit (event) {
    this.props.dispatch(handleAddDeck(this.state.newDeckName))
    alert('Added new deck: ' + this.state.newDeckName)
    this.setState({ newDeckName: '' })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput style={styles.input}
          underlineColorAndroid = "transparent"
          placeholder="Deckname ..."
          value={this.state.newDeckName}
          autoCapitalize="none"
          onChangeText={this.handleNewDeckName}/>
          {this.state.newDeckName.length > 0 && 
            <TouchableHighlight
              style={styles.submitButton}
              onPress={this.handleSubmit}>
                <Text style={styles.submitButtonText}> Submit </Text>
            </TouchableHighlight>
          }
      </View>
    )
  }
}

const styles = StyleSheet.create({
   title: {
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white',
      flex: 1,
      marginTop: 20,
      textAlign: 'center',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20
   }, 
   input: {
      margin: 15,
      height: 40,
      borderColor: 'steelblue',
      borderWidth: 1,
   },
   submitButton: {
      backgroundColor: '#00b3b3',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})

export default connect()(AddDeck)