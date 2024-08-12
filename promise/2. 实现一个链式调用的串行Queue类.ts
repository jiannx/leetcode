/**
// 实现一个链式调用的串行Queue类
new Queue()
  .task(1000, () => {
    console.log(1)
  })
  .task(2000, () => {
    console.log(2)
  })
  .task(1000, () => {
    console.log(3)
  })
  .start() //调用start后才可以开始

作者：Liqiuyue
链接：https://juejin.cn/post/6868898917950423054
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

class Queue {
  private tasks: Array<() => Promise<any>> = [];
  constructor() { }
  task(time: number, fn: () => void) {
    this.tasks.push(() => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          fn();
          resolve();
        }, time);
      });
    });
    return this;
  }
  start() {
    let runner = Promise.resolve();
    this.tasks.forEach((fn) => {
      runner = runner.then(fn);
    });
  }
}

new Queue()
  .task(1000, () => {
    console.log(1)
  })
  .task(2000, () => {
    console.log(2)
  })
  .task(1000, () => {
    console.log(3)
  })
  .start();
