
function number(num){
    let data =[];
    let result;
    if(num % 2 === 0 )
    {
     result = num -1 
    }else{
        result = num
    }
    for(let i = 0; i < result; i++){
       data.push(2 * i + 1)
    }

    return data.join(', ')
}
console.log(number(1));
console.log(number(2));
console.log(number(3));
console.log(number(4));
console.log(number(5));
console.log(number(6));
console.log(number(7));




