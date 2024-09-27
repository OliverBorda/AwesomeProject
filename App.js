import React, { useEffect, useReducer } from 'react';
import CartScreen from './src/views/CartScreen';
import HomeScreen from './src/views/HomeScreen';
import ProductsScreen from './src/views/ProductsScreen';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import UseOrderHook from './src/hooks/UseOrderHook';
import { useSelector, useDispatch } from 'react-redux';
import {
    setScreen,
    goBack,
  } from './cartSlice'; 
import CategoriesScreen from './src/views/CategoriesScreen';


export default function App() {
    const screen = useSelector((state) => state.screen);
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>

        <View style={{ flexDirection: "row"}}>

            <View style={styles.centerContent}>
                {screen !== 1 && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => dispatch(setScreen(1))}
                    >
                        <Text style={styles.buttonText}>Home</Text>
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.centerContent}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => dispatch(setScreen(3))}
                    >
                        <Text style={styles.buttonText}>Products</Text>
                    </TouchableOpacity>
                
            </View>

            <View style={styles.centerContent}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => dispatch(setScreen(4))}
                    >
                        <Text style={styles.buttonText}>CART</Text>
                    </TouchableOpacity>
                
            </View>
          {screen !== 1 && (
               <TouchableOpacity
             style={styles.button}
                onPress={() => dispatch(goBack())}
              >
                <Text style={styles.buttonText}>Back</Text>
               </TouchableOpacity>         )}
          </View>
         {screen === 1 && <HomeScreen />}
         {screen === 2 && <CategoriesScreen />}
         {screen === 3 && <ProductsScreen />}
         {screen === 4 && <CartScreen />}
          
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


// screen: 1,
//     previousScreen: null,








// setScreen: (state, action) => {
//      state.previousScreen = state.screen;
//      state.screen = action.payload;
//     },
//     goBack: (state) => {
//      state.screen = state.previousScreen || 1;
//     },





// {screen !== 1 && (
//             <TouchableOpacity
//              style={styles.button}
//              onPress={() => dispatch(goBack())}
//             >
//              <Text style={styles.buttonText}>Back</Text>
//             </TouchableOpacity>
//          )}

//          <TouchableOpacity
//             style={styles.button}
//             onPress={() => dispatch(setScreen(2))}
//          >
//             <Text style={styles.buttonText}>Go to Categories</Text>
//          </TouchableOpacity>

//          <TouchableOpacity
//             style={styles.button}
//             onPress={() => dispatch(setScreen(3))}
//          >
//             <Text style={styles.buttonText}>Go to Products</Text>
//          </TouchableOpacity>

//          <TouchableOpacity
//             style={styles.button}
//             onPress={() => dispatch(setScreen(4))}
//          >
//             <Text style={styles.buttonText}>Go to Cart</Text>
//          </TouchableOpacity>
//         </View>

//         {screen === 1 && <HomeScreen />}
//         {screen === 2 && <CategoriesScreen />}
//         {screen === 3 && <ProductsScreen />}
//         {screen === 4 && <CartScreen />}