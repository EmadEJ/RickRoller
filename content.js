console.log("YOOOOOOOOOOOOOOOOOO!");

elements = document.getElementsByTagName("a");
for (var i = 0; i < elements.length; i++) {
    if(Math.random() * 3 < 1) {
        elements[i].href = "https://r.mtdv.me/cdn/rick.mp4"
        console.log("Rickified: ", elements[i].innerHTML);
    }
}
