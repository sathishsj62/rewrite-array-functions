let d  = [10,20,30,40,50,];

function myShift(array){
    let newArray=[]
    for(let i=0; i<array.length-1 ; i++){
      newArray[i] = (array [i+1]);
       
    }
    return newArray;
}
 d = myShift(d)
 console.log(d);
 