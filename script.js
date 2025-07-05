// 스크립트가 시작되었음을 알립니다.
console.log("스크립트 시작!");

// DOM 요소들이 모두 로드된 후에 코드를 실행합니다.
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM 로드 완료! 요소들을 찾습니다.");

    // HTML 요소들을 가져옵니다.
    const textInput = document.getElementById('text-input');
    const imageArea = document.getElementById('image-area');
    const generateBtn = document.getElementById('generate-btn');
    const downloadLink = document.getElementById('download-link');

    // 각 요소가 제대로 찾아졌는지 확인합니다.
    if (!textInput) console.error("오류: text-input 요소를 찾을 수 없습니다.");
    if (!imageArea) console.error("오류: image-area 요소를 찾을 수 없습니다.");
    if (!generateBtn) console.error("오류: generate-btn 요소를 찾을 수 없습니다.");
    if (!downloadLink) console.error("오류: download-link 요소를 찾을 수 없습니다.");

    // 모든 요소가 존재할 때만 이벤트 리스너를 추가합니다.
    if (textInput && imageArea && generateBtn && downloadLink) {
        console.log("모든 요소가 성공적으로 찾아졌습니다. 이벤트 리스너를 추가합니다.");

        textInput.addEventListener('input', (e) => {
            imageArea.innerText = e.target.value || "여기에 텍스트가 표시됩니다.";
        });

        generateBtn.addEventListener('click', () => {
            console.log("생성 버튼 클릭됨!");

            // html2canvas 실행
            try {
                console.log("html2canvas 실행 시도...");
                html2canvas(imageArea, {
                    // 외부 이미지를 사용할 경우 필요할 수 있는 옵션
                    useCORS: true 
                }).then(canvas => {
                    console.log("html2canvas 이미지 생성 성공!");
                    const imageDataURL = canvas.toDataURL('image/png');
                    downloadLink.href = imageDataURL;
                    downloadLink.classList.remove('hidden');
                    alert('이미지 생성이 완료되었습니다! 아래 링크로 다운로드하세요.');
                }).catch(error => {
                    // .then() 블록 안에서 에러가 발생했을 때
                    console.error("html2canvas .then() 내부 오류:", error);
                    alert("이미지 생성 중 오류가 발생했습니다. 콘솔을 확인해주세요.");
                });
            } catch (error) {
                // html2canvas 실행 자체에서 에러가 발생했을 때
                console.error("html2canvas 실행 오류:", error);
                alert("이미지 생성 라이브러리 실행 중 오류가 발생했습니다. 콘솔을 확인해주세요.");
            }
        });
    }
});
