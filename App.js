import React, { useEffect, useReducer } from 'react';
import CartScreen from './src/views/CartScreen';
import HomeScreen from './src/views/HomeScreen';
import ProductsScreen from './src/views/ProductsScreen';
import CategoriesScreen from './src/views/CategoriesScreen';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import UseOrderHook from './src/hooks/UseOrderHook';

const initialState = {
    screen: 1,
    previousScreen: null,
    selectedCategory: null,
};


export default function App() {
    const order = UseOrderHook();
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SET_SCREEN':
                order.addToOrder()
                return { ...state, screen: action.payload, previousScreen: state.screen };
            case 'TOGGLE_FORM':
                return { ...state, showForm: !state.showForm };
            case 'SELECT_CATEGORY':
                return { ...state, selectedCategory: action.payload, screen: 3, previousScreen: state.screen };
            case 'GO_BACK':
                return {
                    ...state,
                    screen: state.screen - 1,
                    previousScreen: state.screen - 2
                };
            default:
                return state;
        }
    };
    const [state, setState] = useReducer(reducer, initialState);
    let time = performance.now();
    console.log('app');


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centerContent}>
                {state.screen !== 1 && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setState({ type: 'GO_BACK' })}
                    >
                        <Text style={styles.buttonText}>Back</Text>
                    </TouchableOpacity>
                )}
            </View>
            {state.screen === 1 && (
                <HomeScreen state={state} setState={setState} time={time} order={order} />
            )}

            {state.screen === 2 && (
                <CategoriesScreen state={state} setState={setState} time={time} order={order} />
            )}

            {state.screen === 3 && (
                <ProductsScreen state={state} setState={setState} time={time} order={order} />
            )}

            {state.screen === 4 && (
                <CartScreen state={state} setState={setState} time={time} order={order} />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    centerContent: {
        alignItems: 'center',
    },
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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
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
