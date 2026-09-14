# AI Curriculum Teacher Studio

Website tương tác hỗ trợ giáo viên triển khai chương trình giáo dục AI từ Khối 6 đến Khối 12, mỗi khối 12 tiết. Nội dung được chuyển thể từ tài liệu `LSTS_AI_Literacy_Responsible_Innovation_Program_Grades_6_12_v1.1.docx`.

## Chức năng

- 84 tiết học thuộc 7 khối, chia theo 4 module.
- Chọn khối, tìm kiếm bài học và đánh dấu tiến độ trên thiết bị.
- Kế hoạch 45 phút theo bốn hoạt động, có chế độ in.
- Phòng thực hành Teachable Machine dành cho Khối 7.
- Khung đánh giá 5 tiêu chí, mỗi tiêu chí 20%.
- Giao diện thích ứng máy tính, máy tính bảng và điện thoại.

## Chạy trên máy cá nhân

Mở trực tiếp tệp `index.html` bằng trình duyệt. Phiên bản tĩnh không cần cài đặt hoặc biên dịch.

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub và đẩy toàn bộ thư mục này lên nhánh `main`.
2. Trong repository, mở **Settings → Pages**.
3. Tại **Build and deployment → Source**, chọn **GitHub Actions**.
4. Workflow có sẵn sẽ tự đóng gói và xuất bản website sau mỗi lần cập nhật nhánh `main`.

Nếu website được đặt tại repository dạng `https://username.github.io/ten-repo`, thêm `basePath: "/ten-repo"` và `assetPrefix: "/ten-repo/"` vào `next.config.ts` trước khi xuất bản.
