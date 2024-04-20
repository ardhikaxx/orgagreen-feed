const buttons = document.querySelectorAll('.btn-produk');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const imageItem = this.closest('.image-item');
        const paragraph = imageItem.querySelector('.paragraf').textContent;
        const imgSrc = this.getAttribute('data-img-src');

        Swal.fire({
            icon: 'info',
            iconColor: '#297202',
            title: 'Info Detail',
            html: `
                <img loading="lazy" alt="" class="img-fluid rounded" src="${imgSrc}">
                <p class="paragraf">${paragraph}</p>
            `,
            confirmButtonColor: '#297202',
            confirmButtonText: 'Tutup',
            scrollbarPadding: false,
        });
    });
});


window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".navbar-brand img");
    const textMenus = document.querySelectorAll(".nav-link");

    if (window.pageYOffset > sticky) {
        ud_header.classList.add("sticky");
    } else {
        ud_header.classList.remove("sticky");
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