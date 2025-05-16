const paragraph = document.getElementById("paragraph");
      const maxLength = 350; // Số ký tự tối đa trước khi cắt

      if (paragraph.innerHTML.length > maxLength) {
       const shortText = paragraph.innerHTML.slice(0, maxLength) + "...";
       const fullText = paragraph.innerHTML;

      paragraph.innerHTML = shortText;

      paragraph.addEventListener("click", function () {
       if (paragraph.innerHTML === shortText) {
         paragraph.innerHTML = fullText;
      } else {
        paragraph.innerHTML = shortText;
      }
       });    
      }
      const seeMore = document.getElementById('seeMore');
       seeMore.addEventListener('click', () =>{
        alert('Our website does not currently add new trips !');
      })