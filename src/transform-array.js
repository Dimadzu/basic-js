const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  throw new CustomError('Not implemented');
  let newArr=[];
if(arr instanceof Array){
  for(let i=0;i<arr.length;i++){
    switch(arr[i]){
      case '--discard-next':
        if(i!==arr.length-1){
        arr.splice(arr[i+1],1);
        newArr=arr;}else{newArr=arr}
        break;
      case '--discard-prev' :
        if(i!==0){
        arr.splice(arr[i-2],1);
        newArr=arr;}else{newArr=arr}
        break;
      case '--double-next':
          if(i!==arr.length-1){
          arr.splice(arr[i+1],0,arr[i+1]);
          newArr=arr;}else{newArr=arr}
          break;
      case '--double-prev':
            if(i!==0){
            arr.splice(arr[i-1],1,arr[i-1]);
            newArr=arr;}else{newArr=arr}
            break;      
     
        
        

    }
 
}
for(let n=0;n<=newArr.length;n++){
  if(newArr[n]===String(newArr[n])){
   newArr.splice(n,1);
}
}
return  newArr;
}else {return "error"}
};