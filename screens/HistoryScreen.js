// screens/HistoryScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoryScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const data = await AsyncStorage.getItem('quizHistory');
        if (data) {
          setHistory(JSON.parse(data));
        }
      } catch (error) {
        console.error('履歴の読み込みエラー:', error);
      }
    };

    loadHistory();
  }, []);

  // ✅ 履歴削除の分岐処理（Webとアプリで分ける）
  const handleDelete = async () => {
    if (Platform.OS === 'web') {
      const confirmed = window.confirm('本当に履歴をすべて削除しますか？');
      if (!confirmed) return;
      await AsyncStorage.removeItem('quizHistory');
      setHistory([]);
    } else {
      Alert.alert(
        "確認",
        "本当に履歴をすべて削除しますか？",
        [
          { text: "キャンセル", style: "cancel" },
          {
            text: "削除する",
            style: "destructive",
            onPress: async () => {
              await AsyncStorage.removeItem('quizHistory');
              setHistory([]);
            },
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>クイズ履歴</Text>
      <ScrollView style={styles.scroll}>
        {history.length === 0 ? (
          <Text style={styles.noData}>履歴がまだありません。</Text>
        ) : (
          history
            .slice()
            .reverse()
            .map((item, index) => (
              <View key={index} style={styles.historyItem}>
                <Text>日時: {item.date}</Text>
                <Text>正答数: {item.correctCount} / {item.totalCount}</Text>
                <Text>正答率: {item.percentage}%</Text>
              </View>
            ))
        )}
        {history.length > 0 && (
          <View style={{ marginTop: 20, marginBottom: 40 }}>
            <Button
              title="履歴をすべて削除"
              color="#cc4444"
              onPress={handleDelete}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  scroll: { flex: 1 },
  historyItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  noData: { textAlign: 'center', marginTop: 20, fontSize: 16, color: '#777' },
});
