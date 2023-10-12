var jmlBus = 10;
var busBeroperasi = 8;
var noBus = 1;

while(noBus <= busBeroperasi) {
    console.log('Bus No. ' + noBus + ' beroperasi dengan baik');
    noBus++;
}

for(noBus = busBeroperasi + 1;noBus <= jmlBus; noBus++) {
    console.log('Bus No. ' + noBus + ' tidak beroperasi');
}