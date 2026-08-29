# Nộp giáo án online - NTT v5.1 FIX ĐỒNG BỘ

Bản sửa lỗi `Chưa kết nối` của v5.0.

## Thay đổi
- Không dùng external rewrite `/minhchung-api/*` nữa.
- Thêm Vercel Serverless Function: `api/minhchung.js`.
- Frontend gọi cùng tên miền: `/api/minhchung`.
- Server Vercel của app Nộp giáo án sẽ đọc `https://minhchunggiaoan.vercel.app/api/data` rồi trả JSON về trình duyệt.
- Có thông báo lỗi rõ hơn nếu thiếu thư mục `api` khi deploy.

## Deploy
Phải upload **nguyên cả thư mục dự án**, gồm:
- `index.html`
- `api/minhchung.js`
- `vercel.json`
- `README.md`

Không chỉ thay riêng `index.html`.

Sau deploy, kiểm tra trước URL:
`https://nopgiaoan.vercel.app/api/minhchung`

Nếu kết nối đúng, trang này phải trả JSON có `ok: true` và `data.submissions`.
