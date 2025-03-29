//Question 2 Change name of page's title
document.title = 'WEB222 Winter 2025 Test 5 - Narawit Sawatdecha';
//Question 1 DOMContentLoaded 
document.addEventListener('DOMContentLoaded', function (){
    const p2 = document.getElementById(para-2);
    //Question 3.1 Change text content to Vanila
    p2.textContent = 'Vanila';
    //Question 3.2 Set class attribute to student number 184116234
    p2.className = '184116234'; 


    //Question 4
    const stBtn = document.querySelector('.start');
    stBtn.addEventListener('click',function(){ // If click
        const main = document.querySelector('.main');
        const newsec =document.createElement('section'); // create new section
        newsec.textContent = 'The start button was clicked!';//which contain this text
        main.appendChild(newsec); //keep append newsec
    });
    //Question 5

    

});