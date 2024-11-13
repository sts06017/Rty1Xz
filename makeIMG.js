const images = [
    "lose1.jpeg", "lose2.jpeg", "lose3.jpeg", "lose4.jpeg", "lose5.gif", "lose6.jpeg", "lose7.jpeg", "lose8.jpeg", "lose9.jpeg", "lose10.gif"
];


const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `images/${chosenImage}`;
document.body.appendChild(bgImage);