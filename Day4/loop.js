// var print = ''
// for(var i = 0 ; i < 5 ; i++){
//     print += '*'
//     // print += '\n'
// }
// // print = '*\n*\n*\n*\n*\n'
// console.log(print)


// var print = ''

// for(var i = 0 ; i < 4 ; i++){
//     for(var j = 0 ; j < 10 ; j ++){
//         print+= j+1
//     }
//     print += '\n'
// }
// console.log(print)


// var print = ''
// var i =0

// while(i < 4){
//     var j = 0
//     while(j < 10){
//         print+= j +1
//         j++
//     }
//     if(i == 3){
//         break
//     }
//     print += '\n'
//     i++
// }
// console.log(print)


// *
// **
// ***
// ****
// *****
// var output = ''
// for(var i = 0 ; i < 5 ; i++){
//     for(var j = 0 ; j < (5- i) ; j ++){
//         output += '*'
//     }
//     output+= '\n'
// }
// console.log(output)



// var output = ''
// var i = 0
// var num = 1
// while(i <= 5){
//     var j = 0
    
//     while(j < i){
//         output += num + ' '
//         j++
//         num += 2
//     }
//     if( i == 5){
//         break;
//     }
//     output += '\n'
//     i++
// }

// console.log(output)






// var a = 5
// var hasil = ''
// if(a > 4 && a < 6){
//     hasil = 'Good'
//     if(a > 3 || a < 3){
//         hasil += 'Great'
//         if(a > 10 || a >= a){
//             hasil = 'Perfect'
//         }
//     }
// }else{
//     hasil = 'Bad'
// }

// console.log(hasil)



// var angka = 0
// var hasil = 0
// do{
//     hasil+= angka
//     angka--
// }while(angka > 0)

// console.log(angka)




// infinite loop
// 


// var hasil = 0
// var nama = 'Purwadhika'
// var hasil = 0
// for(var i = 0 ; i < 10 ; i++ ){
//     hasil = i
// }

// console.log(hasil)

// // console.log(0+1+2+3+4+5+6+7+8+9)


// // 9

// var jumlah = 0
// for(var i = 10 ; i > 0 ; i--){
//     for(var j = 0 ; j <= i ; j--){
//         jumlah += 1
//         break
//     }
// }
// console.log(jumlah) //10

// 5 baris

//    *            0 -  1      
//   ***           1 -  3
//  *****          2 -  5
// *******         3 -  7
//*********        4 -  9

// hub space dan baris
//  i =0  => spasi harus 4
//  i =1  => spasi harus 3
//  i =2  => spasi harus 2
//  i =3  => spasi harus 1
//  i =4  => spasi harus 0

// hub
// var bintang = ''
// var ganjil = 1
// var baris = 3
// for(var i = 0 ; i < baris ; i++){

//     // untuk space
//     for(var j = 0 ; j < ((baris-1)-i) ; j++){
//         bintang+=' '
//     }
//     // untuk bintang
//     for(var k = 0 ; k < ganjil ;k++){
//         bintang+= '*'
//     }
//     ganjil += 2
//     bintang+= '\n'
// }

// console.log(bintang)

var output= ''
var i = 0
var ganjil = 1
while(i < 5){
    // untuk space
    var j = 0
    while(j < 4-i){
        output += ' '
        j++
    }
    // untuk bintang
    var k = 0
    while(k < ganjil){
        output += '*'
        k++
    }

    ganjil += 2
    output += '\n'
    i++
}
console.log(output)



































