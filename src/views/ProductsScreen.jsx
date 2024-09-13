import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProductsScreen = ({ state, dispatch }) => {

    const products = [
        { id: 1, name: "Smartphone", description: "Latest model", price: 999, image: "https://via.placeholder.com/150", category: 1 },
        { id: 2, name: "Laptop", description: "Powerful performance", price: 1299, image: "https://via.placeholder.com/150", category: 1 },
        { id: 3, name: "T-shirt", description: "Comfortable cotton", price: 19.99, image: "https://via.placeholder.com/150", category: 2 },
        { id: 4, name: "Jeans", description: "Classic fit", price: 49.99, image: "https://via.placeholder.com/150", category: 2 },
    ];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        scrollView: {
            padding: 20,
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
        input: {
            height: 40,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 10,
            paddingHorizontal: 10,
            width: '100%',
        },
        form: {
            width: '100%',
        },
        grid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
        card: {
            width: '48%',
            backgroundColor: '#f9f9f9',
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
            alignItems: 'center',
        },
        cardImage: {
            width: 100,
            height: 100,
            marginBottom: 10,
        },
        cardTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5,
        },
        cardDescription: {
            fontSize: 14,
            color: '#666',
            marginBottom: 5,
        },
        cardPrice: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333',
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
            <Text style={styles.sectionTitle}>Products</Text>
            <View style={styles.grid}>
                {products.filter(product => product.category === state.selectedCategory).map((product) => (
                    <TouchableOpacity
                        key={product.id}
                        style={styles.card}
                        onPress={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                    >
                        <Image source={{ uri: product.image }} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{product.name}</Text>
                        <Text style={styles.cardDescription}>{product.description}</Text>
                        <Text style={styles.cardPrice}>${product.price.toFixed(2)}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default ProductsScreen