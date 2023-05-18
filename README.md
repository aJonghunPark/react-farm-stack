# FastAPI + React によるフルスタック Web開発

https://www.udemy.com/share/105LYM3@vLOD5-YVkw_MbC5ZDBvaQAGU4gWB2IVJBL8A1MdiImlk2rgRLpRiK2UC5hKoANV23w==/

Kazu T+さんの講座でFARM（FastAPI + React + MongoDB）でTodoアプリを作ります。
このリポジトリはReactで作成したフロントエンド側です。

## nodeの環境構築

私はnvmでnodeのバージョン管理を行っていますが、nodenvなど他のものを使っても構いません。

```sh
brew install nvm
```

nvmで最新バージョンのnodeをインストールします。
nvm ls-remote --ltsでインストールできるnodeのリストが表示されます。
私は現時点の最新である18.15.0をインストールしました。

```sh
# インストールできるnodeのリストを確認
nvm ls-remote --lts

# nodeをインストールする。
nvm install 18.15.0

# インストールしたnodeのバージョンを確認
nvm ls

# インストールしたnodeのバージョンを指定
nvm use 18.15.0

# インストールしたnodeのバージョンをデフォルトで設定
nvm alias default v18.15.0
```

## プロジェクトの生成

```sh
create-react-app react-farm-stack --template redux-typescript
```

Reactのプロジェクトの場合は色々と下準備が必要です。
[この文書](https://github.com/aJonghunPark/rtk-saga-crud/blob/main/doc/02.install.md)をご参照ください。
上記の文書からRedux-Saga、MUIはインストールする必要がありません。

下準備が終わったら、yarn startでクライアントを立ち上げます。
この場合、バックエンド側のサーバーも立ち上げないといけません。
バックエンド側のサーバーは[ここ](https://github.com/aJonghunPark/fast_api)をご確認ください。
