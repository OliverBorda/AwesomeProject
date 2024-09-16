import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCustomer } from '../contexts/CustomerContext';

const CategoriesScreen = ({ navigation }) => {

    const categories = [
        { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Clothing', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Books', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Home & Garden', image: 'https://via.placeholder.com/150' },
    ];

    const { customerData } = useCustomer();

    useEffect(() => {
        console.log('CategoriesScreen')
    }, [customerData])


    // useEffect(() => {
    //     console.log('El componente CategoriesScreen se ha montado');

    //     // Código a ejecutar cuando el componente se desmonta
    //     return () => {
    //         console.log('El componente CategoriesScreen se ha desmontado');
    //     };
    // }, []); // El array vacío asegura que el efecto solo se ejecute en el montaje y desmontaje

    // useEffect(() => {
    //     console.log('El componente CategoriesScreen se ha actualizado');
    // }); // Sin dependencias asegura que se ejecute en cada renderizado

    const handleCategoryPress = (categoryId) => {
        // Navegar a la pantalla de productos, pasando el id de la categoría como parámetro
        navigation.navigate('Products', { categoryId });
    };

    return (
        <View>
            <Text>{customerData.name}</Text>
            <View style={styles.grid}>
                {categories.map((category) => (
                    <TouchableOpacity
                        key={category.id}
                        style={styles.card}
                        onPress={() => handleCategoryPress(category.id)}
                    >
                        <Image source={{ uri: category.image }} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    grid: {
        marginTop: '5%',
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

export default CategoriesScreen;
