var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

$("#xhr").click(function() {
    // alert("xhr clicked");
    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function() {
        if (XHR.readyState == 4 && XHR.status == 200) {
            // var data = XHR.responseText;
            var data = JSON.parse(XHR.responseText);
            // console.log(data[0]);
            $('#quote').html(data[0]);
        }
    };

    XHR.open("GET", url);
    XHR.send();
});

$("#fetch").click(function() {
    // alert("fetch clicked");
    fetch(url)
    .then(function(res) {
        if (!res.ok) {
            throw Error(res.status);
        }
        return res;
    })
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        // console.log(data[0]);
        $('#quote').html(data[0]);
    })
    .catch(handleError);
});

$("#jquery").click(function() {
    // alert("jquery clicked");
    $.getJSON(url)
    .done(function(data) {
        // console.log(data);
        $('#quote').html(data[0]);
    });
});

$("#axios").click(function() {
    // alert("axios clicked");
    axios.get(url)
    .then(function(res) {
        // console.log(res.data[0]);
        $('#quote').html(res.data[0]);
    })
    .catch(handleError);
});

function handleError(err) {
    if (e.response) {
        console.log("Problem with response ", err.response.status);
    } else if (e.request) {
        console.log("Problem with request");
    } else {
        console.log("Error", e.message);
    }
}