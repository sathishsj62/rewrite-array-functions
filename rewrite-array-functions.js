let a =[10,30,50,20,60,];

function mypush(array,value){

    var length = array.length ;

    array[length] = value;

    console.log(array[length]);

    return array ;

}
a = mypush (a , 10);
console.log(a);


// pop //
let b = [10,30,50,20,60,10]

function mypop (array){
    let newArray =[];
    for(let i=0; i<array .length-1 ; i++){
        newArray[i] =array [i];
       
    }
    return newArray;
}
b=mypop(b);
console.log(b);


