# Học toán thật là vui

Website tiếng Việt dành cho học sinh tiểu học từ lớp 1 đến lớp 5. Viết bằng HTML, CSS và JavaScript, không cần bước biên dịch.

## Chạy tại máy

```sh
python3 -m http.server 4173 --directory dist
```

Mở http://localhost:4173. Thư mục `dist` là nội dung website để triển khai.

## Nội dung và thao tác

- Trang chủ có ảnh minh họa cô giáo cùng học sinh học toán.
- Nút **Lớp** mở khung chọn lớp 1–5, hỗ trợ đóng bằng Escape hoặc nhấp bên ngoài.
- Năm trang riêng `/lop-1/` đến `/lop-5/`, có thể mở trực tiếp hoặc tải lại.
- Mỗi lớp có ba cấp độ **Dễ**, **Trung bình**, **Nâng cao**, mỗi cấp độ 5 câu hỏi. Tổng cộng 75 câu hỏi mẫu, kèm đáp án và giải thích.
- Sao được tính theo kết quả tốt nhất của từng bộ câu hỏi. Luyện lại không làm giảm điểm. Thành tích được lưu bằng localStorage trên trình duyệt đang dùng, không đồng bộ giữa thiết bị.
- Thiết kế thích ứng với màn hình nhỏ, hỗ trợ bàn phím và tùy chọn giảm chuyển động.

Để thay bài tập và lời giải, sửa đối tượng `questions` trong `dist/app.js`. Khóa `1-0` tương ứng lớp 1, cấp độ Dễ; `5-2` tương ứng lớp 5, cấp độ Nâng cao. Mỗi bộ có đúng 5 câu hỏi. Đây là nội dung luyện tập mẫu, không phải một giáo trình đầy đủ.

## Ảnh minh họa

Tệp sử dụng: `dist/assets/lop-hoc-vui.png`. Tạo bằng công cụ ImageGen tích hợp (không dùng API/CLI).

Prompt đã dùng:

> Use case: illustration-story. Asset type: hero illustration for a Vietnamese primary-school math learning website. Create a wide 3:2 editorial children's storybook illustration, clean charming hand-drawn flat vector-like shapes with a soft paper grain, rounded friendly characters. One kind Vietnamese female primary school teacher with dark hair in a bun, light cream blouse and sage green skirt is teaching three happy Vietnamese children (two girls and one boy, ages 7 to 10) gathered around a low ochre yellow school table doing math in notebooks with pencils, colorful counting blocks and an open textbook. Teacher stands on right pointing toward a dark forest green chalkboard in background, children in foreground. Chalkboard has only simple mathematical doodles such as 2+3=5 and a triangle and circle, no words. Cozy sunny classroom, a small leafy plant on left and pastel shelves, mustard sun and playful coral/sage geometry decorations. Main palette warm pale butter yellow #fff3c9, forest green #285c48, coral orange #ed7654, powder blue and muted lavender. Cheerful, sophisticated independent children's picture book aesthetic, not glossy 3D, not corporate clipart. Fill the frame with an engaging coherent classroom scene. Loose wavy organic framing, plenty of warm pale cream backdrop, no text headings, no watermark, no interface, all faces expressive and wholesome.

Phông chữ Baloo 2 và Nunito tải từ Google Fonts, có phông dự phòng nếu ngoại tuyến. Biểu tượng SVG nằm trong mã nguồn.
