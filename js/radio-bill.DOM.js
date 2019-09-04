var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");
var callTotalTwoElem = document.querySelector(".callTotalTwo");
var smsTotalTwoElem = document.querySelector(".smsTotalTwo");
var totalTwoElem = document.querySelector(".totalTwo");

var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
var userDataElem = document.querySelector(".userData");

var radioInstance = radioBillTotal()

radio();
function radio() {



  var radioBillAddBtn = document.querySelector( "input[name = billItemTypeRadio]:checked")
  
  if (radioBillAddBtn) {
    var currentBill = radioInstance.radioBill(radioBillAddBtn.value)
  }


  radioInstance.radioBill(currentBill);
  var colorChanger = radioInstance.color()

  var userData = userTemplate({

    call: "R" + radioInstance.call1Temp(),
    sms: "R" + radioInstance.sms1Temp(),
    totals: "R" + radioInstance.total1radioBillAddBtnTemp(),
    colorChanger

  })
  
  userDataElem.innerHTML = userData;
 
}

radioBillAddBtn.addEventListener('click', radio)

