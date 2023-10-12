var jmlBus = 10;
var busBeroperasi = 6;
var noBus = 1;

for (noBus = 1; noBus <= jmlBus; noBus++) {
    if (noBus === 8 || noBus === 10 || noBus === 5) {

        console.log('Bus No. ' + noBus + ' sedang lembur.');

    } else if (noBus <= busBeroperasi) {

        console.log('Bus No. ' + noBus + ' beroperasi dengan baik.');

    } else {
        console.log('Bus No. ' + noBus + ' tidak beroperasi.');
    }

}