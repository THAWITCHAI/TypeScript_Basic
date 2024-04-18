export function sayHello(word:string){
    console.log(word)
}
export function Calculator(num1:number,operator:string,num2:number){
    if(operator==='+'){
        console.log(num1+num2)
    }else if(operator==='-'){
        console.log(num1-num2)
    }else if(operator==='*'){
        console.log(num1*num2)
    }else if(operator==='/'){
        console.log(num1/num2)
    }
}