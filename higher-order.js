function addToFunction(func, add) {
    function updatedFunc(...args) {
      let val = func(...args) + add;
      console.log(val);
      return val;
    }
    return updatedFunc;
}

function multiplyBy3(x) {
    return x * 3;
}

function addTwo(x, y) {
    return x + y;
}

let updatedFunction = addToFunction(multiplyBy3, 2),
    secondUpdatedFunction = addToFunction(addTwo, 3);

updatedFunction(3)
secondUpdatedFunction(3, 3);

function loopThrough(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function recurseThrough(arr, ind) {
  if (ind === arr.length) {
    return;
  } else {
    console.log(arr[ind]);
    recurseThrough(arr, ind + 1);
  }
}

let arr = [1, 2, 3, 4, 5];

loopThrough(arr);
recurseThrough(arr, 0);
