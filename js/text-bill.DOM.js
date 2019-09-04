 var billTypeText = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callsTotalElem = document.querySelector(".callTotalOne");
var smsTotalElem = document.querySelector(".smsTotalOne");
var totalCostElem = document.querySelector(".totalOne");

var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
var userDataElem = document.querySelector(".userData");

var textInstance = TextBillTotal()

add();
function add() {

  textInstance.bills(billTypeText.value);
  var colorChanger = textInstance.color()

var userData = userTemplate({

    call: "R" + textInstance.callTemp(),
    sms:  "R" + textInstance.smsTemp(),
    totals:  "R" + textInstance.totalTemp(),
    colorChanger
    
})

userDataElem.innerHTML = userData;
}

addToBillBtn.addEventListener('click', add)

