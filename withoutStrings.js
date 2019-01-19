function withoutString(x, y) {
  let i = 0, j = 0;

  while (i < x.length) {
    if (x[i] === y[j]) {
      while (x[i + j] && x[i + j] === y[j]) {
        j++;
      }
      if (y.length === j) {
        x = x.slice(0, i) + x.slice(i+j);
      }
      j = 0;
    }
    i++;
  }
  return x;
}

function withoutStringBrute(x, y) {
  let i = 0, j = 0;

  while (i < x.length) {
    if (x[i] === y[j]) {
      while (x[i + j] && x[i + j] === y[j]) {
        j++;
      }
      if (y.length === j) {
        x = x.slice(0, i) + x.slice(i+j);
      }
      j = 0;
    }
    i++;
  }
  return x;
}


withoutString("Hello there", "llo")
withoutString("Hello there", "e")
withoutString("Hello there", "x")
