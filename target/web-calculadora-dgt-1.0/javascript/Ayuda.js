/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */


function openModal(imageSrc) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modal-image');
    modal.style.display = 'flex';
    modalImage.src = imageSrc;


}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
window.addEventListener('click', function (event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    if (event.target.querySelector("img").src.toString() !== "http://localhost:8080/web-calculadora-dgt/Resources/img/bars-solid.svg") {

        openModal(event.target.querySelector("img").src);
    }

});
