import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CategoriesCard from '../Components/CategoriesCard';
import { useSelector, useDispatch } from 'react-redux';
import {
    setCategories,
    addTocart,
    increaseQuantity,
    decreaseQuantity,
    removeFromcartByID
  } from '../../cartSlice'; 

const CategoriesScreen = ({ setState, time }) => {
    const screen = useSelector((state) => state.screen);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const categories = [
        { id: 1, name: "Electronics", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Clothing", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Books", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Home & Garden", image: "https://via.placeholder.com/150" },
    ];


    useEffect(() => {
        let timeEnd = performance.now();
        console.log((timeEnd - time).toFixed(2), 'categories');
    }, [])

    const styles = StyleSheet.create({
        sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
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
            marginHorizontal: 10,
            alignItems: 'center',
        },
    });

    return (
        <View>
            <Text style={styles.sectionTitle}>Categories</Text>
            <View style={styles.grid}>
                <FlatList
                    data={categories}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={{ alignItems: "center", padding: (0, 10) }}
                    renderItem={({item, index})=>
                        <CategoriesCard 
                            id={item.id}
                            category={item} 
                            setState={setState} 
                            index={index}
                        />
                    }
                />
            </View>
        </View>
    )
}

export default CategoriesScreen