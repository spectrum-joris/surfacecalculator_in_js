document.addEventListener('DOMContentLoaded', function() {
    const shapeSelect = document.getElementById('shape');
    const widthLabel = document.getElementById('widthLabel');
    const widthInput = document.getElementById('width');

    function updateWidthVisibility() {
        const shape = shapeSelect.value;
        if (shape === 'rectangle') {
            widthLabel.classList.remove('hidden');
            widthInput.classList.remove('hidden');
        } else {
            widthLabel.classList.add('hidden');
            widthInput.classList.add('hidden');
        }
    }

    shapeSelect.addEventListener('change', updateWidthVisibility);

    // Call the function initially to set the correct visibility
    updateWidthVisibility();
});

function calculate() {
    const shape = document.getElementById('shape').value;
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    let area = 0;
    let perimeter = 0;
    let error = '';

    if (isNaN(length) || length <= 0) {
        error = 'Voer een geldige lengte in.';
    } else if (shape === 'rectangle' && (isNaN(width) || width <= 0)) {
        error = 'Voer een geldige breedte in.';
    }

    if (error) {
        document.getElementById('error').innerText = error;
        document.getElementById('result').innerText = '';
        return;
    } else {
        document.getElementById('error').innerText = '';
    }

    switch (shape) {
        case 'rectangle':
            area = length * width;
            perimeter = 2 * (length + width);
            break;
        case 'square':
            area = length * length;
            perimeter = 4 * length;
            break;
        case 'circle':
            area = Math.PI * length * length;
            perimeter = 2 * Math.PI * length;
            break;
        default:
            break;
    }

    document.getElementById('result').innerText = `Oppervlakte: ${area.toFixed(2)}, Omtrek: ${perimeter.toFixed(2)}`;
}