
const divisible=(array)=>{
    let result={};
    for (let i = 1; i <=9; i++) {

        let element = 0;
        for (let j = 0; j < array.length; j++) {
           if (array[j] % i === 0) {
          element++
            
           }
            
        }
        result[i]=element
        
    }
    return result
}

let  array=[1,2,8,9,12,46,76,82,15,20,30]
console.log(divisible(array));
