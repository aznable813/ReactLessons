// screens/ReviewScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ReviewScreen({ route, navigation }) {
  const questions = route.params.questions;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handlePress = (index) => {
    setSelected(index);
    setAnswered(true);

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex(currentIndex + 1);
        setSelected(null);
        setAnswered(false);
      } else {
        navigation.popToTop(); // 終了後はトップ画面へ
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>復習クイズ（{currentIndex + 1} / {questions.length}）</Text>
      <Text style={styles.question}>{currentQuestion.word}</Text>

      {currentQuestion.choices.map((choice, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.choiceButton,
            answered && index === currentQuestion.correctIndex && styles.correct,
            answered && index === selected && selected !== currentQuestion.correctIndex && styles.incorrect,
          ]}
          onPress={() => handlePress(index)}
          disabled={answered}
        >
          <Text style={styles.choiceText}>{choice}</Text>
        </TouchableOpacity>
      ))}

      {answered && (
        <Text style={styles.result}>
          {selected === currentQuestion.correctIndex ? '正解！' : '不正解...'}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, marginBottom: 20 },
  question: { fontSize: 32, marginBottom: 20 },
  choiceButton: { backgroundColor: '#ddd', padding: 15, marginVertical: 5, width: '100%', borderRadius: 10 },
  choiceText: { fontSize: 20, textAlign: 'center' },
  correct: { backgroundColor: '#8f8' },
  incorrect: { backgroundColor: '#f88' },
  result: { fontSize: 28, marginTop: 30, fontWeight: 'bold' },
});