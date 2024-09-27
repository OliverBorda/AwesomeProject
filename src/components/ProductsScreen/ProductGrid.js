import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onProductPress }) => {
    return (
        <View style={styles.grid}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onPress={() => onProductPress(product)}
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

export default ProductGrid;
