function anna(a, b) {
  if (a.length != b.length) {
    return false
  }
  let has1 = {};

  for (i of a) {
    if (has1[i] > 0) {
      has1[i] = has1[i] + 1;
    } else {
      has1[i] = 1;
    }
  }
  for (let i = 0; i < b.length; i++){
    let letter = b[i];
    if (!has1[letter]) {
      return false
    } else {
      a[letter] -=1
    }
  }
  return true;
}
