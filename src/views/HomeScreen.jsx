import React, { useEffect, useState, useFocusEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useCustomer } from '../contexts/CustomerContext';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [showForm, setShowForm] = useState(false); // Estado local para mostrar el formulario
    const { customerData, setCustomerData } = useCustomer();

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: customerData.name || '',
            email: customerData.email || '',
            phone: customerData.phone || ''
        }
    });

    // useEffect(() => {
    //     console.log('El componente HomeScreen se ha montado');
    //      return () => {
    //         // Código a ejecutar cuando el componente se desmonta
    //         console.log('El componente HomeScreen se ha desmontado');
    //     };
    // }, []); // El array vacío asegura que el efecto solo se ejecute en el montaje y desmontaje

    // useEffect(() => {
    //     console.log('El componente HomeScreen se ha actualizado');
    // }); // Sin dependencias asegura que se ejecute en cada renderizado

    useEffect(() => {
        // Actualiza los valores del formulario cuando `customerData` cambie
        reset({
            name: customerData.name || '',
            email: customerData.email || '',
            phone: customerData.phone || ''
        });
    }, [customerData, reset]);

    const toggleForm = () => {
        setShowForm(!showForm); // Alternar entre mostrar y ocultar el formulario
    };

    const onSubmit = (data) => {
        setCustomerData(data);
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
                        rules={{ required: 'Name is required', maxLength: { value: 80, message: 'Name cannot exceed 80 characters' } }}
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
                        rules={{ required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } }}
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
                        rules={{ required: 'Phone number is required', pattern: { value: /^\d+$/, message: 'Invalid phone number' } }}
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