function findUniquePairs(arr, k) {
  let pairs = {},
      res = [];

  for (let i = 0; i < arr.length; i++) {
    let x = arr[i], y = k - x;
    if (!pairs[y]) {
      pairs[y] = x;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    let num = arr[j];
    if (pairs[num]) {
        let min = Math.min(num, pairs[num]), max = Math.max(num, pairs[num]),
            pair = [min, max];

        pairs[min] = false;
        pairs[max] = false;
        res.push(pair);
    }
  }

  return res;
}

function findUniqueTriplets(arr, k) {
  let triplets = {},
      count = {},
      res = [],
      exists = {};

  for (let i = 0; i < arr.length - 1; i++) {
    let num = arr[i];
    addCount(num);
    for (let j = i + 1; j < arr.length; j++) {
      secondNum = arr[j];
      addCount(secondNum);
      let missing = k - (num + secondNum);
      if (triplets[missing]) {
        triplets[missing].push([Math.min(num, secondNum), Math.max(num, secondNum)]);
      } else {
        triplets[missing] = [Math.min(num, secondNum), Math.max(num, secondNum)];
      }
    }
  }

  function addCount(num) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  for (let k = 0; k < arr.length; k++) {
    let third = arr[k], result = [];
    if (triplets[third]) {
      count[third]--;
      triplets[third].forEach((pair) => {
        let first = pair[0], second = pair[1];
        if (count[first]) {
          count[first]--
        } else {
          count[third]++;
          return;
        }
        if (count[second]) {
          count[second]--
        } else {
          count[third]++;
          count[first]++;
          return;
        }
        res.push(insertionSort([first, second, third]))
      });
    }
  }

  function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      sort(arr, i);
    }
    return arr;
  }

  function sort(arr, i) {
    if (i !== 0) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        sort(arr, i - 1);
      }
    }
  }

  return res;
}


console.log(findUniquePairs([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 5))
console.log(findUniqueTriplets([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5], 5))
