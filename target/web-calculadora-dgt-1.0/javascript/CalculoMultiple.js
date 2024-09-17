/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function toggleDetails(button) {
    var row = button.parentNode.parentNode;
    var nextRows = [];
    for (var i = 1; i <= 3; i++) {
        var nextRow = row.nextSibling;
        while (nextRow && nextRow.nodeType != 1) { // Saltar nodos de texto
            nextRow = nextRow.nextSibling;
        }
        if (nextRow && nextRow.className.indexOf('details') != -1) {
            nextRows.push(nextRow);
            row = nextRow;
        }
    }
    for (var j = 0; j < nextRows.length; j++) {
        if (nextRows[j].className.indexOf('hidden') != -1) {
            nextRows[j].className = nextRows[j].className.replace('hidden', '').trim();
            button.textContent = "Ocultar detalles";
        } else {
            nextRows[j].className += ' hidden';
            button.textContent = "Ver detalles";

        }
    }
}

function copyTableContent() {
    var table = document.getElementById("form:editableTable");
    var range = document.createRange();
    range.selectNode(table);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        var successful = document.execCommand('copy');
        if (successful) {
            alert('Contenido copiado al portapapeles');
        } else {
            alert('Error al copiar el contenido');
        }
    } catch (err) {
        alert('El navegador no soporta la función de copiar');
    }
    window.getSelection().removeAllRanges();
}

function htmlExcel(tableID, filename) {
    if (!filename)
        filename = 'excel_data.xls';
    let dataType = 'application/vnd.ms-excel';

    let tableSelect = document.getElementById(tableID);
    let tableHTML = tableSelect.outerHTML;

    let blob = new Blob([tableHTML], {type: dataType});

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        let csvUrl = URL.createObjectURL(blob);
        a.href = csvUrl;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(a.href);
        a.remove();
    }
}


