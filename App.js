import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/component';
import CardList from './src/component/CardList';

const App = () => {
  <script src="http://10.0.41.89:8097"></script>
  return (
    <View style={styles.container}>
      <Header title='Pokemon-Galery' />
      <CardList/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default App
