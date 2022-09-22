'use strict'

const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const button = document.querySelector('.claim');
const warning1 = document.querySelector('.one');
const warning2 = document.querySelector('.two')
const warning3 = document.querySelector('.three')
const warning4 = document.querySelector('.four')




//window.addEventListener('DOMContentLoaded', function(){
warning1.classList.add('hidden');
warning2.classList.add('hidden');
warning3.classList.add('hidden');
warning4.classList.add('hidden');


    // warning.forEach(function(e){

    //     e.classList.add('hidden');
    // })
//})




button.addEventListener('click', function(){

if (firstName.value.length === 0){
warning1.classList.remove('hidden'); 
}else{
     console.log('yeeesss')
 }

});



