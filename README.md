NỘP GIÁO ÁN ONLINE - NTT V5.5

- Sửa ô Giáo viên đang dùng để có thể đổi qua giáo viên khác bình thường.
- Danh sách giáo viên được nhúng sẵn trực tiếp trong HTML.
- Thu gọn ô chọn chung về phía trái, rộng tối đa khoảng 560px.
- Bỏ nút và lựa chọn "Thêm giáo viên mới" khỏi giao diện sử dụng.
- Chọn giáo viên chung áp dụng cho Khối 10, 11, 12.
- Vẫn có thể đổi riêng giáo viên từng khối.
- Tự nhận môn, tổ, người duyệt, PPCT và ghi nhớ trên thiết bị.

- V5.6: Đổi tiêu đề mục 2 thành “CHỌN BÀI DẠY”.

- V5.7: Thêm mục 3. MINH CHỨNG ĐÃ NỘP.
- Tự lọc hồ sơ theo giáo viên đang chọn.
- Hiển thị ngày nộp, tên bài, khối, số tiết, tiết PPCT, trạng thái chờ duyệt/đã duyệt và nút mở file.
- Tự thử cập nhật khi người dùng quay lại tab sau khi gửi Google Form.
- Có nút ↻ Cập nhật thủ công và bộ nhớ đệm localStorage.

- V5.8: Sửa lỗi bảng Minh chứng có số lượng hồ sơ nhưng không render dòng.
- Nguyên nhân: dữ liệu Khối/Số tiết từ Google Sheet là kiểu số, hàm escape cũ chỉ xử lý chuỗi.
- Đã sửa để hiển thị đầy đủ các hồ sơ đã nộp.

- V5.9: Thêm nút Xuất PDF trong phần Minh chứng đã nộp.
- PDF nhóm hồ sơ theo khối, có tổng hồ sơ/số tiết/trạng thái.
- Tiêu đề tài liệu và tên mặc định khi Lưu PDF có đầy đủ họ tên giáo viên, ví dụ: “Lương Vũ Long - Minh chứng giáo án - Khối 10-11-12 - 2026-2027.pdf”.

- V5.10: Thêm bộ lọc xuất minh chứng theo tháng.
- Có lựa chọn Tất cả năm học hoặc từng tháng 08/2026 đến 05/2027.
- Bảng minh chứng trên app cũng lọc theo tháng đang chọn.
- PDF A4 ngang theo mẫu khoa học: tên trường, giáo viên, môn, khối, hồ sơ/số tiết, trạng thái.
- Bảng PDF gồm: Ngày nộp, Khối, Tên bài/Nội dung, Số tiết, Tiết PPCT, Người duyệt, Trạng thái.
- Có tổng cộng cuối trang và ngày xuất minh chứng.
- Tên file PDF tự có đầy đủ họ tên và tháng nếu xuất theo tháng.

- V5.11: Chuyển mẫu PDF minh chứng sang khổ A4 dọc (portrait), tối ưu bảng và thẻ tổng hợp để vừa trang.

- V5.12: Tăng khoảng cách giữa bộ lọc tháng, nút Xuất PDF và Cập nhật để giao diện thoáng hơn.

- V5.13: Nút Xuất PDF tải trực tiếp file PDF xuống máy, không mở tab about:blank / cửa sổ in trung gian.
- PDF vẫn là A4 dọc, giữ bộ lọc theo tháng và tên file đầy đủ họ tên giáo viên.

- V5.14: Giãn mạnh cụm Hồ sơ – Tháng – Xuất PDF – Cập nhật; tăng khoảng cách và độ rộng các nút.

- V5.15: PDF theo đúng mẫu bảng minh chứng chốt.
- 4 thẻ: Giáo viên, Khối, Hồ sơ/Số tiết, Trạng thái.
- Bảng: Ngày nộp, Môn, Khối, Tên bài/Nội dung, Số tiết, Tiết, Trạng thái.
- Bỏ Người duyệt khỏi PDF.
- Nếu dữ liệu có ngày duyệt trong Ghi chú/Duyệt giáo án, ngày duyệt hiển thị dưới nhãn Đã duyệt.
- PDF tải trực tiếp, A4 dọc, hỗ trợ lọc theo tháng.

- V5.16: Ép cứng PDF đúng kích thước A4 dọc 210 × 297 mm.
- Không chỉ dùng orientation=portrait mà đặt trực tiếp format=[210,297].
- Thu gọn nhẹ bảng để bảo đảm vừa chiều rộng trang dọc.

- V5.17: Sửa dứt điểm nút Xuất PDF: không còn window.open()/tab trắng/about:blank.
- PDF được tạo và tải trực tiếp ngay tại trang hiện tại bằng html2pdf.
- Giữ A4 dọc 210 × 297 mm, lọc theo tháng và đúng mẫu minh chứng đã chốt.

- V5.18: Sửa lỗi PDF A4 dọc nhưng nội dung trắng.
- Vùng dựng PDF không còn đặt ở left:-100000px; chuyển xuống dưới trang để html2canvas vẫn render đầy đủ.
- Chờ 2 frame trước khi chụp và đặt kích thước canvas theo vùng PDF để tránh trang trắng.
- Không mở tab mới, vẫn tải PDF trực tiếp.
