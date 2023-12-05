import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function RegisterScreenPart2() {
    const [infoNome, setInfoNome] = useState(''); // Estado para armazenar o nome completo do usuário
    const [infoTipoUsuario, setInfoTipoUsuario] = useState(''); // Estado para armazenar o tipo de usuário selecionado
    const navigation = useNavigation(); // Hook para acessar a navegação
    const route = useRoute(); // Hook para acessar a rota

    // Extraia as infos do usuário da rota
    const { infoEmail, infoSenha } = route.params;

    // Variável para verificar se os campos de nome e tipo de usuário estão vazios
    const isNextButtonDisabled = infoNome === '' || infoTipoUsuario === '';

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastro</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Nome Completo</Text>
                <TextInput
                    placeholder="Digite seu nome completo..."
                    style={styles.input}
                    value={infoNome} // use o estado aqui
                    onChangeText={setInfoNome} // atualize o estado aqui
                />

                <Text style={styles.title}>Tipo de Usuário</Text>
                <RNPickerSelect
                    style={pickerSelectStyles}
                    onValueChange={(value) => setInfoTipoUsuario(value)}
                    items={[
                        { label: 'Paciente', value: 'Paciente' },
                        { label: 'Cuidador', value: 'Cuidador' },
                    ]}
                    value={infoTipoUsuario} // use o estado aqui
                />

                <TouchableOpacity
                    style={[
                        styles.button,
                        // ajuste o estilo do botão com base na variável isNextButtonDisabled
                        isNextButtonDisabled ? { backgroundColor: '#a1a1a1' } : { backgroundColor: '#0b203d' },
                    ]}
                    // desabilite o botão com base na variável isNextButtonDisabled
                    disabled={isNextButtonDisabled}
                    // navegue para a tela de confirmação, passando todas as infos do usuário como parâmetro
                    onPress={() =>
                        navigation.navigate('Login', {
                            infoEmail,
                            infoSenha,
                            infoNome,
                            infoTipoUsuario,
                        })
                    }
                >
                    <Text style={styles.buttonText}>Confirmar</Text>
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
        backgroundColor: 'black',
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
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button: {
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText: {
        color: '#a1a1a1',
    },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});



