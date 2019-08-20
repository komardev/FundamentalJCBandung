// Object => property, value, methode


// =========================OBJECT LITERAL==============
// var product1 = {
//     nama : "Jeruk",
//     harga : 2000,
//     getSummaries : function(a){
//         return this.nama + ' dengan Harga Rp. ' + this.harga + a
//     },
    
// }
// var product2 = {
//     nama : "Kiwi",
//     harga : 1000,
//     getSummaries : function(a){
//         return this.nama + ' dengan Harga Rp. ' + this.harga + a
//     },
    
// }



// ========================== OBJECT BUILDER =================

// var Product = function(nama,harga){
//     this.namaProduk = nama;
//     this.hargaProduk = harga;
//     this.getSummaries = function(a){
//         return this.namaProduk + ' dengan Harga Rp. ' + this.hargaProduk + a
//     };
    
// }

// var product1 = new Product('Jeruk' , 20000)
// var product2 = new Product('Kiwi' , 15000)

// var menu = [
//     product1 ,
//     product2
// ]


// ======================== CLASS ======================

class Product {
    constructor(a,harga){
        this.namaProduct = a;
        this.hargaProduct = harga;
        this.getSummaries = function(){
            return this.namaProduct + ' dengan Harga Rp. ' + this.hargaProduct;
        }
    }
}

var barang = [
    new Product('Jeruk' , 20000),
    new Product('Kiwi' , 30000)
]

var hasil = ''
for(var i = 0 ; i < barang.length ; i++){
    hasil += barang[i].getSummaries() + '\n'
}
console.log(hasil)







