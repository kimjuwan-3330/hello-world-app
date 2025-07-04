// HTML의 요소들을 자바스크립트 변수에 담기
const textInput = document.getElementById('text-input');
const imageArea = document.getElementById('image-area');
const generateBtn = document.getElementById('generate-btn');
const downloadLink = document.getElementById('download-link');

// 1. 텍스트 입력 시 미리보기 영역에 실시간으로 글자 반영
textInput.addEventListener('input', () => {
    // 입력된 텍스트가 없으면 기본 문구 표시
    if (textInput.value.trim() === '') {
        imageArea.innerText = '여기에 텍스트가 표시됩니다.';
    } else {
        imageArea.innerText = textInput.value;
    }
    // 텍스트가 변경되면 다운로드 링크는 다시 숨김
    downloadLink.classList.add('hidden');
});

// 2. '이미지 생성' 버튼 클릭 시 동작
generateBtn.addEventListener('click', () => {
    if (textInput.value.trim() === '') {
        alert('텍스트를 먼저 입력해주세요!');
        return; // 함수 종료
    }
    
    // html2canvas 라이브러리 사용!
    // image-area 라는 DIV를 통째로 캡처해서 canvas로 변환
    html2canvas(imageArea).then(canvas => {
        // 캔버스(그림)를 이미지 파일 데이터(URL)로 변환
        const imageDataURL = canvas.toDataURL('image/png');

        // 다운로드 링크에 이미지 데이터 주소를 넣어주고, 보이게 만듦
        downloadLink.href = imageDataURL;
        downloadLink.classList.remove('hidden');

        alert('이미지 생성 완료! 다운로드 버튼을 눌러 저장하세요.');
    });
});