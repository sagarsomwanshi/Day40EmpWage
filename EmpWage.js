const prompt = require('prompt-sync')();


let workHour,workDay,fullDay,halfDay,maxWorkDays,maxHours,hourWage;

function UC1(){
    let attendance = Number(Math.floor(Math.random()*2));
    return attendance;
}

function UC2(){
        switch (UC1()) {
            case 0 :
                workHour += 8;
                workDay++;
                fullDay++;
                break;
            case 1:
                workHour += 4;
                workDay++;
                halfDay++;
                break;
        }
    }

    function UC5(X,Y){
       
        while(workDay <maxWorkDays && workHour<maxHours){
            UC2();
        }
        console.log("\n" + "Company Name : ",X);
        console.log(Y+" Employee :");
        console.log("Full Day : " ,fullDay," Days");
        console.log("Half Day : " ,halfDay," Days");
        console.log("Monthly Wage of " ,X, " : " ,(workHour*hourWage));

    }

   function UC6(){
       
        let companyName = prompt("Enter Company Name");
        let empType = prompt("Enter Employee Type (Part Time / Full Time");    
        hourWage = prompt("Enter Wage/Hour");    
        maxHours = prompt("Enter maximum working hours per month");
        maxWorkDays = prompt("Enter maximum working days per month");
        UC5(companyName,empType);
    }
    UC6();

