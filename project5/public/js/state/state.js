export function State() {
  this.state = [];
  this.listeners = [];
}

State.prototype = {
  reset() {
    this.listeners = [];
  },
  addEventListener(listener) {
    this.listeners.push(listener);
  },
  notify(data, dbstate) {
    //수정한 부분***********
    this.state = { edges: data, dbState: dbstate }; // 수정한 부분**********
    console.log(this.state);
    this.listeners.forEach((listener) => listener()); //state를 듣고있는 애들(컴포넌트)한테 현재상태를 전달해줌
  },
};
