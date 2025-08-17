const test = Symbol();
const obj = {
  name: "test",
  age: 12,
  [test]: "check",
};
for (let val of Object.entries(obj)) {
  console.log(val);
}
