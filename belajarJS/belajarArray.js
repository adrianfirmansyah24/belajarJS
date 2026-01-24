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