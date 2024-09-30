import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import {
    addTocart,
    increaseQuantity,
    decreaseQuantity,
    removeFromcartByID
  } from '../../cartSlice'; 

const ProductsCartCard = ({item, index}) => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    const screen = useSelector((state) => state.screen);
    const grandTotal = useSelector((state) => state. grandTotal);
    const products = useSelector((state) => state.products);
    const shoppingCart = useSelector((state) => state.shoppingCart);
    const dispatch = useDispatch();
    const handleIncrease = (id) => {
        dispatch(increaseQuantity(id));
      };
    
      const handleDecrease = (id) => {
        dispatch(decreaseQuantity(id));
      };
    
      const handleRemove = (id) => {
        dispatch(removeFromcartByID(id));
    };

    const addTocart = (id) => {
        dispatch(addTocart(id));
      };

    const styles = StyleSheet.create({
        cartItem: {
            backgroundColor: randomColor,
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
            width:30
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
            width:80

        },
        removeButtonText: {
            color: '#fff',
            fontWeight: 'bold',
        },
    });
    
    return (
        <View key={index} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.cartItemImage} />
            <View style={styles.cartItemDetails}>
                <Text style={styles.cartItemTitle}>{item.name}</Text>
                <Text style={styles.cartItemDescription}>{item.description}</Text>
                <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => handleDecrease(item.id)}
                    >
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => handleIncrease(item.id)}
                    >
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => handleRemove(item.id)}
                >
                    <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductsCartCard