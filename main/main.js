module.exports = function main(num) {
  var total = 0;
  for (var single of num){
    total += parseInt(single);
  }
  return total;
};
