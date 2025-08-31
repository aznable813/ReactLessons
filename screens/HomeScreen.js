import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
  <Text style={styles.title}>TOEIC 単語トレーナー</Text>

  <View style={styles.buttonContainer}>
    <Button title="学習スタート" onPress={() => navigation.navigate('Quiz')} />
  </View>
  <View style={styles.buttonContainer}>
    <Button title="履歴を見る" onPress={() => navigation.navigate('History')} />
  </View>
</View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 40 },
  buttonContainer: { marginVertical: 10, width: '80%' },
});
