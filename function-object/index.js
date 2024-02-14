function makeCounter() {
    function counter() {
        return ++value
    }
    counter.value = 0
    counter.set = (newValue) => counter.value = newValue
    counter.decrease = () => counter.value-=1
    return counter
}

function sum(val) {

    let currentSum = val;
  
    function f(newVal) {
      currentSum += newVal;
      return f;
    }
  
    f.toString = function() {
      return currentSum;
    };
  
    return f;
  }