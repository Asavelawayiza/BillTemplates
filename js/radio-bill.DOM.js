var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");


var radioUserDataElem = document.querySelector(".userData1");
var radioTemplateSource = document.querySelector(".userTemplate").innerHTML;
var radioUserTemplate = Handlebars.compile(templateSource);


var radioInstance = radioBillTotal()

 //radio();
function radioFun() {

 var radioBillAddBtn = document.querySelector( "input[name = billItemType]:checked")

  if (radioBillAddBtn) {
    var billItemTypeRadio = radioBillAddBtn.value
  }

  radioInstance.radioBill(billItemTypeRadio)

  var colorChanger = radioInstance.color()

  var radioUserData = radioUserTemplate({

    call: "R" + radioInstance.call1Temp(),
    sms: "R" + radioInstance.sms1Temp(),
    totals: "R" + radioInstance.total1Temp(),
    colorChanger

  })

  console.log(radioUserData)
  
  radioUserDataElem.innerHTML = radioUserData;
}
 

window.onload = function(){
var radioUserData = radioUserTemplate({

  call: "R" + radioInstance.call1Temp(),
  sms: "R" + radioInstance.sms1Temp(),
  totals: "R" + radioInstance.total1Temp(),
  // colorChanger

})

radioUserDataElem.innerHTML = radioUserData;

}

radioBillAddBtn.addEventListener('click', radioFun)
 

