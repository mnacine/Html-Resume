const body=document.querySelector('body');
const button=document.querySelector('button');
const colors=['#98adc1','#696f26','#69501f','#2b668b','#222513','#ced6de'];

body.style.backgroundColor='lightblue';

button.addEventListener('click',function(){
const colorIndex=parseInt(Math.random()*colors.length);
body.style.backgroundColor=colors[colorIndex];
})