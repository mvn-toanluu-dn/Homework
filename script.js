/*Define a variable*/
const MAX_SIZE = 25 * 1024 * 1024;
  let title = 'Hello World'; 
  title = 'Hello ES6';
  // "Let and Const – What's the Difference?"
  // `Let cho phép cập nhật giá trị biến chứ không cho phép tái khai báo lại biến đó. 
  // 'Const không thể tái khai báo hay cập nhật giá trị của biến nhưng có thể cập nhật giá trị cho thuộc tính của biến đó.`

/*String Interpolation*/
const user = { name: 'David' };
  const card = { amount: 7, product: "Bar", unitprice: 42 };
  const message = `Hello ${user.name} want to buy ${card.amount} ${card.product} for a total of ${(card.amount * card.unitprice)} bucks?`; 
console.log(message);

/*Rest Parameter*/
function foo(x, y) {
  const a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
};
foo(1, 2, 'hello', true, 7) === 9;
console.log(foo(1,2,'hello',true,7));

/*Default Parameter Values*/
function sum(x, y, z) {
  if (y === undefined) {
    y = 7;
  }
  if (z === undefined) {
    z = 42;
  }
  return x + y + z;
};
const number = sum(1);
console.log(number);

/*Arrow Functions*/
  const evens = [1,2,3,4,5,6];
  const odds = evens.map(v =>  v + 1 );
  console.log(odds);
  const pairs = evens.map(v => ({even: v, odd: v + 1}));
  const nums = evens.map((v, i) =>  v + i);
  console.log(nums);
  const fives = [];
  nums.forEach = (v) => { 
    if (v % 5 === 0) { 
      fives.push(v);
    }
    };
  console.log(fives);

/*Classes */
  class Shape {
    constructor (id, x, y) {
      this.id = id;
      this.move(x, y);
    }
    move(x, y) {
      this.x = x;
      this.y = y;
    }
  }

/*Promise*/
  function msgAfterTimeout (msg, who, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
    })
}
  msgAfterTimeout("", "Foo", 100).then((msg) =>
    msgAfterTimeout(msg, "Bar", 200)
  ).then((msg) => {
    console.log(`done after 300ms:${msg}`)
})

/*Loop*/
/*for...of*/
let array = [1,2,3,4];
for(let i of array) {
  console.log(i);
}

/*findIndex*/
const num = [1,2,3,4];
let first = num.findIndex(x => x >= 3);
console.log(first);