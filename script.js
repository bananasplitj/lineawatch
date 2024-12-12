function updateClock() {
    const now = new Date();

    // 현재 시간 가져오기
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // 초, 분, 시 각도 계산
    const secondsDeg = (seconds / 60) * 360; // 초침 각도
    const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6; // 분침 각도
    const hoursDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30; // 시침 각도

    // 각도 반영 (기본 위치가 동쪽(90도)이므로 추가)
    document.getElementById('second').style.transform = `rotate(${90 + secondsDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${90 + minutesDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${90 + hoursDeg}deg)`;
}

// 1초마다 업데이트
setInterval(updateClock, 1000);
updateClock();
