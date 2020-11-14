

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  NativeModules
} from 'react-native';


const App = () => {
  var OpenActivity = NativeModules.OpenActivity;

  const openFunc = () => {
    OpenActivity.open();
  }

  return (
    <View style = {styles.container}>
        <TouchableOpacity style = {styles.button} onPress = {()=> {openFunc()}}>
          <Text style = {{color:'white'}}>Open Android Activity!</Text>
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button : {
    height:40,
    width:160,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'blue'
  }
});

export default App;
