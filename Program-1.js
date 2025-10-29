
 function calculator(a,b,operation){
   
    let result;
   a=parseFloat(a)
   b=parseFloat(b)
 switch(operation){
    case "Addition":
        result = a + b
        break;
    case "Substraction":
        result = a -b
        break
    case "Division":
        result= a / b
        break;
    case "Multiplication":
        result=a * b
        break;
    default:
       result="invalid operation"
 }
 return result

}

 console.log("addition:" ,calculator(3.5,5.9 ,"Addition") );
console.log(  "substraction:", calculator(4,6 ,"Substraction"));
console.log("division:", calculator(55,5 ,"Division"));
console.log( "multiplication:",calculator(3.5,5.9 ,"Multiplication"));
console.log( "multiplications:",calculator(3.5,5.9 ,"Multiplications"));

