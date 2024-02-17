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


const svg = document.getElementsByTagName("svg")[0]


let arrM = []
for (let i = 3; i < 1640; i+=3) {
    const g = document.getElementsByTagName("g")[i]
   
        arrM.push(g)
        
    
}


const mAnimation = () =>{
    let firstRandNumb = 0
    let secondRandNumb = 0

    firstRandNumb = Math.floor(Math.random() * 546 + 1)
    secondRandNumb = Math.floor(Math.random() * 546 + 1)
    const op1 = arrM[firstRandNumb]
    const op0 = arrM[secondRandNumb]

    op1.style.opacity = "1"
    op0.style.opacity = "0"
}


setInterval(mAnimation, 100)









