let imgBox=document.getElementById("imgBox");
let qrImg=document.getElementById("qrImg");
let qrtxt=document.getElementById("qrtxt");
function genQr(){
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrtxt.value ;
}

