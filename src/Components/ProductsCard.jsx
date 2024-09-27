import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const ProductsCard = ({ product, navigate }) => {

    const styles = StyleSheet.create({
        card: {
            width: '48%',
            backgroundColor: '#f9f9f9',
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
            marginHorizontal: 10,
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
    });

    return (
        <TouchableOpacity
            key={product.id}
            style={styles.card}
            onPress={() => navigate(product)}
        >
            <Image source={{ uri: product.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{product.name}</Text>
            <Text style={styles.cardDescription}>{product.description}</Text>
            <Text style={styles.cardPrice}>${product.price.toFixed(2)}</Text>
        </TouchableOpacity>
    )
}

export default ProductsCard