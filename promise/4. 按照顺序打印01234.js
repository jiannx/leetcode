// 只能修改start函数去实现按照顺序打印01234。
/**
function start(id){
    //execute(id)
}
for (let i = 0; i < 5; i++) {
    start(i);
}
function sleep() {
    const duration = Math.floor(Math.random() * 500);
    return new Promise(resolve => setTimeout(resolve, duration));
}
function execute(id) {
    return sleep().then(() => {
        console.log("id", id);
  });
}   
//插一个题外话：execute函数转为async函数语义会更明确
//还是ES6牛逼
async function execute(id){
    await sleep();
    console.log("id", id);
}
 */

function start(id) {
  //execute(id)
  // 按顺序执行需要进行链式调用，如何获取到上一个promise是关键
  this.p = this.p
    ? this.p.then(() => execute(id))
    : execute(id);
}

for (let i = 0; i < 5; i++) {
  start(i);
}
function sleep() {
  const duration = Math.floor(Math.random() * 500);
  return new Promise(resolve => setTimeout(resolve, duration));
}
function execute(id) {
  return sleep().then(() => {
    console.log("id", id);
  });
} 