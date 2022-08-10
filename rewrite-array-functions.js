let a =[10,30,50,20,60,];

function mypush(array,value){

    var length = array.length ;

    array[length] = value;

    return array ;

}
a = mypush (a , 10);
console.log(a);