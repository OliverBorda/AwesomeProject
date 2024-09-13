import React, { useState, useReducer } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

const categories = [
  { id: 1, name: "Electronics", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Clothing", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Books", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Home & Garden", image: "https://via.placeholder.com/150" },
];

const products = [
  { id: 1, name: "Smartphone", description: "Latest model", price: 999, image: "https://via.placeholder.com/150", category: 1 },
  { id: 2, name: "Laptop", description: "Powerful performance", price: 1299, image: "https://via.placeholder.com/150", category: 1 },
  { id: 3, name: "T-shirt", description: "Comfortable cotton", price: 19.99, image: "https://via.placeholder.com/150", category: 2 },
  { id: 4, name: "Jeans", description: "Classic fit", price: 49.99, image: "https://via.placeholder.com/150", category: 2 },
];

const initialState = {
  screen: 'home',
  showForm: false,
  selectedCategory: null,
  cart: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, screen: action.payload };
    case 'TOGGLE_FORM':
      return { ...state, showForm: !state.showForm };
    case 'SELECT_CATEGORY':
      return { ...state, selectedCategory: action.payload, screen: 'products' };
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
          screen: 'cart'
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          screen: 'cart'
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
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {state.screen === 'home' && (
          <View style={styles.centerContent}>
            <Text style={styles.title}>Welcome to Our Store</Text>
            <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'TOGGLE_FORM' })}>
              <Text style={styles.buttonText}>Start Shopping</Text>
            </TouchableOpacity>
            
            {state.showForm && (
              <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Name" />
                <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
                <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'SET_SCREEN', payload: 'categories' })}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}

        {state.screen === 'categories' && (
          <View>
            <Text style={styles.sectionTitle}>Categories</Text>
            <View style={styles.grid}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  style={styles.card}
                  onPress={() => dispatch({ type: 'SELECT_CATEGORY', payload: category.id })}
                >
                  <Image source={{ uri: category.image }} style={styles.cardImage} />
                  <Text style={styles.cardTitle}>{category.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {state.screen === 'products' && (
          <View>
            <Text style={styles.sectionTitle}>Products</Text>
            <View style={styles.grid}>
              {products.filter(product => product.category === state.selectedCategory).map((product) => (
                <TouchableOpacity
                  key={product.id}
                  style={styles.card}
                  onPress={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                >
                  <Image source={{ uri: product.image }} style={styles.cardImage} />
                  <Text style={styles.cardTitle}>{product.name}</Text>
                  <Text style={styles.cardDescription}>{product.description}</Text>
                  <Text style={styles.cardPrice}>${product.price.toFixed(2)}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {state.screen === 'cart' && (
          <View>
            <Text style={styles.sectionTitle}>Shopping Cart</Text>
            {state.cart.map((item, index) => (
              <View key={index} style={styles.cartItem}>
                <Image source={{ uri: item.image }} style={styles.cartItemImage} />
                <View style={styles.cartItemDetails}>
                  <Text style={styles.cartItemTitle}>{item.name}</Text>
                  <Text style={styles.cartItemDescription}>{item.description}</Text>
                  <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => dispatch({ type: 'DECREMENT_QUANTITY', payload: item.id })}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item.id })}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                  >
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            <View style={styles.cartTotal}>
              <Text style={styles.cartTotalText}>
                Total: ${state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    textAlign: 'center',
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
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
