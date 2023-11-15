
document.addEventListener('DOMContentLoaded', function () {
    const announcementBar = document.querySelector('.top-title');
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    function showAnnouncement() {
        announcementBar.classList.add('active');
        setTimeout(hideAnnouncement, 2000); // Ẩn thanh thông báo sau 2 giây
    }

    function hideAnnouncement() {
        announcementBar.classList.remove('active');
        // Không cần setTimeout ở đây vì sẽ được gọi ngay lập tức khi ẩn
        showNextAnnouncement();
    }

    let announ = [
        'HÀNG 2 TUẦN NHẬN ĐỔI, GIÀY NỮA NĂM BẢO HÀNH',
        'BUY MORE PAY LESS - ÁP DỤNG KHI MUA PHỤ KIỆN',
        'BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE',
        'FREE SHIPPING VỚI HÓA ĐƠN TỪ 900K!'
    ];

    let currentIndex = 0;

    function showNextAnnouncement() {
        announcementBar.querySelector('.announcement-text').textContent = announ[currentIndex];
        // Hiển thị thanh thông báo mới
        showAnnouncement();
    }
    let i = 0;

    function showPrevAnnouncement() {
        currentIndex = (currentIndex - 1 + announ.length) % announ.length;
        announcementBar.querySelector('.announcement-text').textContent = announ[currentIndex];
        // Hiển thị thanh thông báo mới
        i = (i + 1) % announ.length;
        if(i==4){
            i = 0;
        }
        showAnnouncement();
    }

    // Bắt đầu hiển thị thanh thông báo
    showAnnouncement();

    // Bắt sự kiện khi bấm nút "Next"
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % announ.length;
        showNextAnnouncement();
    });

    // Bắt sự kiện khi bấm nút "Prev"
    prevButton.addEventListener('click', function () {
        showPrevAnnouncement();
    });
});