var num = [5,6,8,7,5,4]
num.sort()
num[6]=10
num.push(5)
var pos=num.indexOf(20)
if (pos == -1){
    console.log('erro!')
}else{
       console.log(`o indice e ${pos}`)
}

console.log(`o vetor e ${num}`)
console.log(`comprimento do vetor e ${num.length}`)