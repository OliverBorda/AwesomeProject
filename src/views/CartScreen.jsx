import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CartScreen = ({ state, dispatch }) => {

    const styles = StyleSheet.create({
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
        },
        sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
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
        cartItem: {
            flexDirection: 'row',
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            paddingBottom: 10,
        },
        cartItemImage: {
            width: 80,
            height: 80,
            marginRight: 10,
        },
        cartItemDetails: {
            flex: 1,
        },
        cartItemTitle: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        cartItemDescription: {
            fontSize: 14,
            color: '#666',
        },
        cartItemPrice: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 5,
        },
        quantityContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
        },
        quantityButton: {
            backgroundColor: '#ddd',
            padding: 5,
            borderRadius: 5,
            marginHorizontal: 5,
        },
        quantityButtonText: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        quantityText: {
            fontSize: 16,
        },
        removeButton: {
            marginTop: 10,
            backgroundColor: '#FF3B30',
            padding: 5,
            borderRadius: 5,
        },
        removeButtonText: {
            color: '#fff',
            fontWeight: 'bold',
        },
        cartTotal: {
            alignItems: 'center',
            paddingTop: 20,
            borderTopWidth: 1,
            borderTopColor: '#ddd',
            marginTop: 10,
        },
        cartTotalText: {
            fontSize: 18,
            fontWeight: 'bold',
        },
    });

    return (
        <View>
            <Text style={styles.sectionTitle}>Shopping Cart</Text>
            {state.cart.map((item, index) => (
                <View key={index} style={styles.cartItem}>
                    <Image source={{ uri: item.image }} style={styles.cartItemImage} />
                    <View style={styles.cartItemDetails}>
                        <Text style={styles.cartItemTitle}>{item.name}</Text>
                        <Text style={styles.cartItemDescription}>{item.description}</Text>
                        <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
                        <View style={styles.quantityContainer}>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => dispatch({ type: 'DECREMENT_QUANTITY', payload: item.id })}
                            >
                                <Text style={styles.quantityButtonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{item.quantity}</Text>
                            <TouchableOpacity
                                style={styles.quantityButton}
                                onPress={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item.id })}
                            >
                                <Text style={styles.quantityButtonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                        >
                            <Text style={styles.removeButtonText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
            <View style={styles.cartTotal}>
                <Text style={styles.cartTotalText}>
                    Total: ${state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen