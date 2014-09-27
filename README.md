# REAPER Quick Start

練習の為のプロジェクト

[REAPER Quick Start (pdf)](http://www.reaper.fm/guides/REAPER%20Quick%20Start.pdf)
の翻訳・編集を題材に、レポジトリの運用方法を学びます。


## ディレクトリ・ファイル構成

このプロジェクトでは、サブ・ディレクトリを作らず、
フラットな構成にします。


| File | 説明 |
|------|------|
| .gitignore | 設定ファイル: _GIT_で管理しないファイルを列挙します |
| LICENSE | 文書ファイル: ライセンスを記述します |
| README.md | 文書ファイル: この文書です |
| package.json | 設定ファイル: _NPM_ で |
| Reaper_QuickStart.en.yaml | 英語のリソース |
| Reaper_QuickStart.junk.txt | 元 PDF からコピーしたテキスト |
| test_yaml_parse.ls | スクリプト |


## 開発環境

ブラウザで利用できる [Cloud9 IDE](http://c9.io) を利用します。
GitHub のアカウントで利用できます。


- Cloud9 IDE で最大化もしくは全画面表示を推奨
  - Google Chrome の場合、Omnibox(URLを打ち込む欄) 等で `F11` を押します
    ページ内で押しても、他のキーボード ショートカットにキャプチャされて、
    ブラウザのショートカット(F11 Full Screen) に伝わらないことがあります。

  - 覚えておくと便利なショートカット
    - ブラウザ内タブの移動 `Ctrl+Tab`
    - ウィンドウ切り替え `Alt+Tab`
    - デスクトップ切り替え `Ctrl+Alt+矢印` (仮想デスクトップ利用時)

## Workflow


作業を始める前に、これから行う作業の詳細を箇条書きで書き出します。
作業手順等も含めてタスクの共有。


### README.md の編集

- Cloud9 IDE / Dashboard　から IDE を開く
- メニューより Window / Presets / Full IDE を選択
  - メニューが非表示の場合、中央上部の小さい矢印で表示に切り替え
- 左サイド Workspace よりREADME.md を選択し、エディタ画面(左) で開く
- メニューより Preview / Live Preview File (README.md) を選択
- 左右の２分割になり、左側: エディタでソース編集
  右側にプレビューが表示されます。
- 分割されなかった場合、タブを右クリック / Split Pane in Two Columns
  - タブをドラッグ＆ドロップで移動できます。
  - Window / Tabs からも画面分割可能。３～４分割も選べます。
- メニューより Window / Outline を選択。右サイドメニューに表示

- 以上で完了
  - Workspace | 変種画面 | プレビュー | アウトライン


### Reaper_QuickStart.en.yaml の編集

- Window / Tabs / Split Pane in Two Columns で左右二分割画面を準備
- 左Paneで `Reaper_QuickStart.en.yaml` を開き
- 右Paneで `Reaper_QuickStart.junk.txt` を開きます
- 右のテキストを

- 単純作業の繰り返し
  - Copy `Ctrl+C`
  - Paste `Ctrl+P`

  
### ショートカットを探す

- Windows / Commands `Ctrl + .` でコマンド一覧を表示
- キーワードを入力して検索
- 候補の中に
- コマンドは Undo 可能なのなので



## Roadmap

- リソース作成 (creator team)
  - リソース抽出: プログラムで扱いやすい書式に変換
  - リソース翻訳: 
- 生成スクリプトの開発 (developer team)
  - ブラウザ表示用の HTML を生成
  - 印刷向け PDF を生成
- レビュー (reviewer team)
  - レイアウト
  - 校正
- リリース/告知 (release team)


## 用語

| 語句 | 説明 |
|------|------|
| GitHub | 開発者向けの SNS |
| GIT  | ファイルのバージョン管理 |
| NPM  | Node.js Package Manager |
| Node.js | JavaScript 処理系の一つ |
