const iconPaths={home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',chevron:'<path d="m6 9 6 6 6-6"/>',arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',back:'<path d="M19 12H5m6-6-6 6 6 6"/>',star:'<path d="m12 3 2.8 5.8 6.4.9-4.6 4.5 1.1 6.4-5.7-3-5.7 3 1.1-6.4-4.6-4.5 6.4-.9Z"/>',sparkles:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 2v4m-2-2h4"/>',book:'<path d="M12 6c-3-3-7-3-10-2v15c4-1 7-1 10 2 3-3 6-3 10-2V4c-3-1-7-1-10 2Zm0 0v15"/>',leaf:'<path d="M20 3C8 2 2 8 5 15s17 4 15-12ZM4 21 16 9m-8 8v-5m4 1h5"/>',mountain:'<path d="m2 20 8-15 5 9 3-5 5 11H2Zm6-11 2 3 2-3"/>',rocket:'<path d="M14 4c3-2 6-2 7-1 1 4-1 9-7 12l-5-5c1-3 3-5 5-6Zm-5 6H5l-3 5 7 1m5-1v5l-5 2-1-6m-2 2-3 3"/><circle cx="16" cy="7" r="2"/>',smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14c2 3 6 3 8 0M8 9h.01M16 9h.01"/>',check:'<path d="m5 12 4 4L19 6"/>',shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',equal:'<path d="M5 8h14M5 16h14"/>',shapes:'<path d="m7 3 5 8H2L7 3Z"/><circle cx="17" cy="7" r="4"/><rect x="4" y="15" width="7" height="7" rx="1"/><path d="m18 14 4 4-4 4-4-4Z"/>',plus:'<path d="M12 3v18M3 12h18"/>',multiply:'<path d="m5 5 14 14M5 19 19 5"/>',fraction:'<path d="M5 12h14M11 3h2v5m-3 8h5l-5 5h5"/>',ruler:'<path d="m3 16 13-13 5 5L8 21l-5-5ZM7 12l3 3m1-7 3 3m1-7 3 3"/>',trophy:'<path d="M7 3h10v6a5 5 0 0 1-10 0V3ZM7 5H3v3a4 4 0 0 0 5 4m9-7h4v3a4 4 0 0 1-5 4m-4 2v5m-4 2h8m-7-2h6"/>',pencil:'<path d="m15 3 6 6L9 21H3v-6L15 3Zm-3 3 6 6M3 15l6 6"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>'};
function icon(name,cls=''){return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]||iconPaths.star}</svg>`}
const grades=[
 {id:1,accent:'#65864d',tint:'#eef3de',title:'Làm quen với những con số',subtitle:'Những bước đầu tiên thật vui: đếm số, cộng trừ và nhận biết hình dạng.',short:'Đếm số, cộng trừ trong 20',icon:'shapes',topics:['Số đến 20','Cộng và trừ','Hình dạng'],levels:['Đếm số và cộng trừ trong phạm vi 10.','Luyện cộng trừ trong 20, nhận biết hình.','Giải câu đố và bài toán có lời văn.']},
 {id:2,accent:'#cc8a34',tint:'#fff2d3',title:'Tự tin cùng phép tính',subtitle:'Cùng mở rộng thế giới số và khám phá những phép nhân, chia đầu tiên.',short:'Cộng trừ, bảng nhân và chia',icon:'plus',topics:['Số đến 1.000','Cộng và trừ','Nhân và chia'],levels:['Ôn cộng trừ và nhận biết các số.','Làm quen với bảng nhân và phép chia.','Vận dụng phép tính vào chuyện hằng ngày.']},
 {id:3,accent:'#568b9d',tint:'#e7f1f3',title:'Khám phá nhân và chia',subtitle:'Thử sức với các số lớn hơn, phép nhân chia và những hình học quen thuộc.',short:'Nhân chia, đo lường, hình học',icon:'multiply',topics:['Số đến 10.000','Nhân và chia','Đo lường'],levels:['Củng cố bảng nhân, chia và số lớn.','Khám phá chu vi và đơn vị đo.','Kết hợp nhiều bước để tìm lời giải.']},
 {id:4,accent:'#9372a5',tint:'#f1eaf5',title:'Mở khóa những phân số',subtitle:'Tìm hiểu phân số, đo lường và rèn tư duy qua những bài toán thú vị.',short:'Phân số, hình học, tư duy',icon:'fraction',topics:['Phân số','Diện tích','Giải toán'],levels:['Đọc số, tính nhẩm và hiểu phân số.','Tính toán với phân số và diện tích.','Tìm số, tính trung bình và giải toán.']},
 {id:5,accent:'#c5775d',tint:'#fae9df',title:'Sẵn sàng chinh phục',subtitle:'Kết nối những điều đã học qua số thập phân, tỉ số phần trăm và hình khối.',short:'Số thập phân, tỉ số phần trăm',icon:'ruler',topics:['Số thập phân','Phần trăm','Thể tích'],levels:['Làm quen và tính với số thập phân.','Khám phá phần trăm và đơn vị đo.','Vận dụng kiến thức để chinh phục thử thách.']}
];
const levels=[{id:0,title:'Dễ',label:'Khởi động nhẹ nhàng',icon:'leaf',accent:'#628549',tint:'#edf4e2'},{id:1,title:'Trung bình',label:'Từng bước tiến bộ',icon:'mountain',accent:'#b9892d',tint:'#fff3d3'},{id:2,title:'Nâng cao',label:'Chinh phục thử thách',icon:'rocket',accent:'#8e6da5',tint:'#f1eaf8'}];
const q=(text,options,answer,explanation)=>({text,options,answer,explanation});
const questions={
 '1-0':[
  q('2 + 3 = ?', ['4','5','6','3'],'5','Đếm thêm 3 từ 2: 3, 4, 5. Vậy 2 + 3 = 5.'),
  q('7 − 2 = ?', ['4','6','5','3'],'5','Từ 7, bớt đi 2 còn 5. Vậy 7 − 2 = 5.'),
  q('Số nào đứng ngay sau số 8?', ['7','10','6','9'],'9','Dãy số là 7, 8, 9, 10. Ngay sau số 8 là số 9.'),
  q('Số nào lớn nhất?', ['3','9','5','7'],'9','Trong các số 3, 9, 5, 7 thì số 9 lớn nhất.'),
  q('Có 4 quả táo, thêm 2 quả. Có tất cả bao nhiêu quả táo?', ['5 quả','7 quả','6 quả','8 quả'],'6 quả','Thêm vào là phép cộng: 4 + 2 = 6 quả táo.')
 ],
 '1-1':[
  q('10 + 6 = ?', ['15','16','17','14'],'16','10 và 6 tạo thành 16. Vậy 10 + 6 = 16.'),
  q('18 − 5 = ?', ['12','14','13','15'],'13','18 bớt 5 còn 13. Có thể tính 8 − 5 = 3, rồi thêm 10.'),
  q('Hình tam giác có mấy cạnh?', ['2 cạnh','4 cạnh','5 cạnh','3 cạnh'],'3 cạnh','Hình tam giác có 3 cạnh và 3 đỉnh.'),
  q('Điền số còn thiếu: 12, 13, …, 15.', ['11','14','16','12'],'14','Mỗi số tăng thêm 1: 12, 13, 14, 15.'),
  q('Số nào bé hơn 17?', ['19','18','16','20'],'16','16 đứng trước 17 trên dãy số nên 16 bé hơn 17.')
 ],
 '1-2':[
  q('Lan có 8 bút, mẹ cho thêm 4 bút. Lan có bao nhiêu bút?', ['10 bút','11 bút','12 bút','13 bút'],'12 bút','Lan có tất cả: 8 + 4 = 12 bút.'),
  q('15 − 3 + 2 = ?', ['10','14','12','16'],'14','Tính từ trái sang phải: 15 − 3 = 12; 12 + 2 = 14.'),
  q('Số nào cộng với 7 thì được 12?', ['4','6','3','5'],'5','Ta tìm số còn thiếu bằng phép trừ: 12 − 7 = 5.'),
  q('Có 16 con chim, 6 con bay đi. Còn lại bao nhiêu con?', ['9 con','11 con','10 con','12 con'],'10 con','Số chim còn lại: 16 − 6 = 10 con.'),
  q('Nam có 9 viên bi, An có 6 viên. Nam nhiều hơn An mấy viên?', ['2 viên','3 viên','4 viên','5 viên'],'3 viên','Muốn biết nhiều hơn bao nhiêu, lấy 9 − 6 = 3 viên bi.')
 ],
 '2-0':[
  q('23 + 15 = ?', ['38','37','48','35'],'38','Cộng hàng đơn vị: 3 + 5 = 8. Cộng hàng chục: 2 + 1 = 3. Được 38.'),
  q('56 − 24 = ?', ['42','31','32','34'],'32','Trừ hàng đơn vị: 6 − 4 = 2. Trừ hàng chục: 5 − 2 = 3. Được 32.'),
  q('Số 305 gồm những gì?', ['3 trăm, 5 chục','3 trăm, 5 đơn vị','3 chục, 5 đơn vị','5 trăm, 3 đơn vị'],'3 trăm, 5 đơn vị','305 có 3 trăm, 0 chục và 5 đơn vị.'),
  q('47 + 6 = ?', ['51','52','53','54'],'53','47 + 3 = 50, rồi cộng thêm 3 được 53.'),
  q('1 m bằng bao nhiêu xăng-ti-mét?', ['10 cm','50 cm','1.000 cm','100 cm'],'100 cm','Một mét bằng 100 xăng-ti-mét: 1 m = 100 cm.')
 ],
 '2-1':[
  q('4 × 3 = ?', ['7','12','14','16'],'12','4 × 3 nghĩa là 4 được lấy 3 lần: 4 + 4 + 4 = 12.'),
  q('20 : 5 = ?', ['3','5','4','6'],'4','Vì 5 × 4 = 20 nên 20 : 5 = 4.'),
  q('Mỗi hộp có 5 bút. 3 hộp có bao nhiêu bút?', ['8 bút','10 bút','20 bút','15 bút'],'15 bút','Có 3 hộp, mỗi hộp 5 bút: 5 × 3 = 15 bút.'),
  q('72 − 38 = ?', ['34','44','36','32'],'34','72 − 30 = 42; 42 − 8 = 34.'),
  q('Một giờ có bao nhiêu phút?', ['30 phút','60 phút','100 phút','24 phút'],'60 phút','Một giờ có 60 phút. Kim phút quay hết một vòng là một giờ.')
 ],
 '2-2':[
  q('Có 20 cái bánh chia đều cho 4 bạn. Mỗi bạn được mấy cái?', ['4 cái','6 cái','5 cái','8 cái'],'5 cái','Chia đều 20 cái bánh cho 4 bạn: 20 : 4 = 5 cái mỗi bạn.'),
  q('Lan có 35 nhãn vở, cho bạn 8 nhãn rồi được thêm 12 nhãn. Lan có mấy nhãn?', ['39 nhãn','37 nhãn','41 nhãn','45 nhãn'],'39 nhãn','Lan còn 35 − 8 = 27 nhãn. Sau đó có 27 + 12 = 39 nhãn.'),
  q('Số cần điền là gì? … × 5 = 30', ['4','5','7','6'],'6','Vì 6 × 5 = 30 nên số cần điền là 6.'),
  q('Đường gấp khúc có ba đoạn dài 12 cm, 15 cm, 8 cm. Tổng độ dài là?', ['33 cm','35 cm','37 cm','30 cm'],'35 cm','Độ dài đường gấp khúc: 12 + 15 + 8 = 35 cm.'),
  q('Mỗi túi có 4 quả cam. 5 túi cam bớt đi 3 quả thì còn bao nhiêu quả?', ['17 quả','20 quả','13 quả','18 quả'],'17 quả','5 túi có 4 × 5 = 20 quả. Bớt 3 quả còn 20 − 3 = 17 quả.')
 ],
 '3-0':[
  q('7 × 8 = ?', ['54','56','48','64'],'56','Theo bảng nhân 7: 7 × 8 = 56.'),
  q('63 : 9 = ?', ['6','8','7','9'],'7','Vì 9 × 7 = 63 nên 63 : 9 = 7.'),
  q('1.250 + 340 = ?', ['1.490','1.690','1.590','1.580'],'1.590','1.250 + 300 = 1.550, thêm 40 là 1.590.'),
  q('Số liền sau của 3.999 là số nào?', ['3.998','4.001','3.990','4.000'],'4.000','Số liền sau hơn 1 đơn vị: 3.999 + 1 = 4.000.'),
  q('Một phần ba của 12 là bao nhiêu?', ['4','3','6','9'],'4','Chia 12 thành 3 phần bằng nhau: 12 : 3 = 4.')
 ],
 '3-1':[
  q('Chu vi hình vuông cạnh 6 cm là bao nhiêu?', ['12 cm','18 cm','24 cm','36 cm'],'24 cm','Hình vuông có 4 cạnh bằng nhau. Chu vi: 6 × 4 = 24 cm.'),
  q('3 m 5 cm bằng bao nhiêu xăng-ti-mét?', ['35 cm','350 cm','305 cm','3005 cm'],'305 cm','3 m = 300 cm. Vậy 3 m 5 cm = 300 + 5 = 305 cm.'),
  q('124 × 3 = ?', ['362','372','382','352'],'372','100 × 3 = 300; 20 × 3 = 60; 4 × 3 = 12. Tổng là 372.'),
  q('96 : 4 = ?', ['22','23','26','24'],'24','Vì 24 × 4 = 96 nên 96 : 4 = 24.'),
  q('Hình chữ nhật dài 8 cm, rộng 5 cm có diện tích là?', ['13 cm²','26 cm²','40 cm²','35 cm²'],'40 cm²','Diện tích hình chữ nhật bằng chiều dài nhân chiều rộng: 8 × 5 = 40 cm².')
 ],
 '3-2':[
  q('Có 48 quyển sách xếp đều lên 6 giá. 3 giá có bao nhiêu quyển?', ['24 quyển','18 quyển','16 quyển','30 quyển'],'24 quyển','Mỗi giá có 48 : 6 = 8 quyển. 3 giá có 8 × 3 = 24 quyển.'),
  q('Tìm x: x : 5 = 27', ['125','130','135','140'],'135','Muốn tìm số bị chia, lấy thương nhân với số chia: x = 27 × 5 = 135.'),
  q('Hình chữ nhật có chu vi 30 cm, chiều dài 9 cm. Chiều rộng là?', ['5 cm','6 cm','7 cm','12 cm'],'6 cm','Nửa chu vi: 30 : 2 = 15 cm. Chiều rộng: 15 − 9 = 6 cm.'),
  q('80 − 6 × 9 = ?', ['26','666','36','24'],'26','Thực hiện phép nhân trước: 6 × 9 = 54. Sau đó 80 − 54 = 26.'),
  q('Một sợi dây dài 90 cm. Cắt đi một phần ba sợi dây. Còn lại bao nhiêu?', ['30 cm','45 cm','60 cm','75 cm'],'60 cm','Cắt đi 90 : 3 = 30 cm. Còn lại 90 − 30 = 60 cm.')
 ],
 '4-0':[
  q('Trong số 45.678, chữ số 5 có giá trị là bao nhiêu?', ['5','500','50','5.000'],'5.000','Chữ số 5 nằm ở hàng nghìn nên có giá trị là 5.000.'),
  q('Phân số nào bằng 1/2?', ['1/3','2/4','3/4','2/3'],'2/4','Nhân cả tử và mẫu của 1/2 với 2 được 2/4.'),
  q('3/7 + 2/7 = ?', ['5/14','1/7','5/7','6/7'],'5/7','Cộng hai phân số cùng mẫu: cộng tử số và giữ nguyên mẫu số. (3 + 2)/7 = 5/7.'),
  q('1 tấn bằng bao nhiêu ki-lô-gam?', ['10 kg','100 kg','10.000 kg','1.000 kg'],'1.000 kg','Theo bảng đơn vị đo khối lượng, 1 tấn = 1.000 kg.'),
  q('Số nào chia hết cho 5?', ['123','246','370','482'],'370','Các số có chữ số tận cùng là 0 hoặc 5 thì chia hết cho 5. Số 370 tận cùng là 0.')
 ],
 '4-1':[
  q('1/2 + 1/4 = ?', ['2/6','1/6','3/4','2/4'],'3/4','Quy đồng: 1/2 = 2/4. Cộng lại: 2/4 + 1/4 = 3/4.'),
  q('3/5 × 2/3 = ?', ['2/5','5/8','6/8','1/5'],'2/5','Nhân tử với tử, mẫu với mẫu: 6/15. Rút gọn 6/15 = 2/5.'),
  q('Hình bình hành có đáy 8 cm, chiều cao 5 cm. Diện tích là?', ['26 cm²','40 cm²','20 cm²','13 cm²'],'40 cm²','Diện tích hình bình hành bằng đáy nhân chiều cao: 8 × 5 = 40 cm².'),
  q('Trung bình cộng của 12, 18 và 24 là bao nhiêu?', ['16','20','18','54'],'18','Cộng ba số rồi chia cho 3: (12 + 18 + 24) : 3 = 54 : 3 = 18.'),
  q('2 m² bằng bao nhiêu đề-xi-mét vuông?', ['20 dm²','2.000 dm²','100 dm²','200 dm²'],'200 dm²','1 m² = 100 dm² nên 2 m² = 2 × 100 = 200 dm².')
 ],
 '4-2':[
  q('Tổng hai số là 48, hiệu là 12. Số lớn là bao nhiêu?', ['18','24','30','36'],'30','Số lớn = (tổng + hiệu) : 2 = (48 + 12) : 2 = 30.'),
  q('Một lớp có 32 bạn, trong đó 3/8 là học sinh nam. Có bao nhiêu bạn nam?', ['12 bạn','8 bạn','16 bạn','20 bạn'],'12 bạn','Số bạn nam: 32 × 3/8 = 32 : 8 × 3 = 12 bạn.'),
  q('Tìm x: x × 3/4 = 6', ['6','8','9','12'],'8','Muốn tìm thừa số, lấy tích chia cho thừa số đã biết: x = 6 : 3/4 = 6 × 4/3 = 8.'),
  q('Hình chữ nhật dài 18 m, rộng bằng 2/3 chiều dài. Diện tích là?', ['108 m²','216 m²','54 m²','324 m²'],'216 m²','Chiều rộng: 18 × 2/3 = 12 m. Diện tích: 18 × 12 = 216 m².'),
  q('Trung bình cộng của 4 số là 15. Thêm số 20, trung bình mới là?', ['15','16','17','18'],'16','Tổng 4 số: 15 × 4 = 60. Thêm 20 được 80. Trung bình mới: 80 : 5 = 16.')
 ],
 '5-0':[
  q('2,5 + 1,3 = ?', ['3,6','3,7','3,8','4,8'],'3,8','Cộng các chữ số cùng hàng, đặt dấu phẩy thẳng cột: 2,5 + 1,3 = 3,8.'),
  q('6,8 − 2,4 = ?', ['4,4','4,2','3,4','4,6'],'4,4','Trừ các chữ số cùng hàng: 6,8 − 2,4 = 4,4.'),
  q('Số thập phân nào lớn nhất?', ['0,7','0,65','0,8','0,75'],'0,8','Viết cùng số chữ số: 0,70; 0,65; 0,80; 0,75. Số lớn nhất là 0,80 = 0,8.'),
  q('1/4 viết dưới dạng số thập phân là?', ['0,4','0,25','0,5','0,75'],'0,25','1/4 = 25/100 = 0,25.'),
  q('3,6 × 10 = ?', ['0,36','360','36','3,60'],'36','Nhân với 10, chuyển dấu phẩy sang phải một chữ số: 3,6 × 10 = 36.')
 ],
 '5-1':[
  q('25% của 200 là bao nhiêu?', ['25','50','75','100'],'50','25% của 200 = 200 × 25 : 100 = 50.'),
  q('4,5 × 2,4 = ?', ['10,8','9,8','108','1,08'],'10,8','45 × 24 = 1.080. Hai thừa số có tổng 2 chữ số ở phần thập phân nên kết quả là 10,80 = 10,8.'),
  q('Hình tam giác có đáy 12 cm, chiều cao 5 cm. Diện tích là?', ['60 cm²','17 cm²','30 cm²','34 cm²'],'30 cm²','Diện tích tam giác: đáy × chiều cao : 2 = 12 × 5 : 2 = 30 cm².'),
  q('Hình hộp chữ nhật dài 4 cm, rộng 3 cm, cao 2 cm. Thể tích là?', ['9 cm³','24 cm³','26 cm³','12 cm³'],'24 cm³','Thể tích hình hộp chữ nhật: dài × rộng × cao = 4 × 3 × 2 = 24 cm³.'),
  q('2,5 lít bằng bao nhiêu mi-li-lít?', ['250 ml','25 ml','25.000 ml','2.500 ml'],'2.500 ml','1 lít = 1.000 ml nên 2,5 lít = 2.500 ml.')
 ],
 '5-2':[
  q('Một quyển sách giá 80.000 đồng, giảm 15%. Giá sau giảm là?', ['65.000 đồng','68.000 đồng','72.000 đồng','70.000 đồng'],'68.000 đồng','Tiền giảm: 80.000 × 15 : 100 = 12.000 đồng. Giá sau giảm: 80.000 − 12.000 = 68.000 đồng.'),
  q('Xe đi 90 km trong 1,5 giờ. Vận tốc trung bình là?', ['45 km/giờ','135 km/giờ','60 km/giờ','75 km/giờ'],'60 km/giờ','Vận tốc = quãng đường : thời gian = 90 : 1,5 = 60 km/giờ.'),
  q('Hình lập phương có cạnh 3 dm. Thể tích là bao nhiêu?', ['9 dm³','18 dm³','36 dm³','27 dm³'],'27 dm³','Thể tích hình lập phương: cạnh × cạnh × cạnh = 3 × 3 × 3 = 27 dm³.'),
  q('Lớp có 40 bạn, 60% là nữ. Lớp có bao nhiêu bạn nam?', ['24 bạn','16 bạn','20 bạn','18 bạn'],'16 bạn','Số bạn nữ: 40 × 60 : 100 = 24 bạn. Số bạn nam: 40 − 24 = 16 bạn.'),
  q('Hình thang có hai đáy 8 m và 12 m, chiều cao 5 m. Diện tích là?', ['100 m²','40 m²','50 m²','60 m²'],'50 m²','Diện tích hình thang: (đáy lớn + đáy bé) × chiều cao : 2 = (12 + 8) × 5 : 2 = 50 m².')
 ]};
let saved={};try{saved=JSON.parse(localStorage.getItem('toan-vui-progress-v1')||'{}')||{};if(typeof saved!=='object'||Array.isArray(saved))saved={};}catch{saved={}}
const best=(key)=>Number.isInteger(saved[key])&&saved[key]>=0&&saved[key]<=5?saved[key]:0;
const totalStars=()=>Object.keys(questions).reduce((s,key)=>s+best(key),0);
const pathMatch=location.pathname.match(/^\/lop-([1-5])(?:\/|\/index\.html|\.html)?$/);
const grade=pathMatch?grades[Number(pathMatch[1])-1]:null;
let selectedLevel=0,quiz=null,lastQuizTrigger=null;
const theme=g=>`--accent:${g.accent};--tint:${g.tint}`;
function renderHeader(){
 document.getElementById('header').innerHTML=`<div class="header-inner container"><a href="/" class="brand" aria-label="Học toán thật là vui — Trang chủ"><span class="brand-icon">${icon('equal')}</span><span class="brand-text">Học toán<br><span>thật là vui!</span></span></a><nav class="header-nav" aria-label="Điều hướng chính"><a href="/" class="nav-home ${grade?'':'active'}" ${grade?'':'aria-current="page"'}>${icon('home')}Trang chủ</a><div class="nav-dropdown"><button class="class-toggle" id="class-toggle" aria-expanded="false" aria-controls="class-menu">Lớp ${icon('chevron')}</button><div id="class-menu" class="class-menu" hidden><p class="menu-title">Em muốn khám phá lớp nào?</p><div class="menu-grid">${grades.map(g=>`<a class="menu-grade" style="${theme(g)}" href="/lop-${g.id}/"><span>Lớp</span><strong>${g.id}</strong></a>`).join('')}</div></div></div></nav><div class="header-action"><span class="star-total" title="Số sao từ những bài em đã hoàn thành" aria-label="${totalStars()} sao đã đạt">${icon('star')}<span id="star-count">${totalStars()}</span></span><a href="${grade?'#cap-do':'#chon-lop'}" class="button primary small">Vào học thôi ${icon('arrow')}</a></div></div>`;
 const toggle=document.getElementById('class-toggle'),menu=document.getElementById('class-menu');
 function closeMenu(){toggle.setAttribute('aria-expanded','false');menu.hidden=true;}
 toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));menu.hidden=open;});
 document.addEventListener('click',e=>{if(!e.target.closest('.nav-dropdown'))closeMenu()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus();}});
}
function renderFooter(){document.getElementById('footer').innerHTML=`<div class="footer-inner container"><a class="footer-brand" href="/">${icon('sun')}Học toán thật là vui!</a><p>Mỗi ngày một khám phá. Mỗi bài học một niềm vui.</p><p class="footer-love">Cùng em lớn lên với toán ${icon('heart')}</p></div>`}
function gradeCard(g){return `<a class="grade-card" style="${theme(g)}" href="/lop-${g.id}/" aria-label="Vào học lớp ${g.id}: ${g.title}"><span class="card-doodle">${icon(g.icon)}</span><span class="grade-label">Lớp</span><strong class="grade-number">${g.id}</strong><h3>${g.title}</h3><p>${g.short}</p><div class="grade-card-bottom"><span>Khám phá ngay</span><span class="card-arrow">${icon('arrow')}</span></div></a>`}
function renderHome(){document.getElementById('main').innerHTML=`<section class="hero"><div class="hero-inner container"><div class="hero-copy"><p class="eyebrow">${icon('sparkles')}Những con số, những niềm vui</p><h1>Học toán<span class="orange">thật là vui!<svg class="title-line" viewBox="0 0 380 15" preserveAspectRatio="none" aria-hidden="true"><path d="M3 9Q190-2 376 8M35 13Q198 4 350 12" stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round"/></svg></span></h1><p class="hero-description">Cùng khám phá thế giới toán học đầy màu sắc.<br>Học từng chút, vui thật nhiều — để mỗi ngày<br class="desktop-break"> đến với toán là một ngày háo hức!</p><div class="hero-buttons"><a href="#chon-lop" class="button primary">Chọn lớp của em ${icon('arrow')}</a><a href="#hanh-trinh" class="button secondary">${icon('book')}Khám phá cách học</a></div><p class="hero-note">${icon('check')}Không cần đăng ký · Sẵn sàng là bắt đầu!</p></div><div class="hero-visual"><div class="math-bubble">1 <span>+</span> 1 = 2</div><div class="illustration-blob"><img class="hero-illustration" src="/assets/lop-hoc-vui.png" alt="Cô giáo và ba học sinh đang cùng học toán với sách, bút và các khối đếm trong lớp học nhiều màu sắc" width="1536" height="1024" fetchpriority="high" /></div><span class="visual-star">${icon('star')}</span><span class="visual-spark" aria-hidden="true">×</span><div class="visual-orbit"><span class="smile">${icon('smile')}</span>Mỗi bài học, một niềm vui!</div></div></div></section><div class="hero-bottom"><div class="benefits container"><span class="benefit">${icon('book')}Dành cho học sinh lớp 1–5</span><span class="benefit">${icon('leaf')}Từ cơ bản đến nâng cao</span><span class="benefit">${icon('heart')}Học theo nhịp của riêng em</span></div></div><section class="section-classes container" id="chon-lop" aria-labelledby="classes-title"><div class="section-heading"><div><p class="eyebrow">Một hành trình nhỏ, nhiều điều hay</p><h2 id="classes-title">Hôm nay, mình học lớp mấy?</h2><p class="section-description">Chọn lớp của em và bắt đầu chuyến phiêu lưu với những con số nhé!</p></div><span class="little-label">${icon('sparkles')}Sẵn sàng khám phá chưa nào?</span></div><div class="grade-grid">${grades.map(gradeCard).join('')}</div></section><section class="learning-section container" id="hanh-trinh" aria-labelledby="journey-title"><div class="learning-panel"><div class="learning-intro"><p class="eyebrow">Chậm mà chắc, học mà vui</p><h2 id="journey-title">Mỗi bước nhỏ,<br>một niềm vui lớn.</h2><p>Chọn lớp, chọn cấp độ rồi thử sức.<br>Em luôn có thể bắt đầu lại!</p></div><div class="learning-steps">${levels.map(l=>`<div class="learning-step" style="${theme(l)}"><span class="step-icon">${icon(l.icon)}</span><h3>${l.label}</h3><p>${l.id===0?'Làm quen từ những bài thật dễ.':l.id===1?'Luyện tập để thêm tự tin.':'Thử thách để giỏi hơn mỗi ngày.'}</p></div>`).join('')}</div></div></section>`}
function renderClass(){
 document.title=`Toán lớp ${grade.id} — Học toán thật là vui`;
 document.getElementById('main').innerHTML=`<div class="class-page container"><div class="breadcrumb"><a href="/">Trang chủ</a>${icon('arrow')}<span>Lớp ${grade.id}</span></div><section class="grade-page-hero" style="${theme(grade)}"><div><p class="eyebrow">${icon('sparkles')}Chuyến phiêu lưu toán học · Lớp ${grade.id}</p><h1>${grade.title}</h1><p>${grade.subtitle}</p><div class="topic-tags">${grade.topics.map(t=>`<span class="topic-tag">${t}</span>`).join('')}</div></div><span class="grade-hero-number" aria-hidden="true">${grade.id}</span></section><nav class="grade-switcher" aria-label="Chuyển lớp"><span>Khám phá lớp khác:</span>${grades.map(g=>`<a href="/lop-${g.id}/" ${g.id===grade.id?'aria-current="page"':''}>Lớp ${g.id}</a>`).join('')}</nav><section class="levels-section" id="cap-do" aria-labelledby="levels-title"><h2 id="levels-title">Chọn thử thách của em</h2><p class="section-description">Bắt đầu thật nhẹ nhàng, rồi tiến lên từng chút một nhé.</p><div class="levels-grid" role="group" aria-label="Chọn cấp độ">${levels.map(l=>`<button class="level-card ${l.id===selectedLevel?'selected':''}" style="${theme(l)}" data-level="${l.id}" aria-pressed="${l.id===selectedLevel}"><span class="level-topline"><span class="level-icon">${icon(l.icon)}</span><span class="level-difficulty" aria-label="Độ khó ${l.id+1} trên 3">${[0,1,2].map(i=>`<i class="${i>l.id?'muted':''}"></i>`).join('')}</span></span><h3>${l.title}</h3><p>${grade.levels[l.id]}</p><span class="level-bottom"><span>${best(`${grade.id}-${l.id}`)?`${best(`${grade.id}-${l.id}`)}/5 sao đã đạt`:'5 câu hỏi nhỏ'}</span>${icon(l.id===selectedLevel?'check':'arrow')}</span></button>`).join('')}</div><div id="practice-panel"></div><p class="progress-notice">${icon('shield')}Tiến bộ của em được lưu trên trình duyệt này. Em có thể luyện lại bất cứ lúc nào.</p></section></div>`;
 document.querySelectorAll('[data-level]').forEach(el=>el.addEventListener('click',()=>{selectedLevel=Number(el.dataset.level);document.querySelectorAll('[data-level]').forEach(b=>{const active=Number(b.dataset.level)===selectedLevel;b.classList.toggle('selected',active);b.setAttribute('aria-pressed',String(active));b.querySelector('.level-bottom svg').outerHTML=icon(active?'check':'arrow')});renderPractice();}));
 renderPractice();
}
function renderPractice(){const l=levels[selectedLevel];document.getElementById('practice-panel').innerHTML=`<div class="practice-panel"><div><p class="eyebrow">${icon(l.icon)}Lớp ${grade.id} · Cấp độ ${l.title.toLowerCase()}</p><h3 style="margin-top:9px">${l.label}, em nhé!</h3><p>${grade.levels[selectedLevel]} Chọn đáp án và cùng tìm hiểu lời giải.</p><div class="practice-meta"><span>${icon('pencil')}5 câu hỏi</span><span>${icon('clock')}Khoảng 5 phút</span><span>${icon('star')}Tối đa 5 sao</span></div></div><button class="button primary" id="start-quiz">Bắt đầu luyện tập ${icon('arrow')}</button></div>`;document.getElementById('start-quiz').addEventListener('click',startQuiz)}
function startQuiz(){if(!document.getElementById('quiz-dialog').open)lastQuizTrigger=document.activeElement;quiz={key:`${grade.id}-${selectedLevel}`,index:0,score:0,answered:false,level:selectedLevel};renderQuestion();const dialog=document.getElementById('quiz-dialog');if(!dialog.open)dialog.showModal();dialog.querySelector('.close-quiz')?.focus()}
function quizTop(){return `<div class="quiz-head"><p class="quiz-kicker">TOÁN LỚP ${grade.id} · ${levels[quiz.level].title.toUpperCase()}</p><button class="close-quiz" aria-label="Đóng bài luyện tập">${icon('close')}</button></div>`}
function bindClose(){document.querySelector('.close-quiz').addEventListener('click',closeQuiz)}
function closeQuiz(){const finished=quiz?.finished;document.getElementById('quiz-dialog').close();quiz=null;if(finished){renderClass();document.getElementById('start-quiz')?.focus()}else lastQuizTrigger?.focus()}
function renderQuestion(){const question=questions[quiz.key][quiz.index];const dialog=document.getElementById('quiz-dialog');dialog.innerHTML=`<div class="quiz-shell">${quizTop()}<div class="quiz-progress-label"><span>Câu ${quiz.index+1} / 5</span><span id="quiz-score">${quiz.score} sao ${icon('star')}</span></div><div class="quiz-progress"><span style="width:${quiz.index/5*100}%"></span></div><h2 class="quiz-heading" id="quiz-title">Cùng thử sức nào!</h2><p class="quiz-question">${question.text}</p><div class="quiz-options">${question.options.map((option,i)=>`<button class="answer-option" data-answer="${i}"><span class="answer-letter">${'ABCD'[i]}</span><span>${option}</span></button>`).join('')}</div><div id="quiz-feedback" aria-live="polite"></div><p class="quiz-tip">Cứ bình tĩnh suy nghĩ. Mỗi lần thử là một lần em tiến bộ!</p></div>`;bindClose();dialog.querySelectorAll('[data-answer]').forEach(el=>el.addEventListener('click',()=>answerQuestion(Number(el.dataset.answer))))}
function answerQuestion(index){if(!quiz||quiz.answered)return;quiz.answered=true;const question=questions[quiz.key][quiz.index];const correct=question.options[index]===question.answer;if(correct)quiz.score++;document.getElementById('quiz-score').innerHTML=`${quiz.score} sao ${icon('star')}`;document.querySelectorAll('[data-answer]').forEach(el=>{el.disabled=true;const i=Number(el.dataset.answer);if(question.options[i]===question.answer)el.classList.add('correct');else if(i===index)el.classList.add('incorrect')});document.getElementById('quiz-feedback').innerHTML=`<div class="quiz-feedback ${correct?'':'wrong'}"><strong>${correct?'Đúng rồi, em giỏi lắm!':'Mình cùng tìm hiểu nhé!'}</strong>${question.explanation}</div><button class="button primary quiz-next" id="next-question">${quiz.index===4?'Xem kết quả':'Câu tiếp theo'}${icon('arrow')}</button>`;document.getElementById('next-question').addEventListener('click',()=>{if(quiz.index===4)finishQuiz();else{quiz.index++;quiz.answered=false;renderQuestion();document.querySelector('.answer-option')?.focus()}});document.getElementById('next-question').focus()}
function finishQuiz(){quiz.finished=true;const prev=best(quiz.key);saved[quiz.key]=Math.max(prev,quiz.score);let persisted=true;try{localStorage.setItem('toan-vui-progress-v1',JSON.stringify(saved))}catch{persisted=false}document.getElementById('star-count').textContent=totalStars();document.querySelector('.star-total').setAttribute('aria-label',`${totalStars()} sao đã đạt`);const title=quiz.score===5?'Tuyệt vời, nhà toán học nhí!':quiz.score>=3?'Em đang làm rất tốt!':'Mỗi lần thử, một bước tiến!';document.getElementById('quiz-dialog').innerHTML=`<div class="quiz-shell">${quizTop()}<div class="result"><div class="result-icon">${icon(quiz.score>=3?'trophy':'heart')}</div><h2 id="quiz-title">${title}</h2><div class="result-score">${quiz.score} / 5 ${icon('star')}</div><p>${quiz.score===5?'Em đã trả lời đúng tất cả câu hỏi. Cùng khám phá một thử thách mới nhé!':'Em đã hoàn thành bài tập. Hãy luyện lại và đọc lời giải để hiểu bài hơn nhé!'}</p><div class="result-actions"><button class="button primary" id="retry-quiz">${icon('pencil')}Luyện tập lại</button><button class="button secondary" id="back-levels">Về chọn cấp độ ${icon('arrow')}</button></div><p class="result-note">${persisted?'Thành tích tốt nhất đã được lưu. Luyện lại sẽ không làm mất sao của em.':'Trình duyệt chưa cho phép lưu. Sao được giữ trong phiên học này.'}</p></div></div>`;bindClose();document.getElementById('retry-quiz').addEventListener('click',startQuiz);document.getElementById('back-levels').addEventListener('click',()=>{closeQuiz();renderClass();document.getElementById('levels-title').setAttribute('tabindex','-1');document.getElementById('levels-title').focus()});document.getElementById('retry-quiz').focus();if(quiz.score>=3&&!matchMedia('(prefers-reduced-motion: reduce)').matches)celebrate()}
function celebrate(){const holder=document.getElementById('confetti');holder.innerHTML=Array.from({length:35},(_,i)=>`<i class="confetti-piece" style="--left:${(i*37)%100}%;--color:${['#ed7654','#f5c655','#85a868','#ad93bd','#85b6bf'][i%5]};--delay:${(i%7)*.07}s"></i>`).join('');setTimeout(()=>holder.replaceChildren(),3500)}
document.getElementById('quiz-dialog').addEventListener('cancel',e=>{e.preventDefault();closeQuiz()});
document.getElementById('quiz-dialog').addEventListener('click',e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeQuiz()}});
renderHeader();renderFooter();grade?renderClass():renderHome();
