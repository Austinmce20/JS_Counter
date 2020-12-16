let count = 0;

document.getElementById("counterId").innerHTML = count;


function countUp() {
    console.log(count);
    count ++;
    document.getElementById("counterId").innerHTML = count;
    return count
}

function countDown() {
    console.log(count);
    count --;
    document.getElementById("counterId").innerHTML = count;
    return count
}

function reset() {
    console.log(count);
    count = 0;
    document.getElementById("counterId").innerHTML = count;
}

function upTen() {
    console.log(count);
    count = count + 10;
    document.getElementById("counterId").innerHTML = count;
    return count  
}

function downTen() {
    console.log(count);
    count = count - 10;
    document.getElementById("counterId").innerHTML = count;
    return count;
}