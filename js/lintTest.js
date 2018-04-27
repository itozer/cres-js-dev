var test = (function() {
  'usestrict';

  var obj, obj2;

  var notUsed;

  var what;
  what = 'im making a change';

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  obj = {
    test: 'test',
  };

  obj2 = {
    key1: [1, 2, 3, 4],
    key2: {
      blah: 'blah',
      blah2: 'blahh',
      test: 'test',
    },
    name: 'isaac',
  };

  obj2.test2 = obj.test2;

  const testArr = [1, 2, 3, 4, 5, 6];
  // spread syntax
  console.log(...testArr);
  console.log(testArr);

  // destructoring
  const [a, b] = testArr;
  console.log(a);
  console.log(b);

  const { key1, key2 } = obj2;
  console.log(key1);
  console.log(key2);

  // template literals
  console.log(`hi, my name is ${obj2.name}`);
  // console.log(`hi, my name is ${ob.name}`);

  // arrow function expressions
  const dogs = ['Rocket', 'Cody', 'Caleb'];
  // old way
  const dogOld = dogs.map(function(dog) {
    return dog + ' Dog';
  });
  console.log(...dogOld);
  // new way
  const dogNew = dogs.map(dog => `${dog} Dog`);
  console.log(...dogNew);

  ready(() => {
    const inner = document.getElementById('p7').innerHTML;
    const value = document.getElementById('p7').nodeValue;
    console.log(inner);
    console.log(value);

    const p = document.createElement('p');
    p.appendChild(document.createTextNode('This is a new text node, yee'));
    document.getElementById('wrapper').appendChild(p);
  });
})();
