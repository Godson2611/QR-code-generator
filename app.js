document.addEventListener('DOMContentLoaded', function () {
  const qrCodeForm = document.getElementById('qrCodeForm');
  const qrImage = document.getElementById('qr-image');
  const dataInput = document.getElementById('data');
  const widthInput = document.getElementById('width');
  const heightInput = document.getElementById('height');
  const bgColorInput = document.getElementById('bg-color');

  qrCodeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const dataValue = dataInput.value;
    const widthValue = widthInput.value;
    const heightValue = heightInput.value;
    let bgColorValue = bgColorInput.value; // Get the background color value

    // Remove the '#' symbol from bgColorValue if it exists
    bgColorValue = bgColorValue.replace('#', '');

    const baseUrl = 'https://api.qrserver.com/v1/create-qr-code/';
    const qrCodeUrl = `${baseUrl}?size=${widthValue}x${heightValue}&data=${encodeURIComponent(dataValue)}&bgcolor=${bgColorValue}`;

    // Set the QR code image as the source for the <img> element
    qrImage.src = qrCodeUrl;

    qrCodeForm.reset();
  });
});
