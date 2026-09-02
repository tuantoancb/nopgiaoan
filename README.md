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

- V5.19: Sửa trực tiếp lỗi PDF trắng: vùng PDF được render ngay trong viewport thay vì left:-100000px.
- Chờ 220ms để trình duyệt bố cục xong trước khi html2canvas chụp.
- Sau khi tải PDF, vùng tạm tự xóa và trang trở lại bình thường.
- Không mở tab mới; A4 dọc 210 × 297 mm.

- V5.20: Bỏ hoàn toàn html2canvas/html2pdf cho chức năng minh chứng.
- Chuyển sang pdfMake tạo PDF trực tiếp từ dữ liệu: tránh lỗi trang PDF trắng.
- PDF A4 dọc, tải trực tiếp, không mở tab trắng.
- Bố trí lại cụm công cụ cân đối: Hồ sơ | Tháng | Xuất PDF | Cập nhật, khoảng cách 18px trên desktop.
- Nút Xuất PDF là nút chính; Cập nhật là nút phụ.
- Có đọc Ghi chú để hiện ngày duyệt nếu nguồn dữ liệu có ngày.

- V5.21: Chốt font Roboto toàn bộ PDF.
- Bổ sung đầy đủ thông tin phần đầu: tên trường, năm học, giáo viên, môn/HĐGD, tổ chuyên môn, khối, người duyệt, thời gian lọc.
- Giữ tổng hồ sơ/số tiết, trạng thái, bảng chi tiết, tổng cộng và ngày xuất.
- PDF A4 dọc, tạo bằng pdfMake, tải trực tiếp.

- V5.22: Tăng lề trái/phải PDF để in và lưu hồ sơ thoáng hơn.
- Lề trái/phải ~15 mm; lề trên/dưới giữ gọn.
- Thu nhẹ bảng và đường kẻ để nội dung nằm cân đối giữa trang A4 dọc.

- V5.24: Sửa đúng cấu trúc thật của thẻ `.profile` / `.teacherPick`.
- Xóa hẳn dropdown giáo viên khỏi Khối 10/11/12 trong hàm render().
- Giáo viên chỉ chọn một lần tại “Giáo viên đang dùng”.
- Các thẻ khối chỉ chọn khối đang thao tác và hiển thị thông tin giáo viên hiện tại.

- V5.25: Bỏ ba thẻ Khối 10/11/12 khỏi mục 1.
- Mục 1 chỉ còn chọn “Giáo viên đang dùng”.
- Đưa ô chọn Khối xuống mục 2, theo thứ tự: Khối → Môn/HĐGD → Chọn bài từ PPCT.
- Đổi khối sẽ cập nhật khối đang thao tác, đồng bộ giáo viên hiện tại và nạp lại PPCT tương ứng.

- V5.26: Cân lại hai nút cuối mục 2 theo tỷ lệ khoảng 80/20.
- “Mở Google Form đã điền” giữ là nút chính màu xanh, rộng.
- “Làm mới” chuyển thành nút phụ nền trắng, viền xanh và bỏ dòng mô tả phụ.
- Trên điện thoại hai nút tự xếp dọc.

- V5.27: Chốt phương án B cho hai nút cuối mục 2.
- Cụm nút căn phải, tạo khoảng trống bên trái.
- Nút Mở Google Form rộng khoảng 360px, là nút chính.
- Nút Làm mới rộng khoảng 125px, là nút phụ viền xanh.
- Trên màn hình nhỏ hai nút tự co lại; điện thoại rất nhỏ thì xếp dọc.

- V5.28: Đưa nút “Mở Google Form đã điền” lên ngay sau hàng Khối – Môn – PPCT để thao tác nhanh.
- Nút “Làm mới” chuyển thành nút nhỏ ở góc phải tiêu đề “2. Chọn bài dạy”.
- Bỏ hoàn toàn cụm hai nút lớn ở cuối form để giao diện sạch hơn.
- Trên điện thoại nút Mở tự giãn toàn chiều rộng.

- V5.29: Cân lại bố cục mục 2.
- Giữ nút Làm mới nhỏ ở góc phải tiêu đề.
- Đưa nút Mở Google Form xuống góc phải cuối mục 2, rộng khoảng 340px.
- Bỏ nút Mở ở gần PPCT để phần trên form nhẹ và cân đối hơn.

- V5.30: Cân đối giao diện tổng thể theo 5 điểm đã chốt.
- Thu gọn khối 1 Chọn giáo viên.
- Cân lại hàng Khối – Môn/HĐGD – PPCT.
- Nút Làm mới nhỏ hơn; nút Mở Google Form thu gọn nhẹ và giữ căn phải.
- Thanh công cụ Minh chứng tách nhóm rõ.
- Giảm khoảng trắng và thống nhất khoảng cách dọc giữa các khối.

- V5.31: Chốt header theo phương án B.
- Rút tiêu đề “NỘP GIÁO ÁN ONLINE - NTT” thành “NỘP GIÁO ÁN”.
- Thu gọn icon và chiều cao đầu trang.
- Thẻ ngày bên phải compact hơn, chỉ giữ NGÀY NỘP + ngày hiện tại.
- Bỏ dòng “Tự động lấy ngày hôm nay”.

- V5.32: Đưa chọn giáo viên lên Header.
- Bỏ khối 1 Chọn giáo viên.
- Đánh lại số mục còn 1. Chọn bài dạy, 2. Minh chứng đã nộp.

- V5.33: Sửa lỗi khối 1 trồi lên sát/che Header.
- Header chuyển từ chiều cao cố định sang tự giãn, min-height 112px.
- Bỏ overflow:hidden để không cắt ô Giáo viên/Ngày nộp.
- Tăng khoảng cách Header → Khối 1 khoảng 10px.

- V5.34: Bỏ hoàn toàn ô Ngày nộp khỏi Header.
- Header còn 2 vùng: Nộp giáo án + Giáo viên.
- Mở rộng khối Giáo viên, thêm icon và làm card nổi bật hơn.
- Sau khi chọn giáo viên, hiển thị Môn • Tổ • Người duyệt.

- V5.35: Chốt khối 1 theo bố cục hai cột.
- Cột trái: Khối → Môn/HĐGD → PPCT → Mở Google Form.
- Cột phải: Tên bài học → Số tiết → Từ tiết đến tiết.
- Bỏ hoàn toàn nút Làm mới.
- Trên màn hình nhỏ hai cột tự xếp dọc.

- V5.36: Làm nổi bật tiêu đề 2 khối chính.
- Khối 1 Chọn bài dạy: badge số 1 xanh dương, thanh nền xanh nhạt.
- Khối 2 Minh chứng đã nộp: badge số 2 xanh lá, thanh nền xanh lá nhạt.
- Giữ nguyên nội dung và bố cục bên trong các khối.

- V5.37: Header tối giản theo phương án đã chốt.
- Bên trái: icon + NỘP GIÁO ÁN + tên trường nhỏ.
- Bên phải: duy nhất ô Chọn giáo viên.
- Bỏ Ngày nộp và bỏ Môn/Tổ/Người duyệt khỏi Header.
- Giữ nguyên Khối 1, Khối 2 và toàn bộ chức năng còn lại.

- V5.38: Header compact và nổi bật hơn.
- Ô Chọn giáo viên kéo sát phần NỘP GIÁO ÁN hơn.
- Giảm khoảng cách ngang, thu gọn kích thước, tăng độ nổi bằng viền/bóng nhẹ.
- Giữ phong cách tối giản và responsive.

- V5.39: Theme tự động theo giáo viên.
- 6 giáo viên Nam đã xác nhận: giao diện xanh dương.
- 26 giáo viên Nữ còn lại: giao diện hồng pastel.
- Giới tính được lưu cố định trong STAFF_DIRECTORY, không suy đoán theo tên.
- Theme đổi ngay khi chọn giáo viên và vẫn giữ khi mở lại app.
- Các điểm nhấn đổi màu: nền app, Header, ô chọn giáo viên, tiêu đề khối, nút Google Form, nút PDF/Cập nhật và trạng thái focus.
- Trạng thái Duyệt/Chờ duyệt giữ màu ngữ nghĩa xanh lá/vàng.
- Đồng thời sửa logic Header cũ còn tham chiếu các phần tử đã bỏ để app hoạt động ổn định.

- V5.40: Hoàn thiện Header theo giao diện đã chốt.
- Thêm nhãn CHỌN GIÁO VIÊN phía trên dropdown để người dùng nhận biết rõ vùng thao tác.
- Nhãn tự đổi màu theo theme: Nam xanh / Nữ hồng.
- Giữ toàn bộ logic theme tự động, PPCT và minh chứng từ V5.39.

- V5.41: Theme mặc định chuyển sang tím lavender trung tính.
- Chưa chọn giáo viên: tím lavender.
- Nam: xanh dương; Nữ: hồng pastel.
- Kéo khối Chọn giáo viên lại gần NỘP GIÁO ÁN hơn.
- Nút Xuất PDF chuyển sang nền sáng ở cả 3 theme.

- V5.42: Đổi nút thao tác chính từ “Mở Google Form đã điền” thành “Nộp giáo án”.
- Dòng phụ: “Thông tin đã điền sẵn • Chỉ cần tải file giáo án lên”.
- Giữ nguyên hành vi mở Google Form đã điền sẵn và toàn bộ logic V5.41.
