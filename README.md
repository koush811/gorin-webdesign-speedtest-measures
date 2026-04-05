# 技能五輪ウェブデザイン職種スピードテスト対策課題

技能五輪ウェブデザイン職種のスピードテスト過去問を参考に、出題傾向を踏まえた対策問題をまとめたリポジトリです。

## 動作環境

- Docker
- Docker Compose

> 別途PHP・Databaseの環境がある方はDockerは不要です。

## セットアップ

### 1. リポジトリをクローンする

```bash
git clone https://github.com/saitogo555/gorin-webdesign-speedtest-measures
```

### 2. リポジトリを開く

```bash
cd ./gorin-webdesign-speedtest-measures
```

### 3. コンテナを起動する

```bash
docker compose up -d --build
```

### 4. ブラウザで確認する

- アプリ一覧: `http://localhost:8080`
- phpMyAdmin: `http://localhost:8081`

## DB接続情報

| 項目 | 値 |
| --- | --- |
| データベース名 | `app` |
| ユーザー名 | `app` |
| パスワード | `app` |

## 課題一覧

### Part A

- `A1`: 価格表
- `A2`: CSSタブ
- `A3`: CSSアコーディオン

### Part B

- `B1`: ラップ付きストップウォッチ
- `B2`: カラー同期ツール
- `B3`: カウントダウンタイマー
- `B4`: クイズアプリ
- `B5`: パスワードのリアルタイム検証

### Part C

- `C1`: 簡易掲示板
- `C2`: ページネーション
