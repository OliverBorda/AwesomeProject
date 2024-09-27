import React, { useCallback} from 'react';
import CustomButton from '../components/HomeScreen/CustomButton';
import styles from '../components/HomeScreen/styles';

import { View, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const toggleForm = useCallback(() => {
        navigation.navigate('Login');
    }, []);

    console.log("HomeScreen");
    console.log("=================");
    console.log("");

    return (
        <View style={styles.centerContent}>
            <Text style={styles.title}>Welcome to Our Store</Text>
                <CustomButton title="Start Shopping" onPress={toggleForm} />
        </View>
    );
};

export default HomeScreen;
