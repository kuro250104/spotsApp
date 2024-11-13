import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { firebase } from '../services/firebaseConfig';

export default function HomeScreen() {
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      console.log('Déconnexion réussie');
    } catch (error) {
      console.log('Erreur lors de la déconnexion:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenue, {user?.email || 'Utilisateur'} !</Text>
      <Button title="Déconnexion" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    marginBottom: 20,
  },
});
