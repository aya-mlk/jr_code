import React from 'react';
import { View, Image, ImageBackground, StyleSheet } from 'react-native';

const index = () => {

  return (
    <ImageBackground
      source={require('jr_code/assets/background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('jr_code/assets/AcceuilElephant.png')}
          style={styles.logo}
        />
        <View style={styles.card}>
          <View style={styles.progressBar}>
            {/* Contenu de votre barre de progression */}
            <View style={styles.progressBarFill} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // ou 'stretch' selon vos préférences
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: -20,
    marginBottom: 10,
  },
  card: {
    width: '80%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    borderColor: '#9c43f0',
    borderWidth: 1,
    backgroundColor: '#fff8f8',
  },
  progressBarFill: {
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 2,
    width: '50%',
  },
});

export default index;