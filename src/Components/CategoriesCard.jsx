import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const CategoriesCard = ({category, index, setState }) => {
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
            onPress={() => setState({ type: 'SELECT_CATEGORY', payload: category.id })}
        >
            <Image source={{ uri: category.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{category.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoriesCard