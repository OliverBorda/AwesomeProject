import React, { useEffect } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ProductsCartCard from '../Components/ProductsCartCard';

const CartScreen = ({ setState, time, order }) => {

    useEffect(() => {
        let timeEnd = performance.now();
        console.log((timeEnd - time).toFixed(2), 'cart');
    }, [])
    console.log('cart');


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
            backgroundColor: '#007AFF',
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
            <Text style={styles.sectionTitle}>Shopping Cart</Text>
            <View style={{width: '100%'}}>
                <FlatList
                    data={order.OrderData.cart}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ alignItems: "center", padding: (0, 10) }}
                    renderItem={({item, index})=>
                        <ProductsCartCard
                            item={item} 
                            order={order} 
                            index={item.id}
                        />
                    }
                />
            </View>
            <View style={styles.cartTotal}>
                <Text style={styles.cartTotalText}>
                    Total: ${order.OrderData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Checkout</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setState({ type: 'SET_SCREEN', payload: 2, screen: 4 })}
                >
                    <Text style={styles.buttonText}>Go to Categories</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen