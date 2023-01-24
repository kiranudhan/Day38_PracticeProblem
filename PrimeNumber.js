let number = 5;
let isPrime = true;

if(number == 1){
    console.log("1 is not prime number");
}else if(number > 1){

    for (let i = 2; i < number; i++){
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(number + ' is a prime number');
    }else{
        console.log(number + ' is not prime number');
    }
}