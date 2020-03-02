# WebAppForProgTest
プログラミングテスト用Webアプリケーション

# Requirement

* node.js 12.16.1

# Installation

$ npm install csv@5.3.1  
$ npm install ejs@3.0.1  
$ npm install express@4.17.1  

# Usage

■アクセス方法

・ブラウザから<https://webappforprogtest.herokuapp.com/>にアクセス

または、  
・"npm start"コマンドでサーバーを起動  
・ブラウザから<http://localhost:8000/>にアクセス

■使用方法

・「登録フォーム画面へ」("/form")をクリックし、  
  氏名・年齢・性別・電話番号・郵便番号・住所を入力後、「送信」ボタンをクリックする。  
・「登録情報一覧」画面("/index")で、登録されている情報を確認する。  
・登録した情報を削除する場合、「登録情報一覧」画面("/index")で「登録情報消去」をクリックする。

※※※  
HEROKUの場合、「登録情報消去」を行った後に、登録フォームから情報を送信した場合、  
「登録情報一覧」画面("/index")アクセス時に"Internal Server Error"が発生するようになります。  
(未アクセス状態が暫く続くと、データが全て初期状態に戻るため、再度「登録情報一覧」画面へアクセスできるようになります。)  
ローカル環境の場合、この問題は発生しません。  
※※※  