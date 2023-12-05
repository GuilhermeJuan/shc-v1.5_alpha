import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TelaSobreNos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Adicionando o botão de voltar */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quem Somos</Text>
          <View style={styles.sectionContent}>
            <Image
              source={require('../../../assets/guigo.jpg')}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Guilherme Juan T. S. Lima</Text>
              <Text style={styles.profileRole}>Desenvolvedor Full Stack</Text>
              <Text style={styles.profileContribution}>
                Desenvolvimento tanto do backend quanto do frontend.
              </Text>
              <Text style={styles.profileMission}>
                Tornar a gestão de medicamentos mais simples e eficaz.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nossa Visão</Text>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionText}>
              Objetivo: Oferecer uma solução inovadora para o gerenciamento de
              medicamentos, integrando tecnologia e saúde.
            </Text>
            <Text style={styles.sectionText}>
              Valores: Transparência, Usabilidade e Impacto Positivo na Vida das
              Pessoas.
            </Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Desenvolvedores</Text>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionText}>
              Guilherme Juan T. S. Lima
            </Text>
            <Text style={styles.sectionText}>
              Biografia: Apaixonado por tecnologia desde jovem, fundiu seu
              conhecimento em saúde e programação para criar o aplicativo SHC.
            </Text>
            <Text style={styles.sectionText}>
              Link para Redes Sociais:
            </Text>
            <View style={styles.socialLinks}>
              <TouchableOpacity
                style={styles.socialLink}
                onPress={() =>
                  Linking.openURL('https://www.linkedin.com/in/guilherme-juam-80b87920a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')
                }
              >
                <Ionicons
                  name="logo-linkedin"
                  size={24}
                  color="#0e76a8"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialLink}
                onPress={() =>
                  Linking.openURL('https://github.com/GuilhermeJuan')
                }
              >
                <Ionicons
                  name="logo-github"
                  size={24}
                  color="#333333"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialLink}
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/euuguijuan/')
                }
              >
                <Ionicons
                  name="logo-instagram"
                  size={24}
                  color="#c32aa3"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Participantes do Projeto</Text>
          <View style={styles.sectionContent}>
            <Text style={styles.sectionText}>
              Colaboradores: - NICOLAS ENDREU CRAVO DE OLIVEIRA GONCALVES
              - LAURA ALICE FORESTO CEZAR
            </Text>
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    padding: 10,
  },
  section: {
    marginVertical: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196f3',
    padding: 10,
  },
  sectionContent: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 16,
    color: '#212121',
    marginVertical: 5,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212121',
  },
  profileRole: {
    fontSize: 14,
    color: '#757575',
  },
  profileContribution: {
    fontSize: 14,
    color: '#2196f3',
  },
  profileMission: {
    fontSize: 14,
    color: '#4caf50',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  socialLink: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
});

export default TelaSobreNos;