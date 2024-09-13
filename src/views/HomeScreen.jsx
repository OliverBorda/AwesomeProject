import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({state, dispatch}) => {
  return (
    <View style={styles.centerContent}>
      <Text style={styles.title}>Welcome to Our Store</Text>
      <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'TOGGLE_FORM' })}>
        <Text style={styles.buttonText}>Start Shopping</Text>
      </TouchableOpacity>
      
      {state.showForm && (
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor={'gray'}/>
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor={'gray'} keyboardType="email-address"/>
          <TextInput style={styles.input} placeholder="Phone" placeholderTextColor={'gray'} keyboardType="phone-pad" />
          <TouchableOpacity style={styles.button} placeholderTextColor={'gray'} onPress={() => dispatch({ type: 'SET_SCREEN', payload: 'categories' })}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  form: {
    width: '100%',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    color: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});


export default HomeScreen