import React, { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCustomer } from '../contexts/CustomerContext';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [showForm, setShowForm] = useState(false); // Estado local para mostrar el formulario
    const { customerData, setCustomerData } = useCustomer();
    const [renderTime, setRenderTime] = useState(null);
    
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: customerData.name || '',
            email: customerData.email || '',
            phone: customerData.phone || ''
        }
    });

    useEffect(() => {
        const startTime = global.performance.now(); // Tiempo de inicio
        console.log('HomeScreen renderizado en', startTime, 'ms');

        return () => {
            const endTime = global.performance.now(); // Tiempo de finalización
            setRenderTime(endTime - startTime);
            console.log('2 HomeScreen renderizado en', endTime - startTime, 'ms');
        };
    }, []);

    console.log("HomeScreen");

    const toggleForm = useCallback(() => {
        setShowForm(prevShowForm => !prevShowForm);
    }, []);

    const onSubmit = (data) => {
        setCustomerData(data);
        // navigation.replace('Categories');
        navigation.navigate('Categories');
    };

    return (
        <View style={styles.centerContent}>
            <Text style={styles.title}>Welcome to Our Store</Text>

            {/* Si el formulario no se muestra, muestra el botón */}
            {!showForm && (
                <TouchableOpacity style={styles.button} onPress={toggleForm}>
                    <Text style={styles.buttonText}>Start Shopping</Text>
                </TouchableOpacity>
            )}

            {/* Si el formulario se muestra, oculta el botón y muestra el formulario */}
            {showForm && (
                <View style={styles.form}>
                    <Controller
                        control={control}
                        name="name"
                        // rules={{ required: 'Name is required', maxLength: { value: 80, message: 'Name cannot exceed 80 characters' } }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <TextInput
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    style={styles.input}
                                    placeholder="Name"
                                />
                                {errors.name && (
                                    <Text style={styles.errorText}>{errors.name.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        // rules={{ required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <TextInput
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    style={styles.input}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                />
                                {errors.email && (
                                    <Text style={styles.errorText}>{errors.email.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    <Controller
                        control={control}
                        name="phone"
                        // rules={{ required: 'Phone number is required', pattern: { value: /^\d+$/, message: 'Invalid phone number' } }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <TextInput
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    style={styles.input}
                                    placeholder="Phone"
                                    keyboardType="phone-pad"
                                />
                                {errors.phone && (
                                    <Text style={styles.errorText}>{errors.phone.message}</Text>
                                )}
                            </View>
                        )}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit(onSubmit)}
                    >
                        <Text style={styles.buttonText}>Start Shopping</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    form: {
        width: '80%',
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
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        color: '#000',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
});

export default HomeScreen;