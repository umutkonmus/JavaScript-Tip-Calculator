var toplam,bahsis,kisi,elements;

//Sadece sayı input alma
var specialKeys = new Array();
specialKeys.push(8); //Backspace
function IsNumeric(e) {
    var keyCode = e.which ? e.which : e.keyCode
    var ret = ((keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1);
    tutarCek();
    return ret;
}

function tutarCek(){
    elements = document.querySelector('#hesap').elements;
    toplam  = elements[0].value;
    bahsis  = elements[1].value;
    kisi    = elements[2].value;
    hesapla();
}

//
function hesapla(){
    var retBahsisInput = document.querySelector('#verilecekBahsis');
    var retKisiInput = document.querySelector('#kisiSayisi');
    var retDeger = 0;
    var retKisiDeger = 0;
    if (toplam != 0 && toplam != null && bahsis != 0 && bahsis != null){
        retDeger = (toplam*bahsis)/100;
        retBahsisInput.innerHTML = retDeger;
        if(kisi != 0 && kisi != null){
            if(bahsis != 0 && bahsis != null){
                retKisiDeger = (bahsis / kisi) + (toplam / kisi);
                retKisiInput.innerHTML = retKisiDeger;
            }else{
                retKisiDeger =(toplam / kisi);
                retKisiInput.innerHTML = retKisiDeger;
            }
            
        }else{
            retKisiInput.innerHTML = "";
        }
    }else{
        retBahsisInput.innerHTML="";
        if(kisi != 0 && kisi != null){
            if(bahsis != 0 && bahsis != null){
                retKisiDeger = (bahsis / kisi) + (toplam / kisi);
                retKisiInput.innerHTML = retKisiDeger;
            }else{
                retKisiDeger =(toplam / kisi);
                retKisiInput.innerHTML = retKisiDeger;
            }
            
        }
    };
}