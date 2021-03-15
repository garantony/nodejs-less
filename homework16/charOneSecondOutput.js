const charOneSecondOutput = function(str) {

  for (let char of str) {
    setTimeout(function() {
      console.log(char);
    }, 1000)
  }
}

module.exports = charOneSecondOutput;
