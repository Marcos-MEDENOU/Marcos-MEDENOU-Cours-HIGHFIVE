/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array. */

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

function countPositivesSumNegatives(input) {
    return input && input.length ? input.reduce(function(p, c, i, s){
      c <= 0 ? p[1] += c : p[0] += 1;
      return p;
    }, [0, 0]) : [];
}

function countPositivesSumNegatives(input) {
    if (!input || input.length == 0) return [];
    var sum = 0, count = 0;
    input.forEach(function(el){ if (el > 0) count++; else sum+=el});
    return [count, sum];
  }