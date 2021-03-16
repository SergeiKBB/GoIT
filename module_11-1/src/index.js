import './tasks.js';
import './styles.css';


const arr = [10, 12, 15, 21];


const makeClosure = function(index) {
  return function () {
    console.log('Index: ' + index + ', element: ' + arr[index]);
  }
}

for (var i = 0; i < arr.length; i++) {
  /* i = 0
  * function(index) { index = 0
      return function () {
        console.log('Index: ' + 0 + ', element: ' + 10);
      }
    }
   const timeout1 = setTimeout(makeClosure(0), 3000)
  * */

  /* i = 1
  * function(index) { index = 1
      return function () {
        console.log('Index: ' + 1 + ', element: ' + 12);
      }
    }
   const timeout2 = setTimeout(makeClosure(1), 3000)
  * */

  /* i = 2
  * function(index) { index = 2
      return function () {
        console.log('Index: ' + 2 + ', element: ' + 15);
      }
    }
   const timeout3 = setTimeout(makeClosure(2), 3000)
  * */
  // setTimeout(makeClosure(i), 3000);
}
//
// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }
//
// {
//   let i = 0
//   setTimeout(function () {
//     console.log('Index: ' + 0 + ', element: ' + arr[i]);
//   }, 3000);
// }
//
// {
//   let i = 1
//   setTimeout(function () {
//     console.log('Index: ' + 1 + ', element: ' + arr[i]);
//   }, 3000);
// }
//
// {
//   let i = 2
//   setTimeout(function () {
//     console.log('Index: ' + i + ', element: ' + arr[i]);
//   }, 3000);
// }

const user = {
  combineName: 'SerhiiKhomych',
  getName() {
    console.log(this.combineName)
    return this.combineName;
  }
}

setTimeout(user.getName.bind(user), 1000);


