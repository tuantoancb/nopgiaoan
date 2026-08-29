# Nộp giáo án online - NTT v5.0

Bản v5.0 nâng cấp mục **3. HỒ SƠ CỦA TÔI**:

- Đọc trực tiếp dữ liệu từ API của app **Minh chứng giáo án** qua Vercel external rewrite.
- Không còn lưu lịch sử nộp trên `localStorage`.
- Không cần nút **ĐÃ NỘP XONG**. Sau khi gửi Google Form và quay lại app, hệ thống tự kiểm tra hồ sơ mới.
- Trạng thái hiển thị ngay: **Chờ duyệt / Đã duyệt / Nộp lại**.
- Nếu hồ sơ có link tệp, bấm vào dòng để mở tệp giáo án.
- Có nút `↻` để đồng bộ lại thủ công khi cần.

## Triển khai Vercel
Upload toàn bộ 3 file `index.html`, `vercel.json`, `README.md` vào project `nopgiaoan` và redeploy.

`vercel.json` dùng rewrite `/minhchung-api/*` → `https://minhchunggiaoan.vercel.app/api/*` để frontend đọc cùng nguồn dữ liệu với app Minh chứng mà không vướng CORS.
