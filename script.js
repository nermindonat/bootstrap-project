
const select = document.getElementById('select');
// const radio = document.getElementById('bselect');
const firstCondition = document.getElementById('scenarioA');
const firstConditionv2 = document.getElementById('scenarioB');
const secondCondition = document.getElementById('scenarioC');
const thirdCondition = document.getElementById('scenarioD');
const thirdConditionv2 = document.getElementById('scenarioE');


let checkSelectedRadio=null;
let checkSelectValue=null;

function handleChange(src) {
    checkSelectValue = select.options[select.selectedIndex].value;
    checkSelectedRadio=src.value;

    if( checkSelectedRadio == "A" && checkSelectValue == "php"){
        firstCondition.style.display="block";
        firstConditionv2.style.display="block";
    }
    else if(checkSelectedRadio == "A" && checkSelectValue == "wordpress"){

        secondCondition.style.display="block";
    }
    else if(checkSelectedRadio == "C" && checkSelectValue == "laravel"){
        thirdCondition.style.display="block";
        thirdConditionv2.style.display="block";

    }
    else{
        firstCondition.style.display="none";
        firstConditionv2.style.display="none";
        secondCondition.style.display="none";
        thirdCondition.style.display="none";
        thirdConditionv2.style.display="none";
    }

}

select.onchange=()=>{
    checkSelectValue = select.options[select.selectedIndex].value;

    if( checkSelectedRadio == "A" && checkSelectValue == "php"){
        firstCondition.style.display="block";
        firstConditionv2.style.display="block";
        secondCondition.style.display="none";  
    }
    else if(checkSelectedRadio == "A" && checkSelectValue == "wordpress"){
        firstCondition.style.display="none";
        firstConditionv2.style.display="none";
        secondCondition.style.display="block";
    }

    else if(checkSelectedRadio == "C" && checkSelectValue == "laravel"){
        thirdCondition.style.display="block";
        thirdConditionv2.style.display="block";
    }
    else{
        firstCondition.style.display="none";
        firstConditionv2.style.display="none";
        secondCondition.style.display="none";
        thirdCondition.style.display="none";
        thirdConditionv2.style.display="none";     
    }
}

