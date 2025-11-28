/*Name this external file gallery.js*/

function upDate(previewPic){
    var imgElem = document.getElementById("image");
    imgElem.style.backgroundImage = "url("+previewPic.src+")";
    imgElem.innerHTML = previewPic.alt;
}

function unDo(){
    var imgElem = document.getElementById("image");
    imgElem.style.backgroundImage = "url('')";
    imgElem.innerHTML = "Hover over an image below to display here.";

}
function addTabIndex() {
    const images = document.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', 0); // 0 allows keyboard tabbing
        console.log(`Tabindex added to image ${i+1}`);
    }
}

window.onload = addTabIndex;
