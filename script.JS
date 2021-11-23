function calculate() {
  let amount = parseInt(document.querySelector("#answer-cost").value);
  let rating = parseInt(
    document.querySelector("input[name=radiobutton]:checked").value
  );
  let people = parseInt(document.querySelector("#answer-people").value);

  let tipDom = document.querySelector("#tipDom");
  let totalTipDom = document.querySelector("#totalTipDom");
  let totalDom = document.querySelector("#totalDom");

  let tip = (amount * rating) / 100; //tip per person
  tipDom.innerText = Math.floor((tip)/people * 1000)/1000
  totalTipDom.innerText = Math.floor((tip) * 1000)/1000
  totalDom.innerText = (Math.floor((tip + amount) * 1000))/1000
}
