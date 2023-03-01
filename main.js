
function avg(array){
    var x = 0;

    for(let i = 0; i < array.length; i++){
        x += input[i]/array.length;
    }
    
    x = x.toFixed(2);
    console.log(x);
    
    if(0 <= x && x <= 70){
        console.log("D grade");
    }
    
    else if(71 <= x && x <= 80){
        console.log("C grade");
    
    }
    
    else if(81 <= x && x <= 90){
        console.log("B grade");
    
    }
    
    else{
        console.log("A grade");
    }
}

var input = [100, 100, 100, 100];
avg(input);








