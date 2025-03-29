//Question 2 Change name of page's title
document.title = 'WEB222 Winter 2025 Test 5 - Narawit Sawatdecha';
//Question 1 load DOM 
document.addEventListener('DOMContentLoaded', function () {

    //Question 6 Part 1, initialize interval
    let interval = null;
    
    if (interval !== null) { //check for clear interval if need 
           clearInterval(interval); 
    }

    // Question 3 Modify para-2
    const p2 = document.getElementById('para-2');
    //Question 3.1 Change text content to Vanilla
    p2.textContent = 'Vanilla';
    //Question 3.2 Set class attribute to student number 184116234
    p2.className = '184116234';    

    //Question 4
    const startBtn = document.querySelector('.start');
    //Event of clicking start button
    startBtn.addEventListener('click', function () {
        
        const newsec = document.createElement('section');
        const main = document.querySelector('main');
        newsec.textContent = 'The start button was clicked!';
        //Keep printing newsec in main if clicked
        main.appendChild(newsec);
        //Question 5  Count section elements inside <main>
        if (interval === null) { // Check if stop is marked or not
            interval = setInterval(function () {
                const count = main.querySelectorAll('section').length; //count all section in main
                const h1 = document.querySelector('h1'); 
                h1.textContent = `There are ${count} section elements inside main`;//display text in h1
            }, 4000);// 4 sec delayed
        }
    });

    //Question 6
    const stopBtn = document.querySelector('.stop');
    stopBtn.addEventListener('click', function () {//check for click on stop button
        if (interval !== null) { //if interval is not null
            clearInterval(interval); // clear it
            interval = null;  // Mark stop
        }
    });
});


