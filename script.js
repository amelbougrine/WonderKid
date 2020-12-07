const image = document.querySelector(".image");
const image2 = document.querySelector(".image2");
const sectionLeft= document.querySelector(".section--left");
const sectionRight= document.querySelector(".section--right");
const h1Left= document.querySelector(".title").firstElementChild;
const h1Right= document.querySelector(".title2").firstElementChild;

sectionLeft.addEventListener("mouseover", () => {
    image2.style.width= "230px";
    image2.style.height= "230px";
    image2.style.right= "80px";
    image2.style.bottom= "40px";
    h1Right.style.fontSize= "45px";
});
sectionRight.addEventListener("mouseover", () => {
    image.style.width= "230px";
    image.style.height= "230px";
    image.style.marginLeft= "90px";
    h1Left.style.fontSize= "45px";
});
sectionLeft.addEventListener("mouseout", () => {
    image2.style.width= "300px";
    image2.style.height= "300px";
    image2.style.right= "270px";
    image2.style.bottom= "20px";
    h1Right.style.fontSize= "60px";
});
sectionRight.addEventListener("mouseout", () => {
    image.style.width= "300px";
    image.style.height= "300px";
    image.style.marginLeft= "270px";
    h1Left.style.fontSize= "60px";
});
