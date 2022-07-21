import $ from "jquery";

export class MyClass {
  constructor() {
    console.log('MY CLASS');
    console.log('JQUERY', $);
  }

  calc(a, b) {
    return a + b;
  }

  changeDom() {
    $('document').ready(() => {
      let htmlDivElement = document.createElement('div');
      htmlDivElement.textContent="My new div"
      htmlDivElement.id = "2"
      document.body.appendChild(htmlDivElement)
    })
  }
}
