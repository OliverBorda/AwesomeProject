import React, { useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({ state, setState, time }) => {

	useEffect(() => {
		let timeEnd = performance.now();
		console.log((timeEnd - time).toFixed(2), 'home');
	}, [])

	return (
		<View style={styles.centerContent}>
			<Text style={styles.title}>Welcome to Our Store</Text>
			<TouchableOpacity style={styles.button} onPress={() => setState({ type: 'TOGGLE_FORM' })}>
				<Text style={styles.buttonText}>Start Shopping</Text>
			</TouchableOpacity>

			{state.showForm && (
				<View style={styles.form}>
					<TextInput style={styles.input} placeholder="Name" />
					<TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
					<TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
					<TouchableOpacity style={styles.button} onPress={() => setState({ type: 'SET_SCREEN', payload: 2 })}>
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