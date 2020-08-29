/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component}  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Obsidian extends Component{
  render(){
    return (
      <View>
      <Image source={require('./dataset/조던.jpg')} />
      </View>
    )
  }
}

const App: () => React$Node = () => {
  return (
    <View style={Styles.container}>
   <Text>hello world</Text>
   <Obsidian/>
    </View>
   
  );
};
const Styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
  
})

export default App;
