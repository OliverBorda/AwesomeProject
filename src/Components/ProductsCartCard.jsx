import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ProductsCartCard = ({item, order, index}) => {

    const styles = StyleSheet.create({
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
                        onPress={() => order.decrementQuantity(item.id)}
                    >
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => order.incrementQuantity(item.id)}
                    >
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => order.removeCart(item.id)}
                >
                    <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductsCartCard