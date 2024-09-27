import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCustomer } from '../contexts/CustomerContext';
import CategoriesGrid from '../components/CategoriesScreen/CategoriesGrid';

const CategoriesScreen = ({ navigation }) => {
    const [renderTime, setRenderTime] = useState(null);
    const { customerData } = useCustomer();
    
    const categories = useMemo(() => [
        { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Clothing', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Books', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Home & Garden', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Test', image: 'https://via.placeholder.com/150' },
    ], []);

    useEffect(() => {
        const startTime = global.performance.now();
        console.log('CategoriesScreen renderizado en', startTime, 'ms');

        return () => {
            const endTime = global.performance.now();
            setRenderTime(endTime - startTime);
            console.log('CategoriesScreen renderizado en', endTime - startTime, 'ms');
        };
    }, []);

    const handleCategoryPress = useCallback((categoryId) => {
        navigation.navigate('Products', { categoryId });
    }, [navigation]);

    console.log('CategoriesScreen');


    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <CategoriesGrid categories={categories} onPress={handleCategoryPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default CategoriesScreen;
