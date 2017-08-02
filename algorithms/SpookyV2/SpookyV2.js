var buffer = new ArrayBuffer(16);

var int32View = new Int32Array(buffer);

for (var i = 0; i < int32View.length; i++) {
  int32View[i] = i * 2;
}

console.log(buffer)