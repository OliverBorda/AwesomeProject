import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ProductsCard from '../Components/ProductsCard';
import { useSelector } from 'react-redux';

const ProductsScreen = ({ setState, timeRecord, order }) => {

    const products = useSelector((state) => state.products);
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    useEffect(() => {
        let timeEnd = performance.now();
        console.log((timeEnd - timeRecord).toFixed(2), 'products');
    }, [])

    const navigate = (product) => {
        order.addToCart(product)
        setState({ type: 'SET_SCREEN', payload: 4, screen: 3 })
    }

    const styles = StyleSheet.create({
        sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        form: {
            width: '100%',
        },
        grid: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
        card: {
            width: '48%',
            backgroundColor: randomColor,
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
        cartItem: {
            flexDirection: 'row',
            marginBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            paddingBottom: 10,
        },
        cartItemImage: {
            width: 80,
            height: 80,
            marginRight: 10,
        },
        cartItemDetails: {
            flex: 1,
        },
        cartItemTitle: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        cartItemDescription: {
            fontSize: 14,
            color: '#666',
        },
        cartItemPrice: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 5,
        },
    });

    return (
        <View>
            <Text style={styles.sectionTitle}>Products</Text>
            <View style={styles.grid}>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={{ alignItems: "center", padding: (0, 10) }}
                    renderItem={({item})=>
                        <ProductsCard 
                            product={item} 
                        />
                    }
                />
            </View>
        </View>
    )
}

export default ProductsScreen