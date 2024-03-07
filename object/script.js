// var mahasiswa = {
//     nama : "beni ozora",
//     umur : 22,
//     ips : [3.50, 3.51, 3.52],
//     alamat : {
//         jalan : "jalan awokaowkao",
//         kota : "gresik",
//         provinsi : "jawa timur",
//     }
// };

// object literal
var mahasiswa = {
    nama: "beni ozora",
    nrp: '098907890',
    email: 'benedictusradyan@gmail.com',
    jurusan: 'teknik informatika',
    alamat: {
        jalan: "jalan awokaowkao",
        kota: "gresik",
        provinsi: "jawa timur",
    }
};

var mahasiswa2 = {
    nama: "subasa ozora",
    nrp: '098907890',
    email: 'subasaozora@gmail.com',
    jurusan: 'teknik informatika',
    alamat: {
        jalan: "jalan awokaowkao",
        kota: "gresik",
        provinsi: "jawa timur",
    }
};

// function declaration
function buatObjectMhs(nama, email, nrp, jurusan) {
    var mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.email = email;
    mahasiswa.nrp = nrp;
    mahasiswa.jurusan = jurusan;
    return mahasiswa;
}

var mahasiswa3 = buatObjectMhs("beni", 'benedictusradyan@gmail.com', '098907890', 'informatika');
var mahasiswa4 = buatObjectMhs("beni", 'benedictusradyan@gmail.com', '098907890', 'mesin');

// constructor
function Mahasiswa(nama, email, nrp, jurusan) {
    this.nama = nama;
    this.email = email;
    this.nrp = nrp;
    this.jurusan = jurusan;
}

var mahasiswa4 = new Mahasiswa('ozora', 'ozora@gmail.com', '09897070', 'sipil');


// membuat object
// cara 1 function declaration

// function buatObject() {
//     console.log('halooo');
// }
// buatObject();


// cara 2 object literal

// var obj = {};
// obj.halo = function() {
//     console.log('halo');
// }
// obj.halo();

// cara 3 constructor
// function halo() {
//     console.log('ahlooooooo');
// }
// new halo();


// konsep this
// cara 1 function declaration : this mengembalikan object global

// function buatObject() {
//     console.log('halooo');
//     console.log(this);
// }
// buatObject();


// cara 2 object literal : this mengembalikan object yang bersangkutan

// var obj = {a : 10, nama : "beni ozora"};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();


// cara 3 constructor : this mengembalikan object yang baru dibuat
// function halo() {
//     console.log(this);
//     console.log('ahlooooooo');
// }
// new halo();