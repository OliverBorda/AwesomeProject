import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProductsScreen = ({ state, setState }) => {

    const products = [
        { id: 1, name: "Smartphone", description: "Latest model", price: 999, image: "https://via.placeholder.com/150", category: 1 },
        { id: 2, name: "Laptop", description: "Powerful performance", price: 1299, image: "https://via.placeholder.com/150", category: 1 },
        { id: 3, name: "T-shirt", description: "Comfortable cotton", price: 19.99, image: "https://via.placeholder.com/150", category: 2 },
        { id: 4, name: "Jeans", description: "Classic fit", price: 49.99, image: "https://via.placeholder.com/150", category: 2 },
        { id: 5, name: "Book 2", description: "Book", price: 29.99, image: "https://via.placeholder.com/150", category: 3 },
        {id: 6, name: "Book 1", description: "Book", price: 29.99, image: "https://via.placeholder.com/150", category: 3 },
        { id: 7, name: "Mower", description: "Mower", price: 199.99, image: "https://via.placeholder.com/150", category: 4 },
        {id: 8, name: "Table", description: "Table", price: 69.99, image: "https://via.placeholder.com/150", category: 4 }
    ];

    useEffect(()=>{
        console.log('products');
      },[])
    const styles = StyleSheet.create({
        sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
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
    });
    
    return (
        <View>
            <Text style={styles.sectionTitle}>Products</Text>
            <View style={styles.grid}>
                {products.filter(product => product.category === state.selectedCategory).map((product) => (
                    <TouchableOpacity
                        key={product.id}
                        style={styles.card}
                        onPress={() => setState({ type: 'ADD_TO_CART', payload: product })}
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