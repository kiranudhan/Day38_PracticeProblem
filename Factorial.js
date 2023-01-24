let number = 5;

if(number < 0){
    console.log('Factorial for negative number not exist');
}else if(number == 0){
    console.log('The factorial of 0 is 1 ');
}else{
    let fact = 1;
    for(i = 1; i <= number; i++){
        fact *= i;
    }
    console.log('The factorial of '+ number + ' is ' + fact );
}