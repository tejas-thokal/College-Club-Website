const images=[
    "https://i.pinimg.com/736x/aa/6b/46/aa6b46c47b10a2acd78f35bb4a8e7b90.jpg",
    "https://i.pinimg.com/736x/7e/be/e0/7ebee0ed5321f5600a2108edf0d84d43.jpg",
    "https://i.pinimg.com/736x/c6/f7/5c/c6f75cdadb474ef4b0761dc94a8fc731.jpg"
]

let index=0;

const imgElement=document.getElementById("slideshows");

function changeImage(){
    imgElement.src=images[index];
    index=(index+1)%images.length;
}

changeImage();

setInterval(changeImage,3000);