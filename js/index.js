const BTN = document.querySelector(".btn");
const DESCRIPTION = document.querySelector("#description");
const AMOUNT = document.querySelector("#amount");

let html1 = document.querySelector(".main-display1");
let html2 = document.querySelector(".main-display2");
let TYPE = document.querySelector("#type");
let inBal = document.querySelector("#inbal")
let exBal = document.querySelector("#exbal")
let Bal = document.querySelector("#bal")


var incomeList1 = [];
var incomeList2 = [];
var incomeHtmlList = [];

var expenseList1 = [];
var expenseList2 = [];
var expenseHtmlList = [];


function start(event) {
    event.preventDefault();
    var content = DESCRIPTION.value;
    var price = AMOUNT.value;
    let type = TYPE.options[TYPE.selectedIndex].text;
    if (type == "income") {
        if (content != "" && price != "") {
            incomeList1.push(content);
            incomeList2.push(Number(price));
        }
        let mul = "";
        incomeList2.forEach(function(i, index) {
            let newMarkUP = `<div class="display"><h4 class="descript">${incomeList1[index]}</h4><h4 class="amountt">${incomeList2[index]}</h4></div>`;
            mul = mul + newMarkUP;
            incomeHtmlList.push(mul);
        })
        let x = incomeHtmlList.length - 1;
        html1.innerHTML = incomeHtmlList[x]
    } else if (type == "expenses") {
        console.log(type)
        if (content != "" && price != "") {
            expenseList1.push(content);
            expenseList2.push(Number(price));
        }
        let mul = "";
        expenseList2.forEach(function(i, index) {
            let newMarkUP = `<div class="display"><h4 class="descript">${expenseList1[index]}</h4><h4 class="amountt">${expenseList2[index]}</h4></div>`;
            mul = mul + newMarkUP;
            expenseHtmlList.push(mul);
        })
        let x = expenseHtmlList.length - 1;
        html2.innerHTML = expenseHtmlList[x]
    }
    let total1 = 0,
        total2 = 0;
    for (let i = 0; i < incomeList2.length; i++) {
        total1 = total1 + incomeList2[i];
        total2 = total2 + expenseList2[i];
    }

    let balance = total1 - total2
    inBal.innerHTML = total1
    exBal.innerHTML = total2
    Bal.innerHTML = balance

}
BTN.addEventListener("click", start, false);