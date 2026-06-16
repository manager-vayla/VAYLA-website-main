## Plan: Thay toàn bộ "Funding" thành VAYLA Boost / V-Boost

TL;DR: Tìm tất cả các xuất hiện của `Funding` trong giao diện và nội dung website, thay bằng `VAYLA Boost` cho các section/external display và `V-Boost` cho các button hoặc nhãn UX ngắn. Ưu tiên cập nhật các file nguồn và kiểm tra lại cả các file HTML tĩnh nếu cần.

**Steps**
1. Audit hiện trạng: dùng tìm kiếm toàn bộ trong `src/`, `stitch_*.jsx`, `stitch_html/`, `home.html` để xác định tất cả các vị trí chứa `Funding`, `funding`, `FUNDING`.
2. Nhóm theo ngữ cảnh:
   - Section title / external display: đổi thành `VAYLA Boost`.
   - Button/UX label/short label: đổi thành `V-Boost`.
   - Các câu mô tả hoặc copy bên trong phần nội dung: thay bằng `VAYLA Boost` nếu liên quan đến thương hiệu, và điều chỉnh lại câu cho tự nhiên.
3. Thực hiện thay đổi trong các file nguồn chính:
   - `src/app/doc/page.tsx`
   - `src/app/tokenutility/page.tsx`
   - `src/app/arena/page.tsx`
   - `src/components/organisms/FloatingUtilityCards.tsx`
   - `src/components/organisms/Footer.tsx`
   - `src/components/organisms/SecuritySection.tsx`
   - `src/components/organisms/StitchMultiAgent.tsx`
   - `src/components/organisms/StitchRoadmap.tsx`
   - `src/components/organisms/RevenueSection.tsx`
   - `src/components/organisms/Hero.tsx`
   - `src/components/organisms/StitchArenaLayer.tsx`
   - `src/components/organisms/StitchInfrastructure.tsx`
   - `src/components/organisms/PlatformSection.tsx`
   - `src/components/organisms/CoreUtilitySection.tsx`
   - `src/components/organisms/StitchCoreUtility.tsx`
   - `src/components/organisms/ArenaBentoGrid.tsx`
   - `src/components/organisms/HoloDocList.tsx`
4. Đồng bộ các thay đổi nếu các file tĩnh cũng chứa cùng nội dung:
   - `stitch_main.jsx`
   - `stitch_doc.jsx`
   - `stitch_arena.jsx`
   - `stitch_token.jsx`
   - `stitch_html/main.html`
   - `stitch_html/arena.html`
   - `stitch_html/doc.html`
   - `stitch_html/tokenutility.html`
   - `home.html`
5. Kiểm tra lại kết quả thay thế:
   - Dùng tìm kiếm regex `Funding|funding|FUNDING` để xác nhận không còn từ `Funding` chưa đổi.
   - Duyệt nhanh trên giao diện hoặc preview nếu có thể để kiểm tra nhãn section và button.
   - Với các câu thay đổi copy, đọc lại để chắc rằng cách dùng thương hiệu không gây lủng củng.

**Decisions**
- Không chỉnh `package-lock.json` vì đó là dependency metadata.
- Nếu `stitch_html/` và `home.html` là bản sao hoặc output tĩnh, cập nhật chúng sau khi sửa nguồn hoặc xác nhận cần sửa trực tiếp.
- Chỉ đổi `Funding` trong nội dung web, giữ nguyên các thuật ngữ kỹ thuật không liên quan khác.
