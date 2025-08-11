async function main() {
    let items = await fetch("items.json")
        .then(response => response.json())
        .catch(error => {
            alert("Error fetching items.json. Please try again later.");
            console.error("Error fetching items.json:", error);
        });
        

    const types = new Set();
    for (const item of Object.keys(items)) {
        types.add(items[item].type);
    }

    types.forEach(type => {
        const typeOption = document.createElement("label");
        const typeInput = document.createElement("input");
        typeInput.type = "checkbox";
        typeInput.checked = true;
        typeInput.addEventListener("change", () => {
            const items = document.getElementsByClassName(type);
            for (const item of items) {
                item.style.display = typeInput.checked ? "" : "none";
            }
        });
        typeOption.appendChild(typeInput);
        typeOption.appendChild(document.createTextNode(` ${type}`));
        document.getElementById("types").appendChild(typeOption);
    });

    const itemList = document.getElementById("item-list");
    for (const item of Object.keys(items)) {
        const itemDiv = document.createElement("div");
        itemDiv.id = `${items[item].type} ${item}`.replaceAll(' ', '-');
        itemDiv.className = `item ${items[item].type}`;
        itemDiv.innerHTML = `
            <div class="item-display">
                <img src="images/${item}/1.jpg" alt="${item}">
                <span>${item}</span>
            </div>
        `;
        const variantsDiv = document.createElement("div");
        variantsDiv.className = "variants-div";
        const buttonsDiv = document.createElement("div");
        buttonsDiv.className = "variant-button-div";
        Object.keys(items[item].variants).forEach((variant, idx) => {
            const variantButton = document.createElement("button");
            variantButton.innerText = variant;
            variantButton.className = "variant-button";
            variantButton.addEventListener("click", () => {
                const selectedItemDiv = document.getElementById(`${items[item].type} ${item}`.replaceAll(' ', '-'));
                const buttons = Array.from(selectedItemDiv.querySelectorAll(".variant-button"));
                buttons.forEach(button => {
                    button.classList.remove("selected");
                });
                buttons.filter(button => button.innerText === variant)[0].classList.add("selected");
                selectedItemDiv.querySelector(".variant-info").innerHTML = `
                    <span>Value: ${items[item].variants[variant].value.join("-")}</span>
                    <span>Sales: $${items[item].variants[variant].cost.join("-$")}</span>
                    <span>Demand: ${items[item].demand}</span>
                `;
            });
            if (idx === 0) variantButton.classList.add("selected");
            buttonsDiv.appendChild(variantButton);
        });
        variantsDiv.appendChild(buttonsDiv);
        const variantInfo = document.createElement("div");
        variantInfo.className = "variant-info";
        const mainVariant = items[item].variants[Object.keys(items[item].variants)[0]];
        variantInfo.innerHTML = `
            <span>Value: ${mainVariant.value.join("-")}</span>
            <span>Sales: $${mainVariant.cost.join("-$")}</span>
            <span>Demand: ${items[item].demand}</span>
        `;
        variantsDiv.appendChild(variantInfo);
        itemDiv.appendChild(variantsDiv);
        itemList.appendChild(itemDiv);
    };

    document.querySelector(`input[value=${localStorage.sortType || "Name"}]`).checked = true;
    sortItems();
}

document.querySelectorAll('input[name="sort"]').forEach((input) => {
    input.addEventListener('change', function() {
        localStorage.setItem("sortType", this.value);
        sortItems();
    });
});

document.getElementById("search").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        const itemName = item.querySelector(".item-display span").innerText.toLowerCase();
        item.style.display = itemName.includes(searchTerm) ? "" : "none";
    });
});

function sortItems() {
    const itemList = document.getElementById("item-list");
    const items = Array.from(itemList.children);
    if (localStorage.getItem("sortType") === "demand") {
        items.sort((a, b) => {
            const aDemand = parseInt(a.querySelector(".variant-info span:nth-child(3)").innerText.split(": ")[1]);
            const bDemand = parseInt(b.querySelector(".variant-info span:nth-child(3)").innerText.split(": ")[1]);
            return bDemand - aDemand;
        });
    } else if (localStorage.getItem("sortType") === "value") {
        items.sort((a, b) => {
            if (a.querySelector(".variant-info span:nth-child(1)").innerText.includes("?")) return 1;
            if (b.querySelector(".variant-info span:nth-child(1)").innerText.includes("?")) return -1;
            const aValue = parseInt(a.querySelector(".variant-info span:nth-child(1)").innerText.split(": ")[1].split("-")[0]);
            const bValue = parseInt(b.querySelector(".variant-info span:nth-child(1)").innerText.split(": ")[1].split("-")[0]);
            return bValue - aValue;
        });
    } else {
        items.sort((a, b) => {
            const aName = a.querySelector(".item-display span").innerText.toLowerCase();
            const bName = b.querySelector(".item-display span").innerText.toLowerCase();
            return aName.localeCompare(bName);
        });
    }
    itemList.innerHTML = "";
    items.forEach(item => {
        itemList.appendChild(item);
    });
}

main();