import { createStackNavigator, createAppContainer } from "react-navigation"
import Home from '../components/Home'
import AddDeck from '../components/AddDeck'
import Deck from '../components/Deck'
import AddCard from '../components/AddCard'
import Quiz from '../components/Quiz'

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home",
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#4682b4',
      },
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: "AddDeck",
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#4682b4',
      },
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: "Deck",
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor: '#FFD700',
      },
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "Add Card",
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#009933',
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz",
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#8B0000',
      },
    },
  },
})

export default createAppContainer(MainNavigator)