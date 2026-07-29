const temples = [
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl: "https://t0.gstatic.com/images?q=tbn:ANd9GcRA5wamBglvyscNGI8we2p7E1FY9bz98Wa_drFYJORDaa6qPp6b"
    },
    {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii, USA",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl: "https://t3.gstatic.com/images?q=tbn:ANd9GcSG5JgGPt_DqDNWvAcpD7Pb8sX5Xi3fAuK3VLQLRLz-cSYKLIj_"
    },
    {
        templeName: "Mesa Arizona Temple",
        location: "Mesa, Arizona, USA",
        dedicated: "1927, October, 23",
        area: 113916,
        imageUrl: "https://t3.gstatic.com/images?q=tbn:ANd9GcQe5vCkVAG1abE6VswtmDKq1QGh0cE1tinUjHA_IXO_HJx4mb3g"
    },
    {
        templeName: "Logan Utah Temple",
        location: "Logan, Utah, USA",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://t2.gstatic.com/images?q=tbn:ANd9GcSDM1ElfuoNlAUgfptPYE6hA5zQixvpCi5pnMn35lZbU5XvX80i"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://t0.gstatic.com/images?q=tbn:ANd9GcRA5wamBglvyscNGI8we2p7E1FY9bz98Wa_drFYJORDaa6qPp6b"
    },
    {
        templeName: "Paris France Temple",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:"https://t2.gstatic.com/images?q=tbn:ANd9GcQUSKrfVeQ5OpglCD3XDCUnTlyapPRTiE2n0YfEFJfjzo-r_-Tz"
    },
    {
        templeName: "Washington D.C. Temple",
        location: "Kensington, Maryland, USA",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://t1.gstatic.com/images?q=tbn:ANd9GcQMGvg5rCTgL8BuUMT64yjeds--zR4DL7qZVNPuqNgNBUPz_q20"
    },
    {
        templeName: "Nairobi Kenya Temple",
        location: "Nairobi, Kenya",
        dedicated: "2025, May, 18",
        area: 12000,
        imageUrl: "https://t0.gstatic.com/images?q=tbn:ANd9GcQfmp7NJKiiOk5z7YF_iQDEN6H33tIovveLsN0MfOH3lhjH5r8i"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://t3.gstatic.com/images?q=tbn:ANd9GcShnAD-lIq0IhLnUgnP9GvaCL8rlYod-zuLiUsb0EEvWARF4BLb"
    },
    {
        templeName: "Hong Kong China Temple",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: 21550,
        imageUrl: "https://t3.gstatic.com/images?q=tbn:ANd9GcRoT-TUTYmehHE5n-JI1DB4ij70rgqrPcYCcd_gDJS9nryOgdox"
    },
    {
        templeName: "Manti Utah Temple",
        location: "Manti, Utah, USA",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://t1.gstatic.com/images?q=tbn:ANd9GcRDD0WXLGpoFO5-ScqJdpsr9Vg5kc93LBkqB53lxrw1hnE0tYyL"
    },
    {
        templeName: "Payson Utah Temple",
        location: "Payson, Utah, USA",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://t3.gstatic.com/images?q=tbn:ANd9GcSIBFv9hFgUG3kF0KKflqjn_Dbs9aZs0Ffgef9TKYwQqDwseSJA"
    }
];

const gallery = document.querySelector(".gallery");
const pageTitle = document.getElementById("page-title");

function displayTemples(templeList) {
    gallery.innerHTML = "";

    templeList.forEach(temple => {
        const card = document.createElement("section");
        card.classList.add("temple-card");

        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        gallery.appendChild(card);
    });
}

displayTemples(temples);

document.getElementById("home").addEventListener("click", () => {
    pageTitle.textContent = "Temple Gallery";
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", () => {
    pageTitle.textContent = "Old Temples";
    displayTemples(temples.filter(t => parseInt(t.dedicated) < 1900));
});

document.getElementById("new").addEventListener("click", () => {
    pageTitle.textContent = "New Temples";
    displayTemples(temples.filter(t => parseInt(t.dedicated) > 2000));
});

document.getElementById("large").addEventListener("click", () => {
    pageTitle.textContent = "Large Temples";
    displayTemples(temples.filter(t => t.area > 90000));
});

document.getElementById("small").addEventListener("click", () => {
    pageTitle.textContent = "Small Temples";
    displayTemples(temples.filter(t => t.area < 10000));
});

const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.textContent = navigation.classList.contains("open") ? "✖" : "☰";
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;