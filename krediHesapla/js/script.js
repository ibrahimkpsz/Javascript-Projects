function krediHesapla() {
    let vade,taksitTutari,odenecekTutar,krediTutar,faiz;
    let output = document.getElementById('output');
    krediTutar = document.getElementById('text-input').value;
    let secenek = document.getElementById('options');
    vade = secenek.options[secenek.selectedIndex].value;

    

    if (vade == 12) {
        faiz = 1.12;
        odenecekTutar = krediTutar * faiz; 
    }
    else if (vade == 24) {
        faiz = 1.24;
        odenecekTutar = krediTutar * faiz;
    }
    else if (vade == 36) {
        faiz = 1.36;
        odenecekTutar = krediTutar * faiz;
    }
    else if (vade == 48) {
        faiz = 1.48;
        odenecekTutar = krediTutar * faiz;
    }
    else if (vade == 60) {
        faiz = 1.60;
        odenecekTutar = krediTutar * faiz;
    }

    taksitTutari = odenecekTutar / vade;
    output.innerHTML = "Ödenecek Tutar : " + odenecekTutar.toFixed(0) + "<br>" + "Aylık Taksit Tutarı : " + taksitTutari.toFixed(2) + "<br>" + "Faiz Oranı: " + faiz.toFixed(2);
}

let btn = document.getElementById('btn');
btn.addEventListener('click', krediHesapla);
