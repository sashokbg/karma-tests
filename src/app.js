import $ from "jquery";

export class MyClass {
  constructor() {
    console.log('MY CLASS');
    console.log('JQUERY', $);
  }

  calc(a, b) {
    return a + b;
  }
}
