
let arr = ['#3A2E39', '#1E555C', '#F4D8CD', '#EDB183', '#F15152'];
let count = 0;

document.getElementById('btn').onclick  = function changeBackground () {
    count += 1;
    count == arr.length ? count = 0 : document.getElementById('full-page').style.backgroundColor = arr[count];
}