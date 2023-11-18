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


function toggleDropdown(id) {
    var sizeDropdown = document.getElementById(id);
    if (sizeDropdown.style.display === 'block') {
        sizeDropdown.style.display = 'none';
    } else {
        sizeDropdown.style.display = 'block';
    }
}

function readMoreClick(){
    var readButton = document.getElementById('read-more');
    readButton.style.display = 'none';
}

function validateEmail() {
    var email = document.getElementById('email-login-input-text').value;
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    // Kiểm tra xem email có đúng định dạng không
    if (emailRegex.test(email)) {
        alert('Cảm ơn bạn ! Chúng tôi sẽ sớm phản hồi');
    } else {
        alert('Định dạng email không hợp lệ');
    }
  }


  function chonSize(size, id){
    document.getElementById(id).textContent = size;  
}


function inputSoLuong(id){
    var soLuong = document.getElementById(id).value;
    if(soLuong < 0){
        alert('Số lượng không hợp lệ !');
    }
}

function tttt(){
    var sl = document.getElementById('doi-so-luong').value;
    if(sl < 0){
        alert('Số lượng không hợp lệ !');
    }
     else {
        // window.location.href = "../index.html";
        alert('Thanh toán thành công, cảm ơn bạn đã ủng hộ Ananas !');
    }
}

function resetGioHang(){
    document.getElementById('gio-hang-cua-ban').textContent = ' ';
}


function checkThongTin(){
    var maDonHang = document.getElementById('ma-don-hang').value;
    var soDienThoai = document.getElementById('so-dien-thoai').value;
    var mdhRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;
    if(maDonHang == '' || soDienThoai == ''){
        alert('Vui lòng nhập đầy đủ thông tin!');
    } else {
        if(!mdhRegex.test(maDonHang)) {
            alert('Mã đơn hàng không hợp lệ!');
        } else if(!emailRegex.test(soDienThoai) && !phoneRegex.test(soDienThoai)) {
            alert('Email / Số điện thoại không hợp lệ!');
        } else alert('Đơn hàng của bạn sẽ sớm được giao!');
    }
}

function xoaYeuThich(){
    document.getElementById('yeu-thich').textContent = '';
}

function themGioHang(){
    var sl = document.getElementById('inputSl').value;
    var size = document.getElementById('pick_Size').value;
    if(sl > 0 && size != '' ){
        alert('Đã thêm vào giỏ hàng!');
        // window.location.href = '../index.html';
    } else {
        alert('Vui lòng chọn Size và số lượng!');
    }
}