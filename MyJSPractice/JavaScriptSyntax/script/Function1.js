'use strict';

// 引数定義に型を定義したらコンパイルエラーになった。なんて言語だ！というか型宣言したらコンパイルエラーになった。え？？
// 調べたらJavaScriptは動的型付けの言語だから型宣言しないらしい。なるほど。
function showLog(p1 = 'def') {
  console.log(`aa${p1}bb`);
}

// returnの型定義もない。なんて言語だ！！
// 調べたらJavaScriptは動的型付けの言語だから型宣言しないらしい。なるほど。
function sum(a, b, c) {
  return a + b + c;
}

for (let i = 0; i < 10; i++) {
  showLog('---  --');
}

console.log(sum(10, 20, 10));

// 関数式 : 関数名を定義せず、定数に関数を代入する、最後はセミコロンを付ける
const constFunc = function(a, b, c)
{
  return a + b + c;
};

console.log(constFunc(10, 20, 10));

// アロー関数 : 関数式よりさらにコンパクト、中括弧も省略できる、引数が1つなら引数の括弧すら消せる
const arrowFunc = (a, b, c) => {
  return a + b + c;
};
// const arrowFunc = (a, b, c) => a + b + c;
console.log(arrowFunc(10,10,10));

const arrowFunc2 = param => console.log(param);
arrowFunc2(100);

// 変数スコープ：
//  function外で定義するとグローバルスコープになる。ファイルを分けてもグローバルスコープ範囲内になる(クラス・名前空間などが変わるわけではないらしい)
//  function内で定義すると関数スコープ
//  ifなどブロック内で定義するとブロックスコープ
function f() {
  const x = 1;
  console.log(x);
}

f();

// こうやってブロックスコープにすることもできる。※arrowFuncは上の方で定義済み
{
  const arrowFunc = param => console.log(param);
  arrowFunc('aaa');
}
