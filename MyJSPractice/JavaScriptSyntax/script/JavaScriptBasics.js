'use strict';

// 〇文字列編
console.log('〇文字列編');
console.log('Hello World');

// Escape Sequence : ダブルクォーテーションだと引用符(')がエラーにならない。シングルクォーテーションの場合はバックスラッシュでエスケープする。
// console.log('it's me!');
console.log("it's me!");
console.log('it\'s me!');

console.log('Hello' + '\t' + 'World');

// 〇計算編
console.log('〇計算編');

// 四則演算
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);

// べき乗
console.log(10 ** 3);

// JavaScriptは基本的に定数を定義して、必要に応じて変数を使うのが主流らしい。

// 〇定数編
console.log('〇定数編');
const price = 150;
console.log(price * 140);

// 〇変数編
console.log('〇変数編');
let price2 = 100;
console.log(price2 * 140);

let price3 = 500;
price3 += 1000;
console.log(price3 * 100);

price3++;
console.log(price3 * 100);

// 〇データ型編
console.log('〇データ型編');

// 型推論で値を入れないとundefinedになる。まあ普通やらないけど、やらないよね？
let newType1;
console.log(newType1);

// undefinedとnullは別物。前者は未定義で、後者はNULL。NULLは0を振られたリテラル
let newType2 = null;
console.log(newType2);

console.log(typeof ('Hello'));
console.log(typeof (5));
console.log(typeof (true));

// Trueだとundefinedらしい。型が見つからない⇒letと判断⇒値未定義っていう流れ？
//console.log(typeof(True));
console.log(typeof (undefined));

// 〇データ型編2
console.log('〇データ型編2');

// これで計算できちゃう
console.log('5' * 3);
console.log('5' - 3);

// これは文字列結合と判断される。
console.log('5' + 3);

// Parseすればおｋ
console.log(parseInt('5', 10) + 3);

// これはNaN
console.log(parseInt('Hello', 10) + 3);

// 〇比較演算子編
console.log('〇比較演算子編');

const comp = 100;
console.log(comp > 1000);
console.log(comp === 1000);
console.log(comp !== 1000);

// false = 0 or null or undefined or '' or false
// true = それ以外
console.log(Boolean(0));

// 〇if文編
console.log('〇if文編');

// ifの改行とスペース挿入位置はこれが基本のよう。
const score = 85;
if (score > 80) {
  console.log('Great!');
} else {
  console.log('oh...');
}

let score2 = (score > 90) ? 'Great!' : 'oh...';
console.log(score2);

// 三項演算子で値を戻さない方式。こんなの書いたことないな。
(score2 > 90) ? console.log('Great!') : console.log('oh...')

const score3 = 60;
const name = 'taguchi';


if (score >= 50) {
  if (name === 'taguchi') {
    console.log('Good job!');
  }
}

// AND = && 
// OR = ||
// NOT = !
if (score >= 50 && name === 'taguchi') {
  console.log('Good job!2');
}

// 〇switch文編
console.log('〇switch文編');

const signal = 'red';

switch (signal) {
  case 'red':
    console.log(signal);
    break;
  case 'yellow':
    console.log(signal);
    break;
  case 'blue':
    console.log(signal);
    break;
  default:
    console.log(signal);
    break;
}

// 〇for文編
console.log('〇for文編');

for (let i = 0; i < 10; i++) {
  //console.log('hello' + i);
  
  // Template Literal : Shift+@でバッククォート。変数、式を使える。タグ付きテンプレートリテラルというもう少し高度な書き方もある。
  console.log(`hello ${i}`);
}

// 〇while文編
console.log('〇while文編');

let hp = 100;

while (hp > 0) {
  console.log(`${hp} HP left!`);
  hp -= 15;
}

let hp2 = -50

do {
  console.log(`${hp2} HP left!2`);
  hp -= 15;
} while (hp2 > 0)

// 〇continue&break文編
console.log('continue&break');

for (let i = 0; i < 10; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);

  if (i === 8) {
    break;
  }
}