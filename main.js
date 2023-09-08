document.getElementById('meuBotao').addEventListener('click', function(event) {
    event.preventDefault();

    var valorCampoA = parseFloat(document.getElementById('campoA').value);
    var valorCampoB = parseFloat(document.getElementById('campoB').value);

    if (!isNaN(valorCampoA) && !isNaN(valorCampoB)) {
        if (valorCampoB > valorCampoA) {
            alert('Código Válido');
        } else if (valorCampoA === valorCampoB) {
            alert('Código Inválido');
        } else {
            alert('Código Inválido');
        }
    } else {
        alert('Certifique-se de inserir números válidos nos campos A e B.');
    }
});