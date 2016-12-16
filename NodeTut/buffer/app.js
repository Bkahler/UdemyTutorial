var buffer = new Buffer("Hello", "utf8")

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[1]);

buffer.write("WH")
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[1]);