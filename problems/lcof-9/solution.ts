/**
 * 用两个栈实现一个队列。
 * 队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * (若队列中没有元素，deleteHead 操作返回 -1 )
 */
class CQueue {
  stackAdd = new Array<number>();
  stackDel = new Array<number>();
  constructor() {
    // this.stackAdd;
    // this.stackDel;
  }

  appendTail(value: number): void {
    this.stackAdd.push(value);
  }

  deleteHead(): number {
    if (this.stackDel.length > 0) {
      return this.stackDel.pop();
    } else if (this.stackAdd.length > 0) {
      while (this.stackAdd.length > 0) {
        this.stackDel.push(this.stackAdd.pop());
      }
      return this.stackDel.pop();
    }
    return -1;
  }
}

// Your CQueue object will be instantiated and called as such:
var obj = new CQueue();
obj.appendTail(1);
var param_2 = obj.deleteHead();

// function xxx(arr: number): number {
//   return 0;
// }

// import { testFunction } from '../../utils';
// const testcases = [];
// const expectedReults = [];
// testFunction(xxx, testcases, expectedReults);
