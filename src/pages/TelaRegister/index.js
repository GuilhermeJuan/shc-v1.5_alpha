import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreenPart1() {
    const [infoEmail, setInfoEmail] = useState('');
    const [infoSenha, setInfoSenha] = useState('');
    const navigation = useNavigation();

    const isNextButtonDisabled = infoEmail === '' || infoSenha === '';

    const handleNext = () => {
        if (isNextButtonDisabled) {
            // Mostra um alerta indicando que os campos precisam ser preenchidos
            Alert.alert('Aviso', 'Preencha todos os campos antes de prosseguir.');
        } else {
            navigation.navigate('RegisterPart2', { infoEmail, infoSenha });
        }
    };

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo ao Cadastro</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.instructions}>Vamos começar! Preencha os campos abaixo para criar sua conta:</Text>

                <Text style={styles.label}>Email</Text>
                <TextInput
                    placeholder="Digite seu email..."
                    style={styles.input}
                    value={infoEmail}
                    onChangeText={setInfoEmail}
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    placeholder="Digite sua senha..."
                    secureTextEntry={true}
                    style={styles.input}
                    value={infoSenha}
                    onChangeText={setInfoSenha}
                />

                <TouchableOpacity
                    style={[
                        styles.button,
                        isNextButtonDisabled ? { backgroundColor: '#a1a1a1' } : { backgroundColor: '#0b203d' },
                    ]}
                    disabled={isNextButtonDisabled}
                    onPress={handleNext}
                >
                    <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.registerText}>Já tenho uma conta. Quero fazer login!</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b203d',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingTop: 20,
    },
    instructions: {
        fontSize: 16,
        marginBottom: 20,
        color: '#a1a1a1',
    },
    label: {
        fontSize: 18,
        color: '#0b203d',
        marginBottom: 8,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 20,
        fontSize: 16,
        color: '#000',
    },
    button: {
        width: '100%',
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 20,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1',
    },
});
