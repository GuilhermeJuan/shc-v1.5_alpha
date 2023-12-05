import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Animated, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const TelaPerfil = ({ navigation }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [imageSource, setImageSource] = useState(require('../../../assets/thalesjuan.jpg')); // Fonte padrão da imagem
  const profileImageSize = new Animated.Value(120);

  const handleImagePress = () => {
    Animated.spring(profileImageSize, {
      toValue: isImageExpanded ? 120 : 240,
      useNativeDriver: false,
    }).start(() => {
      setIsImageExpanded(!isImageExpanded);
    });
  };

  const handleEditEmailPress = () => {
    setEditingEmail(!editingEmail);
  };

  const handleEditPasswordPress = () => {
    setEditingPassword(!editingPassword);
  };

  const handleChangePhotoPress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageSource({ uri: result.uri });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Adicionando o botão de voltar */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Adicionando a foto de perfil */}
        <View style={styles.profileImageContainer}>
          <TouchableOpacity onPress={handleImagePress}>
            <Animated.Image
              source={imageSource}
              style={[styles.profileImage, { width: profileImageSize, height: profileImageSize }]}
            />
          </TouchableOpacity>
          {/* Adicionando o botão de carregar foto */}
          <TouchableOpacity style={styles.uploadButton} onPress={handleChangePhotoPress}>
            <Ionicons name="camera" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Adicionando o nome e o tipo de usuário */}
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileName}>Thales Juan</Text>
          <Text style={styles.profileType}>Paciente</Text>
        </View>

        {/* Adicionando os botões de editar senha e e-mail */}
        <View style={styles.profileActionsContainer}>
          <TouchableOpacity style={styles.profileActionButton} onPress={handleEditEmailPress}>
            <Text style={styles.profileActionText}>{editingEmail ? 'Salvar Alteração' : 'Editar E-mail'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileActionButton} onPress={handleEditPasswordPress}>
            <Text style={styles.profileActionText}>{editingPassword ? 'Salvar Alteração' : 'Editar Senha'}</Text>
          </TouchableOpacity>
        </View>

        {/* Adicionando campos de edição de e-mail e senha */}
        {editingEmail && (
          <TextInput
            style={styles.editInput}
            placeholder="Novo E-mail"
            // Lógica para atualizar o e-mail no estado ao digitar
          />
        )}

        {editingPassword && (
          <TextInput
            style={styles.editInput}
            placeholder="Nova Senha"
            secureTextEntry
            // Lógica para atualizar a senha no estado ao digitar
          />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196f3',
  },
  scrollView: {
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  uploadButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  profileInfoContainer: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  profileType: {
    fontSize: 18,
    color: '#ffffff',
  },
  profileActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  profileActionButton: {
    width: 160,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    marginVertical: 10,
  },
  profileActionText: {
    fontSize: 16,
    color: '#2196f3',
  },
  editInput: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
});

export default TelaPerfil;
