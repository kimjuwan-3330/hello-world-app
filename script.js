// HTML 요소 가져오기
const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const imageArea = document.getElementById('image-area');
const downloadLink = document.getElementById('download-link');

// 입력창의 텍스트를 미리보기 영역에 실시간으로 반영
textInput.addEventListener('input', (e) => {
    imageArea.innerText = e.target.value;
});

// '이미지 생성' 버튼 클릭 시 동작
generateBtn.addEventListener('click', () => {
    // --- 표지판 1: 버튼이 클릭되었는지 확인 ---
    console.log("이미지 생성 버튼이 클릭되었습니다!"); 
    
    if (textInput.value.trim() === '') {
        alert('텍스트를 먼저 입력해주세요!');
        return;
    }

    // html2canvas 라이브러리 사용!
    html2canvas(imageArea).then(canvas => {
        // --- 표지판 2: html2canvas가 성공적으로 작동했는지 확인 ---
        console.log("html2canvas가 이미지를 성공적으로 만들었습니다!"); 

        const imageDataURL = canvas.toDataURL('image/png');
        downloadLink.href = imageDataURL;
        downloadLink.classList.remove('hidden'); // hidden 클래스 제거
        alert('이미지 생성이 완료되었습니다! 아래 링크로 다운로드하세요.');
    });
});
       
