/**
 * Just to add images to gallery
 */

const images = [
    {
        src: "Moran_Nematostella-vectensis.jpg",
        name: "Nematostella vectensis",
        author: "Dr. Yehu Moran"
    },
    {
        src: "Reitzel_Nematostella_adult-eggs.jpg",
        name: "Nematostella vectensis and eggs",
        author: "Dr. Adam Reitzel"
    },
    {
        src: "Macrander_Nematostella-vectensis.jpg",
        name: "Nematostella vectensis",
        author: "Dr. Jason Macrander"
    },
    {
        src: "Adams_Megalomyrmex.jpg",
        name: "Megalomyrmex",
        author: "Dr. Rachelle Adams"
    },
    {
        src: "Walker_Dolopus-genitalis.jpg",
        name: "Dolopus genitalis",
        author: "Dr. Andrew Walker"
    },
    {
        src: "Walker_Havinthus-rufovarius.JPG",
        name: "Havinthus rufovarius",
        author: "Jiayi Jin"
    },
    {
        src: "Walker_Lethocerus-distinctifemur.jpg",
        name: "Lethocerus distinctifemur",
        author: "Dr. Andrew Walker"
    },
    {
        src: "Trim_Psalmopoeus-cambridgei.JPG",
        name: "Psalmopoeus cambridgei",
        author: "Dr. Steve Trim"
    },
    {
        src: "King_Nephila.jpg",
        name: "Nephila",
        author: "Dr. Eivind Undheim"
    },
    {
        src: "King_Hadronyche-infensa.jpg",
        name: "Hadronyche infensa",
        author: "Bastian Rast"
    },
    {
        src: "Harms_Pterois-volitans_Duane-Sabria.JPG",
        name: "Pterois volitans",
        author: "Duane Sabria"
    },
    {
        src: "UlHasan_Californiconus-californicus.JPG",
        name: "Californiconus californicus",
        author: "Sabah Ul-Hasan"
    },
    {
        src: "Saviola_Crotalus-simus.jpg",
        name: "Crotalus simus",
        author: "Dr. Anthony Saviola"
    },
    {
        src: "Colston_Bothrops-brazili.jpg",
        name: "Bothrops brazili",
        author: "Dr. Tim Colston"
    },
    {
        src: "Colston_Bothrops-moojeni.jpg",
        name: "Bothrops moojeni",
        author: "Dr. Tim Colston"
    },
    {
        src: "Colston_Micrurus-fulvius.jpg",
        name: "Micrurus fulvius",
        author: "Dr. Tim Colston"
    },
    {
        src: "Colston_Micrurus-ibiboboca.jpg",
        name: "Micrurus ibiboboca",
        author: "Dr. Tim Colston"
    },
    {
        src: "Colston_Micrurus-lemniscatus.jpg",
        name: "Micrurus lemniscatus",
        author: "Dr. Tim Colston"
    }
]

let cards_row = ""

function loadCards() {
    for (let i=0; i < images.length; i+=2) {
        cards_row += `
            <div class="cards">
                <div class="card">
                    <img
                    ${i === 0 ? 'class="bg"' : ''}
                    src="./images/${images[i].src}"
                    width="500" height="400">
                    <p> <i>${images[i].name}</i>, photo by ${images[i].author}</p>
                </div>
        
                <div class="card">
                    <img
                    src="./images/${images[i+1].src}"
                    width="500" height="400">
                    <p> <i>${images[i+1].name}</i>, photo by ${images[i+1].author}</p>
                </div>
            </div>
        `
    }

    $('#images').append(cards_row)
}
