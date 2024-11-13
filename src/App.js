import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './context/AuthContext';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen'; // L'écran principal après connexion
import { ActivityIndicator, View } from 'react-native';

function AppContent() {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // Affiche un indicateur de chargement pendant la vérification de l'état de connexion
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return user ? <HomeScreen /> : <LoginScreen />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
