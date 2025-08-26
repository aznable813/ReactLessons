// screens/HistoryScreen.js（仮）
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const json = await AsyncStorage.getItem('quiz_history');
        if (json !== null) {
          setHistory(JSON.parse(json));
        }
      } catch (e) {
        console.error('履歴の読み込みに失敗しました', e);
      }
    };
    loadHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>履歴一覧</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.text}>No.{index + 1}：{item.correctCount} / {item.totalCount} 正解（{item.percentage}%）</Text>
            <Text style={styles.subtext}>日時：{item.timestamp}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { marginBottom: 15, padding: 10, backgroundColor: '#eee', borderRadius: 8 },
  text: { fontSize: 18 },
  subtext: { fontSize: 14, color: '#666' },
});