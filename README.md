# ソーシャルログイン実装

* [react-redux](https://github.com/reactjs/react-redux) - Official React bindings for Redux 
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - DOM bindings for React Router
* [react-router-redux](https://github.com/reactjs/react-router-redux) - Ruthlessly simple bindings to keep react-router and redux in sync
* [redux](https://github.com/reactjs/redux) - Predictable state container for JavaScript apps 
* [redux-thunk](https://github.com/gaearon/redux-thunk) - Thunk middleware for redux

### Use
```sh
$ npm install
$ npm start
```

## npmをインストール
- https://github.com/keppelen/react-facebook-login
- `npm install react-facebook-login`をインストール
- `npm install react-google-login`をインストール

## facebooke developersでセットアップ
- `https://developers.facebook.com/`
- 新しいアプリを作成を押して「表示名」「連絡先メールアドレス」等を入力（2018年４月時点　バージョンによって変更あり）
- 設定ができたらダッシュボードで管理画面に入りアプリIDをコピーしておく
- App.jsを修正
```js
      <Router history={ this.props.history }>
        <div>
        //exactをLoginコンポーネントに
          <Route exact path="/" component={ Login }/>
        //Homeコンポーネントへ遷移設定
          <Route path="/home" component={ Home } />
        </div>
      </Router>
    );
```
- views/Login.jsを作成
- App.jsに`import Login from './views/Login'`をインポートしておく
- Login.jsの雛形を作成
```js
import React, { Component } from 'react'
import './index.css';

class Login extends Component {
  render(){
    return(
      <div className="Login">
        <div className="Login-box">
          <button id="facebook">Facebook</button>
          <button id="google">Google</button>
        </div>
      </div>
    );
  }
}

export default Login;
```
- views/index.cssを作成してボタンにスタイリング
