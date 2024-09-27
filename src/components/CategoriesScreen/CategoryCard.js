import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const CategoryCard = ({ category, onPress }) => {
    const [cardColor, setCardColor] = useState('#f9f9f9'); // Color por defecto

    useEffect(() => {
        // Genera un color aleatorio en formato hexadecimal
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setCardColor(randomColor);
    }, []); // Esto se ejecuta solo una vez cuando el componente se monta

    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: cardColor }]}
            onPress={() => onPress(category.id)}
        >
            <Image source={{ uri: category.image }} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{category.name}</Text>
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
});

export default CategoryCard;
