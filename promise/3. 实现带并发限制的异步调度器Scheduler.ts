/**
实现带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。
class Scheduler{
    constructor(){
	
    }
    add(promiseCreator){
        //code
    }
    //...
}
const timeout = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.start();
// output:2 3 1 4

作者：Liqiuyue
链接：https://juejin.cn/post/6868898917950423054
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

class Scheduler {
  private tasks: Array<() => Promise<void>> = [];
  private maxCount = 2;
  constructor() {
  }
  add(fn: () => Promise<void>) {
    this.tasks.push(fn);
  }
  start() {
    while (this.tasks.length > 0 && this.maxCount > 0) {
      this.maxCount--;
      const promise = this.tasks.shift();
      promise!().then(() => {
        this.maxCount++;
        this.start();
      });
    }
  }
}

const timeout = (time: number) =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();

const addTask = (time: number, order: any) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
};
addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
scheduler.start();