NỘP GIÁO ÁN ONLINE - NTT V4.9 HO SO CUA TOI

Bản chốt theo giao diện đã duyệt:
- Khung 1080px, căn giữa.
- Không kéo khung xuống hết chiều cao màn hình, loại bỏ khoảng trắng thừa phía dưới.
- 3 hồ sơ Khối 10 / 11 / 12.
- Nhập dọc: Tên bài học, Số tiết, Từ tiết đến tiết.
- Hai nút dưới được thu gọn; chữ/icon LÀM MỚI gần nhau hơn.
- Giữ chức năng lưu hồ sơ trên trình duyệt và mở Google Form đã điền.
- Chân trang: TRƯỜNG PT DTNT TỈNH CAO BẰNG.

Triển khai Vercel:
1. Giải nén ZIP.
2. Upload index.html và vercel.json vào project/repository.
3. Redeploy.


Bổ sung V4.9:
- Thêm khối “HỒ SƠ CỦA TÔI” ngay trong app.
- Sau khi mở Google Form và bấm Gửi, quay lại app chọn “ĐÃ NỘP XONG”; dữ liệu Tên bài / Khối / Số tiết / Tiết PPCT / thời gian nộp xuất hiện ngay.
- Hồ sơ vừa xác nhận có hiệu ứng sáng nhẹ để dễ nhận biết.
- Lưu lịch sử trên trình duyệt (tối đa 60 hồ sơ, hiển thị 5 hồ sơ gần nhất).
- Có nút “XEM TRẠNG THÁI DUYỆT” mở đúng trang giáo viên trên Minh chứng giáo án.
- Responsive: trên điện thoại danh sách tự chuyển thành thẻ gọn.

Lưu ý kỹ thuật:
- Google Form mở ở tên miền khác nên trình duyệt không cho app tự biết người dùng đã bấm Gửi hay chưa. Vì vậy V4.9 dùng bước xác nhận “ĐÃ NỘP XONG” khi quay lại app để tránh ghi nhận sai.
- Muốn trạng thái Chờ duyệt/Đã duyệt/Nộp lại đồng bộ tự động ngay trong app cần kết nối API hoặc nguồn dữ liệu chung của hệ thống Minh chứng giáo án.
