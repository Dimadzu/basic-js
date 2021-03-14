const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  throw new CustomError('Not implemented');
  let arrName=[];
  let text='';
  for (let i=0;i<array.length;i++){
    if(array[i]===String(array[i])) arrName.push(array[i])
  }
  let updateText=arrName.join(" ").trim().split(" ");
  updateText.sort(function(a,b){
    return (a>b) ? 1 : -1;
  })

  for(let n=0;n<updateText.length; n++){
    text+= updateText[n].substr(0,1);
    
  }
  return text.toUpperCase()

};
