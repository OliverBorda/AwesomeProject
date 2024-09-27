import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CartItem = ({ item, incrementQuantity, decrementQuantity, removeFromCart }) => {
    const [cardColor, setCardColor] = useState('#f9f9f9');

    useEffect(() => {
        // Genera un color aleatorio en formato hexadecimal
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setCardColor(randomColor);
    }, []);

    return (
        <View style={[styles.cartItem, { backgroundColor: cardColor }]}>
            <Image source={{ uri: item.image }} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemTitle}>{item.name}</Text>
                <Text style={styles.cartItemDescription}>{item.description}</Text>
                <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => decrementQuantity(item.id)} // Usar ID del producto
                    >
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => incrementQuantity(item.id)} // Usar ID del producto
                    >
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeFromCart(item.id)} // Usar ID del producto
                >
                    <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        alignItems: 'center',
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CartItem;
