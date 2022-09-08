let sayac = 0;

const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("azalt")){
            sayac--;
        }else if(styles.contains("arttir")){
            sayac++;
        }else {
            sayac = 0;
        }
        value.textContent = sayac;

        if(sayac > 0) {
            value.style.color = "green";
        }else if (sayac < 0){
            value.style.color = "red";
        }else if (sayac === 0) {
            value.style.color = "black";
        }
    })
})