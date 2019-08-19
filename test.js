// VARIABEL


// PENGKONDISIAN
// if(condition){action}
// else if(condition){action}
// else{action}

// LOOPING
// while(condition){action}
// do{action}while(condition)
// for(initial_var ; comparison ; increment){action}

// FUNCTION
// function NAMAFUNC(param , param2 , param3){blockofcode}

// for(var i = 0 ; i < 5 ; i++){
//     for(var j= 1 ; j < 6 ; j++){
//         for(var l = 0 ; l < 5 ; l++){
//             console.log('Nested Nested Nested Loop' + l)
//         }
//         console.log('Nested Loop ' + j)
//     }
//     console.log('XXXXXXXXXXXXXXXXX')

//     for(var k = 5 ; k > 0 ; k--){
//         console.log('Nested Loop loop ' + k)
//     }
//     console.log('===================')
    
// }

function removeVocal(bebas){
    // var huruf = bebas
    // huruf = huruf.toLowerCase()
    // huruf = huruf.replace(/a/g , '')
    // huruf = huruf.replace(/i/g , '')
    // huruf = huruf.replace(/u/g , '')
    // huruf = huruf.replace(/e/g , '')
    // huruf = huruf.replace(/o/g , '')
    // console.log(huruf)

    // var huruf = bebas
    // huruf = huruf.toLowerCase()
    // huruf = huruf.replace(/[a,i,u,e,o]/g , '')
    // console.log(huruf)

    console.log(bebas.toLowerCase().replace(/[a,i,u,e,o]/g ,''))
}

function checkVocal(kataYangMauDicek , hurufYangAda ){
    // var kata = kataYangMauDicek.toLowerCase()
    
    // var cari = hurufYangAda.toLowerCase()
    // if(kata.includes(cari) == true){
    //     console.log('True')
    // }else{
    //     console.log('False')
    // }

    console.log(kataYangMauDicek.toLowerCase().includes(hurufYangAda.toLowerCase()))
}
// checkVocal(123123 , 'o')

// var nama = 'fikri'
// nama = nama.toLowerCase()
//  console.log(nama.indexOf('o') ) // -1
// // if(nama.indexOf('f') > 0)

// if(nama.indexOf(yangdicari) == -1){
//     console.log(false)
// }else{
//     console.log(true)
// }

// ALGORITMA
// Step step untuk menyelesaikan Problem

// ALGORITMA UNTUK MENYELESAIKAN 3*5
// 1 . menjumlah 3 dengan 3 sebanyak lima kali
// 2. menjumlahkan 5 dengan 5 sebanyak tiga kali
// 3. 3 *

// checkGanjilGenap(9) => ganjil

function checkGanjilGenap(angka){
    // if(angka % 2 ==0){
    //     console.log('Genap')
    // }else{
    //     console.log('Ganjil')
    // }
    angka % 2 == 0 ? console.log('Genap'):console.log('Ganjil')
}


// var k = 10
// var angka = k %2== 0 ? 'Genap' : 'Ganjil' 
// console.log(angka)
// // checkGanjilGenap(10)

// var angka = 2
// angka > 3 
// ?
// console.log('Lebih Besar dari tiga') 
// :
// angka < 3 
// ? 
// console.log('Kurang Dari tiga') 
// :
// console.log('Ini Else')

// MaxNumber(4,5,10) => '10'

function MaxNumber (angka1, angka2, angka3){
    // var max;
    // if(angka1 > angka2){
    //     if(angka1 > angka3){
    //         max = angka1
    //     }else{
    //         max = angka3
    //     }
    // }else{
    //     if(angka2 > angka3){
    //         max = angka2
    //     }else{
    //         max = angka3
    //     }
    // }
    // console.log(max)
    console.log(Math.max(angka1,angka2,angka3))
}

// MaxNumber(5,15,3)
// 13 = number , sfikri = karakter

function deleteString(string){
    var bahan = string // 1s3fikri
    var at = 0 //2
    var hasil = '' // 13
    while(at <bahan.length){
        var huruf = bahan.charAt(at)
        if(huruf >= '0' && huruf  <= '9'){
            hasil += huruf
        }

        at++
    }
    console.log(hasil)
}
// deleteString('fikrisdgsdgsdgsdgsdg123')


// var nama = 'fikri123'
// if(nama.charAt(2) >= '0' && nama.charAt(2) <=9){
//     console.log('Number')
// }else{
//     console.log('Bukan Number')
// }

// console.log( )


// dupString('fikri') => f\niikkkrrrriiiii
// *\n**\n***
// *
// **
// ***
// f
// ii
// kkk
// rrrr
// iiiii

function dupString(param1){ // 'fa'
    var bahan = param1 // fa
    var hasil = '' // faa
    // i = 1
    // j = 1
    for(var i = 0 ; i < bahan.length ; i++){
        for(var j = 0 ; j <= i ; j++){
           hasil += bahan.charAt(i)
        }
        hasil += '\n'
    }
    console.log(hasil)

}

function dupString2(param1){ // faiasdasd
    var hasil = ''
    for(var i = 0 ; i < param1.length ; i++){
        for(var j = 0 ; j <= i ; j++){
            if(j == 0){
                hasil += param1.charAt(i).toUpperCase()
            }else{
                hasil += param1.charAt(i)
            }
        }
        if(i == param1.length - 1){
            break;
        }
        hasil += '-'
    }
    console.log(hasil)
}

dupString2('faiosa')

