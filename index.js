
function writeCards(array, string) {
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }

    return newArr;
}


function countDown(n) {
    let i = 0;

    while (i <= n) {
        console.log(i);
        i++;
    }
}














