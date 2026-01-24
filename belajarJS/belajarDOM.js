//document.title = untuk judul website
document.title = "belajar dom js"

//jika ingin melihat di console
console.log(document.title)

//document.body = untuk mengedit body, .style berguna untuk cssnya
document.body.style.backgroundColor = "grey"

//body = document.body = gunanya untuk meringkas kata kata body
const body = document.body

//tinggal menulis body untuk mengedit body browser
//gunakan "append" untuk menambahkan kata kata di body  
body.append("hello word")

//bisa buat element baru 
const katabaru = document.createElement("h1")
katabaru.innerText = "hai saya ganteng banget"
body.append(katabaru)

//innerText, innerHTML, dan textContent adalah properti JavaScript untuk memanipulasi konten HTML. 
//InnerHTML mendapatkan/mengatur konten termasuk tag HTML. 
//InnerText hanya mengambil teks yang terlihat, mengabaikan gaya/teks tersembunyi. 
//TextContent mengambil seluruh teks (termasuk yang tersembunyi) dan lebih cepat daripada innerText. 

//bisa di style seperti bodynya
const katakedua = document.createElement("p")
katakedua.textContent = "ini adalah paragraf kedua"
katakedua.style.color = "white"
katakedua.style.backgroundColor = "black"
katakedua.style.fontSize = "30px"
katakedua.style.fontFamily = "Arial"
katakedua.style.fontWeight = "bold"
katakedua.style.textAlign = "center"
body.append(katakedua)

//menggunakan getElementById untuk mengambil element berdasarkan idnya
//misal di html ada <button id="btn1">klik saya</button>
const klik1 = document.getElementById("btn1")
klik1.style.padding = "10px 20px"
klik1.style.fontSize = "20px"
klik1.style.backgroundColor = "blue"
klik1.style.color = "white"

//akan muncul alert ketika di klik
klik1.addEventListener("click", () => {
    alert("jangan di pencet woi")
})
//akan merubah warna hijau ketika kursor meninggalkan tombol
klik1.addEventListener("mouseleave", () => {
    klik1.style.backgroundColor = "blue"
})
//akan merubah warna hitam ketika kursor di arahkan ke tombol
klik1.addEventListener("mouseover", () => {
    klik1.style.backgroundColor = "black"
})

//NOTE: PADA JS TIDAK MENGGUNAKAN KATA "ON" PADA EVENTLISTENER
//MISAL JIKA DI HTML ADA ONCLICK MAKA DI JS HANYA CLICK SAJA


const klik2 = document.getElementById("btn2")
klik2.style.padding = "10px 20px"
klik2.style.fontSize = "20px"
klik2.style.backgroundColor = "red"

klik2.addEventListener("mouseover", () => {
    klik2.style.backgroundColor = "yellow"
    const paragrafbaru= document.createElement("p")
    paragrafbaru.textContent = "tolong jangan arahkan kursor ke tombol"
    body.append(paragrafbaru)
})

klik2.addEventListener("mouseleave", () => {
    klik2.style.backgroundColor = "red"
})

console.log(klik1)