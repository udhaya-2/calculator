let currentvalue = '';
let perivious= null;
let operators=null;
function updatevalue(value){
    currentvalue+=value
    updatevalues(currentvalue);
}
function updatevalues(value){
    document.querySelector("input").value =value
}
function operator(event){
     op = event.target.dataset.num;
     operators=op
     perivious= currentvalue
     currentvalue=''
     document.querySelector("input").value =''
}
function calculator(){
   if(operators==null || perivious==null|| currentvalue=='')return;
   const num1 =parseFloat(perivious)
   const num2 =parseFloat(currentvalue)
   let result ;
   switch(operators){
    case '+':
        result = num1+ num2
    break;
    case '-':
        result =num1-num2;
    break
    case '*':
        result =num1*num2;
    break
    case '/':
        result =num1/num2;
    break
    default:
        result;
   }
   perivious = null
   currentvalue = ''
   operators=null
   document.querySelector("input").value=result
}
function clearnum(){
    currentvalue ="";
    operators =null;
    perivious =null;
    updatevalue("")
}



