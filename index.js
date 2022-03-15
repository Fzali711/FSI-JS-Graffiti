let header = document.querySelector('#page-header')
header.style.textAlign = 'left'
header.style.background = 'red'

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}
let dogNames = document.querySelectorAll('.dog-name')
for( i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}
let dogPics = document.querySelectorAll('dog-image')
for(let i = 0; i < dogPics.length; i++){
    dogPics[i].style.transform.rotateX = ('180deg')
}
let footer = document.querySelector('.footer')
    footer.style.color =('blue')