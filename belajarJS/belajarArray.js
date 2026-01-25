//contoh membuat array 1
const buah = ['apel', 'jeruk', 'mangga']
console.log(buah)

//contoh membuat array 2
const sayur = []
sayur[0] = 'bayam'
sayur[1] = 'kangkung'
sayur[2] = 'wortel'
console.log(sayur) 

//contoh membuat array 3
const hewan = new Array('kucing', 'anjing', 'kelinci')
console.log(hewan)

//contoh membuat array 4
const benda = new Array()
benda[0] = 'meja'
benda[1] = 'kursi'
benda[2] = 'lemari'
console.log(benda)

//contoh membuat array tapi di tengahnya kosong(data)
const kendaraan = []
kendaraan[0] = 'mobil'
kendaraan[3] = 'motor'
console.log(kendaraan)

//namaArray.includes = cek apakah ada datanya dalam array atau tidak
const kucing = hewan.includes('kucing')
console.log(kucing)

//namaArray.indexOf = mencari index dari data dalam array 
const posisikucing = hewan.indexOf('kucing')
console.log(posisikucing)

//bisa dibuat menggunakan statement if else
if(kucing) {
    console.log(`posisi kucingnya ada di ${posisikucing}`)
} else {
    console.log("tidak ada kucing di array hewan")
}

//bisa melihat juga data sebelum dan sesudah dalam array
const kangkung = sayur.includes('kangkung')

if (kangkung) {
    const posisikangkung = sayur.indexOf('kangkung')
    const sebelumkangkung = posisikangkung - 1
    const sesudahkangkung = posisikangkung + 1
    const before = sayur[sebelumkangkung]
    const after = sayur[sesudahkangkung]
    console.log(posisikangkung)
    console.log(sebelumkangkung)
    console.log(sesudahkangkung)
    console.log(before)
    console.log(after)
}

//shift() dan pop() = menghapus data dalam array depan dan belakang
//ex shift() 
//const buahdepan = buah.shft()
//ex pop()
//const buahbelakang = buah.pop()


//melihat data pertama pada array
const buahdepan = buah[0]
console.log(buahdepan)

//melhat data akhir pada array
const buahbelakang = buah[buah.length-1]
console.log(buahbelakang)

const panjangbuah = buah.length
console.log(panjangbuah)

//menambah data pada array menggunakan push() dan unshift()
const nambahbuah1 = buah.push('semangka')//menambah data di belakang array
console.log(buah)

const nambahbuah2 = buah.unshift('kiwi')//menambah data di depan array
console.log(buah)
 

const umur = []
umur['dua belas'] = 12
umur['tiga belas'] = 13
umur['empat belas'] = 14
console.log(umur)