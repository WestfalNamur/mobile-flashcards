import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainNavigator from './navigation/MainNavigator'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import AppStatusBar from './components/AppStatusBar'
import { setLocalNotification } from './utils/notifications'

const store = createStore(reducer, middleware)

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={'#325d81'} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
