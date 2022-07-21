import {MyClass} from '../src/app'
import $ from "jquery";

describe('just checking', () => {
  console.log('********* TEST STARTED *****');


  it('works for app', (done) => {
    console.log('App is', MyClass);

    document.body.innerHTML = __html__['src/template.html'];

    let obj = new MyClass();
    obj.changeDom();

    $('document').ready(() => {
      expect($('#1').text()).toBe('Element 1');
      expect($('#2').text()).toBe('My new div');
      done()
    })
  });
});

