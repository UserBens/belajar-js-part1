// quiz tebak angka
var ulangi = true;
while (ulangi) {

    var kesempatan = 3;
    while (kesempatan != 0) {
        var comp = Math.floor(Math.random() * 10) + 1;
        var user = parseInt(prompt('Tebak Angka! \nMasukkan angka 1-10\nkesempatan anda ' + kesempatan + ' kali'));

        var hasil = '';
        user = (isNaN(user)) ? 0 : user;
        if (user != comp) {
            hasil = (user > comp) ? 'Nilai terlalu tinggi' : 'Nilai terlalu rendah';
            kesempatan = kesempatan - 1;
        } else {
            hasil = 'Benar,Nilai Sama!';
            kesempatan = 0;
        }

        alert('Nilai yang kamu pilih = ' + user + '\nNilai yang dipilih comp = ' + comp + '\n \n' + hasil);

    }

    ulangi = confirm('Coba lagi?');

}
alert('Terima Kasih');