// throtalling


  const xonter=()=>{
      console.log("Changing some points")
  };

 const throtalling=(fun,limit)=>{
   
    let flag=true;
    return function(...arguments){
       
if(flag){
    
    flag=false;
}

      setTimeout(function(){
        fun()
        },limit)
    }
 }


 const throtal=throtalling( xonter,5000)


// debouncer in js

document.getElementById('inputbar')

let count=0;
const getData=()=>{
 
    console.log("Counter is inc",count++)

}

let debouncer=function(fn,d){
    let timer;
return function(){
    let context=this;
    let arg=arguments;
    clearTimeout(timer)
    timer= setTimeout(()=>{
        fn.apply(context,arg);
        },d)
}

}
const magic=debouncer(getData,300)




// TOGGLER - CLOSURES

function toggler() {
    let count=0;
return function (){
    count++;
    console.log(count)
   
}
    
}

const toggle = toggler();
toggle();
toggle();
toggle();






























//Qw5CYBnsB

// var arr = [1,2,3,4,5]

// for(var i=0; i<arr.length; i++){
//     setTimeout(()=>console.log(arr[i],i),i*1000)
// }
// //setTimeout(()=>console.log(arr[i],i),i*1000)

// getName(); // Namaste Javascript
// console.log(x); // undefined
// var x = 7;
// function getName() {
//  console.log("Namaste Javascript");
// }

