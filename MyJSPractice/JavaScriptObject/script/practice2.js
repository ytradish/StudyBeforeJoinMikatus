'use strict';

classAtomosphere();
classAtomosphere2();
classConcept();
staticMethod();
classExtend();

function classAtomosphere() {
  console.log('〇function classAtomosphere');

  const posts = [
    {
      text: 'JavaScriptの勉強中・・・',
      likeCount: 0.
    },
    {
      text: '色々構文がきもい',
      likeCount: 0.
    }
  ];

  function show(post) {
    console.log(`${post.text} - ${post.likeCount}いいね`)
  }

  show(posts[0]);
  posts[0].likeCount++;
  show(posts[0]);
}

function classAtomosphere2() {
  console.log('〇function classAtomosphere2');

  const posts = [
    {
      text: 'JavaScriptの勉強中・・・',
      likeCount: 0,

      // メソッド定義 : 構文の違いに注意
      show: function (post) {
        console.log(`${this.text} - ${this.likeCount}いいね`)
      },

      // メソッド定義省略形 ： こっちのほうが慣れた書き方に近い
      show2(post) {
        console.log(`${this.text} - ${this.likeCount}いいね`)
      },
    },
    {
      text: '色々構文がきもい',
      likeCount: 0.
    }
  ];

  posts[0].show();
  posts[0].likeCount++;
  posts[0].show2();
}

function classConcept() {
  console.log('〇function classConcept');

  // class定義 : オブジェクト内のメソッド定義と違って,がない
  class Post {
    // コンストラクタ定義
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }
    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`)
    }
    count() {
      this.likeCount++;
    }
  }  

  const postObject = new Post('これがクラスの書き方じゃい');
  postObject.count();
  postObject.show();
}

function staticMethod() {
  console.log('〇function staticMethod');

  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    static showInfo() {
      console.log('Post class version 1.0');
    }
  }

  Post.showInfo();
}

function classExtend() {
  class Parent {
    constructor(text) {
      // 上書きするぜ
      this.text = text;
    }
    show() {
      console.log(this.text);
    }
  }

  class Chiled extends Parent {
    constructor(text) {
      // superで明示的に指定しないと、継承元のコンストラクタが呼ばれない。
      super(text);
    }
  }

  new Chiled('できるかな？').show();
}