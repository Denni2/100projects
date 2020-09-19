
document.getElementById('color-button').onclick = function colorGenerate () {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

    let hex_val = '';

    for (x = 0; x < 6; x++){
        const val = Math.floor(Math.random() * arr.length);

        hex_val += arr[val];
    }

    document.getElementById('full-page').style.backgroundColor = '#' + hex_val;
    console.log("'" + "#" + hex_val + "'");
}



