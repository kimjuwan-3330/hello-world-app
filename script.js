document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const imageArea = document.getElementById('image-area');
    const generateBtn = document.getElementById('generate-btn');
    const downloadLink = document.getElementById('download-link');

    textInput.addEventListener('input', () => {
        imageArea.textContent = textInput.value || "여기에 텍스트가 표시됩니다.";
    });

    generateBtn.addEventListener('click', () => {
        html2canvas(imageArea).then(canvas => {
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
