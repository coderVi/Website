var baslik = document.getElementById("menu");
var baglanti = baslik.getElementsByClassName("eleman");

for (let i = 0; i < baglanti.length; i++) {
    baglanti[i].addEventListener("click", function () {
        var activeLink = document.getElementsByClassName("active");
        activeLink[0].className = activeLink[0].className.replace("active", "");
        this.className += " active";
    });
}

function view() {
    var control = document.getElementById("password");
    if (control.type == "password") {
        control.type = "text";
    } else {
        control.type = "password";
    }
}

function samet() {
    let degis = document.getElementById("container");
    let damlalik = document.getElementById("renk");
    degis.style.backgroundColor = damlalik.value;
}
let sayi1 = document.getElementById("s1");
let sayi2 = document.getElementById("s2");
var yazdir = document.getElementById("sonuc")
let sonuc = 0;
function toplama(){
    degerKontrol()
    sonuc = parseInt(sayi1.value) + parseInt(sayi2.value);
    yazdir.innerText = sonuc;
}
function cikarma(){
    degerKontrol()
    sonuc = parseInt(sayi1.value) - parseInt(sayi2.value);
    yazdir.innerText = sonuc;
}
function carpma(){
    degerKontrol()
    sonuc = parseInt(sayi1.value) * parseInt(sayi2.value);
    yazdir.innerText = sonuc;
}
function bolme(){
    if( sayi1.value == 0 || sayi2.value == 0){
        alert("0 a bölme hatası")
    }else{
        degerKontrol()
        sonuc = parseInt(sayi1.value) / parseInt(sayi2.value);
        yazdir.innerText = sonuc;
    }    
}

function degerKontrol(){
    if(sayi1.value == "" || sayi2.value == ""){
        alert("değerler boş geçilemez")
        yazdir.innerText = "0"
    }
}

let baslangic = document.getElementById("sepet")
baslangic.value = 0;
function addToCard(){
    if(baslangic.value == 10){
        alert("Mw aç köpeği Kaç tane alıyon")
    }else{
        baslangic.value  ++;
    }
    
}
var myNumberInput = document.getElementById("sepet");

myNumberInput.addEventListener("mousewheel", function (e) {
    e.preventDefault();
});

function removeToCard(){
    if(baslangic.value == 0){
        alert("0 dan az ürün mü olur ?")
    }else{
        baslangic.value --;
    }
}
