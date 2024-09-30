import React, { useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import {
    setScreen,
    increaseQuantity,
    decreaseQuantity,
    removeFromcartByID
  } from '../../cartSlice'; 

const HomeScreen = ({timeRecord}) => {
	const screen = useSelector((state) => state.screen);
    const dispatch = useDispatch();
console.log('homeScreen', screen);

useEffect(() => {
	let timeEnd = performance.now();
	console.log((timeEnd - timeRecord).toFixed(2), 'products');
}, [])

	return (
		<View style={styles.centerContent}>
			<TouchableOpacity onPress={() => setScreen(2)}><Text style={styles.buttonText}>Start Shopping</Text></TouchableOpacity>
			<Text style={styles.title}>Welcome to Our Store</Text>
			<TouchableOpacity style={styles.button}  onPress={() => dispatch(setScreen(3))}>
			
				<Text style={styles.buttonText}>Start Shopping</Text>
			</TouchableOpacity>
				{/* <View style={styles.form}>
					<TextInput style={styles.input} placeholder="Name" />
					<TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
					<TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
					<TouchableOpacity style={styles.button} onPress={() => setScreen(2)}>
						<Text style={styles.buttonText}>Submit</Text>
					</TouchableOpacity>
				</View> */}
			
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		width: "100%",
	},
	centerContent: {
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	form: {
		width: '100%',
	},
	button: {
		backgroundColor: '#007AFF',
		padding: 10,
		borderRadius: 5,
		marginTop: 10,
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
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