const header = document.getElementsByTagName("header")[0]
const btz = document.querySelector("button")

document.addEventListener("scroll", function(e){
if (window.scrollY >= 300) {
    header.classList = "headerScroll"
    btz.classList = "headerScrollBtz"
}else{
    header.classList.remove("headerScroll")
    btz.classList.remove("headerScrollBtz")
}

})









