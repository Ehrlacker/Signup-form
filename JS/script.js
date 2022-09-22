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
firstName.classList.add('wrong');
 
} if(lastName.value.length === 0){
warning2.classList.remove('hidden'); 
lastName.classList.add('wrong'); 
 } 
 
if(email.value.length === 0){
warning3.classList.remove('hidden'); 
email.classList.add('wrong'); 
 }
 
 if (password.value.length < 6){     
warning4.classList.remove('hidden'); 
warning4.innerHTML = "please create a password with at least 6 characters"
password.classList.add('wrong');
 }

});



