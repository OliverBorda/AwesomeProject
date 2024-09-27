import React from 'react';
import { View, StyleSheet } from 'react-native';
import CategoryCard from './CategoryCard';

const CategoriesGrid = ({ categories, onPress }) => {
    return (
        <View style={styles.grid}>
            {categories.map((category) => (
                <CategoryCard 
                    key={category.id} 
                    category={category} 
                    onPress={onPress} 
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    grid: {
        marginTop: '5%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
});

export default CategoriesGrid;
