// RETURN FUNCTION

// function hello (a){
//     console.log('Hello ' + a)
// }
// // hello('Fikri')

// function hello1 (a){
//     return 'Hello ' + a
// }


// var hasil = hello1('Fikri')
// console.log(hasil)


// function Angka1 (a){
//     return a
// }

// function Angka2(b){
//     return b
// }

// function penjumlahan(c,d){
//     return Angka1(c) + Angka2(d)
// }

// console.log(penjumlahan(5,6))


// function hello (){
//     return 'world'
// }

// function world(){
//     return 'hello'
// }

// hello() +' ' + world()


// function hello(){
//     console.log('hello')
//     return 'hello'
// }
// console.log(hello())

// ARRAY

// var barang1 = 'Ayam'
// var hargabarang1 = 15000
// var barang2 = 'Sapi'
// var hargabarang2 = 5000


// var barang = ['Ayam' , 'Sapi' , 'Salmon', 'Ikan']
// var harga = [15000, 25000, 30000 , 50000]
// barang[1] = 'Kambing'
// barang.push('Sapi')
// harga.push(50000)


// for(var i = 0 ; i < barang.length ; i++){
//     console.log(barang[i] + ' dengan harga Rp. ' + harga[i])
// }



let mobil = ['Alya','Xenia','Avanza'];
// console.log(mobil)
// console.log(mobil.toString())
// console.log(mobil.join(''))
// console.log(mobil.sort())
// console.log(mobil.indexOf('Avanza'))
// console.log(mobil.reverse())    
// mobil.unshift('Toyota')
// console.log(mobil)
// console.log(mobil.splice(0,1))
// console.log(mobil)

var barang = ['sapi','kambing']
var harga = [20000, 30000]
var keranjang = ['kambing' , 'sapi']
var hargaKeranjang = [30000 , 20000]
var qtybarang = [3,5]
var print = ''
for(var i = 0 ; i < keranjang.length ; i++){
    print += keranjang[i] +' Rp. ' + hargaKeranjang[i] +' x ' + qtybarang[i] + ' = Rp. ' + (hargaKeranjang[i] * qtybarang[i]) +'\n'
}
console.log(print)




