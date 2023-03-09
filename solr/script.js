function but1() {
  document.getElementById('but1').className = "selected";
  document.getElementById('but2').className = "notSelected";
  document.getElementById('priceSpan').innerText = "29.99";
  document.getElementById('price').innerText = "24.99";
  document.getElementById('features').innerHTML = "Solr Case";
}

function but2() {
  document.getElementById('but1').className = "notSelected";
  document.getElementById('but2').className = "selected";
  document.getElementById('priceSpan').innerText = "39.99";
  document.getElementById('price').innerText = "34.99";
  document.getElementById('features').innerHTML = "Solr Case <span id='extras'>+ 2 Extra Batteries</span>";
}
