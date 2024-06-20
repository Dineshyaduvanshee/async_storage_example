import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [user, setUser] = useState('');
  const [inputKey, setInputKey] = useState('');
  const [inputValue, setInputValue] = useState('');

  const setData = async () => {
    if (inputKey && inputValue) {
      await AsyncStorage.setItem(inputKey, inputValue);
      setInputKey('');
      setInputValue('');
      console.warn('Data saved');
    } else {
      console.warn('Please enter both key and value');
    }
  };

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem(inputKey);
      if (name !== null) {
        setUser(name);
        console.warn(name);
      } else {
        console.warn(`No value found for key '${inputKey}'`);
      }
    } catch (error) {
      console.error("Failed to fetch the data from storage", error);
    }
  };

  const removeData = async () => {
    if (inputKey) {
      await AsyncStorage.removeItem(inputKey);
      setUser('');
      setInputKey('');
      console.warn('Data removed');
    } else {
      console.warn('Please enter a key to remove');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Async Storage Example</Text>
      <Text style={styles.subHeader}>Stored Value: {user}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Key"
        value={inputKey}
        onChangeText={setInputKey}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Value"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <View style={styles.buttonContainer}>
        <Button title='Set Data' onPress={setData} color="#4CAF50" />
        <Button title='Get Data' onPress={getData} color="#2196F3" />
        <Button title='Remove Data' onPress={removeData} color="#F44336" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  subHeader: {
    fontSize: 20,
    marginBottom: 20,
    color: '#555',
  },
  input: {
    width: '80%',
    height: 40,
    color:'red',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-around',
    height: 150,
  },
});

export default App;
