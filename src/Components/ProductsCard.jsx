import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import {
    addTocart,
    increaseQuantity,
    decreaseQuantity,
    removeFromcartByID
  } from '../../cartSlice'; 

const ProductsCard = ({ product }) => {

    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    const screen = useSelector((state) => state.screen);
    const grandTotal = useSelector((state) => state. grandTotal);
    const shoppingCart = useSelector((state) => state.shoppingCart);
    const dispatch = useDispatch();
    const addTo = (product) => {
        console.log("+shoppingCart", shoppingCart)
        dispatch(addTocart(product));
      };

    const styles = StyleSheet.create({
        card: {
            width: '48%',
            backgroundColor: randomColor,
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
            marginHorizontal: 10,
            alignItems: 'center',
        },
        button: {
            padding: 10,
            borderWidth: 1,
            border: 1,
            borderColor: "#d8d8d8",
            borderRadius: 10
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
        <View style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{product.name}</Text>
            <Text style={styles.cardDescription}>{product.description}</Text>
            <Text style={styles.cardPrice}>${product.price.toFixed(2)}</Text>
        <TouchableOpacity
            style={styles.button}
            onPress={() => addTo(product)}
        ><Text>Add to card</Text></TouchableOpacity>
        </View>
    )
}

export default ProductsCard