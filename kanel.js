var antal = 50;
var one = 150;
var two = 5;
var three = 50;
var four = 1;
var five = 0.5;
var six = 1.5;
var seven = 2;
var eight = 13;
var nine = 100;
var ten = 1;
var eleven = 3;


function positiv() {
if(antal<100){
    antal = antal + 10;
    
  
    one = one + 30; 
    two = two + 1; 
    three = three + 10;
    four = four + 0.2;
    five = five + 0.1;
    six = six + 0.3;
    seven = seven + 0.4;
    eight = eight + 2.6;
    nine = nine + 20;
    ten = ten + 0.2;
    eleven = eleven + 0.6;
    

    var antal_ = document.getElementById("mats");
    var one_ = document.getElementById("1");
    var two_ = document.getElementById("2");
    var three_ = document.getElementById("3");
    var four_ = document.getElementById("4");
    var five_ = document.getElementById("5");
    var six_ = document.getElementById("6");  
    var seven_ = document.getElementById("7");  
    var eight_ = document.getElementById("8");  
    var nine_ = document.getElementById("9");  
    var ten_ = document.getElementById("10");
    var eleven_ = document.getElementById("11");
    
    
    antal_.innerHTML = antal;
    one_.innerHTML = Math.round(one * 100) / 100
    two_.innerHTML = two;
    three_.innerHTML = three;
    four_.innerHTML = Math.round(four * 100) / 100
    five_.innerHTML= Math.round(five * 100) / 100
    six_.innerHTML = Math.round(six * 100) / 100
    seven_.innerHTML = Math.round(seven * 100) / 100
    eight_.innerHTML = Math.round(eight * 100) / 100
    nine_.innerHTML = nine;
    ten_.innerHTML = Math.round(ten * 100) / 100
    eleven_.innerHTML = Math.round(eleven * 100) / 100
    
  
    }

}

function negativ() {
    if(antal>10){
antal = antal - 10;

    
        
        
    one = one - 30; 
    two = two - 1; 
    three = three - 10;
    four = four - 0.2;
    five = five - 0.1;
    six = six - 0.3;
    seven = seven - 0.4;
    eight = eight - 2.6;
    nine = nine - 20;
    ten = ten - 0.2;
    eleven = eleven - 0.6;
    

    var antal_ = document.getElementById("mats");
    var one_ = document.getElementById("1");
    var two_ = document.getElementById("2");
    var three_ = document.getElementById("3");
    var four_ = document.getElementById("4");
    var five_ = document.getElementById("5");
    var six_ = document.getElementById("6");  
    var seven_ = document.getElementById("7");  
    var eight_ = document.getElementById("8");  
    var nine_ = document.getElementById("9");  
    var ten_ = document.getElementById("10");
    var eleven_ = document.getElementById("11");



    antal_.innerHTML = antal;
    one_.innerHTML = one;
    two_.innerHTML = two;
    three_.innerHTML = three;
    four_.innerHTML = Math.round(four * 100) / 100
    five_.innerHTML = Math.round(five * 100) / 100
    six_.innerHTML = Math.round(six * 100) / 100
    seven_.innerHTML = Math.round(seven * 100) / 100
    eight_.innerHTML = Math.round(eight * 100) / 100
    nine_.innerHTML = nine;
    ten_.innerHTML = Math.round(ten * 100) / 100
    eleven_.innerHTML = Math.round(eleven * 100) / 100


     }

}

function vote() {
    
}