import React from 'react'
import {
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import { handleAddCardToDeck } from '../actions/shared'

class AddCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      question: '',
      answer: '',
    }
    this.handleQuestion = this.handleQuestion.bind(this)
    this.handleAnswer = this.handleAnswer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleQuestion (text) {
    this.setState({ 
      question: text,
    })
  }

  handleAnswer (text) {
    this.setState({ 
      answer: text,
    })
  }

  handleSubmit (event) {
    const { question, answer } = this.state
    const { deck } = this.props.navigation.state.params
    const newCard = { question, answer }
    deck.cards.push(newCard)
    this.props.dispatch(handleAddCardToDeck(deck))
    this.setState({ 
      question: '',
      answer: '',
    })
    alert('Submitted')
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Question ..."
          value={this.state.question}
          autoCapitalize="none"
          onChangeText={this.handleQuestion}/>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Answer ..."
          value={this.state.answer}
          autoCapitalize="none"
          onChangeText={this.handleAnswer}/>
        {this.state.question.length > 0 && this.state.answer.length > 0
          &&  <TouchableOpacity
                style={styles.submitButton}
                onPress={this.handleSubmit}>
                  <Text style={styles.submitButtonText}> Submit </Text>
              </TouchableOpacity>    
        }
      </View>
    )
  }
}

const styles = StyleSheet.create ({
   input: {
      margin: 15,
      height: 40,
      borderColor: '#009933',
      borderWidth: 1,
   },
   submitButton: {
      backgroundColor: '#00008B',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})

export default connect()(AddCard)