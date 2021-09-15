// Varibales in JS

// var, it is a global and local varibale which can be globally reached, is reassignable and updated along with hoisting
// let, it is a block scope variable which can be accessed within the block of decalartion. is updatable but not reasignable.
// const, it is a block scope which can be accessed within the block of declaration and is not updatabel or reasignble. but differs in array and obj

// Hoisting in Javascript

// Arrays to String
const name = "Anish Sherchan";
let ArrayName = name.split(" "); // String to Array
console.log(ArrayName);
const newName = ArrayName.join(" "); // Array with no comma = output => Anish Sherchan .toString garyo bhani chai anish,sherchjan aaucha
console.log(newName);

// Coping Arrays
const Array = [1, 2, 3, 4, 5];
const Array2 = [...Array]; // Coping array using [...Arrayname]
console.log(Array2);
Array2.push("Anish"); // Pushing values into the array using .push()
console.log(Array2);

// Concating arrays
const concat1 = [1, 2, 3, 4, 5];
const concat2 = [6, 7, 8, 9];
const concatnum = [...concat1, ...concat2];
console.log(concatnum);

// Object
let mObj1 = {
  ame: "Anish Sherchan",
  Age: "20",
};
let mObj2 = {
  name: "Manish Bomzon",
  age: "22",
};
let mObj3 = { ...mObj1, ...mObj2 };
console.log(mObj3);

// Using Distructive for abstracting value from the array and objects
const client = "Manish bomb Bomzon";
let clientname = client.split(" ");
let [firstname, , lastname] = clientname;
console.log(firstname);
// similarly in objects
let obj1 = {
  name: "Manish Bomzon",
  age: "18",
};
let { age } = obj1; // key value pair must be same
console.log(age);

// .map funcation for Array and objects
// iterates for us through array and we pass callback function to perform any tas
const map = ["A", "B", "C"];
// using .map function
const A = map.map((Char) => {
  if (Char === "C") {
    console.log("I am C");
  }
});
const map2 = [1, 2, 3, 4, 5, 6];
const evenmap = map2.map((item) => {
  if (item % 2 == 0) {
    return item;
  } else {
    return 0;
  }
});
console.log(evenmap);

const newEven = [];
map2.map((item) => {
  if (item % 2 == 0) {
    newEven.push(item);
  }
});
console.log(newEven);

// shiting array by using .shift
newEven.shift();
console.log(newEven);
// using pop()
newEven.pop();
console.log(newEven);
// using push
newEven.push(6);
console.log(newEven);
// using unshift() for adding value at first
newEven.unshift(2);
console.log(newEven);
// helps in keeping the array with out modifing the original onces
console.log(newEven);
const spliceArray = newEven.slice(0, 2); // here staring number is included and ending number is not included
console.log(spliceArray);
//splice method for reoving or editing original array and also returns deleted numbers
newEven.push(10);
console.log(newEven);
const deleted = newEven.splice(2, 2);
console.log(newEven);
console.log(deleted);
// we can also add values in slice
newEven.splice(2, 0, 6, 7);
console.log(newEven);

// .sort function
const sort = ["A", "C", "E", "D", "B"];
sort.sort();
console.log(sort);
const string = sort.toString();
console.log(string);

// filtering array, helps in filtering the array\
const filter = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filtered = filter.filter((item) => {
  if (item % 2 == 0) {
    return item;
  }
});
console.log(filtered);

const objfil = [
  {
    name: "Anish Sherchan",
    age: "20",
  },
  {
    name: "Manish Bomzon",
    age: "18",
  },
];
const filobj = objfil.filter((objects) => {
  if (objects.age > 18) {
    return {
      name: objects.name,
      age: objects.age,
    };
  }
});
console.log(filobj);

// classes in ES6 and inheritance
class Tech {
  constructor(Company) {
    this.company = Company;
  }
}
class Level9 extends Tech {
  constructor(company) {
    super(company);
  }
  Greeting = () => {
    console.log("Hello Anish!");
    console.log(`Welcome to ${this.company}`);
  };
}
let a = new Level9("Level 9 tech");
a.Greeting();

let test = [1, 2, 2, 3];
test.splice(2, 1);
console.log(test);

// Bubble sorting
let bubble = [1, 5, 7, 8, 2, 3, 4, 9];
const sort1 = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
};
console.log(sort1(bubble));
let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};
console.log(bubbleSort(bubble));
console.log(bubble.length);
