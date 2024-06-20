import React, { useState } from 'react';
import { Text,View,TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () =>{

 const setData = async () =>{
 await AsyncStorage.setItem("Dinesh","Pihu");
 }

 const getData = async () =>{
  const name = await AsyncStorage.getItem("Dinesh");
  console.warn(name);
  
 }
  return(
    <View style={{ marginTop:100,marginLeft:30 }}>
      <Text style={{ fontSize:40}}>Async Storage Example</Text>
      <Button title='Set data' onPress={setData}/>
      <Button title='Get data' onPress={getData}/>
    </View>
  )
};
export default App;

