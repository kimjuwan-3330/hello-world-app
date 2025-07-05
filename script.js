document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const imageArea = document.getElementById('image-area');
    const generateBtn = document.getElementById('generate-btn');
    const downloadLink = document.getElementById('download-link');

    generateBtn.addEventListener('click', () => {
        imageArea.textContent = textInput.value || "여기에 텍스트가 표시됩니다.";

        html2canvas(imageArea).then(canvas => {
            // 기존 내용 제거
            imageArea.innerHTML = '';

            // 캡처된 이미지 화면에 표시
            imageArea.appendChild(canvas);

            // 다운로드 링크 설정
            const image = canvas.toDataURL("image/png");
            downloadLink.href = image;
            downloadLink.download = "text-image.png";
            downloadLink.classList.remove('hidden');
        }).catch(err => {
            console.error("이미지 생성 오류:", err);
            alert("이미지 생성에 실패했습니다.");
        });
    });
});
