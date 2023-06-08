const  pascalMethod=function(name){
let splitedname=name.toLowerCase().split(" ");
let result="";
    for(i=0;i<splitedname.length;i++){
        result+=splitedname[i][0].toUpperCase() +splitedname[i].slice(1) + " ";
    }
    return result
}

const longestWord=function(word){
    let result=word.split(" ");
    let longest=result[0].length;
    let long=result[0];
    for(i=0;i<result.length;i++){
        if(result[i].length>longest){
            longest=result[i].length;
            long=result[i];
        }
    }
    return long;
}

// const alphapit=function(word){
//     let result=word.split("");
//     result.sort();
//     return result.join("");
// }

//or
const alphapit=function(word){
    let result=word.split("");
    for(i=0;i<result.length;i++){
        for(j=0;j<result.length;j++){
            if(result[j]>result[j+1]){
            let temp=result[j];
            result[j]=result[j+1]
            result[j+1]=temp;
            }
        }
    }
    return result.join("")
}

const randomNumbers=function(number){
    let array=[];
    for(i=0;i<number;i++){
        array[i]=Math.floor(Math.random()*10);
    }
    return array;
}

const nameOfMonth=function(){
    let date=new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()]
}
