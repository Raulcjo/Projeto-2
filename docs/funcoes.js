const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const wrapper = document.querySelector('.wrapper');

let valueDefault

btnValue.addEventListener('click', () => {
    //Pega apenas o valor da caixa de input e o trim() rerita os espaços vazios
    let qrCodeValue = inputValue.value.trim() 

    /*Verifica se existe algo dentro da URL ou se o valor é igual ao que já está dentro da input, para
      não gerar um novo QR Code sem necessidade*/
    if(!qrCodeValue || qrCodeValue === valueDefault) return;
    valueDefault = qrCodeValue;

    btnValue.innerText = 'Gerando QR Code...' //Mostra que está executando a ação
    //Faz a conexão com a API e a input
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`
    imgQrCode.addEventListener('load', () => {
        wrapper.classList.add('active')
        btnValue.innerText = 'Gerar QR code'
    })
})