function radioBillTotal() {
    
    var callsTotal1 = 0;
    var smsTotal1 = 0;
    var totalCost1 = 0;
    
function radioBill(bills){
    if (bills === "call") {
        callsTotal1 += 2.75;
    }
    else if (bills === "sms") {
        smsTotal1 += 0.75;
    }
    totalCost1 = callsTotal1 + smsTotal1
    
}

function call1Temp() {
    return callsTotal1.toFixed(2);
}

function sms1Temp() {
    return smsTotal1.toFixed(2);
}

function total1Temp() {
   
    return totalCost1.toFixed(2);
}

function color(){
    if(totalCost1 >= 30 && totalCost1 < 50) {
          
        return "warning";
     }

    else if(totalCost1 >= 50) {
        
         return "danger";
     }
}

return {
    radioBill,
    call1Temp,
    sms1Temp,
    total1Temp,
    color
}
}


