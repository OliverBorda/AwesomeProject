import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import {
    setCategories,
    addTocart,
    increaseQuantity,
    decreaseQuantity,
    removeFromcartByID
  } from '../../cartSlice'; 

const CategoriesCard = ({category, index, id }) => {
    const screen = useSelector((state) => state.screen);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const addCategories = (id) => {
        dispatch(setCategories(id));
        console.log("categoriesID",id)
      };

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
    });

    return (
        <TouchableOpacity
            style={styles.card}
            key={index}
            id={id}
            onPress={() => addCategories(id)}
        >
            <Image source={{ uri: category.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{category.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoriesCard