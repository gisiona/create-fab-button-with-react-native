import React from 'react';
import { StyleSheet, View } from 'react-native';
import FabButton from './src/components/FabButton';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}>
        <FabButton style={{ bottom: 80, right: 50 }}/>
      </LinearGradient>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#1ab563"
  },
});
