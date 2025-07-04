// HTML 요소들을 가져옵니다.
const textInput = document.getElementById('text-input');
const imageArea = document.getElementById('image-area');
const generateBtn = document.getElementById('generate-btn');
const downloadLink = document.getElementById('download-link');

// --- 표지판 1: 스크립트가 시작되었고, 요소들을 잘 찾았는지 확인 ---
console.log("스크립트 파일 로드 완료!");
console.log("입력창:", textInput);
console.log("이미지 영역:", imageArea);
console.log("생성 버튼:", generateBtn);
console.log("다운로드 링크:", downloadLink);


// 입력창의 텍스트를 미리보기 영역에 실시간으로 반영
if(textInput) {
    textInput.addEventListener('input', (e) => {
        if(imageArea) {
            imageArea.innerText = e.target.value;
        }
    });
}

// '이미지 생성' 버튼에 클릭 이벤트 리스너를 추가합니다.
if(generateBtn) {
    generateBtn.addEventListener('click', () => {
        // --- 표지판 2: 버튼이 클릭되었는지 확인 ---
        console.log("이미지 생성 버튼 클릭됨!");

        if (!textInput || textInput.value.trim() === '') {
            alert('텍스트를 먼저 입력해주세요!');
            return;
        }

        // --- 표지판 3: html2canvas를 실행하기 직전인지 확인 ---
        console.log("html2canvas 실행 준비...");
        
        // html2canvas 라이브러리를 사용합니다.
        html2canvas(imageArea).then(canvas => {
            // --- 표지판 4: html2canvas가 성공적으로 작동했는지 확인 ---
            console.log("html2canvas 이미지 생성 성공!");

            const imageDataURL = canvas.toDataURL('image/png');
            if(downloadLink) {
                downloadLink.href = imageDataURL;
                downloadLink.classList.remove('hidden');
            }
            alert('이미지 생성이 완료되었습니다! 아래 링크로 다운로드하세요.');
        });
    });
} else {
    console.error("오류: 생성 버튼(generate-btn)을 찾을 수 없습니다!");
}
