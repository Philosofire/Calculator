import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Modal
} from 'react-native';

export default function App() {
  const [total, setTotal] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [mode, setMode] = useState('Add');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    switch(mode) {
      case 'Add':
        setTotal(num1 + num2);
        break;
      case 'Subtract':
        setTotal(num1 - num2);
        break;
      case 'Multiply':
        setTotal(num1 * num2);
        if (num1 == 2 && num2 == 26)
        {
          setModalOpen(true);
          setNum1(1);
        }
        break;
      case 'Divide':
        setTotal(num1 / num2);
        break;
      default:
        break;
    }    
  });

  const changeHandler = (number, text) => {
    if (number == 1)
    {
      setNum1(text);
    }
    else
    {
      setNum2(text);
    }
  }

  const changeMode = (number) => {
    switch(number) {
      case 1:
        setMode('Add');
        break;
      case 2:
        setMode('Subtract');
        break;
      case 3:
        setMode('Multiply');
        break;
      case 4:
        setMode('Divide');
      default:
        break;
    }
  }

  return(
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <View style={styles.modalContent}>
          <TouchableOpacity>
            <Text onPress={() => setModalOpen(false)} style={{fontSize: 24, marginBottom: 20}}>X</Text>
          </TouchableOpacity>
          <Text style={styles.birthdayWishes}>Happy Birthday To You!</Text>
          <Text style={styles.birthdayWishes}>Happy Birthday To You!</Text>
          <Text style={styles.birthdayWishes}>I Luh You So Very Much!</Text>
          <Text style={styles.birthdayWishes}>Happy Birthday To You!</Text>
          <Text style={{padding:10}}></Text>
          <Text style={styles.birthdaySong}>I Love You A Bushel And a Peck!</Text>
          <Text style={styles.birthdaySong}>A Bushel And A Peck!</Text>
          <Text style={styles.birthdaySong}>And A Hug Around The Neck!</Text>
        </View>
      </Modal>
      <Text style={styles.title}>Number 1:</Text>
      <TextInput style={styles.input} keyboardType='numeric' defaultValue='0' onChangeText = {(text) => changeHandler(1, +text)}></TextInput>
      <Text style={styles.title}>Number 2:</Text>
      <TextInput style={styles.input} keyboardType='numeric' defaultValue='0' onChangeText = {(text) => changeHandler(2, +text)}></TextInput>
      <Text style={styles.title}>Total:</Text>
      <Text style={styles.text}>{total}</Text>
      <Text style={styles.title}>Current Mode: {mode}</Text>
      <Text style={styles.title}>Select Mode:</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPressOut={() => changeMode(1)}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPressOut={() => changeMode(2)}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPressOut={() => changeMode(3)}>
        <Text style={styles.buttonText}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPressOut={() => changeMode(4)}>
        <Text style={styles.buttonText}>/</Text>
      </TouchableOpacity>  
      </View>
            
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  text: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 1,
    fontSize: 14,
    textAlign: 'center'
  },
  input: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 1,
    fontSize: 14,
    textAlign: 'center'
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center'
  },
  button: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 1,
    fontSize: 14,
    backgroundColor: '#DDD',
    width: '20%'
  },
  buttonText: {
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  birthdayWishes: {
    fontSize: 36,
    textAlign: 'center',
    color: '#ae34eb',
    backgroundColor: '#eedeff'
  },
  birthdaySong: {
    fontSize: 28,
    textAlign: 'center',
    color: '#ae34eb',
    backgroundColor: '#eedeff'
  }
});
