var my_sign = false
  
  


document.querySelectorAll('.num').forEach(function (element) {
     element.addEventListener('click', function () {
         if (answer_box.innerHTML == 0 ){
 answer_box.innerHTML = element.innerHTML}
      else  {
          answer_box.innerHTML += element.innerHTML;

 }

         // answer_box.innerHTML += element.innerHTML
         my_sign =false;
         // console.log(typeof(element.innerHTML))
     })
 });

 document.querySelectorAll('.sign').forEach(function (operator) {
     operator.addEventListener('click', function () {
         if (my_sign == false){
         answer_box.innerHTML += operator.innerHTML
         my_sign = true;
        } else{
              
             return 
         }
     })
 });
 document.querySelector('.equal').addEventListener('click',function() {
 var display = document.querySelector('#answer_box').innerHTML
  dis = eval(display)
 document.getElementById("answer").innerHTML = dis;
});


document.querySelector('.dele').addEventListener('click',function() {
   var dele =document.getElementById('answer_box').innerHTML;
var dele_key = dele.substring(0,dele.length-1);
console.log(dele_key)
document.getElementById("answer_box").innerHTML= dele_key;
});
document.querySelector('.dele').addEventListener('click',function() {
   var dele =document.getElementById('answer').innerHTML;
var dele_key = dele.substring(0,dele.length-1);
console.log(dele_key)
document.getElementById("answer").innerHTML= dele_key;
});
document.querySelectorAll('.delete').forEach(function (element1){
element1.addEventListener('click',function() {
   var dele1 =document.getElementById('answer').innerHTML;
var dele_key1 = dele1.substring(0,0);
console.log(dele_key1);
document.getElementById("answer").innerHTML= dele_key1;
});
});
document.querySelectorAll('.delete').forEach(function (element1){
element1.addEventListener('click',function() {
   var dele1 =document.getElementById('answer_box').innerHTML;
var dele_key1 = dele1.substring(0,0);
console.log(dele_key1);
document.getElementById("answer_box").innerHTML= dele_key1;
});
});

function square (){
   var square1 =document.getElementById('answer_box').innerHTML;
   square2= Math.sqrt(square1)
   console.log(square2)
   document.getElementById('answer').innerHTML=square2;

}
function Squareroot(){ 
   var root =document.getElementById('answer_box').innerHTML;
   root2 = (root*root);
   console.log(root2)
   document.getElementById('answer').innerHTML=root2;
}
function over(){
   var over1 =document.getElementById('answer_box').innerHTML;
   over2 = (1/over1);
   console.log(over2)
   document.getElementById('answer').innerHTML=root2;

}
function expo(){
   var expo1 =document.getElementById('answer').innerHTML;
   expo2 = (expo1/100);
   console.log(expo2)
   document.getElementById('answer').innerHTML=expo2;

}
function plusminus(){
 var plus =document.getElementById('answer').innerHTML;
   plus1 = -1 * plus;
   console.log(plus1)
   document.getElementById('answer').innerHTML=plus1;
}
