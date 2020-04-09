'use strict';

updateArray();
showArray();
updateArray2();
spreadArray();
restArray();
foreachArray();
mapArray();
fileterArray();
createObject();
operateObject();
listupObjectProperty();
variableOperate();
stringOperate();
arrayOperate();
dateOperate();

function updateArray() {
  console.log('〇function updateArray');
  // 配列の定義方法
  const scores = [80, 90, 40];

  // アドレスとかオブジェクト名ではなく、内部パラメータをログ出力する
  console.log(scores);

  // 値へのアクセス
  console.log(scores[1]);

  // const定義に値を挿入している点に注目。constはそのものを再代入できないけど、配列の中身を再代入することはできる。
  scores[2] = 22;
  console.log(scores[2]);
  console.log(scores.length);
}

function showArray() {
  console.log('〇function showArray');
  const scores = [80, 90, 40];

  // console.log(`Score: ${scores[0]}`);
  // console.log(`Score: ${scores[1]}`);
  // console.log(`Score: ${scores[2]}`);
  for (let i = 0; i < scores.length; i++) {
    console.log(`Score${i}: ${scores[i]}`);
  }
}

function updateArray2() {
  console.log('〇function updateArray2');
  const scores = [80, 90, 40];

  scores.unshift(0);
  scores.push(33);

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score${i}: ${scores[i]}`);
  }

  scores.shift();
  scores.pop();

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score${i}: ${scores[i]}`);
  }

  // Array.prototype.splice() : 配列の内容を変更
  scores.splice(1, 1);

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score${i}: ${scores[i]}`);
  }

  // 途中へ追加
  scores.splice(1, 0, 90);

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score${i}: ${scores[i]}`);
  }
}

function spreadArray() {
  console.log('〇function spreadArray');
  const otherScores = [10, 20];

  // こんな書き方でも追加できる。この書き方だと要素4にotherScoresの配列が入る。
  const scores1 = [80, 90, 40, 70, otherScores];

  // スプレッド構文 : ...を付けると、iterable オブジェクトを渡す。
  // この書き方だとotherScoresを展開して渡す。つまり値を追加してくれる
  const scores2 = [80, 90, 40, 70, ...otherScores];

  console.log(scores1)
  console.log(scores2)

  // スプレッド構文で引数指定する書き方。需要あるのかな？
  function sum(a, b) {
    console.log(a + b);
  }

  sum(...otherScores);
}

function restArray() {
  console.log('〇function restArray');

  // 配列を別定数に代入する書き方。
  // シンプルな構文で良い感じだけど使う機会あるかな？
  const scores = [80, 90, 40, 70];
  const [a, b, c, d] = scores;
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);

  // レスト構文 : 複数の要素を集約して 1 つのオブジェクトにまとめる
  // スプレッド構文の対の存在
  const [e, f, ...others] = scores;
  console.log(e);
  console.log(f);
  console.log(others);

  // 分割代入で値の交換処理
  // こりゃいい。
  let x = 30;
  let y = 70;
  [x, y] = [y, x];
  console.log(x + '/' + y)
}

function foreachArray() {
  console.log('〇function foreachArray');
  const scores = [80, 90, 40, 70];

  // foreachはC#と前々違う。構文じゃなくてメソッドとして存在している。
  scores.forEach((score) => {
    console.log(score);
  });

  scores.forEach((score, i) => {
    console.log(`score ${i} : ${score}`);
  });
}

function mapArray() {
  console.log('〇function mapArray');
  const scores = [80, 90, 40, 70];

  // Array.prototype.map() : 配列のすべての要素を呼び出して新たに配列を生成する。ビルトインオブジェクトのMapとは別なことに注意。
  const updateScores = scores.map(param => param += 20);

  console.log(scores);
  console.log(updateScores);
}


function fileterArray() {
  console.log('〇function fileterArray');
  const scores = [1, 4, 7, 8, 10];

  // Array.prototype.filter() : 引数として与えられたテスト関数を各配列要素に対して実行し、合格した配列要素からなる新しい配列を生成する。
  const evenNumbers = scores.filter((number) => {
    return (0 === number % 2) ? true : false;
  });

  // 短縮系の訓練
  const evenNumbers2 = scores.filter(number => (0 === number % 2) ? true : false);

  console.log(scores);
  console.log(evenNumbers);
  console.log(evenNumbers2);
}

function createObject() {
  console.log('〇function createObject');
  // pointという名前のオブジェクトを生成
  const point = { x: 100, y: 180 };
  console.log(point);

  // プロパティへのアクセスは書き方が2つある
  point.x += 1;
  point['y'] += 1;
  console.log(point);

  // プロパティを追加したり削除したりできる。これがプロトタイプベースオブジェクト指向と呼ばれる言語特性。
  point.z = 90; // これだけで追加できちゃう。でもこれはバグの温床になる気しかしない。
  delete point.y;
  console.log(point);
}

function operateObject() {
  console.log('〇function operateObject');
  const point = {
    x: 100,
    y: 180
  };

  // スプレッド構文も使える
  const newPoint = {
    r: 4,
    color: 'red',
    ...point
  };
  console.log(point);
  console.log(newPoint);

  // 分割代入、レスト構文もできる
  const { x, r, ...other } = newPoint;
  console.log(x);
  console.log(r);
  console.log(other);

  // クラスがヌルヌル変わるのでホント気持ち悪い。
}

function listupObjectProperty() {
  console.log('〇function listupObjectProperty');
  const point = {
    x: 100,
    y: 180
  };

  // プロパティkeyを取得する
  const keys = Object.keys(point);

  // オブジェクトに対してプロパティKeyでアクセスして、プロパティバリューを取得する
  keys.forEach(key => console.log(`Key: ${key} / Value: ${point[key]}`));

  // 配列に複数個のオブジェクトを定義する例
  const points = [
    { x: 30, y: 20 },
    { x: 10, y: 30 },
    { x: 70, y: 60 },
  ];
  console.log(points[0].x);
  console.log(points[1].y);
  console.log(points[2].x);
}

function variableOperate() {
  console.log('〇function variableOperate');
  {
    // 基本型なのでメモリ上で別々に配置される。
    let x = 1;
    let y = x;
    x = 5;
    console.log(`${x}/${y}`);
  }

  {
    // 配列だとyはxのアドレスを保持する。つまり配列は参照型。
    let x = [1, 2];
    let y = x;
    x[0] = 5;
    console.log(`${x}/${y}`);
  }
  
  {
    // スプレッド構文はiterable オブジェクトを渡すものなので、yは参照型にはならない
    let x = [1, 2];
    let y = [...x];
    x[0] = 5;
    console.log(`${x}/${y}`);
  }
}

function stringOperate() {
  console.log('〇function stringOperate');
  const str = 'hello';

  console.log(str.length);
  console.log(str.substring(2, 4));
  console.log(str.length);
}

function arrayOperate() {
  const d = [2019, 11, 14];
  console.log(d.join('/'));

  const t = '17:08:24';
  console.log(t.split(':'));

  // 分割代入例
  const [hour, minute, second] = t.split(':');
  console.log(hour);
  console.log(minute);
  console.log(second);

  const scores = [10, 3, 9];

  // letで初期値定義をしない場合、計算結果がNaNになる。どういう型判定してるのやら・・
  let sum = 0;
  scores.forEach( score => {
    sum += score;
  });

  console.log(`sum:${sum}`);
  console.log(`average:${Math.floor(sum/scores.length)}`);
  console.log(`average:${Math.ceil(sum/scores.length)}`);
  console.log(`average:${Math.round(sum/scores.length)}`);

  //console.log(`${Math.random()}`);
  //console.log(`${Math.floor(Math.random()*100)}`);

  console.log(Math.floor(Math.random() * 6) + 1);
}

function dateOperate() {
  const d = new Date();
  console.log(d);

  console.log(`${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`);

  // 時間情報はgetTimeを使うと世界共通時刻形式になる。

  const d2 = new Date(2019, 10, 2);
  console.log(d2);

  d2.setHours(11, 22, 33);
  console.log(d2);
  d2.setDate(d2.getDate() + 10);
  console.log(`${d2}`)
}