let searchValue = document.getElementById("searchValue");
let searchBtn = document.getElementById("searchBtn");
let card = document.getElementById("card");
let load = document.getElementById("load");



async function getCard() {
    card.classList.add("none");
    load.classList.remove("none");

    const response = await fethch("https://api.github.com/users/KrasnovDaiil1")
    if (response.ok) {
        dataCard = await response.json()
        console.log(dataCard)
    }
}

searchBtn.addEventListener("click", getCard);
