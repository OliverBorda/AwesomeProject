import React, { useEffect } from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ProductsCartCard from '../Components/ProductsCartCard';
import { useSelector } from 'react-redux';


const CartScreen = ({timeRecord}) => {

    useEffect(() => {
        let timeEnd = performance.now();
        console.log((timeEnd - timeRecord).toFixed(2), 'products');
    }, [])

    console.log('cart');
    const screen = useSelector((state) => state.screen);
    const grandTotal = useSelector((state) => state. grandTotal);
    const shoppingCart = useSelector((state) => state.shoppingCart);
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    

    const styles = StyleSheet.create({
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
        },
        sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        button: {
            backgroundColor: randomColor,
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
        },
        buttonText: {
            color: '#fff',
            fontWeight: 'bold',
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
        quantityContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
        },
        quantityButton: {
            backgroundColor: '#ddd',
            padding: 5,
            borderRadius: 5,
            marginHorizontal: 5,
        },
        quantityButtonText: {
            fontSize: 16,
            fontWeight: 'bold',
        },
        quantityText: {
            fontSize: 16,
        },
        removeButton: {
            marginTop: 10,
            backgroundColor: '#FF3B30',
            padding: 5,
            borderRadius: 5,
        },
        removeButtonText: {
            color: '#fff',
            fontWeight: 'bold',
        },
        cartTotal: {
            alignItems: 'center',
            paddingTop: 20,
            borderTopWidth: 1,
            borderTopColor: '#ddd',
            marginTop: 10,
        },
        cartTotalText: {
            fontSize: 18,
            fontWeight: 'bold',
        },
    });

return (
        
        <View>
            <View style={styles.cartTotal}>
                <Text style={styles.cartTotalText}>
                    Total: ${grandTotal}
                </Text>
            </View>
            <Text style={styles.sectionTitle}>Shopping Cart</Text>
            <View style={{width: '100%'}}>
                <FlatList
                    data={shoppingCart}
                    keyExtractor={item => item.id}
                    renderItem={({item, index})=>
                        <ProductsCartCard
                        item={item}
                        index={index}
                        />
                    }
                />
            </View>
 
        </View>
    )
}

export default CartScreen