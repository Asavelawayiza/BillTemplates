
function TextBillTotal() {

    var callTotal = 0;
    var smsTotal = 0;
    var totalCost = 0;

    function bills(values) {

        if (values === "call") {
            callTotal += 2.75;
        }
        else if (values === "sms") {
            smsTotal += 0.75;
        }

        totalCost = callTotal + smsTotal
    }

    function callTemp() {
        return callTotal.toFixed(2);
    }

    function smsTemp() {
        return smsTotal.toFixed(2);
    }

    function totalTemp() {
       
        return totalCost.toFixed(2);
    }


    function color() {
        if(totalCost >= 30 && totalCost < 50) {
          
           return "warning";
        }

       else if(totalCost >= 50) {
           
            return "danger";
        }
    }

  

    return {
        bills,
        callTemp,
        smsTemp,
        totalTemp,
        color
     
    }
}

