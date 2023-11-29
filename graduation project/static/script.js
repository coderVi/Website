$(".sayi").counterUp({ delay: 10, time: 500 });

var renk = document.getElementById("topMenu");
        window.addEventListener("scroll", function () {
            if (this.scrollY > 100) {
                renk.style.backgroundColor = "white";
            } else {
                renk.style.backgroundColor = "deepskyblue";
            }
});

// Sayfa yüklendiğinde çalışacak kod
window.onload = function() {
    // Kullanıcı aşağı kaydırdığında göster, yukarı kaydırdığında gizle
    window.onscroll = function() {
        scrollFunction();
    };
};

// Scroll işlevi
function scrollFunction() {
    var btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// En üstüne gitme işlevi
function scrollTopFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Diğer tarayıcılar
}

