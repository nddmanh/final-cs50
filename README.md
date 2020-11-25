# Final Project Cs50
by nddmanh
* Ngôn ngữ sử dụng: html, css, javacscript
* Mô tả:
Đây là 1 trang web về shop bán giày online

* Cách mở:

  - tải file về và giải nén, sau đó mở file vừa tải bằng VScode
  - chọn app.js -> open in Terminal
  - gõ: npm start
  - dùng trình duyệt truy cập http://localhost:3000/
  
* Cách sử dụng:
  - Truy cập đăng nhập để đăng nhập
  - Nếu chưa có tài khoản có thể sử dụng chức năng đăng ký tạo tài khoản ( yêu cầu nhập đủ thông tin )
  - Bạn có thể upload sản phẩm bằng cách: vào trang đăng nhập => click vào admin Jerry trong phần footer, sẽ xuất hiện phần up sản phẩm vào database (tính năng này đang có vấn đề về bảo mật vì ai cũng có thể nhập được và sẽ được khắc phục trong tương lai)
  
  
* Một vài hạn chế (sẽ được khắc phục trong tương lai:
  - Cần phải đăng nhập mới xem được shop.
  - Phần nhập dữ liệu của admin chưa bảo mật
  - phần "chat với shop" và "mua hàng" chưa hoàn thiện.
  - Nếu đã đăng nhập tài khoản rồi vẫn hiện phần đăng nhập (trang chủ)
  - Một vài tính năng như: "thêm vào giỏ hàng" "tìm kiếm" "phân loại theo brand" sẽ được update.
  - Phần html css còn hơi lởm vì toàn bộ thời gian cho BE.
  
* lưu ý: phần db.json và .env được up kèm để mentor có thể kiểm tra dễ dàng hơn ( trong những dự án thực tế sẽ không up những file này trong gitignore)

* Quá trình làm sản phẩm (28/10 -25/11) :
  - 28/10 - 9/11: Tìm hiểu về python flask nhưng có rất ít tài liệu, ngoại ngữ kém, khá khó khăn trong việc học.
  - 9/11 - 25/11: Nhận ra có rất nhiều tài liệu về Nodejs, định hướng trong tương lai cũng làm về Nodejs nên bắt đầu tìm hiểu về nodejs
  Dự định ban đầu: 1 blog có chức năng post bài,  chat online ( dựa vào tính realtime của Nodejs trên socket.io). bắt tay vào học và làm thì mới biết chưa đủ năng lực và thời gian
==> sau đó quyết định làm được những web cơ bản trước để hiểu bản chất về BackEnd rồi mới phát triển những idea sau này.
* Kiến thức học được:
  - Thao tác cơ bản với CSDL low db ( thêm, sửa, xóa, update), cách đổ dữu liệu ra view, sử dụng template engine EJS
  - Mô hình mvc trong BE
  - middleware cho các chức năng
  - cấu hình 1 project nodejs - express
  - tạo ứng dụng đăng nhập cơ bản cho 1 trang web ( còn nhiều hạn chế như: sử dụng md5 để hash password tính bảo mật kém, các middleware chưa mạnh, validate cũng chưa thực sự phát huy tác dụng, sử dụng cookie nên tính an toàn không cao)
  - BackEnd cũng không khó như tưởng tượng ban đầu, chủ yếu sử dụng tư duy logic nhiều. BE hiểu đơn giản là xử lý dữ liệu phía server.
  - Chăm chỉ học và làm là sẽ hiểu.
  
  Hà Nội 23h 25-11-2020
