import React, { useReducer } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import CartScreen from './src/views/CartScreen';
import ProductsScreen from './src/views/ProductsScreen';
import CategoriesScreen from './src/views/CategoriesScreen';
import HomeScreen from './src/views/HomeScreen';

const initialState = {
  screen: 'home',
  previousScreen: null,
  showForm: false,
  selectedCategory: null,
  cart: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, screen: action.payload, previousScreen: state.screen };
    case 'TOGGLE_FORM':
      return { ...state, showForm: !state.showForm };
    case 'SELECT_CATEGORY':
      return { ...state, selectedCategory: action.payload, screen: 'products', previousScreen: state.screen };
    case 'ADD_TO_CART':
      const productInCart = state.cart.find(item => item.id === action.payload.id);
      if (productInCart) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          screen: 'cart',
          previousScreen: state.screen
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          screen: 'cart',
          previousScreen: state.screen
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case 'GO_BACK':
      return {
        ...state,
        screen: state.previousScreen,
        previousScreen: null
      };
    default:
      return state;
  }
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  console.log(state);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.centerContent}>
          {state.screen !== 'home' && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch({ type: 'GO_BACK' })}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          )}
        </View>
        {state.screen === 'home' && (
          <HomeScreen state={state} dispatch={dispatch}/>
        )}

        {state.screen === 'categories' && (
          <CategoriesScreen state={state} dispatch={dispatch}/>
        )}

        {state.screen === 'products' && (
          <ProductsScreen state={state} dispatch={dispatch} />
        )}

        {state.screen === 'cart' && (
          <CartScreen state={state} dispatch={dispatch}/>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
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
