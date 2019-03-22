'use strict';

// Заказчик
// Организатор
// Подписчики

class MyPromise {
  constructor(scenario) {
    this._status = 'waiting';
    this._result = null;
    this._successCallbacks = [];
    this._errorCallbacks = [];

    scenario(this._resolve.bind(this), this._reject.bind(this));
  }

  then(callback) {
    if (this._status === 'waiting') {
      this._successCallbacks.push(callback);
    } else if (this._status === 'success') {
      callback(this._result);
    }
  }

  catch(callback) {
    if (this._status === 'waiting') {
      this._errorCallbacks.push(callback);
    } else if (this._status === 'error') {
      callback(this._result);
    }
  }

  _resolve(data) {
    if (this._status !== 'waiting') {
      return;
    }

    this._status = 'success';
    this._result = data;
    for (let callback of this._successCallbacks) {
      callback(data);
    }
  }

  _reject(error) {
    if (this._status !== 'waiting') {
      return;
    }

    this._status = 'error';
    this._result = error;
    for (let callback of this._errorCallbacks) {
      callback(error);
    }
  }
}

// const promise = new Promise((resolve, reject) => {
//   document.body.onclick = () => {
//     resolve('OK');
//   };
//
//   setTimeout(() => {
//     reject('FAIL');
//   }, 2000)
// });


const leftPromise = new Promise((resolve) => {
  document.addEventListener('click', () => {
    console.log('left');
    resolve();
  });
});

const rightPromise = new Promise((resolve) => {
  document.addEventListener('contextmenu', () => {
    console.log('right');
    resolve();
  })
});

const keyPressPromise = new Promise((resolve) => {
  document.addEventListener('keypress', () => {
    console.log('key');
    resolve();
  })
});

const allPromise = Promise.all([leftPromise, rightPromise, keyPressPromise]);

allPromise.then(() => console.log('finished'));

const promise1 = fetch('/academies/super-academy');
const promise2 = fetch('/academies/super-asdasd');

let promise = promise1
    .then(() => promise2)
    .then((data) => fetch('/user/my-token'))

    //
    .then((data2) => 123)

;



Promise.all([
  fetch('/academies/super-academy'),
  fetch('/user/my-token'),
])
  .then((userId) => {
    return fetch('/course/userId');
  })
  .then(() => {
    return fetch('/user/12/course/123');
  })
;

