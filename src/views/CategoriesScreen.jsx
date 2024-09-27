import React, { useCallback, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CategoriesGrid from '../components/CategoriesScreen/CategoriesGrid';

const CategoriesScreen = ({ navigation }) => {

    const categories = useMemo(() => [
        { id: 1, name: 'Electronics', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Clothing', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Books', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Home & Garden', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Test', image: 'https://via.placeholder.com/150' },
    ], []);

    const handleCategoryPress = useCallback((categoryId) => {
        navigation.navigate('Products', { categoryId });
    }, [navigation]);

    console.log('CategoriesScreen');
    console.log("=================");
    console.log("");

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
