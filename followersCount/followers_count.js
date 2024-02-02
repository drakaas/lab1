let count=0;

function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById("countDisplay").innerHTML=count
}


function checkCountValue(){
    if(count===10){
        alert("Your instagram gained 10 followers");

    }else if (count===20){
        alert("Your instagram post gained 20 follower");
    }
}

function resetCount(){
    count=0;
    alert("Your follower Count has been reset");
    displayCount();
}