const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  throw new CustomError('Not implemented');
  let catsArr=[];
  for(let i=0;i<matrix.length;i++){
    for(let j=0;j<matrix.length;j++){
      if(matrix[i][j]=='^^') catsArr.push(matrix[i][j]);
    }
  }
  return Number(catsArr.length);
  
};
