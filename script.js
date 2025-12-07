// 레슨 데이터 구조 설명:
// - 각 카테고리(챕터)는 여러 레슨을 포함
// - 각 레슨은 여러 단어/표현(words)을 포함
// - 각 단어는: indonesian(인도네시아어), pronunciation(발음), korean(한국어 뜻), example(예문)

const lessonsData = {
    basics: {
        title: '기초',
        description: '인도네시아어의 기본 표현을 배워보세요',
        lessons: [
            {
                id: 'basics-1',
                title: '인사말',
                description: '일상에서 사용하는 기본 인사말',
                words: [
                    { indonesian: 'Selamat pagi', pronunciation: '[슬라맛 빠기]', korean: '좋은 아침', example: 'Selamat pagi, Pak! (좋은 아침입니다, 선생님!)' },
                    { indonesian: 'Selamat siang', pronunciation: '[슬라맛 시앙]', korean: '좋은 점심', example: 'Selamat siang! (좋은 점심입니다!)' },
                    { indonesian: 'Selamat malam', pronunciation: '[슬라맛 말람]', korean: '좋은 저녁', example: 'Selamat malam! (좋은 저녁입니다!)' },
                    { indonesian: 'Halo', pronunciation: '[할로]', korean: '안녕', example: 'Halo, apa kabar? (안녕, 어떻게 지내?)' },
                    { indonesian: 'Terima kasih', pronunciation: '[뜨리마 까시]', korean: '감사합니다', example: 'Terima kasih banyak! (정말 감사합니다!)' }
                ]
            },
            {
                id: 'basics-2',
                title: '기본 표현',
                description: '자주 쓰는 기본 표현들',
                words: [
                    { indonesian: 'Ya', pronunciation: '[야]', korean: '네', example: 'Ya, benar. (네, 맞습니다.)' },
                    { indonesian: 'Tidak', pronunciation: '[띠닥]', korean: '아니요', example: 'Tidak, terima kasih. (아니요, 감사합니다.)' },
                    { indonesian: 'Maaf', pronunciation: '[마압]', korean: '죄송합니다', example: 'Maaf, saya tidak mengerti. (죄송합니다, 이해하지 못했습니다.)' },
                    { indonesian: 'Permisi', pronunciation: '[뻬르미시]', korean: '실례합니다', example: 'Permisi, di mana toilet? (실례합니다, 화장실이 어디인가요?)' },
                    { indonesian: 'Sama-sama', pronunciation: '[사마-사마]', korean: '천만에요', example: 'Terima kasih! - Sama-sama. (감사합니다! - 천만에요.)' }
                ]
            },
            {
                id: 'basics-3',
                title: '숫자',
                description: '1부터 10까지의 숫자',
                words: [
                    { indonesian: 'Satu', pronunciation: '[사뚜]', korean: '하나', example: 'Satu buku (책 한 권)' },
                    { indonesian: 'Dua', pronunciation: '[두아]', korean: '둘', example: 'Dua orang (두 사람)' },
                    { indonesian: 'Tiga', pronunciation: '[띠가]', korean: '셋', example: 'Tiga hari (삼일)' },
                    { indonesian: 'Empat', pronunciation: '[음빳]', korean: '넷', example: 'Empat tahun (사년)' },
                    { indonesian: 'Lima', pronunciation: '[리마]', korean: '다섯', example: 'Lima ribu (오천)' }
                ]
            }
        ]
    },
    daily: {
        title: '일상 대화',
        description: '일상생활에서 자주 사용하는 표현들',
        lessons: [
            {
                id: 'daily-1',
                title: '자기소개',
                description: '자신을 소개하는 방법',
                words: [
                    { indonesian: 'Nama saya', pronunciation: '[나마 사야]', korean: '제 이름은', example: 'Nama saya Kim. (제 이름은 김입니다.)' },
                    { indonesian: 'Saya dari', pronunciation: '[사야 다리]', korean: '저는 ~에서 왔습니다', example: 'Saya dari Korea. (저는 한국에서 왔습니다.)' },
                    { indonesian: 'Senang bertemu Anda', pronunciation: '[스낭 뻬르뜨무 안다]', korean: '만나서 반갑습니다', example: 'Senang bertemu Anda! (만나서 반갑습니다!)' },
                    { indonesian: 'Saya berusia', pronunciation: '[사야 뻬루시아]', korean: '저는 ~살입니다', example: 'Saya berusia 25 tahun. (저는 25살입니다.)' },
                    { indonesian: 'Saya bekerja sebagai', pronunciation: '[사야 뻬르케르자 써바가이]', korean: '저는 ~로 일합니다', example: 'Saya bekerja sebagai guru. (저는 교사로 일합니다.)' }
                ]
            },
            {
                id: 'daily-2',
                title: '감정 표현',
                description: '감정을 표현하는 방법',
                words: [
                    { indonesian: 'Saya senang', pronunciation: '[사야 스낭]', korean: '저는 기쁩니다', example: 'Saya senang hari ini. (오늘 기분이 좋습니다.)' },
                    { indonesian: 'Saya sedih', pronunciation: '[사야 스디]', korean: '저는 슬픕니다', example: 'Saya sedih mendengar berita itu. (그 소식을 듣고 슬픕니다.)' },
                    { indonesian: 'Saya lelah', pronunciation: '[사야 르라]', korean: '저는 피곤합니다', example: 'Saya lelah hari ini. (오늘 피곤합니다.)' }
                ]
            }
        ]
    },
    travel: {
        title: '여행',
        description: '여행 중에 유용한 표현들',
        lessons: [
            {
                id: 'travel-1',
                title: '교통수단',
                description: '교통수단과 관련된 표현',
                words: [
                    { indonesian: 'Di mana', pronunciation: '[디 마나]', korean: '어디에', example: 'Di mana stasiun? (역이 어디인가요?)' },
                    { indonesian: 'Berapa harga', pronunciation: '[뻬라빠 하르가]', korean: '얼마인가요', example: 'Berapa harga tiket? (표가 얼마인가요?)' },
                    { indonesian: 'Bis', pronunciation: '[비스]', korean: '버스', example: 'Saya naik bis. (저는 버스를 탑니다.)' },
                    { indonesian: 'Kereta api', pronunciation: '[끄레따 아삐]', korean: '기차', example: 'Kereta api ke Jakarta (자카르타행 기차)' },
                    { indonesian: 'Pesawat', pronunciation: '[뻬사왓]', korean: '비행기', example: 'Saya naik pesawat. (저는 비행기를 탑니다.)' }
                ]
            },
            {
                id: 'travel-2',
                title: '숙박',
                description: '호텔과 숙박 관련 표현',
                words: [
                    { indonesian: 'Kamar', pronunciation: '[까마르]', korean: '방', example: 'Saya mau kamar. (방을 원합니다.)' },
                    { indonesian: 'Check in', pronunciation: '[첵 인]', korean: '체크인', example: 'Saya mau check in. (체크인하고 싶습니다.)' },
                    { indonesian: 'Check out', pronunciation: '[첵 아웃]', korean: '체크아웃', example: 'Saya mau check out. (체크아웃하고 싶습니다.)' }
                ]
            }
        ]
    },
    food: {
        title: '음식',
        description: '음식 주문과 요리 관련 표현',
        lessons: [
            {
                id: 'food-1',
                title: '음식 주문',
                description: '식당에서 주문하는 방법',
                words: [
                    { indonesian: 'Saya mau', pronunciation: '[사야 마우]', korean: '저는 ~을 원합니다', example: 'Saya mau nasi goreng. (저는 볶음밥을 원합니다.)' },
                    { indonesian: 'Menu', pronunciation: '[메누]', korean: '메뉴', example: 'Boleh lihat menu? (메뉴를 볼 수 있나요?)' },
                    { indonesian: 'Makanan', pronunciation: '[마까난]', korean: '음식', example: 'Makanan apa yang enak? (무엇이 맛있나요?)' },
                    { indonesian: 'Minuman', pronunciation: '[미누만]', korean: '음료', example: 'Saya mau minuman dingin. (차가운 음료를 원합니다.)' },
                    { indonesian: 'Bill', pronunciation: '[빌]', korean: '계산서', example: 'Boleh minta bill? (계산서를 주시겠어요?)' }
                ]
            },
            {
                id: 'food-2',
                title: '인도네시아 음식',
                description: '인기 있는 인도네시아 음식',
                words: [
                    { indonesian: 'Nasi goreng', pronunciation: '[나시 고렁]', korean: '볶음밥', example: 'Nasi goreng sangat enak. (볶음밥이 정말 맛있습니다.)' },
                    { indonesian: 'Rendang', pronunciation: '[렌당]', korean: '렌당', example: 'Rendang adalah makanan khas Padang. (렌당은 빠당의 특별한 음식입니다.)' },
                    { indonesian: 'Satay', pronunciation: '[사떼이]', korean: '사테', example: 'Saya suka satay ayam. (저는 닭고기 사테를 좋아합니다.)' }
                ]
            }
        ]
    }
};

// 사용자 데이터 관리
let users = JSON.parse(localStorage.getItem('users') || '[]');
let currentUser = null;
let currentSession = JSON.parse(localStorage.getItem('currentSession') || 'null');

// 앱 상태
let currentCategory = null;
let currentLesson = null;
let currentCardIndex = 0;

// 세션 확인 및 자동 로그인
function checkSession() {
    if (currentSession && currentSession.expires > Date.now()) {
        // 세션이 유효하면 자동 로그인
        const user = users.find(u => u.username === currentSession.username);
        if (user) {
            loginUser(user);
            return true;
        }
    } else {
        // 세션이 만료되었거나 없으면 삭제
        localStorage.removeItem('currentSession');
        currentSession = null;
    }
    return false;
}

// 사용자 로그인
function loginUser(user) {
    currentUser = user;
    updateUserDisplay();
    showScreen('home-screen');
}

// 사용자 데이터 가져오기
function getUserData() {
    if (!currentUser) return { xp: 0, completedLessons: [] };
    return {
        xp: currentUser.xp || 0,
        completedLessons: currentUser.completedLessons || []
    };
}

// 사용자 데이터 저장
function saveUserData() {
    if (!currentUser) return;
    const userIndex = users.findIndex(u => u.username === currentUser.username);
    if (userIndex >= 0) {
        users[userIndex] = currentUser;
    }
    localStorage.setItem('users', JSON.stringify(users));
}

// 회원가입
function signup(username, password) {
    // 사용자명 중복 확인
    if (users.find(u => u.username === username)) {
        return { success: false, error: '이미 사용 중인 사용자명입니다.' };
    }
    
    // 비밀번호 길이 확인
    if (password.length < 6) {
        return { success: false, error: '비밀번호는 최소 6자 이상이어야 합니다.' };
    }
    
    // 새 사용자 생성
    const newUser = {
        username: username,
        password: password, // 실제로는 해시화해야 하지만 여기서는 간단하게
        xp: 0,
        completedLessons: [],
        joinedDate: Date.now(),
        weeklyXP: 0,
        monthlyXP: 0,
        lastWeeklyReset: getWeekStart(),
        lastMonthlyReset: getMonthStart()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    return { success: true };
}

// 로그인
function login(username, password, rememberMe = false) {
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        return { success: false, error: '사용자명 또는 비밀번호가 올바르지 않습니다.' };
    }
    
    // 세션 생성
    const session = {
        username: username,
        expires: rememberMe ? Date.now() + (30 * 24 * 60 * 60 * 1000) : Date.now() + (24 * 60 * 60 * 1000) // 30일 또는 1일
    };
    
    localStorage.setItem('currentSession', JSON.stringify(session));
    currentSession = session;
    
    loginUser(user);
    return { success: true };
}

// 로그아웃
function logout() {
    currentUser = null;
    currentSession = null;
    localStorage.removeItem('currentSession');
    showScreen('auth-screen');
    document.getElementById('user-progress-section').style.display = 'none';
    document.getElementById('user-menu').style.display = 'none';
}

// 주간/월간 시작일 계산
function getWeekStart() {
    const now = new Date();
    const day = now.getDay();
    const diff = now.getDate() - day;
    return new Date(now.setDate(diff)).setHours(0, 0, 0, 0);
}

function getMonthStart() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1).getTime();
}

// XP 리셋 확인 및 업데이트
function checkAndResetXP() {
    if (!currentUser) return;
    
    const now = Date.now();
    const weekStart = getWeekStart();
    const monthStart = getMonthStart();
    
    if (currentUser.lastWeeklyReset < weekStart) {
        currentUser.weeklyXP = 0;
        currentUser.lastWeeklyReset = weekStart;
    }
    
    if (currentUser.lastMonthlyReset < monthStart) {
        currentUser.monthlyXP = 0;
        currentUser.lastMonthlyReset = monthStart;
    }
    
    saveUserData();
}

// 화면 전환
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// XP 업데이트
function updateXP(amount) {
    if (!currentUser) return;
    
    currentUser.xp = (currentUser.xp || 0) + amount;
    currentUser.weeklyXP = (currentUser.weeklyXP || 0) + amount;
    currentUser.monthlyXP = (currentUser.monthlyXP || 0) + amount;
    
    saveUserData();
    updateXPDisplay();
    updateLeaderboard();
}

function updateXPDisplay() {
    if (!currentUser) {
        document.getElementById('user-progress-section').style.display = 'none';
        return;
    }
    
    const userData = getUserData();
    document.getElementById('xp-text').textContent = `XP: ${userData.xp}`;
    const xpPercent = (userData.xp % 100);
    document.getElementById('xp-fill').style.width = `${xpPercent}%`;
    document.getElementById('user-progress-section').style.display = 'flex';
}

function updateUserDisplay() {
    if (!currentUser) return;
    
    document.getElementById('username-display').textContent = currentUser.username;
    document.getElementById('user-menu').style.display = 'flex';
    updateXPDisplay();
    checkAndResetXP();
}

// 카테고리 선택
function showLessons(category) {
    if (!currentUser) {
        showScreen('auth-screen');
        return;
    }
    
    currentCategory = category;
    const categoryData = lessonsData[category];
    document.getElementById('category-title').textContent = categoryData.title;
    
    const lessonsList = document.getElementById('lessons-list');
    lessonsList.innerHTML = '';
    
    const userData = getUserData();
    categoryData.lessons.forEach((lesson, index) => {
        const isCompleted = userData.completedLessons.includes(lesson.id);
        const lessonItem = document.createElement('div');
        lessonItem.className = `lesson-item ${isCompleted ? 'completed' : ''}`;
        lessonItem.innerHTML = `
            <div class="lesson-info">
                <h3>${lesson.title}</h3>
                <p>${lesson.words.length}개 단어/표현</p>
            </div>
            <div class="lesson-status">${isCompleted ? '✅' : '▶️'}</div>
        `;
        lessonItem.addEventListener('click', () => startLesson(lesson));
        lessonsList.appendChild(lessonItem);
    });
    
    showScreen('lessons-screen');
}

// 레슨 시작
function startLesson(lesson) {
    currentLesson = lesson;
    currentCardIndex = 0;
    showCard();
    updateLessonProgress();
    showScreen('learn-screen');
}

// 카드 표시
function showCard() {
    if (!currentLesson || currentCardIndex >= currentLesson.words.length) {
        showPractice();
        return;
    }
    
    const word = currentLesson.words[currentCardIndex];
    const card = document.getElementById('learning-card');
    const cardFront = card.querySelector('.card-front');
    const cardBack = card.querySelector('.card-back');
    
    // 카드 앞면
    document.getElementById('indonesian-text').textContent = word.indonesian;
    document.getElementById('pronunciation').textContent = word.pronunciation;
    document.getElementById('korean-text').textContent = word.korean;
    document.getElementById('example-sentence').innerHTML = `<strong>예문:</strong> ${word.example}`;
    
    // 카드 초기화
    cardFront.style.display = 'block';
    cardBack.style.display = 'none';
    
    // 발음 버튼
    document.getElementById('speak-btn').onclick = () => speakWord(word.indonesian);
    
    // 발음 연습 버튼 추가
    const cardContent = card.querySelector('.card-content');
    let practiceBtn = cardContent.querySelector('.pronunciation-practice-btn');
    if (!practiceBtn) {
        practiceBtn = document.createElement('button');
        practiceBtn.className = 'btn btn-secondary pronunciation-practice-btn';
        practiceBtn.textContent = '🎤 발음 연습';
        practiceBtn.style.marginTop = '15px';
        practiceBtn.style.width = '100%';
        practiceBtn.onclick = () => startPronunciationCheck(word);
        cardContent.appendChild(practiceBtn);
    }
    
    // 카드 뒤집기
    document.getElementById('flip-btn').onclick = () => {
        if (cardFront.style.display !== 'none') {
            cardFront.style.display = 'none';
            cardBack.style.display = 'block';
        } else {
            cardFront.style.display = 'block';
            cardBack.style.display = 'none';
        }
    };
    
    // 연습 섹션 숨기기
    document.getElementById('practice-section').style.display = 'none';
    document.getElementById('pronunciation-section').style.display = 'none';
    
    // 버튼 업데이트
    document.getElementById('prev-card-btn').style.display = currentCardIndex > 0 ? 'block' : 'none';
    document.getElementById('next-card-btn').style.display = 'block';
    document.getElementById('complete-lesson-btn').style.display = 'none';
}

// 발음 듣기
function speakWord(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'id-ID'; // 인도네시아어
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    } else {
        alert('이 브라우저는 음성 합성을 지원하지 않습니다.');
    }
}

// 발음 검사 관련 변수
let recognition = null;
let isRecording = false;
let currentPronunciationWord = null;

// Speech Recognition 초기화
function initSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        return null;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'id-ID'; // 인도네시아어
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        checkPronunciation(transcript);
    };
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        document.getElementById('pronunciation-feedback').innerHTML = 
            '<div class="pronunciation-feedback needs-improvement show">음성 인식 오류가 발생했습니다. 다시 시도해주세요.</div>';
        isRecording = false;
        updateRecordButton();
    };
    
    recognition.onend = () => {
        isRecording = false;
        updateRecordButton();
    };
    
    return recognition;
}

// 발음 검사 시작
function startPronunciationCheck(word) {
    if (!currentUser) {
        showScreen('auth-screen');
        return;
    }
    
    currentPronunciationWord = word;
    document.getElementById('pronunciation-text').textContent = word.indonesian;
    document.getElementById('pronunciation-section').style.display = 'block';
    document.getElementById('learning-card').style.display = 'none';
    document.getElementById('practice-section').style.display = 'none';
    document.getElementById('pronunciation-feedback').innerHTML = '';
    
    // Speech Recognition 초기화
    if (!recognition) {
        recognition = initSpeechRecognition();
        if (!recognition) {
            document.getElementById('pronunciation-feedback').innerHTML = 
                '<div class="pronunciation-feedback needs-improvement show">이 브라우저는 음성 인식을 지원하지 않습니다. Chrome 브라우저를 사용해주세요.</div>';
            return;
        }
    }
}

// 발음 녹음 시작/중지
function toggleRecording() {
    if (!recognition) {
        recognition = initSpeechRecognition();
        if (!recognition) {
            alert('이 브라우저는 음성 인식을 지원하지 않습니다. Chrome 브라우저를 사용해주세요.');
            return;
        }
    }
    
    if (isRecording) {
        recognition.stop();
        isRecording = false;
    } else {
        try {
            recognition.start();
            isRecording = true;
            document.getElementById('pronunciation-feedback').innerHTML = 
                '<div class="pronunciation-feedback show">🎤 말씀해주세요...</div>';
        } catch (error) {
            console.error('Recognition start error:', error);
        }
    }
    updateRecordButton();
}

// 녹음 버튼 업데이트
function updateRecordButton() {
    const recordBtn = document.getElementById('record-btn');
    if (isRecording) {
        recordBtn.classList.add('recording');
        recordBtn.textContent = '⏹️ 중지';
    } else {
        recordBtn.classList.remove('recording');
        recordBtn.textContent = '🎤 말하기';
    }
}

// 발음 정확도 검사
function checkPronunciation(userSpeech) {
    if (!currentPronunciationWord) return;
    
    const correctText = currentPronunciationWord.indonesian.toLowerCase().trim();
    const userText = userSpeech.toLowerCase().trim();
    
    // 정확도 계산 (Levenshtein 거리 기반)
    const accuracy = calculateSimilarity(correctText, userText);
    
    const feedbackDiv = document.getElementById('pronunciation-feedback');
    feedbackDiv.className = 'pronunciation-feedback show';
    
    if (accuracy >= 0.8) {
        // 높은 정확도
        feedbackDiv.className += ' good';
        feedbackDiv.innerHTML = `
            <div style="color: #2e7d32; font-weight: 600;">
                ✅ 훌륭합니다! 발음이 정확합니다!<br>
                <small>인식된 텍스트: "${userSpeech}"</small><br>
                <small>정확도: ${Math.round(accuracy * 100)}%</small>
            </div>
        `;
        updateXP(15);
    } else if (accuracy >= 0.5) {
        // 중간 정확도
        feedbackDiv.className += ' needs-improvement';
        feedbackDiv.innerHTML = `
            <div style="color: #f57c00; font-weight: 600;">
                ⚠️ 좋습니다! 조금 더 연습이 필요해요.<br>
                <small>인식된 텍스트: "${userSpeech}"</small><br>
                <small>정답: "${currentPronunciationWord.indonesian}"</small><br>
                <small>정확도: ${Math.round(accuracy * 100)}%</small>
            </div>
        `;
        updateXP(5);
    } else {
        // 낮은 정확도
        feedbackDiv.className += ' needs-improvement';
        feedbackDiv.innerHTML = `
            <div style="color: #c62828; font-weight: 600;">
                ❌ 다시 시도해보세요.<br>
                <small>인식된 텍스트: "${userSpeech}"</small><br>
                <small>정답: "${currentPronunciationWord.indonesian}"</small><br>
                <small>정확도: ${Math.round(accuracy * 100)}%</small><br>
                <button class="btn btn-secondary" onclick="speakWord('${currentPronunciationWord.indonesian}')" style="margin-top: 10px;">
                    🔊 다시 듣기
                </button>
            </div>
        `;
    }
}

// 문자열 유사도 계산 (Levenshtein 거리 기반)
function calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const distance = levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
}

// Levenshtein 거리 계산
function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

// 연습 문제 표시
function showPractice() {
    document.getElementById('learning-card').style.display = 'none';
    document.getElementById('practice-section').style.display = 'block';
    
    // 랜덤 단어 선택
    const randomWord = currentLesson.words[Math.floor(Math.random() * currentLesson.words.length)];
    const wrongWords = currentLesson.words
        .filter(w => w.indonesian !== randomWord.indonesian)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);
    
    const options = [randomWord, ...wrongWords].sort(() => Math.random() - 0.5);
    
    document.getElementById('practice-question').textContent = `"${randomWord.korean}"을 인도네시아어로 말하면?`;
    
    const optionsDiv = document.getElementById('practice-options');
    optionsDiv.innerHTML = '';
    
    options.forEach(option => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'practice-option';
        optionBtn.textContent = option.indonesian;
        optionBtn.onclick = () => checkAnswer(optionBtn, option, randomWord);
        optionsDiv.appendChild(optionBtn);
    });
    
    document.getElementById('practice-feedback').className = 'practice-feedback';
    document.getElementById('prev-card-btn').style.display = 'none';
    document.getElementById('next-card-btn').style.display = 'none';
    document.getElementById('complete-lesson-btn').style.display = 'block';
}

// 정답 확인
function checkAnswer(selectedBtn, selectedOption, correctWord) {
    const options = document.querySelectorAll('.practice-option');
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    if (selectedOption.indonesian === correctWord.indonesian) {
        selectedBtn.classList.add('correct');
        document.getElementById('practice-feedback').textContent = '정답입니다! 🎉';
        document.getElementById('practice-feedback').className = 'practice-feedback correct';
        updateXP(10);
    } else {
        selectedBtn.classList.add('incorrect');
        options.forEach(opt => {
            if (opt.textContent === correctWord.indonesian) {
                opt.classList.add('correct');
            }
        });
        document.getElementById('practice-feedback').textContent = `틀렸습니다. 정답은 "${correctWord.indonesian}"입니다.`;
        document.getElementById('practice-feedback').className = 'practice-feedback incorrect';
    }
}

// 레슨 완료
function completeLesson() {
    if (!currentUser) return;
    
    const userData = getUserData();
    if (!userData.completedLessons.includes(currentLesson.id)) {
        currentUser.completedLessons = currentUser.completedLessons || [];
        currentUser.completedLessons.push(currentLesson.id);
        saveUserData();
        updateXP(50);
    }
    
    document.getElementById('xp-earned').textContent = '+50';
    document.getElementById('accuracy').textContent = '100%';
    showScreen('completion-screen');
}

// 레슨 진행률 업데이트
function updateLessonProgress() {
    const total = currentLesson.words.length;
    const progress = ((currentCardIndex + 1) / total) * 100;
    document.getElementById('lesson-progress-fill').style.width = `${progress}%`;
    document.getElementById('lesson-progress-text').textContent = `${currentCardIndex + 1} / ${total}`;
}

// 리더보드 표시
function showLeaderboard(type = 'all') {
    if (!currentUser) {
        showScreen('auth-screen');
        return;
    }
    
    let sortedUsers = [...users];
    
    if (type === 'weekly') {
        sortedUsers.sort((a, b) => (b.weeklyXP || 0) - (a.weeklyXP || 0));
    } else if (type === 'monthly') {
        sortedUsers.sort((a, b) => (b.monthlyXP || 0) - (a.monthlyXP || 0));
    } else {
        sortedUsers.sort((a, b) => (b.xp || 0) - (a.xp || 0));
    }
    
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    
    sortedUsers.forEach((user, index) => {
        const isCurrentUser = user.username === currentUser.username;
        const xp = type === 'weekly' ? (user.weeklyXP || 0) : 
                   type === 'monthly' ? (user.monthlyXP || 0) : 
                   (user.xp || 0);
        
        let rankClass = '';
        let rankDisplay = (index + 1).toString();
        if (index === 0) {
            rankClass = 'gold';
            rankDisplay = '🥇';
        } else if (index === 1) {
            rankClass = 'silver';
            rankDisplay = '🥈';
        } else if (index === 2) {
            rankClass = 'bronze';
            rankDisplay = '🥉';
        }
        
        const item = document.createElement('div');
        item.className = `leaderboard-item ${isCurrentUser ? 'current-user' : ''}`;
        item.innerHTML = `
            <div class="rank ${rankClass}">${rankDisplay}</div>
            <div class="leaderboard-user-info">
                <div class="leaderboard-username">${user.username} ${isCurrentUser ? '(나)' : ''}</div>
                <div class="leaderboard-stats">완료 레슨: ${(user.completedLessons || []).length}개</div>
            </div>
            <div class="leaderboard-xp">${xp.toLocaleString()} XP</div>
        `;
        leaderboardList.appendChild(item);
    });
    
    showScreen('leaderboard-screen');
}

// 리더보드 업데이트 (사용자 데이터 변경 시)
function updateLeaderboard() {
    // 리더보드 화면이 활성화되어 있으면 업데이트
    const leaderboardScreen = document.getElementById('leaderboard-screen');
    if (leaderboardScreen.classList.contains('active')) {
        const activeTab = document.querySelector('.leaderboard-tab.active');
        const type = activeTab ? activeTab.dataset.board : 'all';
        showLeaderboard(type);
    }
}

// 이벤트 리스너
// 인증 탭 전환
document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        
        tab.classList.add('active');
        const formId = tab.dataset.tab === 'login' ? 'login-form' : 'signup-form';
        document.getElementById(formId).classList.add('active');
        
        // 에러 메시지 초기화
        document.getElementById('login-error').classList.remove('show');
        document.getElementById('signup-error').classList.remove('show');
    });
});

// 회원가입
document.getElementById('signup-btn').addEventListener('click', () => {
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value;
    const passwordConfirm = document.getElementById('signup-password-confirm').value;
    const errorDiv = document.getElementById('signup-error');
    
    if (!username || !password || !passwordConfirm) {
        errorDiv.textContent = '모든 필드를 입력해주세요.';
        errorDiv.classList.add('show');
        return;
    }
    
    if (password !== passwordConfirm) {
        errorDiv.textContent = '비밀번호가 일치하지 않습니다.';
        errorDiv.classList.add('show');
        return;
    }
    
    const result = signup(username, password);
    if (result.success) {
        // 회원가입 성공 시 자동 로그인
        login(username, password, true);
    } else {
        errorDiv.textContent = result.error;
        errorDiv.classList.add('show');
    }
});

// 로그인
document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    const errorDiv = document.getElementById('login-error');
    
    if (!username || !password) {
        errorDiv.textContent = '사용자명과 비밀번호를 입력해주세요.';
        errorDiv.classList.add('show');
        return;
    }
    
    const result = login(username, password, rememberMe);
    if (!result.success) {
        errorDiv.textContent = result.error;
        errorDiv.classList.add('show');
    }
});

// 로그아웃
document.getElementById('logout-btn').addEventListener('click', () => {
    logout();
});

// 리더보드
document.getElementById('leaderboard-btn').addEventListener('click', () => {
    showLeaderboard('all');
});

document.getElementById('back-from-leaderboard').addEventListener('click', () => {
    showScreen('home-screen');
});

// 리더보드 탭 전환
document.querySelectorAll('.leaderboard-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.leaderboard-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        showLeaderboard(tab.dataset.board);
    });
});

document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        showLessons(category);
    });
});

document.getElementById('back-to-home').addEventListener('click', () => {
    showScreen('home-screen');
});

document.getElementById('back-to-lessons').addEventListener('click', () => {
    if (currentCategory) {
        showLessons(currentCategory);
    } else {
        showScreen('home-screen');
    }
});

document.getElementById('next-card-btn').addEventListener('click', () => {
    currentCardIndex++;
    if (currentCardIndex < currentLesson.words.length) {
        showCard();
        updateLessonProgress();
    } else {
        showPractice();
    }
});

document.getElementById('prev-card-btn').addEventListener('click', () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        showCard();
        updateLessonProgress();
    }
});

document.getElementById('complete-lesson-btn').addEventListener('click', () => {
    completeLesson();
});

document.getElementById('continue-btn').addEventListener('click', () => {
    if (currentCategory) {
        showLessons(currentCategory);
    } else {
        showScreen('home-screen');
    }
});

document.getElementById('review-btn').addEventListener('click', () => {
    currentCardIndex = 0;
    showCard();
    updateLessonProgress();
    showScreen('learn-screen');
});

// Free Talk 관련 변수
let currentTopic = null;
let conversationHistory = [];
let conversationStartTime = null;

// Free Talk 주제별 대화 시나리오
const conversationScenarios = {
    introduction: {
        name: '자기소개',
        initialMessage: 'Halo! Senang bertemu Anda. Boleh perkenalkan diri Anda? (안녕하세요! 만나서 반갑습니다. 자신을 소개해주실 수 있나요?)',
        responses: {
            'Nama saya': 'Bagus! Nama Anda bagus. Berapa umur Anda? (좋습니다! 좋은 이름이네요. 몇 살이신가요?)',
            'Saya berusia': 'Wah, masih muda! Apa pekerjaan Anda? (와, 아직 젊으시네요! 직업이 무엇인가요?)',
            'Saya bekerja': 'Menarik! Di mana Anda tinggal? (흥미롭네요! 어디에 사시나요?)',
            'Saya tinggal': 'Terima kasih sudah memperkenalkan diri! Senang berbicara dengan Anda. (소개해주셔서 감사합니다! 대화할 수 있어서 기쁩니다.)'
        },
        hints: [
            'Nama saya [이름] (제 이름은...)',
            'Saya berusia [나이] tahun (저는 ...살입니다)',
            'Saya bekerja sebagai [직업] (저는 ...로 일합니다)',
            'Saya tinggal di [장소] (저는 ...에 삽니다)'
        ]
    },
    hobby: {
        name: '취미',
        initialMessage: 'Apa hobi Anda? Saya suka mendengarkan musik. (취미가 무엇인가요? 저는 음악 듣는 것을 좋아합니다.)',
        responses: {
            'Saya suka': 'Wah, hobi yang bagus! Kapan Anda biasanya melakukan hobi itu? (와, 좋은 취미네요! 보통 언제 그 취미를 하시나요?)',
            'Saya biasanya': 'Menarik! Sudah berapa lama Anda memiliki hobi itu? (흥미롭네요! 그 취미를 얼마나 오래 하셨나요?)',
            'Sudah': 'Bagus sekali! Apakah ada hobi lain yang Anda sukai? (정말 좋네요! 다른 좋아하는 취미가 있나요?)'
        },
        hints: [
            'Saya suka [취미] (저는 ...을 좋아합니다)',
            'Saya biasanya [시간] (저는 보통 ...)',
            'Sudah [기간] (이미 ...)'
        ]
    },
    food: {
        name: '음식',
        initialMessage: 'Apa makanan favorit Anda? Saya suka nasi goreng. (좋아하는 음식이 무엇인가요? 저는 볶음밥을 좋아합니다.)',
        responses: {
            'Saya suka': 'Enak sekali! Apakah Anda bisa memasak makanan itu? (정말 맛있겠네요! 그 음식을 요리할 수 있나요?)',
            'Saya bisa': 'Wah, hebat! Apa makanan Indonesia yang pernah Anda coba? (와, 대단하네요! 인도네시아 음식 중에 먹어본 것이 있나요?)',
            'Saya pernah': 'Bagus! Apakah Anda suka makanan pedas? (좋아요! 매운 음식을 좋아하시나요?)'
        },
        hints: [
            'Saya suka [음식] (저는 ...을 좋아합니다)',
            'Saya bisa memasak [음식] (저는 ...을 요리할 수 있습니다)',
            'Saya pernah mencoba [음식] (저는 ...을 먹어본 적이 있습니다)'
        ]
    },
    travel: {
        name: '여행',
        initialMessage: 'Apakah Anda suka bepergian? Tempat mana yang ingin Anda kunjungi? (여행을 좋아하시나요? 어디를 가고 싶으신가요?)',
        responses: {
            'Saya ingin': 'Wah, tempat yang bagus! Mengapa Anda ingin pergi ke sana? (와, 좋은 곳이네요! 왜 그곳에 가고 싶으신가요?)',
            'Karena': 'Menarik! Apakah Anda pernah ke Indonesia? (흥미롭네요! 인도네시아에 가본 적이 있나요?)',
            'Saya pernah': 'Bagus! Tempat mana di Indonesia yang paling Anda sukai? (좋아요! 인도네시아에서 가장 좋아하는 곳이 어디인가요?)'
        },
        hints: [
            'Saya ingin pergi ke [장소] (저는 ...에 가고 싶습니다)',
            'Karena [이유] (왜냐하면 ...)',
            'Saya pernah ke [장소] (저는 ...에 가본 적이 있습니다)'
        ]
    },
    daily: {
        name: '일상생활',
        initialMessage: 'Bagaimana hari Anda? Apa yang biasanya Anda lakukan di pagi hari? (오늘 하루는 어떠셨나요? 보통 아침에 무엇을 하시나요?)',
        responses: {
            'Saya biasanya': 'Menarik! Kapan Anda bangun pagi? (흥미롭네요! 언제 일어나시나요?)',
            'Saya bangun': 'Bagus! Apa yang Anda lakukan setelah bangun? (좋아요! 일어난 후 무엇을 하시나요?)',
            'Saya': 'Terima kasih sudah berbagi! Hari Anda terdengar sibuk. (공유해주셔서 감사합니다! 바쁜 하루이시네요.)'
        },
        hints: [
            'Saya biasanya [활동] (저는 보통 ...)',
            'Saya bangun [시간] (저는 ...에 일어납니다)',
            'Saya [활동] (저는 ...)'
        ]
    },
    work: {
        name: '직업',
        initialMessage: 'Apa pekerjaan Anda? Saya penasaran dengan pekerjaan Anda. (직업이 무엇인가요? 직업이 궁금합니다.)',
        responses: {
            'Saya bekerja': 'Menarik! Sudah berapa lama Anda bekerja di sana? (흥미롭네요! 거기서 얼마나 오래 일하셨나요?)',
            'Sudah': 'Bagus! Apakah Anda suka pekerjaan Anda? (좋아요! 직업이 마음에 드시나요?)',
            'Ya saya suka': 'Bagus sekali! Apa yang paling Anda sukai dari pekerjaan Anda? (정말 좋네요! 직업에서 가장 좋아하는 것이 무엇인가요?)'
        },
        hints: [
            'Saya bekerja sebagai [직업] (저는 ...로 일합니다)',
            'Sudah [기간] (이미 ...)',
            'Ya, saya suka (네, 좋아합니다)'
        ]
    }
};

// Free Talk 시작
function startFreeTalk(topic) {
    if (!currentUser) {
        showScreen('auth-screen');
        return;
    }
    
    currentTopic = topic;
    conversationHistory = [];
    conversationStartTime = Date.now();
    
    const scenario = conversationScenarios[topic];
    document.getElementById('current-topic-name').textContent = scenario.name;
    document.getElementById('topic-selection').style.display = 'none';
    document.getElementById('conversation-view').style.display = 'flex';
    
    // 초기 AI 메시지
    addAIMessage(scenario.initialMessage);
    updateSuggestedResponses(scenario);
    
    showScreen('free-talk-screen');
}

// AI 메시지 추가
function addAIMessage(text) {
    const messagesDiv = document.getElementById('conversation-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai';
    
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.textContent = text;
    
    messageDiv.appendChild(bubble);
    messagesDiv.appendChild(messageDiv);
    
    conversationHistory.push({ role: 'ai', text: text, time: Date.now() });
    
    // 스크롤을 맨 아래로
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// 사용자 메시지 추가
function addUserMessage(text) {
    const messagesDiv = document.getElementById('conversation-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user';
    
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.textContent = text;
    
    messageDiv.appendChild(bubble);
    messagesDiv.appendChild(messageDiv);
    
    conversationHistory.push({ role: 'user', text: text, time: Date.now() });
    
    // 스크롤을 맨 아래로
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    // XP 획득
    updateXP(5);
}

// AI 응답 생성 (간단한 패턴 매칭)
function generateAIResponse(userMessage, scenario) {
    const message = userMessage.toLowerCase();
    
    // 패턴 매칭으로 응답 생성
    for (const [pattern, response] of Object.entries(scenario.responses)) {
        if (message.includes(pattern.toLowerCase())) {
            return response;
        }
    }
    
    // 기본 응답
    const defaultResponses = [
        'Menarik! Bisa ceritakan lebih banyak? (흥미롭네요! 더 자세히 말해주실 수 있나요?)',
        'Saya mengerti. Apa lagi yang ingin Anda ceritakan? (이해했습니다. 더 이야기하고 싶은 것이 있나요?)',
        'Bagus! Teruskan cerita Anda. (좋아요! 이야기를 계속해주세요.)',
        'Wah, menarik sekali! (와, 정말 흥미롭네요!)'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// 제안 응답 업데이트
function updateSuggestedResponses(scenario) {
    const suggestionsDiv = document.getElementById('suggested-responses');
    suggestionsDiv.innerHTML = '';
    
    scenario.hints.forEach(hint => {
        const suggestion = document.createElement('div');
        suggestion.className = 'suggested-response';
        suggestion.textContent = hint;
        suggestion.onclick = () => {
            document.getElementById('user-message-input').value = hint.split(' (')[0];
            document.getElementById('user-message-input').focus();
        };
        suggestionsDiv.appendChild(suggestion);
    });
}

// 메시지 전송
function sendMessage() {
    const input = document.getElementById('user-message-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    // 사용자 메시지 추가
    addUserMessage(message);
    input.value = '';
    
    // 힌트 숨기기
    document.getElementById('conversation-hint').classList.remove('show');
    
    // AI 응답 생성 (약간의 지연으로 자연스럽게)
    setTimeout(() => {
        const scenario = conversationScenarios[currentTopic];
        const aiResponse = generateAIResponse(message, scenario);
        addAIMessage(aiResponse);
        
        // 제안 응답 업데이트
        updateSuggestedResponses(scenario);
    }, 1000);
}

// 대화 종료
function endConversation() {
    if (confirm('대화를 종료하시겠습니까?')) {
        const duration = Math.floor((Date.now() - conversationStartTime) / 1000 / 60); // 분
        const messageCount = conversationHistory.filter(m => m.role === 'user').length;
        
        // 대화 완료 보너스 XP
        if (messageCount >= 3) {
            updateXP(20);
        }
        
        // 초기화
        currentTopic = null;
        conversationHistory = [];
        document.getElementById('conversation-messages').innerHTML = '';
        document.getElementById('topic-selection').style.display = 'block';
        document.getElementById('conversation-view').style.display = 'none';
        
        showScreen('home-screen');
    }
}

// Free Talk 이벤트 리스너
document.getElementById('free-talk-btn').addEventListener('click', () => {
    if (!currentUser) {
        showScreen('auth-screen');
        return;
    }
    showScreen('free-talk-screen');
});

document.getElementById('back-from-freetalk').addEventListener('click', () => {
    if (currentTopic) {
        endConversation();
    } else {
        showScreen('home-screen');
    }
});

document.querySelectorAll('.topic-card').forEach(card => {
    card.addEventListener('click', () => {
        const topic = card.dataset.topic;
        startFreeTalk(topic);
    });
});

document.getElementById('send-message-btn').addEventListener('click', sendMessage);

document.getElementById('user-message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('end-conversation-btn').addEventListener('click', endConversation);

// 발음 연습 이벤트 리스너
document.getElementById('record-btn').addEventListener('click', toggleRecording);

// 초기화
if (checkSession()) {
    // 세션이 있으면 자동 로그인됨
} else {
    showScreen('auth-screen');
}
