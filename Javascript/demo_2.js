const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const recordlist = document.querySelector(".recordlist");
const btn = document.querySelector(".submit");
const clear = document.querySelector(".clearResult");


var record = [];

function updateRecord(){
    
    str = '';
    let len = record.length;
    let BMIcolor ;
    for(let i=0;i<len;i++){
        let standardJudge =`${record[i].BMIStandard}`;
        switch(true){
            case standardJudge == "Underweight":
                BMIcolor = "underweight";
                break;
            case standardJudge == "Normal Weight":
                BMIcolor = "normalweight";
                break;
            case standardJudge == "Overweight":
                BMIcolor = "overweight";
                break;    
            case standardJudge == "Obesity":
                BMIcolor = "obesity";
                break;
             
        }
        str +=`<li data-num="${i}" class="${BMIcolor}"><span class="BMIstandard">${record[i].BMIStandard}</span><span>Height</span>${record[i].Height}cm <span>Weight</span>${record[i].Weight}kg <span>BMI</span>${record[i].BMI}    <span>${record[i].Date}</span> </li>`;
        
    }
    recordlist.innerHTML = str;

}

function saveRecord(){
    if(height.value<=0||weight.value<=0){
        alert("Enter Error\nPlease enter your height and weight again");
    }
    else{
    let bmiStandard ='';
    let bmi = weight.value/((height.value*0.01)*(height.value*0.01));
    if(bmi<=18.5){
        bmiStandard = "Underweight";
    }
    else if(bmi>18.5&&bmi<=24.9){
        bmiStandard = "Normal Weight";
    }
    else if(bmi>=25&&bmi<=29.9){
        bmiStandard = "Overweight";
    }
    else{
        bmiStandard = "Obesity";
    }
    record.push({BMIStandard:bmiStandard,Height:height.value,Weight:weight.value,BMI:bmi.toFixed(2),Date:new Date().toLocaleDateString()});
    updateRecord()
    }
    
   
}

function clearResult(){
    recordlist.innerHTML="";
    record = [];
   
}


btn.addEventListener("click",saveRecord,false);
clear.addEventListener("click",clearResult,false);


// getItem, setItem
// console.log(localStorage.getItem("Height"));
// console.log(localStorage.getItem("Weight"));


// function saveValue(e){
//     let heightValue = height.value;
//     let weightValue = weight.value;
//     localStorage.setItem("Height",heightValue);
//     localStorage.setItem("Weight",weightValue);
// }

// btn.addEventListener("click",saveValue,false);

// dataset

// var hsuan = document.querySelector(".list li");

// function returnValue(e){
//     var num = e.target.dataset.num;
//     var dog = e.target.dataset.dog;
//     console.log(`num: ${num}
// dog: ${dog}`);
// }

// hsuan.addEventListener("click",returnValue,false);

// var qutStudent = [{student:'Hsuan'},{student:"Jenny"},{student:"Wang Hsuan"},{student:'Jenny Hsieh'}];
// var qut = document.querySelector(".list");

// function updateList(){
//     var str ='';
//     var len = qutStudent.length;
//     for(var i =0;i<len;i++){
//         str+=`<li data-num="${i}">${qutStudent[i].student}<li>`
//     }
//     qut.innerHTML = str;
// }

// updateList();

// function checklist(e){
//     var num =e.target.nodeName;
//     if(num !== "LI"){return}
//     var str = e.target.dataset.num;
//     qutStudent.splice(str,1);
//     updateList();

//     // console.log(`The student name is ${qutStudent[str].student}`);
// }

// qut.addEventListener("click",checklist,false);
