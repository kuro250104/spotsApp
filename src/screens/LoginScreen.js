import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { firebase } from '../services/firebaseConfig';
import * as Notifications from 'expo-notifications';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Demande de permission pour les notifications
    (async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission de notification non accordée!');
      }
    })();
  }, []);

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('Utilisateur connecté avec succès !');

      // Envoie une notification locale pour indiquer la connexion
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Connexion réussie 🎉",
          body: "Utilisateur connecté avec succès !",
        },
        trigger: null,
      });

      // Logique de redirection ou mise à jour de l'état de l'application ici

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Connexion" onPress={handleLogin} />
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
}
