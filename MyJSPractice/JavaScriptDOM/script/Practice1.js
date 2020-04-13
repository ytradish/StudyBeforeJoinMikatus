'use strict';

// setTimeout(HelloDOM, 1000);
// setTimeout(operateQuerySelector, 1000);
addEvent();
setClassProperty();
setCustomDataProperty();
createNode();
copyNode();
removeNode();
inputControl();
manyEvent();
formControl();
eventBubbleUp();

function HelloDOM() {
  // document.querySelector('h1').textContent = 'Hello'

  const targetNode = document.getElementById('targetH1');
  targetNode.textContent = 'Hello'
  targetNode.title = 'This is title';

  // cssへのアクセスもできるけど、cssの使い方として微妙なので非推奨。
  // targetNode.style.color = 'red';
  // targetNode.style.backgroundColor = 'skyblue';

  // #の使い方がよく分からないので問い合わせ中。
  // document.querySelector('#targetH1').textContent = 'Hello'
}

function operateQuerySelector() {
  // querySelectorは探索結果の先頭のみを制御する
  // document.querySelector('p').textContent = 'bye'

  // 全ての探索結果を制御する場合はquerySelectorAllで取得してから制御する
  document.querySelectorAll('p').forEach((p, index) => {
    p.textContent = 'bye' + index
  });
}

function addEvent() {
  document.querySelector('button').addEventListener('click', HelloDOM);
}

function setClassProperty() {
  document.querySelector('button').addEventListener('click', () => {
    // classNameの設定だと上書き更新になるので、事前定義されたstyleは上書きされる
    //document.getElementById('byeElement').className = 'my-color';

    // 両方定義すれば解決するけど、いちいち確認するのは効率が悪い
    // document.getElementById('byeElement').className = 'my-color my-border';

    // これでstyleの追加が実現できる
    // document.getElementById('byeElement').classList.add('my-color');

    // これでトグルにできる(toggle使った方がステップ数は減る)
    if (document.getElementById('byeElement').classList.contains('my-color')) {
      document.getElementById('byeElement').classList.remove('my-color');
    } else {
      document.getElementById('byeElement').classList.add('my-color');
    }
  });
}

function setCustomDataProperty() {
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    const element = document.getElementById('againElement');

    // data-translation属性(カスタムデータ属性)のアクセスは以下の通りになる
    element.textContent = element.dataset.translation;
  });
}

function createNode() {
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    const ulElement = document.querySelector('ul');
    const element = document.createElement('li');

    element.textContent = 'アイマショウ';

    ulElement.appendChild(element);
  });
}

function copyNode() {
  const btn = document.querySelector('button');
  btn.addEventListener('click', () => {
    const ulElement = document.querySelector('ul');
    const item0 = document.querySelectorAll('li')[0];

    // 複製。trueで中身もコピー。
    const copy = item0.cloneNode(true);

    // liの途中に追加したいので追加位置指定用に要素を取得
    const item2 = document.querySelectorAll('li')[2];

    // 途中にコピーしたノードを追加
    ulElement.insertBefore(copy, item2);
  });
}

function removeNode() {
  const btn = document.getElementById('delBtn');
  btn.addEventListener('click', () => {
    const ulElement = document.querySelector('ul');
    const itemCopy = document.querySelectorAll('li')[2];

    // removeは古いらしい
    // itemCopy.remove();

    ulElement.removeChild(itemCopy);
  });
}

function inputControl() {
  const btn = document.getElementById('addBtn');
  btn.addEventListener('click', () => {
    const ul = document.getElementById('listElement');
    const li = document.createElement('li');
    const text = document.querySelector('input');
    
    // 追加
    li.textContent = text.value;
    ul.appendChild(li);

    // 後始末
    text.value = '';
    text.focus();
  });
  
  const btn2 = document.getElementById('addBtn2');
  btn2.addEventListener('click', () => {
    const ul = document.getElementById('listElement2');
    const color = document.querySelector('select');
    const li = document.createElement('li');

    li.textContent = `${color.value} - ${color.selectedIndex}`;
    ul.appendChild(li);
  });

  const btn3 = document.getElementById('addBtn3');
  btn3.addEventListener('click', () => {
    const ul = document.getElementById('listElement3');
    const li = document.createElement('li');
    const radio1 = document.getElementById('radio1');
    const radio2 = document.getElementById('radio2');
    const radio3 = document.getElementById('radio3');
    
    if (radio1.checked === true) {
      li.textContent = radio1.value;
    } else if (radio2.checked === true) {
      li.textContent = radio2.value;
    } else if (radio3.checked === true) {
      li.textContent = radio3.value;
    }

    ul.appendChild(li);
  });

  const btn4 = document.getElementById('addBtn4');
  btn4.addEventListener('click', () => {
    const ul = document.getElementById('listElement4');
    const li = document.createElement('li');
    const checkbox1 = document.getElementById('check1');
    const checkbox2 = document.getElementById('check2');
    const checkbox3 = document.getElementById('check3');
    const selectedColors = [];

    if (checkbox1.checked === true) {
      selectedColors.push(checkbox1.value);
    }
    if (checkbox3.checked === true) {
      selectedColors.push(checkbox2.value);
    }
    if (checkbox3.checked === true) {
      selectedColors.push(checkbox3.value);
    }
    li.textContent = selectedColors.join('/');

    ul.appendChild(li);
  });
}

function manyEvent() {
  const btn = document.getElementById('addBtn5');
  btn.addEventListener('dblclick', () => {
    console.log('dblclick');
  });

  // document.addEventListener('mousemove', (e) => {
  //   console.log(`${e.clientX} / ${e.clientY}`);
  // });
  document.addEventListener('keydown', (e) => {
    console.log(`keydown = ${e.key}`);
  });

  const text = document.querySelector('textarea');
  text.addEventListener('focus', () => {
    console.log('focus');
  });
  text.addEventListener('blur', () => {
  // blur : focusが外れた時のイベント
    console.log('blur');
  });
  text.addEventListener('input', () => {
    console.log(`len = ${text.value.length}`);
  });
  text.addEventListener('change', () => {
    // change : 更新確定時のイベント
    console.log('change');
  });
}

function formControl() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    // submit直後にページ遷移が発生してリロードされるためので、preventDefaultでデフォルト動作を防止する
    e.preventDefault();
    console.log('submit');
    e.stopPropagation();
  });
}

function eventBubbleUp() {
  const ul = document.getElementById('bubbleList');
  ul.addEventListener('click', (e) => {

    // Event.target : イベントを発生させたオブジェクトへの参照を取得する
    // Node.nodeName : ノードの名前を文字列で返す
    if(e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
    }
  });
}