const express = require('express');
const fs = require('fs');
const csv = require('csv');

const app = express();

const infoDatafilePath = 'info-data.csv';  //情報登録用ファイル
const fileHeader = ['Name', 'Age', 'Sex', 'PhoneNumber', 'PostalCode', 'StreetAddress'];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/form', (req, res) => {
  res.render('form.ejs');
});

app.get('/index', (req, res) => {
  fs.readFile(infoDatafilePath, 'utf8', (err, data) => {
    var readData = [];
    if (err) {
      res.render('index.ejs', {data: readData});
    } else {
      csv.parse(data, {columns: true}, (err, readData) => {
        res.render('index.ejs', {data: readData});
      });
    }
  });
});

app.post('/create', (req, res) => {
  const inputData = [
    req.body.name,
    req.body.age,
    req.body.sex, 
    req.body.phoneNumber,
    req.body.postalCode,
    req.body.streetAddress
  ];
  /* ファイルの存在確認を行う */
  fs.stat(infoDatafilePath, (err, stats) => {
    if (err) {
      /* ファイルが存在しない場合 */
      /* ファイルを新規作成する */
      fs.writeFile(infoDatafilePath, (fileHeader + "\r\n"), (err) => {});
    }
  });
  /* 入力された情報をファイルに出力する */
  fs.appendFile(infoDatafilePath, (inputData + "\r\n"), (err) => {
    res.redirect('/index');
  });
});

app.post('/index/delete', (req, res) => {
  /* ファイルを削除する */
  fs.unlink(infoDatafilePath, (err) => {
    res.redirect('/index');
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);