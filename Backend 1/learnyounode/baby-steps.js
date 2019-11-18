
let sum = process.argv.reduce((total,value)=>{
    if(!isNaN(Number(value))) {
        return total + Number(value);
    }
    return total;

},0);
console.log(sum);