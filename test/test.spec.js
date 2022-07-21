import {MyClass} from '../src/app'
import $ from "jquery";

describe('just checking', function () {
  console.log('********* TEST STARTED *****');


  it('works for app', function () {
    console.log('App is', MyClass);

    document.body.innerHTML = __html__['src/template.html'];

    expect($('#1').text()).toBe('Element 1')
  });
});

