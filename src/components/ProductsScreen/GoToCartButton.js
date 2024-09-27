import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const GoToCartButton = ({ onPress }) => {
    return (
        <View style={styles.btnContainter}>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={styles.btnText}>Go to cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btnContainter: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#e33f3d',
        padding: '1%',
        borderRadius: 30,
    },
    btnText: {
        color: '#FFF',
        fontSize: 20,
    },
});

export default GoToCartButton;
