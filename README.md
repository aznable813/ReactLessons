# TOEIC Vocabulary App

TOEIC対策用の英単語学習アプリです。  
React Native + Expo を用いて開発しており、英単語の反復学習・履歴表示・音声再生などをサポートします。  

このアプリは「個人のTOEIC学習」と「アプリ開発の実験プロジェクト」を兼ねています。  
また、開発過程では ChatGPT を **AIコーディングパートナー** として活用し、コード生成・設計相談・学習記録を行っています。  

---

## ✨ Features
- 📖 **英単語学習**
  - 単語カード形式で出題
  - 選択式クイズで理解度チェック
- 📝 **履歴機能**
  - 学習履歴をSQLiteに保存
  - `HistoryScreen.js` で過去の学習を一覧表示
- 🔊 **音声再生**
  - 英単語の発音を再生してリスニング強化
- 🎨 **UI/UX**
  - React Native + Expoを利用
  - スマートフォン向けに最適化

---

## 🛠️ Tech Stack
- **React Native** (Expo)
- **JavaScript / Node.js**
- **SQLite**（ローカルDB）
- **GitHub Codespaces**（クラウド開発環境）
- **ChatGPT**（AI開発サポート）

---

## 🚀 Getting Started

### 1. Clone
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```
### 2. Install
```bash
npm install
```

### 3. Run
```bash
npx expo start
```
📂 Project Structure
```perl
my-toeic-app/
├── App.js
├── components/       # 共通コンポーネント
├── screens/          # 各画面 (MainScreen, HistoryScreen, etc.)
├── assets/           # アイコン・画像・音声
└── database/         # SQLite関連
```
## 📚 Learning Purpose & Log

このプロジェクトの目的：

TOEIC対策（英単語暗記の習慣化）

React Native + Expo を用いたクロスプラットフォーム開発の学習

SQLite を利用したローカルDB実装の練習

ChatGPTを「AIコーディングパートナー」として活用する実験

## ChatGPT活用の記録

📌 設計サポート

画面構成の設計（MainScreen, HistoryScreen, QuizEngineなど）を相談

📌 コード生成

React Nativeコンポーネント、SQLite連携コード、Expo設定を生成

📌 デバッグ支援

エラー解消や挙動確認のための修正提案を受けながら進行

📌 学習ログ管理

NotionとChatGPTで開発経過をまとめ、ブログ連携の準備

## 📝 Roadmap

 TOEIC頻出単語リストの拡充

 単語の例文表示機能

 復習スケジュール管理（SRSアルゴリズム）

 UI改善（ダークモード対応）

 英語学習ログの可視化

## 🖊️ Author

👤 開発者: [Aznable813]

🌱 学習テーマ: React Native, AI活用, TOEIC対策

📄 License

This project is licensed under the MIT License.
