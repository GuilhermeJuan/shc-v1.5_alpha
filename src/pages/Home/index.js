// Código da tela home em React Native
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Switch, Animated, Modal, SafeAreaView  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { BlurView } from 'expo-blur';
import { useNavigation, useRoute } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  // Defina o estado isLogoClicked como um booleano
  const [isLogoClicked, setIsLogoClicked] = useState(false);

  // Defina o estado isLoggedIn como um booleano
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Defina o nome do usuário como uma string
  const userName = 'Thales Juan';

  // Defina o estado isMenuVisible como um booleano
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Defina o estado medications como um array vazio
  const [medications, setMedications] = useState([]);

  // Use o hook useRoute para acessar a rota
  const route = useRoute();

  // Use o hook useEffect para atualizar o estado medications quando a rota mudar
  useEffect(() => {
    // Verifique se a rota tem o parâmetro newMedication
    if (route.params?.newMedication) {
      // Extraia o novo medicamento da rota
      const newMedication = route.params.newMedication;
      // Atualize o estado medications, adicionando o novo medicamento no final do array
      setMedications([...medications, newMedication]);
    }
  }, [route.params?.newMedication]); // Execute o efeito somente quando o parâmetro newMedication mudar

  // Defina uma referência para a imagem do logo
  const imageRef = useRef(null);

  // Defina uma animação para girar o logo no sentido horário
  const rotateClockwise = {
    0: {
      rotate: '0deg',
    },
    1: {
      rotate: '360deg',
    },
  };

  // Defina uma animação para girar o logo no sentido anti-horário
  const rotateCounterClockwise = {
    0: {
      rotate: '0deg',
    },
    1: {
      rotate: '-360deg',
    },
  };

  // Defina uma função para lidar com o clique no logo
  const handleLogoClick = () => {
    // Alterne o estado isLogoClicked
    setIsLogoClicked(!isLogoClicked);
    // Se o logo foi clicado, execute a animação de girar no sentido horário
    if (isLogoClicked) {
      imageRef.current.animate(rotateClockwise, 1000);
    } else {
      // Se o logo não foi clicado, execute a animação de girar no sentido anti-horário
      imageRef.current.animate(rotateCounterClockwise, 1000);
    }
  };

  // Defina uma função para alternar a visibilidade do menu
  const toggleMenu = () => {
    // Alterne o estado isMenuVisible
    setIsMenuVisible(!isMenuVisible);
  };

  // Defina uma altura animada para a imagem do medicamento
  const imageHeight = useRef(new Animated.Value(0)).current;

  // Defina uma função para lidar com a alternância da imagem
  const handleImageToggle = () => {
    // Use a função Animated.timing para animar a altura da imagem
    Animated.timing(imageHeight, {
      toValue: imageHeight._value === 0 ? 200 : 0, // Alterne entre 0 e 200
      duration: 500, // Duração da animação em milissegundos
      useNativeDriver: false, // Use o driver nativo
    }).start(); // Inicie a animação
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogoClick}>
          <Animatable.Image
            ref={imageRef}
            source={require('../../../assets/LogomarcaOFC.jpg')}
            style={styles.logo}
            animation={isLogoClicked ? rotateCounterClockwise : rotateClockwise}
            duration={1000}
            useNativeDriver
          />
        </TouchableOpacity>
        {isLogoClicked && (
          <Animatable.Text animation="fadeIn" duration={1000} style={styles.appName}>
            Saúde na Hora Certa
          </Animatable.Text>
        )}
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name="menu-outline" size={32} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>
          Olá, {isLoggedIn ? `${userName}, bem vindo(a)` : 'bem vindo(a)'}
        </Text>
      </View>
      <Text style={styles.title}>Seus remédios:</Text>
      {/* Use o componente FlatList para renderizar a lista de medicamentos */}
      <FlatList
        data={medications} // Use o estado medications como a propriedade data
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.dosage}</Text>
            <Text style={styles.itemText}>Dia: {item.day}</Text>
            <Text style={styles.itemText}>Hora: {item.time}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={handleImageToggle}>
                <Text style={styles.buttonText}>Ver Imagem</Text>
              </TouchableOpacity>
              <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Lembrete</Text>
                <Switch />
              </View>
            </View>
            <Animated.Image
              style={{ height: imageHeight, width: '100%' }}
              source={{ uri: item.image }} // Use a propriedade image do item como a fonte da imagem
            />
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => navigation.navigate('GerenciamentoMedicamentos')}
            >
              <Text style={styles.editButtonText}>Editar informações</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id} // Use a propriedade id do item como a chave
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={() => {
          setIsMenuVisible(!isMenuVisible);
        }}
      >
        <BlurView style={styles.absolute} intensity={100} tint="dark">
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
              <Ionicons name="close-outline" size={32} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('TelaPerfil')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="person-outline" size={24} color="black" />
                <Text style={styles.menuItem}>Perfil</Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => navigation.navigate('TelaConfigurcao')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="settings-outline" size={24} color="black" />
                <Text style={styles.menuItem}>Configuração</Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => navigation.navigate('TelaSobreNos')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="information-circle-outline" size={24} color="black" />
                <Text style={styles.menuItem}>Sobre Nós</Text>
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="log-out-outline" size={24} color="black" />
                <Text style={styles.menuItem}>Sair</Text>
              </View>
            </TouchableOpacity>
          </View>
        </BlurView>
      </Modal>
    </View>
    </SafeAreaView>
  );
  };
  
// Código dos estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  greetingContainer: {
    marginBottom: 20,
  },
  greetingText: {
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  item: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0b203d',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 14,
    marginRight: 10,
  },
  editButton: {
    backgroundColor: '#0b203d',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  editButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});
export default HomeScreen;