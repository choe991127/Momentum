const body=document.querySelector('body');
const img=["0.jpeg","1.jpeg"]
const CLASS_NAME_IMAGE="bgImg";
const chosenImage=img[Math.floor(Math.random()*img.length)];
const bgImage=document.createElement("img");
bgImage.src=`img/${chosenImage}`;
bgImage.classList.add(CLASS_NAME_IMAGE);
document.body.appendChild(bgImage) //html body에 bgImage 추가하는거다.



