const images=[
    "https://i.pinimg.com/736x/85/6b/20/856b200fa2cedf3d5291b259e66e0bc9.jpg",
]

let index=0;

const imgElement=document.getElementById("slideshows");

function changeImage(){
    imgElement.src=images[index];
    index=(index+1)%images.length;
}

changeImage();

setInterval(changeImage,3000);