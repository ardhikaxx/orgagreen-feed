const buttons = document.querySelectorAll('.btn-produk');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const imageItem = this.closest('.image-item');
        const paragraph = imageItem.querySelector('.paragraf').innerText;
        const imgSrc = this.getAttribute('data-img-src');
        const hargaList = imageItem.querySelector('.list-harga').innerHTML;

        Swal.fire({
            icon: 'info',
            iconColor: '#297202',
            title: 'Info Detail',
            html: `
                <img loading="lazy" alt="" class="img-fluid rounded" src="${imgSrc}">
                <p class="paragraf">${paragraph}</p>
                <p><strong>Harga:</strong> ${hargaList}</p>
            `,
            confirmButtonColor: '#297202',
            confirmButtonText: 'Tutup',
            scrollbarPadding: false,
        });
    });
});

const linkWhatsApp = 'https://wa.me/6282269674325';
function sendWhatsAppMessage(nama, pesan) {
    const confirmMessage = `Kirim pesan ke WhatsApp dengan nama "${nama}" dan pesan "${pesan}"?`;

    Swal.fire({
        title: "Kirim Pesan WhatsApp",
        text: confirmMessage,
        icon: "info",
        iconColor: '#297202',
        showCancelButton: true,
        confirmButtonText: "Ya, Kirim",
        confirmButtonColor: '#297202',
        cancelButtonText: "Batal"
    }).then((result) => {
        if (result.isConfirmed) {
            const encodedNama = encodeURIComponent(nama);
            const encodedPesan = encodeURIComponent(pesan);
            const whatsappLink = `${linkWhatsApp}?text=Halo%20${encodedNama},%20${encodedPesan}`;

            window.location.href = whatsappLink;
        }
    });
}

document.getElementById('kirim').addEventListener('click', function () {
    const nama = document.getElementById('nama').value.trim();
    const pesan = document.getElementById('pesan').value.trim();

    if (nama === '' && pesan !== '') {
        Swal.fire({
            icon: 'error',
            title: 'Gagal!',
            text: 'Mohon masukkan nama Anda.',
            confirmButtonColor: '#297202'
        });
    } else if (nama !== '' && pesan === '') {
        Swal.fire({
            icon: 'error',
            title: 'Gagal!',
            text: 'Mohon masukkan pesan Anda.',
            confirmButtonColor: '#297202'
        });
    } else if (nama === '' && pesan === '') {
        Swal.fire({
            icon: 'error',
            title: 'Gagal!',
            text: 'Mohon isi nama dan pesan terlebih dahulu.',
            confirmButtonColor: '#297202'
        });
    } else {
        sendWhatsAppMessage(nama, pesan);
    }
});

window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".navbar-brand img");
    const textMenus = document.querySelectorAll(".nav-link");

    if (window.pageYOffset > sticky) {
        ud_header.classList.add("sticky");
        ud_header.style.backgroundColor = '#fafafa';
    } else {
        ud_header.classList.remove("sticky");
        ud_header.style.backgroundColor = 'transparent'; 
    }

    if (ud_header.classList.contains("sticky")) {
        logo.src = "./assets/Logo komersil.png";
        textMenus.forEach(menu => {
            menu.style.color = "#297202";
        });
    } else {
        logo.src = "./assets/Logo komersil2.png";
        textMenus.forEach(menu => {
            menu.style.color = "#fafafa";
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('#home .container', { delay: 250, duration: 800, distance: '50px', origin: 'top', easing: 'ease-in-out', reset: true });
    ScrollReveal().reveal('#home h1, #home p, #home a', { interval: 200, delay: 300, duration: 800, distance: '30px', origin: 'top', easing: 'ease-in-out', reset: true });

    ScrollReveal().reveal('#about', { delay: 200, duration: 800, distance: '50px', origin: 'top', easing: 'ease-in-out', reset: true });
    ScrollReveal().reveal('#about .text-about', { delay: 250, duration: 800, distance: '40px', origin: 'top', easing: 'ease-in-out', reset: true });

    ScrollReveal().reveal('#produk', { delay: 400, duration: 800, distance: '50px', origin: 'top', easing: 'ease-in-out', reset: true });

    ScrollReveal().reveal('#artikel', { delay: 200, duration: 800, distance: '50px', origin: 'top', easing: 'ease-in-out', reset: true });
    ScrollReveal().reveal('#artikel .text-center', { delay: 250, duration: 800, distance: '40px', origin: 'top', easing: 'ease-in-out', reset: true });
    ScrollReveal().reveal('#artikel .card', { interval: 150, delay: 350, duration: 800, distance: '30px', origin: 'top', easing: 'ease-in-out', reset: true });

    ScrollReveal().reveal('#contact', { delay: 300, duration: 800, distance: '50px', origin: 'top', easing: 'ease-in-out', reset: true });
    ScrollReveal().reveal('#contact .text-header, #contact p', { delay: 350, duration: 800, distance: '40px', origin: 'top', easing: 'ease-in-out', reset: true });
    ScrollReveal().reveal('#contact form', { delay: 400, duration: 800, distance: '30px', origin: 'top', easing: 'ease-in-out', reset: true });
    ScrollReveal().reveal('#contact button', { delay: 450, duration: 800, distance: '20px', origin: 'top', easing: 'ease-in-out', reset: true });
});

document.addEventListener('DOMContentLoaded', function() {
    function handleMenuClick(event) {
        event.preventDefault();

        var targetId = this.getAttribute('href').substring(1);

        var targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    var menuLinks = document.querySelectorAll('.nav-link');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', handleMenuClick);
    });
});