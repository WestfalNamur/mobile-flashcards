import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { 
  setLocalNotification, 
  clearLocalNotification,
  getDailyReminderValue
} from '../utils/notifications'

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      answered: false,
      correct: 0,
      counter: 0,
    }
    this.handleShowAnswer = this.handleShowAnswer.bind(this)
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this)
    this.handleWrongAnswer = this.handleWrongAnswer.bind(this)
    this.handleRestart = this.handleRestart.bind(this)
  }

  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  handleCorrectAnswer () {
    this.setState((state) => {
      return { 
        counter: state.counter + 1, 
        correct: state.correct + 1,
        answered: !state.answered,
      }
    })
  }

  handleWrongAnswer () {
    this.setState((state) => {
      return { 
        counter: state.counter + 1,
        answered: !state.answered }
    })
  }

  handleShowAnswer () {
    this.setState((state) => {
      return { answered: !state.answered }
    })
  }

  handleRestart () {
    this.setState({
      answered: false,
      correct: 0,
      counter: 0,   
    })
  }

  render() {
    const { decks } = this.props
    const { answered, correct, counter } = this.state 
    const { deckName, nCards } = this.props.navigation.state.params
    const { navigate } = this.props.navigation
    const deck = decks[deckName]

    return (
      <View style={{flex: 1}}>
        {counter < nCards 
          ? <View style={{flex: 1}}>
              {answered 
                ? <View style={{flex: 1}}>
                    <Text style={styles.text}>
                      Answer: {deck.cards[counter].answer}
                    </Text>
                    <Button title="Correct" onPress={this.handleCorrectAnswer}
                    >Correct</Button>
                    <Button title="Wrong" onPress={this.handleWrongAnswer}
                    >Wrong</Button>
                  </View> 
                : <View>
                    <Text style={styles.text}>
                      Question: {deck.cards[counter].question} (remaining: {nCards - counter})
                    </Text>
                    <Button title="Show answer" onPress={this.handleShowAnswer}
                    >Show Answer</Button>
                  </View>
              }
            </View>
          : <View>
              <Text style={styles.result}>
                {correct} out of {nCards}
              </Text>
              <Button title="Restart" onPress={this.handleRestart}
              >Restart</Button>
            </View>
        }
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
   text: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#ff8000',
      alignItems: 'center',
      textAlign: 'center',
   },
  result: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20   
  },  
})

function mapStateToProps ({ decks }) {
  return {
    decks: decks
  }
}

export default connect(mapStateToProps)(Quiz)