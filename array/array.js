// manipulasi array

// menambah isi array
// var arr = [];

// arr [0] = "nama";
// arr [1] = "saya";
// arr [2] = "beni";

// console.log(arr[1]);

//menghapus isi array 
// var arr = ["nama", "saya", "beni"];
// arr [1] = undefined;
// console.log(arr);

//menampilkan isi array method lenght
// var arr = ["beni", "ozora", "subasa", "wakabayasi"];

// for (var i = 0; i < arr.length; i++) {
//     console.log('mahasiswa ke-' + (i + 1) + ':' + arr[i]);
// }

//menampilkan isi array method join
// var arr = ["beni", "ozora", "subasa", "wakabayasi"];
// console.log(arr.join(' - '));

// menampilkan isi array method push dan pop
// var arr = ["beni", "ozora", "subasa", "wakabayasi"];
// arr.push('ravi');
// arr.pop();
// console.log(arr.join(' - '));

// menampilkan isi array method shift & unshift
// var arr = ["beni", "ozora", "subasa", "wakabayasi"];
// arr.unshift('ravi');
// arr.shift('ravi');
// console.log(arr.join(' - '));

// menampilkan isi array method splice
// var arr = ["beni", "ozora", "subasa", "wakabayasi"];
// arr.splice(2, 0, 'ravi', 'octian');
// console.log(arr.join(' - '));

// menampilkan isi array method slice
// var arr = ["beni", "ozora", "subasa", "wakabayasi", "ravi"];
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(' - '));

// foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['beni', 'ozora', 'kece'];
// // angka.forEach(function (e) {
// //     console.log(e);
// // });

// nama.forEach(function (e, i) {
//     console.log('mahasiswa ke-' + (i + 1) + ' adalah : ' + e);
// });

// map
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });

// console.log(angka2.join(' - '));

// sort
// var angka = [1, 2, 4, 3, 7, 6, 5, 8];
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka.join(' - '));

// filter & find
// var angka = [1, 2, 4, 3, 7, 6, 5, 8];
// var angka2 = angka.filter(function(x){
//     return x < 5;
// });

// console.log(angka2);

var angka = [1, 2, 4, 3, 7, 6, 5, 8];
var angka2 = angka.find(function(x){
    return x > 5;
});

console.log(angka2);