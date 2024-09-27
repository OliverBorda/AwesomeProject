import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ProductCard = ({ product, onPress }) => {
    const [cardColor, setCardColor] = useState('#f9f9f9'); // Color por defecto

    // useEffect(() => {
    //     // Genera un color aleatorio en formato hexadecimal
    // }, []); // Esto se ejecutará una vez cuando el componente se monte
    // const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // setCardColor(randomColor);

    const stylesCard = StyleSheet.create({
        card: {
            width: '48%',
            backgroundColor: '#f9' + (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000).toString(),
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
            alignItems: 'center',
        }
    })

    return (
        <TouchableOpacity style={[stylesCard.card]} onPress={onPress}>
            <Image source={{ uri: product.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{product.name}</Text>
            <Text style={styles.cardDescription}>{product.description}</Text>
            <Text style={styles.cardPrice}>${product.price.toFixed(2)}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '48%',
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
});

export default ProductCard;