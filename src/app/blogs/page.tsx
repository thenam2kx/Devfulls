import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import CardBlog from '@/components/blog/card.blog'



const BlogPage = () => {

  return (
    <Container sx={{ mb: '60px', my: { xs: '30px', md: '90px' } }}>
      <Grid container spacing={2}>
        {
          BLOGS.map(item => (
            <Grid
              size={{ xs: 6, sm: 4, md: 3 }}
              key={item.id}
              sx={{ textDecoration: 'none' }}
            >
              <CardBlog />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default BlogPage

export const BLOGS = [
  {
    id: 1,
    title: 'Map và Set trong JavaScript',
    content: `
      "<p>Map và Set là hai cấu trúc dữ liệu quan trọng trong JavaScript, cung cấp nhiều đặc tính hữu ích cho việc xử lý dữ liệu phức tạp. Trong bài viết này, chúng ta sẽ tìm hiểu Map và Set, cách sử dụng chúng, và điểm khác biệt so với các cấu trúc dữ liệu khác.</p>
      <h3>1. Map trong JavaScript</h3>
      <p>Khái niệm: Map là một cấu trúc dữ liệu cho phép lưu trữ các cặp key-value. Key trong Map có thể là bất kỳ kiểu dữ liệu nào (bao gồm object, function, hay primitive).</p>
      <p>Các phương thức quan trọng</p>
      <ul>
      <li>set(key, value): Thêm một cặp key-value.</li>
      <li>get(key): Truy xuất giá trị của key.</li>
      <li>has(key): Kiểm tra key có tồn tại.</li>
      <li>delete(key): Xóa key.</li>
      <li>clear(): Xóa tất cả các cặp key-value.</li>
      <li>size: Lưu trữ số lượng cặp key-value hiện có</li>
      </ul>
      <p>Ví dụ:</p>
      <p><code>const map = new Map();</code></p>
      <p>// Thêm các cặp key-value</p>
      <blockquote><p><code>map.set('name', 'Trung Quan');<br />
      map.set('age', 25);<br />
      map.set({ hobby: 'coding' }, 'Developer');</code></p></blockquote>
      <p>// Truy xuất giá trị<br />
      <code>console.log(map.get('name')); // Trung Quan</code></p>
      <p>// Kiểm tra tồn tại<br />
      <code>console.log(map.has('age')); // true</code></p>
      <p>// Lệnh xóa<br />
      <code>map.delete('age');<br />
      console.log(map.has('age')); // false</code></p>
      <p>// Kích thước<br />
      console.log(map.size); // 2<!--more--></p>
      <h3>2. Set trong JavaScript</h3>
      <h4>Khái niệm:</h4>
      <p>Set là một cấu trúc dữ liệu lưu trữ các giá trị duy nhất. Set không cho phép lặp lại các phần tử.</p>
      <h4>Các phương thức quan trọng</h4>
      <ul>
      <li>add(value): Thêm giá trị. has(value): Kiểm tra giá trị có tồn tại.</li>
      <li>delete(value): Xóa giá trị.</li>
      <li>clear(): Xóa tất cả các giá trị.</li>
      <li>size: Lưu trữ số lượng phần tử hiện có.</li>
      </ul>
      <h3>Ví dụ</h3>
      <p>const set = new Set();</p>
      <p>// Thêm các phần tử</p>
      <p>set.add(1);<br />
      set.add(2);<br />
      set.add(3);<br />
      set.add(2); // Không bị trùng lặp<br />
      console.log(set.size); // 3</p>
      <p>// Kiểm tra tồn tại<br />
      <code>console.log(set.has(2)); // true</code></p>
      <p>// Lệnh xóa<br />
      <code>set.delete(2);<br />
      console.log(set.has(2)); // false</code></p>
      <p>// Duyệt các phần tử<br />
      set.forEach(value =&gt; {<br />
      console.log(value);<br />
      });</p>
      <p>&nbsp;</p>
      <h3>3. So sánh Map và Object, Set và Array</h3>
      <h4>Map vs Object</h4>
      <ul data-spread="false">
      <li><strong>Key linh hoạt</strong>: Map cho phép key là bất kỳ kiểu dữ liệu nào, trong khi đó Object chỉ hỗ trợ key là chuỗi hoặc symbol.</li>
      <li><strong>Kích thước</strong>: Map có thuộc tính <code>size</code>, còn Object phải dùng <code>Object.keys(obj).length</code>.</li>
      <li><strong>Hiệu suất</strong>: Map nhanh hơn khi truy cập hoặc duyệt các phần tử lớn.</li>
      </ul>
      <h4>Set vs Array</h4>
      <ul data-spread="false">
      <li><strong>Giá trị duy nhất</strong>: Set không cho phép phần tử trùng lặp.</li>
      <li><strong>Hiệu suất</strong>: Set nhanh hơn trong việc kiểm tra sự tồn tại.</li>
      </ul>"
    `
  },
  {
    id: 2,
    title: 'Các phương thức làm việc với mảng trong JavaScript',
    content: `
      "<p data-sourcepos="3:1-3:189">JavaScript cung cấp một bộ phương thức phong phú để làm việc với các mảng, giúp cho việc xử lý dữ liệu trở nên hiệu quả và linh hoạt hơn. Dưới đây là một số phương thức thường được sử dụng:</p>
      <h3 data-sourcepos="5:1-5:26">Thay đổi cấu trúc mảng</h3>
      <ul data-sourcepos="7:3-12:0">
      <li data-sourcepos="7:3-7:72"><strong>push(&#8230;items):</strong> <span class="citation-0">Thêm một hoặc nhiều phần tử vào cuối mảng.</span></li>
      <li data-sourcepos="8:3-8:56"><strong><span class="citation-0">pop():</span></strong><span class="citation-0"> Xóa và trả về phần tử cuối cùng của mảng.</span></li>
      <li data-sourcepos="9:3-9:64"><strong><span class="citation-0">shift():</span></strong><span class="citation-0 citation-end-0"> Xóa và trả về phần tử đầu tiên của mảng.</span><span class="button-container hide-from-message-actions ng-star-inserted">   <button class="mat-mdc-tooltip-trigger button image-fade-on hide-from-message-actions" aria-controls="sources" aria-expanded="false" aria-describedby="cdk-describedby-message-ng-1-34"></button></span>
      <div class="container ng-tns-c1455237016-39 hide">
      <div class="carousel-container ng-tns-c1455237016-39">
      <div class="carousel-content ng-tns-c1455237016-39">
      <div class="sources-carousel-source ng-tns-c1455237016-39 hide ng-star-inserted" data-test-id="sources-carousel-source"></div>
      </div>
      </div>
      </div>
      </li>
      <li data-sourcepos="10:3-10:68"><strong>unshift(&#8230;items):</strong> Thêm một hoặc nhiều phần tử vào đầu mảng.</li>
      <li data-sourcepos="11:3-12:0"><strong>splice(start, deleteCount, &#8230;items):</strong> Xóa một số phần tử bắt đầu từ vị trí <code>start</code>, và thêm các phần tử mới vào vị trí đó.</li>
      </ul>
      <h3 data-sourcepos="13:1-13:23">Tìm kiếm trong mảng</h3>
      <ul data-sourcepos="15:3-20:0">
      <li data-sourcepos="15:3-15:149"><strong>indexOf(item, fromIndex):</strong> Trả về vị trí đầu tiên của phần tử <code>item</code> trong mảng, bắt đầu từ vị trí <code>fromIndex</code>. Nếu không tìm thấy, trả về -1.</li>
      <li data-sourcepos="16:3-16:86"><strong>lastIndexOf(item, fromIndex):</strong> Tương tự <code>indexOf</code>, nhưng tìm kiếm từ cuối mảng.</li>
      <li data-sourcepos="17:3-17:128"><strong>includes(searchElement, fromIndex):</strong> Kiểm tra xem mảng có chứa phần tử <code>searchElement</code> hay không, trả về true hoặc false.</li>
      <li data-sourcepos="18:3-18:94"><strong>find(callback):</strong> Tìm phần tử đầu tiên trong mảng thỏa mãn điều kiện của hàm <code>callback</code>.</li>
      <li data-sourcepos="19:3-20:0"><strong>findIndex(callback):</strong> Tìm chỉ số của phần tử đầu tiên trong mảng thỏa mãn điều kiện của hàm <code>callback</code>.</li>
      </ul>
      <h3 data-sourcepos="21:1-21:14">Duyệt mảng</h3>
      <ul data-sourcepos="23:3-27:0">
      <li data-sourcepos="23:3-23:103"><strong>forEach(callback):</strong> Duyệt qua từng phần tử của mảng và thực hiện hàm <code>callback</code> cho mỗi phần tử.</li>
      <li data-sourcepos="24:3-24:108"><strong>map(callback):</strong> Tạo một mảng mới bằng cách áp dụng hàm <code>callback</code> lên từng phần tử của mảng hiện tại.</li>
      <li data-sourcepos="25:3-25:98"><strong>filter(callback):</strong> Tạo một mảng mới chứa các phần tử thỏa mãn điều kiện của hàm <code>callback</code>.</li>
      <li data-sourcepos="26:3-27:0"><strong>reduce(callback, initialValue):</strong> Lặp qua mảng và tích lũy kết quả, bắt đầu từ <code>initialValue</code>.</li>
      </ul>
      <h3 data-sourcepos="28:1-28:24">Các phương thức khác</h3>
      <ul data-sourcepos="30:3-35:0">
      <li data-sourcepos="30:3-30:61"><strong>concat(&#8230;arrays):</strong> Nối nhiều mảng thành một mảng mới.</li>
      <li data-sourcepos="31:3-31:93"><strong>slice(start, end):</strong> Trả về một phần tử con của mảng từ vị trí <code>start</code> đến trước <code>end</code>.</li>
      <li data-sourcepos="32:3-32:93"><strong>join(separator):</strong> Nối các phần tử của mảng thành một chuỗi, ngăn cách bởi <code>separator</code>.</li>
      <li data-sourcepos="33:3-33:66"><strong>sort():</strong> Sắp xếp các phần tử của mảng theo thứ tự tăng dần.</li>
      <li data-sourcepos="34:3-35:0"><strong>reverse():</strong> Đảo ngược thứ tự các phần tử trong mảng.</li>
      </ul>
      <h3 data-sourcepos="36:1-36:9">Ví dụ</h3>
      <div class="code-block ng-tns-c688500725-35 ng-trigger ng-trigger-codeBlockRevealAnimation">
      <div class="ng-tns-c688500725-35 code-block-internal-container">
      <div class="animated-opacity ng-tns-c688500725-35">
      <pre class="ng-tns-c688500725-35"><code class="code-container ng-tns-c688500725-35" role="text" data-test-id="code-content" data-sourcepos="38:1-54:57"><span class="hljs-keyword">const</span> numbers = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>];

      <span class="hljs-comment">// Thêm phần tử</span>
      numbers.push(<span class="hljs-number">6</span>); <span class="hljs-comment">// numbers = [1, 2, 3, 4, 5, 6]</span>

      <span class="hljs-comment">// Tìm kiếm</span>
      <span class="hljs-keyword">const</span> index = numbers.indexOf(<span class="hljs-number">3</span>); <span class="hljs-comment">// index = 2</span>

      <span class="hljs-comment">// Duyệt mảng</span>
      numbers.forEach(<span class="hljs-function"><span class="hljs-params">number</span> =&gt;</span> {
        <span class="hljs-built_in">console</span>.log(number * <span class="hljs-number">2</span>);
      });

      <span class="hljs-comment">// Tạo mảng mới</span>
      <span class="hljs-keyword">const</span> doubledNumbers = numbers.map(<span class="hljs-function"><span class="hljs-params">number</span> =&gt;</span> number * <span class="hljs-number">2</span>);</code></pre>
      </div>
      </div>
      <div class="code-block-decoration footer gmat-overline ng-tns-c688500725-35 hide-from-message-actions ng-star-inserted">
      <div class="buttons ng-tns-c688500725-35 ng-star-inserted"></div>
      </div>
      </div>
      <p data-sourcepos="56:1-56:10"><strong>Lưu ý:</strong></p>
      <ul data-sourcepos="58:3-61:0">
      <li data-sourcepos="58:3-58:150">Các phương thức trên thường không thay đổi mảng gốc, mà trả về một mảng mới (trừ các phương thức như <code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code>, <code>splice</code>).</li>
      <li data-sourcepos="59:3-59:93">Bạn có thể kết hợp các phương thức này để thực hiện các phép toán phức tạp hơn trên mảng.</li>
      <li data-sourcepos="60:3-61:0">Để hiểu rõ hơn về từng phương thức, bạn có thể tham khảo tài liệu chính thức của JavaScript hoặc các bài viết hướng dẫn chi tiết.</li>
      </ul>
      <p data-sourcepos="62:1-62:19"><strong>Ví dụ nâng cao:</strong></p>
      <div class="code-block ng-tns-c688500725-36 ng-trigger ng-trigger-codeBlockRevealAnimation">
      <div class="ng-tns-c688500725-36 code-block-internal-container">
      <div class="animated-opacity ng-tns-c688500725-36">
      <pre class="ng-tns-c688500725-36"><code class="code-container ng-tns-c688500725-36" role="text" data-test-id="code-content" data-sourcepos="64:1-67:96"><span class="hljs-comment">// Tìm các số chẵn trong mảng và nhân đôi chúng</span>
      <span class="hljs-keyword">const</span> evenNumbersDoubled = numbers.filter(<span class="hljs-function"><span class="hljs-params">number</span> =&gt;</span> number % <span class="hljs-number">2</span> === <span class="hljs-number">0</span>).map</code></pre>
      </div>
      </div>
      </div>"
    `
  }
]