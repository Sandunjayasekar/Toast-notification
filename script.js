
let toastBox = document.getElementById('toastBox');

let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg = '<i class="fa-solid fa-xmark"></i>Something went wrong';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, Check again';

function showToast(msg){
    console.log(msg);
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}