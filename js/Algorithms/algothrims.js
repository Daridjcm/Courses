// Pascal  triangle
function Pascal() {
    for(let i = 1; i <= 5; i++) {
        let line = '';
        for(let l = 5; l >= i; l--) {
            line += ' ';
        }
        let k = 1;
        for(let j = 1; j <= i; j++) {
            line += ' ' + k;
            k = (k * (i - j)) / j;
        }
        console.log(line)
    }
}
Pascal()

function Fibonacci() {
    const number = parseInt(prompt('Enter the number of terms:'));
    let n1 = 0, n2 = 1, nextTerm;
    console.log('Fibonacci series:');
    for (let i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
Fibonacci()

function ReverseString(str) {
    console.log(str.split('').reverse().join(''));
}
ReverseString("Hello");

function OddEven(arr = [1,2,3,4,5]) {
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 == 0) {
            console.log(arr[i] + ' is Even');
        } else {
            console.log(arr[i] + ' is Odd');
        }
    }
}
OddEven()