
document.getElementById("search").onclick = ()=>{
    const item = document.getElementById("skin").value;
    const pattern = document.getElementById("pattern").checked;
    const quality = document.getElementById("quality").value;
    const type = document.getElementById("type").value;
    const sort = document.getElementById("float").checked ? "float" : "price";
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h1>Loading...</h1>"

    const url = `https://backend.narwhalkid.com/cs2/item?item=${item}&pattern=${pattern}&sort=${sort}&quality=${quality}&type=${type}`
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        let html = "";
        if (data.pairs.length < 1) {
            let resultsError = data.item;
            if (data.resetTime) resultsError += (new Date(data.resetTime)).toLocaleTimeString();
            resultsDiv.innerHTML = `<h1>${resultsError}</h1><div id="nob"><img src="https://backend.narwhalkid.com/no/results"></div>`;
            return;
        }
        data.pairs.forEach((pair)=>{
            let pair1ImgHTML = "";
            let pair2ImgHTML = "";
            let pair1Type = "CSFloat";
            let pair2Type = "CSFloat";
            if (pair[0].screenshots.buff) {
                pair1ImgHTML = `<img src="${pair[0].screenshots.buff}">`
                pair1Type = "Buff";
            } else {
                pair1ImgHTML = `<img src="${pair[0].screenshots.front}"><br><img src="${pair[0].screenshots.back}">`
            }

            if (pair[1].screenshots.buff) {
                pair2ImgHTML = `<img src="${pair[1].screenshots.buff}">`
                pair2Type = "Buff";
            } else {
                pair2ImgHTML = `<img src="${pair[1].screenshots.front}"><br><img src="${pair[1].screenshots.back}">`
            }

            if (pair1ImgHTML == `<img src="undefined">`) pair1ImgHTML = "";
            if (pair2ImgHTML == `<img src="undefined">`) pair2ImgHTML = "";

            html += `
            <hr>
            <h1>Total Price: $${(pair[0].price + pair[1].price).toFixed(2)}</h1>
            <div class="pairParent">
                <div class="item1">
                    <h2>Price: $${pair[0].price.toFixed(2)}</h2>
                    <h2>Pattern: ${pair[0].pattern}</h2>
                    <h2>Float: ${pair[0].float}</h2>
                    ${pair1ImgHTML}
                    <a href="${pair[0].url}" target="_blank"><h2>Click here to open in ${pair1Type}</h2></a>
                    <a href="${pair[0].inspect}"><h2>Click here to open in game</h2></a>
                </div>
                <div class="item2">
                    <h2>Price: $${pair[1].price.toFixed(2)}</h2>
                    <h2>Pattern: ${pair[1].pattern}</h2>
                    <h2>Float: ${pair[1].float}</h2>
                    ${pair2ImgHTML}
                    <a href="${pair[1].url}" target="_blank"><h2>Click here to open in ${pair2Type}</h2></a>
                    <a href="${pair[1].inspect}"><h2>Click here to open in game</h2></a>
                </div>
            </div>`
        })
        resultsDiv.innerHTML = html + `<hr><h1>You've reached the end.</h1>`;
    })
}

document.getElementById("skin").onkeyup = ()=>{
    const autofill = document.getElementById("autofill");
    const searchQuery = document.getElementById("skin").value;
    if (searchQuery == "") {
        autofill.innerHTML = "";
        return;
    }
    fetch(`https://backend.narwhalkid.com/cs2autocomplete?query=${searchQuery}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {        
        let html = "";
        data.forEach((elem) => {
            html += `<h3 class="suggestion" onclick="document.getElementById('skin').value = '${elem}'; document.getElementById('autofill').innerHTML = ''">${elem}</h3><br>`
        });
        autofill.innerHTML = html;
    })
}