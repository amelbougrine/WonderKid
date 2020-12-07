const image = document.querySelector(".image");
const image2 = document.querySelector(".image2");
const sectionLeft= document.querySelector(".section--left");
const sectionRight= document.querySelector(".section--right");


sectionLeft.addEventListener("mouseover", () => {
    image2.style.width= "200px";
    image2.style.height= "200px";
});
sectionRight.addEventListener("mouseover", () => {
    image.style.width= "200px";
    image.style.height= "200px";
});
sectionLeft.addEventListener("mouseout", () => {
    image2.style.width= "300px";
    image2.style.height= "300px";
});
sectionRight.addEventListener("mouseout", () => {
    image.style.width= "300px";
    image.style.height= "300px";
});
