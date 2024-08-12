console.log("script start");
async function async1() {
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2 end");
}
async1();
setTimeout(function () {
  console.log("setTimeout");
}, 0);
new Promise(resolve => {
  console.log("Promise");
  resolve();
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("script end");

//script start / async2 end / promise / script end/  async1 end / promise1 / promise2 / setTimeout
// 注意async函数里await右边的语句会立即执行，下面的代码进行等待状态，await返回值以后才会继续执行下一条语句。