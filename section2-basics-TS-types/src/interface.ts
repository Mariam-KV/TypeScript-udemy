interface Rectangle {
  readonly id: string; //can’t change
  color?: string; // not obligatory (but if we use - only the same type)
  size: {
    width: number;
    height: number;
  };
}
let rect1: Rectangle = {
  id: "ff",
  size: {
    width: 24,
    height: 32,
  },
};
let rest2 = {} as Rectangle;

//Extending interface

interface ext extends Rectangle {
  name: string;
}

class rect3 implements Rectangle {
  id: string;
  size: { width: number; height: number };
  constructor(id: string, size: any) {
    this.id = id;
    this.size = size;
  }
}
let g = new rect3("dsf", { width: 4, height: 4 });
console.log(g);
