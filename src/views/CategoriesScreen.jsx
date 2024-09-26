import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCustomer } from '../contexts/CustomerContext';

const CategoriesScreen = ({ navigation }) => {
    const [renderTime, setRenderTime] = useState(null);
    const {customerData} = useCustomer();
    const categories = useMemo(() => [
        { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Clothing', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Books', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Home & Garden', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Test', image: 'https://via.placeholder.com/150' },
    ], []);
    
    useEffect(() => {
        const startTime = global.performance.now(); // Tiempo de inicio
        console.log('CategoriesScreen renderizado en', startTime, 'ms');

        return () => {
            const endTime = global.performance.now(); // Tiempo de finalización
            setRenderTime(endTime - startTime);
            console.log('2 CategoriesScreen renderizado en', endTime - startTime, 'ms');
        };
    }, []);

    const handleCategoryPress = useCallback((categoryId) => {
        // navigation.replace('Products', { categoryId });
        navigation.navigate('Products', { categoryId });
    }, [navigation]);
    console.log("CategoriesScreen");

    const card = ()=>{
        return (
            <TouchableOpacity
                key={category.id}
                style={insideStyle.card}
                onPress={() => handleCategoryPress(category.id)}
            >
                <Image source={{ uri: category.image }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{category.name}</Text>
            </TouchableOpacity>
        )
    }

    const insideStyle = StyleSheet.create({
        card: {
            width: '48%',
            backgroundColor: '#f9' + (Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000).toString(),
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
            alignItems: 'center',
        },
    })

    return (
        <View>
            {/* <Text>{customerData.name}</Text> */}
            <View style={styles.grid}>
                {/* {categories.map((category) => (
                    
                ))} */}
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
