// HTML 요소들을 가져옵니다.
const textInput = document.getElementById('text-input');
const imageArea = document.getElementById('image-area');
const generateBtn = document.getElementById('generate-btn');
const downloadLink = document.getElementById('download-link');

// --- 표지판 1: 스크립트가 시작되었는지 확인 ---
console.log("스크립트 파일이 성공적으로 로드되었습니다.");
console.log("버튼 요소:", generateBtn); // 버튼 요소를 직접 확인

// 입력창의 텍스트를 미리보기 영역에 실시간으로 반영
textInput.addEventListener('input', (e) => {
    imageArea.innerText = e.target.value;
});

// '이미지 생성' 버튼에 클릭 이벤트 리스너를 추가합니다.
generateBtn.addEventListener('click', () => {
    // --- 표지판 2: 버튼이 클릭되었는지 확인 ---
    console.log("이미지 생성 버튼이 클릭되었습니다!");

    if (textInput.value.trim() === '') {
        alert('텍스트를 먼저 입력해주세요!');
        return;
    }

    // html2canvas 라이브러리를 사용합니다.
    html2canvas(imageArea).then(canvas => {
        // --- 표지판 3: html2canvas가 성공적으로 작동했는지 확인 ---
        console.log("html2canvas가 이미지를 성공적으로 만들었습니다!");

        const imageDataURL = canvas.toDataURL('image/png');
        downloadLink.href = imageDataURL;
        downloadLink.classList.remove('hidden');
        alert('이미지 생성이 완료되었습니다! 아래 링크로 다운로드하세요.');
    });
});
