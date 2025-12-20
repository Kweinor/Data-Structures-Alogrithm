let N=5
let sum=0
for (let i=0; i<=N; i++){
    sum=sum+i
}
console.log(`sum of 1 to ${N} is ` , sum)


console.log("--------------")


let even=0
let odd=0
const arr= [2,5,4,7,5,6,1,2,8]
for(let i=0; i<arr.length; i++){
    if(arr[i]% 2===0){
        even++
    }
    else odd++
}
console.log("number of even =", even)
console.log("number of odd =", odd)


console.log("--------------")



let largest=0
//const array= [2,5,4,7,5,6,1,2,8]
function largestNum(array){
    for(let i=0; i<array.length; i++){
        if(array[i]>largest){
            largest=arr[i]
        }
    }
    console.log("largest number =", largest)
}
largestNum([2,5,4,7,5,6,1,2,8])



console.log("--------------")



let positive=[];
const integers= [2,5,4,-7,5,6,-1,2,-8]
for(let i=0; i<integers.length; i++){
    if(integers[i]>0){
        positive.push(integers[i])
    }
}
console.log("positive numbers =", positive)



console.log("--------------")



let num=0;
let value=5
const numbers= [2,5,4,7,5,6,1,2,8]
for(let i=0; i<numbers.length; i++){
    if(numbers[i]==value){
        num++
    }
}
console.log(`Number of appearance of ${value} is`, num)



console.log("--------------")



let Odd = [];
function oddNumbers(A,B){
for(let i=A; i<=B; i++){
    if(i% 2===1){
        Odd.push(i)
       
    }
}
 console.log("The Odd numbers are:", Odd)
}
oddNumbers(1,10)