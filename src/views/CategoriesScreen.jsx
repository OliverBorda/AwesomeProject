import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CategoriesScreen = ({ state, setState, time }) => {

    const categories = [
        { id: 1, name: "Electronics", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Clothing", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Books", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Home & Garden", image: "https://via.placeholder.com/150" },
    ];

    
    useEffect(()=>{
        let timeEnd = performance.now();
        console.log((timeEnd - time).toFixed(2), 'categories');
    },[])

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
        cartItem: {
            flexDirection: 'row',
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            paddingBottom: 10,
        },
    });
    return (
        <View>
            <Text style={styles.sectionTitle}>Categories</Text>
            <View style={styles.grid}>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        style={styles.card}
                        onPress={() => setState({ type: 'SELECT_CATEGORY', payload: category.id })}
                    >
                        <Image source={{ uri: category.image }} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default CategoriesScreen