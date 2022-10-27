function dodaj() {
  let tekst = document.querySelector("#tekst");
  var table = document.getElementById("tabla");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(0);

  cell2.innerHTML = tekst.value;
  cell1.innerHTML =
    '<input id="Button" type="button" value="Delete" class="button" onClick="obrisi()" />';
}
function obrisi() {
  var close = document.getElementsByTagName("td");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
