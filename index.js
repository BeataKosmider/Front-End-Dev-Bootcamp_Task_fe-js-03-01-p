const modifyEverySecondElement = (arr) => {
  const modifiedArr = arr.map((item, index) => {
    if (index % 2 === 1) {
      return ++item;
    }
    return item;
  });
  return modifiedArr;
  // Zaimplementuj zadanie zgodnie z wytycznymi
};
module.exports = modifyEverySecondElement;
