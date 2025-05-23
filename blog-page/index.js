const paragraph = document.getElementById("paragraph");
const maxLength = 350;
const fullText = paragraph.textContent;
const isLong = fullText.length > maxLength;
let isShort = true;

if (isLong) {
  const shortText = fullText.slice(0, maxLength) + "...";
  paragraph.textContent = shortText;

  paragraph.style.cursor = "pointer";
  paragraph.addEventListener("click", () => {
    paragraph.textContent = isShort ? fullText : shortText;
    isShort = !isShort;
  });
}

document.getElementById('seeMore').addEventListener('click', () => {
  alert('Our website does not currently add new trips !');
});
