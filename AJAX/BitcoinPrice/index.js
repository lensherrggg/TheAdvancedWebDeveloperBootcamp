var btn = document.querySelector("#btn");
var price = document.querySelector("span");

btn.addEventListener("click", function() {
    // alert("clicked");
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            var data = JSON.parse(XHR.responseText).bpi.USD.rate;
            price.innerHTML += data + " USD";
        }
    }

    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json")
    XHR.send();
})