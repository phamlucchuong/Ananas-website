document.addEventListener('DOMContentLoaded', function () {
    const announcementBar = document.querySelector('.header');
    const announcementText = document.querySelector('.announcement-text');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let announcements = [
        'FREE SHIPPING VỚI HÓA ĐƠN TỪ 900K!',
        'HÀNG 2 TUẦN NHẬN ĐỔI, GIÀY NỮA NĂM BẢO HÀNH',
        'BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN',
        'BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE',
    ];

    let currentIndex = 0;

    function showAnnouncement() {
        announcementText.textContent = announcements[currentIndex];
    }

    function nextAnnouncement() {
        currentIndex = (currentIndex + 1) % announcements.length;
        showAnnouncement();
    }

    function prevAnnouncement() {
        currentIndex = (currentIndex - 1 + announcements.length) % announcements.length;
        showAnnouncement();
    }

    function autoRotateAnnouncement() {
        nextAnnouncement();
        setTimeout(autoRotateAnnouncement, 5000); // Chuyển đổi sau mỗi 5 giây
    }

    // Bắt đầu hiển thị thanh thông báo và tự động chuyển đổi
    showAnnouncement();
    setTimeout(autoRotateAnnouncement, 5000);

    // Bắt sự kiện khi bấm nút "Next"
    nextButton.addEventListener('click', function () {
        nextAnnouncement();
    });

    // Bắt sự kiện khi bấm nút "Prev"
    prevButton.addEventListener('click', function () {
        prevAnnouncement();
    });
});


function changeImage(newImage) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = newImage;
}


function toggleSizeDropdown() {
    var sizeDropdown = document.getElementById('sizeDropdown');
    if (sizeDropdown.style.display === 'block') {
        sizeDropdown.style.display = 'none';
    } else {
        sizeDropdown.style.display = 'block';
    }
}

function toggleSlDropdown() {
    var sizeDropdown = document.getElementById('slDropdown');
    if (sizeDropdown.style.display === 'block') {
        sizeDropdown.style.display = 'none';
    } else {
        sizeDropdown.style.display = 'block';
    }
}