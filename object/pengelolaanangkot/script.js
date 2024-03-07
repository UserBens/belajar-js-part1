// membuat objet angkot
function Angkot(sopir, trek, penumpang, kas) {
    this.sopir = sopir;
    this.trek = trek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }


    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            alert('angkot masih kosong');
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('beni ozora', ['gresik', 'surabaya'], [], 0);
var angkot2 = new Angkot('subasa', ['darjo', 'lamongan'], [], 0);