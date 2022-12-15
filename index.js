let total=0,expense=0;
let btnexp=document.querySelector("#expbtn");
let totalbtn = document.getElementById("depobtn")
let remaintxt = document.getElementById("remain");
let totaltxt = document.getElementById("total");
let expenseamt = document.getElementById("expenseamt");
let expreason = document.getElementById("expreason");
let deposit = document.getElementById("deposite")
let depoFrom = document.getElementById("from");
let tabledepo = document.getElementById("tabledepo");
let tableexp = document.getElementById("tableexp");

//total add button
totalbtn.addEventListener("click",()=>{
  var row = tabledepo.insertRow(1);
  var col1=row.insertCell(0);
  var col2=row.insertCell(1);
  var col3= row.insertCell(2);
  total=total+parseInt(deposit.value);
  expense=expense+parseInt(deposit.value);
  totaltxt.innerHTML=total;
  remaintxt.innerHTML=expense;
  console.log(total);
  col1.innerHTML=parseInt(deposit.value) ;
  col2.innerHTML=depoFrom.value;
  col3.innerHTML=new Date().toDateString();
})
console.log(expense);
// expenses add button
btnexp.addEventListener("click",btnexpns);
function btnexpns() {
  var row = tableexp.insertRow(1);
  var col1=row.insertCell(0);
  var col2=row.insertCell(1);
  var col3=row.insertCell(2);
  expense=expense-parseInt(expenseamt.value);
  remaintxt.innerHTML=expense;
  col1.innerHTML=parseInt(expenseamt.value);
  col2.innerHTML=expreason.value;
  col3.innerHTML=new Date().toDateString();

} 