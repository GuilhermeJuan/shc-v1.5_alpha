import React from 'react'; 

import {View, 
        Text,
        StyleSheet,
        Image,
        TouchableOpacity    
    } from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'


export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../assets/LogomarcaOFC.jpg')}
                    style={styles.logoImage}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Monitore, gerencie e organize seus medicamentos aqui</Text>
                <Text style={styles.text}>Faça o Login para começar! 😉</Text>

                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#0b203d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#0b203d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf:'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight:'bold'
    },
    logoImage: {
        width: 360, // Defina a largura da imagem conforme necessário
        height: 360, // Defina a altura da imagem conforme necessário
        borderRadius: 100, // Faz a imagem aparecer redonda
        
    },
})