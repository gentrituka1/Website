let checkbox = document.querySelector('input-checkbox');
checkbox?.addEventListener('click', checkMode)

function checkMode(){
    if (checkbox.checked){
        darkMode();
    } else{
        lightMode();
    }
}
function darkMode(){
    document.body.classList.add('dark-mode');
}
function lightMode(){
    document.body.classList.remove('dark-mode');
}

