let counter = 0;
const btns = document.querySelectorAll('.btn');
let value = document.getElementById('value');


console.log(btns);

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        console.log(styles);
        if(styles.contains("decrease")){
            counter--;
            value.textContent = counter;
        } else if(styles.contains("increase")){
            counter++;
            value.textContent = counter;
        } else{
            counter = 0;
            value.textContent = counter;
        }
        if(counter > 0 ){
            value.style.color = "lightgreen";
        }
        else if(counter < 0 ){
            value.style.color = "red";
        } else{
            value.style.color = "black";
        }
    });
});