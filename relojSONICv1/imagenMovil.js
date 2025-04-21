let selectedElement = null;
let mouseX, mouseY, initialX, initialY;


document.getElementById('imagen').addEventListener('mousedown', function(e) {
    selectedElement = e.target;
    initialX = e.clientX - selectedElement.getBoundingClientRect().left;
    initialY = e.clientY - selectedElement.getBoundingClientRect().top;
    
    document.addEventListener('mousemove', moveElement);
    document.addEventListener('mouseup', releaseElement);
});


function moveElement(e) {
    mouseX = e.clientX - initialX;
    mouseY = e.clientY - initialY;
    
    selectedElement.style.left = mouseX + 'px';
    selectedElement.style.top = mouseY + 'px';
}


function releaseElement() {
    document.removeEventListener('mousemove', moveElement);
    document.removeEventListener('mouseup', releaseElement);
}