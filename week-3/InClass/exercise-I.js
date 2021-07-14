let mixArr = [100,"iSMael",55,45,"sANyiA",66,"JaMEs","eLAmIn",23,"IsMael",67,19,"ElaMIN"];

let noNumberUpperS = mixArr.filter(name => typeof name === 'string') 
  .map(item => item.toUpperCase() + "!") 

console.log(noNumberUpperS);