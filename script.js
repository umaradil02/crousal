const imgarr = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
let img = document.querySelector("img");
let next = document.querySelector("#next");
let back = document.querySelector("#previous");
let contaner = document.querySelector(".container")
let imgindex = 0;
next.addEventListener("click",() =>{
    img.style.transform = "scale(0)";
    img.style.opacity = 0;
    next.style.color = "white"
    setTimeout(() => {
        if(imgindex === imgarr.length -1){
            imgindex = 0
            next.style.color = "navy"
        }else{
            imgindex++
        }
        img.src = imgarr[imgindex]
    img.style.transform = "scale(2)";
    img.style.opacity = 0;
    setTimeout(() => {
    img.style.transform = "scale(1)";
    img.style.opacity = 1;
    }, 10);
    },500);
}); 
back.addEventListener("click",() =>{
    img.style.transform = "scale(0)";
    img.style.opacity = 0;
    back.style.color = "white"
    setTimeout(() => {       
        if(imgindex === 0){
            imgindex = imgarr.length -1
            back.style.color = "navy"
        }else{
            imgindex--
        }
        img.src = imgarr[imgindex]
        img.style.transform = "scale(2)";
        img.style.opacity = 0;
        setTimeout(() => {
        img.style.transform = "scale(1)";
        img.style.opacity = 1;
        }, 10);
    },500);
    });