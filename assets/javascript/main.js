document.addEventListener('DOMContentLoaded', function () {
    const announcementBar = document.querySelector('.top-title');

    function showAnnouncement() {
        announcementBar.classList.add('active');
        setTimeout(hideAnnouncement, 10000); // Ẩn thanh thông báo sau 2 giây
    }

    function hideAnnouncement() {
        announcementBar.classList.remove('active');
        setTimeout(showNextAnnouncement, 500); // Hiển thị thông báo tiếp theo sau 0.5 giây
    }

    let announ = [
        'HÀNG 2 TUẦN NHẬN ĐỔI, GIÀY NỮA NĂM BẢO HÀNH',
        'BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN',
        'BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE',
        'FREE SHIPPING VỚI HÓA ĐƠN TỪ 900K!'
    ];

    let i = 0;

    function showNextAnnouncement() {
        announcementBar.querySelector('.announcement-text').textContent = announ[i];
        i = (i + 1) % announ.length;
        if(i==4){
            i = 0;
        }

        // Hiển thị thanh thông báo mới
        showAnnouncement();
    }

    // Bắt đầu hiển thị thanh thông báo
    showAnnouncement();
});
