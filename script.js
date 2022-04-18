//Give an example for each of the following methods in Javascript//
const person = [
  {Ho: "Lưu", ten: "Vĩnh Toàn", tuoi: 22},
  {Ho: "Nguyễn", ten: "Văn A", tuoi: 21},
  {Ho: "Nguyễn", ten: "Văn B", tuoi: 23},
]

function getfullName(item) {
  return [item.Ho, item.ten].join(" ");
}
//map
let fullName = person.map(getfullName);
console.log(fullName);

//filter
let lonHon20Tuoi = person.filter(function (person) {
  return person.tuoi >20;
});
console.log(lonHon20Tuoi);

//reduce
const sumAge = person.reduce(function (sum, numAge){
  return  sum +numAge.tuoi;
},0);
console.log(sumAge);

//find
const checkLastName = person.find(function (person){
  return person.Ho == "Lưu"
})
console.log(checkLastName);

//some
const checkAge = person.some(function (person){
  return person.tuoi >22;
})
console.log(checkAge);

//Give an example for add a new element to an array[] (at the end)
Array = [1,2,3,4];
Array.push(5);
console.log(Array);

//Give an example for add a new element to an array[] (at the beginning)
Array.unshift(0);
console.log(Array);

//Give an example for removing an element in array[]
Array.splice(2,1);
console.log(Array);

//Exercise 1
var a = 5, b = 5, sum;
if (a == b) {
    sum = (a + b) * 3;
}else {
    sum = a + b;
}
console.log(sum);

//Exercise 2
function diff(number) {
  if(number <= 19){
    return (19 - number)
  }else return (number - 19) * 3;
}
console.log(diff(12));

//Exercise 3
function masked3(a) {
  var result = [];
  for (var i = 0; i <= 9; i++) {
    var newa = a.replace('*', i);
    if (parseInt(newa) % 3 == 0){
      result.push(newa);
    }
  }
  console.log('Result: ',result);
}
masked3('1234567890*');

//Exercise 4
function masked6(a) {
  var result = [];
  for (var i = 0; i <= 9; i++) {
    var newa = a.replace('*', i);
    if (parseInt(newa) % 6 == 0){
      result.push(newa);
    }
  }
  console.log('Result: ',result);
}
masked6('1234567890*');