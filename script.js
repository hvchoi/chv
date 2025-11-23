// 퀴즈 질문 정의
const quizQuestions = [
    {
        question: "언제 식사하시나요?",
        options: ["점심 🍱", "저녁 🍽️", "술자리 🍻", "상관없음"]
    },
    {
        question: "오늘 어떤 종류의 음식을 먹고 싶으신가요?",
        options: ["한식", "중식", "일식", "양식", "분식", "기타"]
    },
    {
        question: "예산은 어느 정도인가요?",
        options: ["5,000원 이하", "5,000-10,000원", "10,000-15,000원", "15,000-30,000원", "30,000원 이상"]
    },
    {
        question: "식사 시간은 얼마나 걸려도 되나요?",
        options: ["15분 이하 (빠른 식사)", "30분 정도", "1시간 정도", "여유롭게"]
    },
    {
        question: "음식의 매운 정도는?",
        options: ["안 매운 것", "약간 매운 것", "보통", "매운 것", "아주 매운 것"]
    },
    {
        question: "식사 분위기는?",
        options: ["조용한 곳", "적당히 시끄러운 곳", "활기찬 곳", "상관없음"]
    },
    {
        question: "술을 마시고 싶으신가요? (저녁/술자리 선택 시)",
        options: ["맥주 🍺", "소주 🍶", "와인 🍷", "칵테일 🍸", "안 마실래요", "상관없음"]
    }
];

// 직원 데이터 저장소
let employees = JSON.parse(localStorage.getItem('lunchEmployees') || '[]');
let currentEmployee = null;
let currentQuestionIndex = 0;
let answers = {};

// 삭제 비밀번호 (기본값, 필요시 변경 가능)
const DELETE_PASSWORD = 'princess';

// 화면 전환 함수
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// 퀴즈 초기화
function initQuiz() {
    currentQuestionIndex = 0;
    answers = {};
    document.getElementById('employee-name').value = '';
    document.getElementById('name-input-section').style.display = 'block';
    document.getElementById('quiz-questions').innerHTML = '';
    updateProgress();
    showScreen('quiz-screen');
}

// 진행률 업데이트
function updateProgress() {
    // 술 질문이 표시되는지 확인
    const mealTimeAnswer = answers.q0;
    const showAlcoholQuestion = mealTimeAnswer && (mealTimeAnswer.includes('저녁') || mealTimeAnswer.includes('술자리'));
    const total = showAlcoholQuestion ? quizQuestions.length + 1 : quizQuestions.length; // 이름 입력 포함
    const current = currentQuestionIndex + 1;
    const progress = (current / total) * 100;
    document.getElementById('progress').style.width = progress + '%';
    document.getElementById('current-q').textContent = current;
    document.getElementById('total-q').textContent = total;
}

// 현재 질문 표시
function showCurrentQuestion() {
    const nameSection = document.getElementById('name-input-section');
    const questionsDiv = document.getElementById('quiz-questions');
    
    if (currentQuestionIndex === 0) {
        nameSection.style.display = 'block';
        questionsDiv.innerHTML = '';
    } else {
        nameSection.style.display = 'none';
        
        // 술 질문은 저녁이나 술자리를 선택했을 때만 표시
        let questionIndex = currentQuestionIndex - 1;
        
        // 술 질문 (q6)인 경우 조건 확인
        if (questionIndex === 6) {
            const mealTimeAnswer = answers.q0;
            if (!mealTimeAnswer || (!mealTimeAnswer.includes('저녁') && !mealTimeAnswer.includes('술자리'))) {
                // 술 질문을 건너뛰고 제출 가능 상태로
                // 질문을 표시하지 않고 제출 버튼만 표시
                questionsDiv.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">모든 질문에 답변하셨습니다. 제출 버튼을 클릭해주세요.</p>';
                updateProgress();
                updateNavigationButtons();
                return;
            }
        }
        
        const question = quizQuestions[questionIndex];
        
        questionsDiv.innerHTML = `
            <label>${question.question}</label>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" data-value="${option}">
                        ${option}
                    </div>
                `).join('')}
            </div>
        `;
        
        // 선택 이벤트 리스너
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                answers[`q${questionIndex}`] = this.dataset.value;
            });
        });
        
        // 이전에 선택한 답이 있으면 표시
        if (answers[`q${questionIndex}`]) {
            document.querySelectorAll('.quiz-option').forEach(option => {
                if (option.dataset.value === answers[`q${questionIndex}`]) {
                    option.classList.add('selected');
                }
            });
        }
    }
    
    updateProgress();
    updateNavigationButtons();
}

// 네비게이션 버튼 업데이트
function updateNavigationButtons() {
    const mealTimeAnswer = answers.q0;
    const showAlcoholQuestion = mealTimeAnswer && (mealTimeAnswer.includes('저녁') || mealTimeAnswer.includes('술자리'));
    const total = showAlcoholQuestion ? quizQuestions.length + 1 : quizQuestions.length;
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    
    prevBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    
    if (currentQuestionIndex === total - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

// 다음 질문
function nextQuestion() {
    if (currentQuestionIndex === 0) {
        const name = document.getElementById('employee-name').value.trim();
        if (!name) {
            alert('이름을 입력해주세요.');
            return;
        }
        currentEmployee = name;
    }
    
    if (currentQuestionIndex > 0 && !answers[`q${currentQuestionIndex - 1}`]) {
        alert('답변을 선택해주세요.');
        return;
    }
    
    currentQuestionIndex++;
    showCurrentQuestion();
}

// 이전 질문
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showCurrentQuestion();
    }
}

// 퀴즈 제출
function submitQuiz() {
    // 술 질문이 필요한지 확인
    const mealTimeAnswer = answers.q0;
    const showAlcoholQuestion = mealTimeAnswer && (mealTimeAnswer.includes('저녁') || mealTimeAnswer.includes('술자리'));
    
    // 모든 필수 질문에 답변했는지 확인
    const requiredQuestions = showAlcoholQuestion ? [0, 1, 2, 3, 4, 5, 6] : [0, 1, 2, 3, 4, 5];
    const missingAnswers = requiredQuestions.filter(q => !answers[`q${q}`]);
    
    if (missingAnswers.length > 0) {
        alert('모든 질문에 답변해주세요.');
        return;
    }
    
    // 이름 확인
    if (!currentEmployee || currentEmployee.trim() === '') {
        alert('이름을 입력해주세요.');
        return;
    }
    
    // 직원 데이터 저장
    const employeeData = {
        name: currentEmployee,
        answers: answers,
        timestamp: Date.now()
    };
    
    // 기존 직원이면 업데이트, 아니면 추가
    const existingIndex = employees.findIndex(emp => emp.name === currentEmployee);
    if (existingIndex >= 0) {
        employees[existingIndex] = employeeData;
    } else {
        employees.push(employeeData);
    }
    
    localStorage.setItem('lunchEmployees', JSON.stringify(employees));
    
    // 결과 화면 표시
    showResults();
}

// 호환성 점수 계산
function calculateCompatibility(emp1, emp2) {
    let score = 0;
    const totalQuestions = quizQuestions.length;
    
    for (let i = 0; i < totalQuestions; i++) {
        const key = `q${i}`;
        if (emp1.answers[key] === emp2.answers[key]) {
            score += 1;
        }
    }
    
    return (score / totalQuestions) * 100;
}

// 모든 직원 간 호환성 계산
function calculateAllCompatibility() {
    const compatibility = {};
    
    for (let i = 0; i < employees.length; i++) {
        for (let j = i + 1; j < employees.length; j++) {
            const emp1 = employees[i];
            const emp2 = employees[j];
            const score = calculateCompatibility(emp1, emp2);
            
            if (!compatibility[emp1.name]) {
                compatibility[emp1.name] = {};
            }
            if (!compatibility[emp2.name]) {
                compatibility[emp2.name] = {};
            }
            
            compatibility[emp1.name][emp2.name] = score;
            compatibility[emp2.name][emp1.name] = score;
        }
    }
    
    return compatibility;
}

// 그룹 추천 생성
function generateGroups(compatibility) {
    if (employees.length < 2) {
        return [];
    }
    
    const groups = [];
    const used = new Set();
    
    // 높은 호환성을 가진 쌍을 찾아 그룹 생성
    const pairs = [];
    for (let i = 0; i < employees.length; i++) {
        for (let j = i + 1; j < employees.length; j++) {
            const emp1 = employees[i].name;
            const emp2 = employees[j].name;
            pairs.push({
                emp1, emp2,
                score: compatibility[emp1][emp2]
            });
        }
    }
    
    pairs.sort((a, b) => b.score - a.score);
    
    // 그룹 생성 (2-4명)
    for (const pair of pairs) {
        if (used.has(pair.emp1) || used.has(pair.emp2)) continue;
        
        const group = [pair.emp1, pair.emp2];
        used.add(pair.emp1);
        used.add(pair.emp2);
        
        // 추가 멤버 찾기
        for (const otherPair of pairs) {
            if (group.length >= 4) break;
            
            const candidates = [otherPair.emp1, otherPair.emp2];
            for (const candidate of candidates) {
                if (!used.has(candidate) && !group.includes(candidate)) {
                    const avgScore = group.reduce((sum, member) => {
                        return sum + (compatibility[member][candidate] || 0);
                    }, 0) / group.length;
                    
                    if (avgScore >= 60) {
                        group.push(candidate);
                        used.add(candidate);
                    }
                }
            }
        }
        
        if (group.length >= 2) {
            const groupScore = calculateGroupScore(group, compatibility);
            groups.push({ members: group, score: groupScore });
        }
    }
    
    // 남은 직원들 처리
    for (const emp of employees) {
        if (!used.has(emp.name)) {
            groups.push({ members: [emp.name], score: 100 });
        }
    }
    
    return groups.sort((a, b) => b.score - a.score);
}

// 그룹 점수 계산
function calculateGroupScore(group, compatibility) {
    if (group.length === 1) return 100;
    
    let totalScore = 0;
    let count = 0;
    
    for (let i = 0; i < group.length; i++) {
        for (let j = i + 1; j < group.length; j++) {
            totalScore += compatibility[group[i]][group[j]] || 0;
            count++;
        }
    }
    
    return count > 0 ? totalScore / count : 0;
}

// 결과 화면 표시
function showResults() {
    if (employees.length === 0) {
        alert('테스트를 먼저 완료해주세요.');
        return;
    }
    
    const compatibility = calculateAllCompatibility();
    const groups = generateGroups(compatibility);
    
    // 호환성 그래프 그리기
    drawCompatibilityGraph(compatibility);
    
    // 호환성 매트릭스 표시
    displayCompatibilityMatrix(compatibility);
    
    // 그룹 추천 표시
    displayGroups(groups);
    
    // 식당 추천 표시
    displayRestaurants(groups);
    
    showScreen('results-screen');
}

// 호환성 그래프 그리기
function drawCompatibilityGraph(compatibility) {
    const ctx = document.getElementById('compatibility-graph').getContext('2d');
    
    const labels = employees.map(emp => emp.name);
    const datasets = [];
    
    // 각 직원에 대한 데이터셋 생성
    employees.forEach((emp, index) => {
        const data = employees.map(otherEmp => {
            if (emp.name === otherEmp.name) return null;
            return compatibility[emp.name][otherEmp.name] || 0;
        });
        
        datasets.push({
            label: emp.name,
            data: data,
            borderColor: `hsl(${(index * 360) / employees.length}, 70%, 50%)`,
            backgroundColor: `hsla(${(index * 360) / employees.length}, 70%, 50%, 0.1)`,
            tension: 0.4
        });
    });
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: '직원 간 호환성 점수'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// 호환성 매트릭스 표시
function displayCompatibilityMatrix(compatibility) {
    const matrixDiv = document.getElementById('compatibility-matrix');
    
    let html = '<div class="matrix-row">';
    html += '<div class="matrix-cell matrix-header"></div>';
    employees.forEach(emp => {
        html += `<div class="matrix-cell matrix-header">${emp.name}</div>`;
    });
    html += '</div>';
    
    employees.forEach(emp1 => {
        html += '<div class="matrix-row">';
        html += `<div class="matrix-cell matrix-header">${emp1.name}</div>`;
        employees.forEach(emp2 => {
            if (emp1.name === emp2.name) {
                html += '<div class="matrix-cell matrix-score">-</div>';
            } else {
                const score = compatibility[emp1.name][emp2.name] || 0;
                let className = 'matrix-score';
                if (score >= 80) className += ' high';
                else if (score >= 60) className += ' medium';
                else className += ' low';
                
                html += `<div class="matrix-cell ${className}">${Math.round(score)}%</div>`;
            }
        });
        html += '</div>';
    });
    
    matrixDiv.innerHTML = html;
}

// 그룹 표시
function displayGroups(groups) {
    const groupsDiv = document.getElementById('group-recommendations');
    
    if (groups.length === 0) {
        groupsDiv.innerHTML = '<p>추천할 그룹이 없습니다.</p>';
        return;
    }
    
    let html = '';
    groups.forEach((group, index) => {
        html += `
            <div class="group-card">
                <h4>그룹 ${index + 1}</h4>
                <ul class="group-members">
                    ${group.members.map(member => `<li>${member}</li>`).join('')}
                </ul>
                <div class="group-score">호환성: ${Math.round(group.score)}%</div>
            </div>
        `;
    });
    
    groupsDiv.innerHTML = html;
}

// Leaflet 지도 관련 변수
let leafletMap = null;
let officeLocation = null;
let restaurantMarkers = [];

// 맑은소프트 위치 검색 (OpenStreetMap Nominatim API 사용 - 무료, API 키 불필요)
async function searchOfficeLocation() {
    try {
        // 정확한 주소로 검색
        const officeAddress = '서울 구로구 디지털로 288';
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(officeAddress)}&limit=1&countrycodes=kr`);
        const data = await response.json();
        
        if (data && data.length > 0) {
            return {
                address: officeAddress,
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon)
            };
        } else {
            // 검색 실패 시 구로구 디지털로 288의 대략적인 좌표 사용
            return {
                address: officeAddress,
                lat: 37.4850,
                lng: 126.8960
            };
        }
    } catch (error) {
        console.error('사무실 위치 검색 오류:', error);
        // 기본값으로 구로구 디지털로 288 좌표 반환
        return {
            address: '서울 구로구 디지털로 288',
            lat: 37.4850,
            lng: 126.8960
        };
    }
}

// 두 지점 간의 거리 계산 (Haversine 공식)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // 지구 반지름 (km)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // km
    
    return distance;
}

// 도보 거리 및 시간 계산
function calculateWalkingDistance(distanceKm) {
    const walkingSpeed = 4; // km/h (평균 도보 속도)
    const distanceM = distanceKm * 1000; // 미터로 변환
    const walkingTimeMinutes = Math.round((distanceKm / walkingSpeed) * 60);
    
    return {
        distance: distanceM,
        distanceKm: distanceKm,
        timeMinutes: walkingTimeMinutes,
        formatted: distanceM < 1000 ? `${Math.round(distanceM)}m` : `${distanceKm.toFixed(1)}km`,
        timeFormatted: walkingTimeMinutes < 60 ? `${walkingTimeMinutes}분` : `${Math.floor(walkingTimeMinutes / 60)}시간 ${walkingTimeMinutes % 60}분`
    };
}

// 근처 식당 검색
async function searchNearbyRestaurants(center, foodTypes, mealTime, alcoholPreference) {
    // 구로구 디지털로 288 주변 식당 데이터
    const officeLat = center.lat || 37.4850;
    const officeLng = center.lng || 126.8960;
    
    // 풍부한 식당 데이터 (구로구 디지털로 288 주변)
    const allRestaurants = [
        // 점심 식당
        { 
            name: '맛있는 한식당', 
            address: '서울 구로구 디지털로32길', 
            type: '한식', 
            lat: 37.4855, 
            lng: 126.8970, 
            priceRange: '10,000-15,000원',
            pricePerPerson: 12000,
            rating: 4.5,
            mealTime: ['점심'],
            alcohol: false,
            recommendation: '점심 특선 메뉴가 푸짐해요! 🍱',
            funFact: '직원 할인 10% 적용 가능',
            tags: ['혼밥 가능', '단체석', '주차 가능']
        },
        { 
            name: '일본라면', 
            address: '서울 구로구 디지털로30길', 
            type: '일식', 
            lat: 37.4845, 
            lng: 126.8955, 
            priceRange: '5,000-10,000원',
            pricePerPerson: 8000,
            rating: 4.7,
            mealTime: ['점심'],
            alcohol: false,
            recommendation: '빠르고 맛있는 라면! 🍜',
            funFact: '점심 시간대 대기 없음',
            tags: ['빠른 식사', '혼밥 최적']
        },
        { 
            name: '분식집', 
            address: '서울 구로구 디지털로34길', 
            type: '분식', 
            lat: 37.4860, 
            lng: 126.8965, 
            priceRange: '5,000원 이하',
            pricePerPerson: 5000,
            rating: 4.2,
            mealTime: ['점심'],
            alcohol: false,
            recommendation: '가성비 최고! 🍢',
            funFact: '떡볶이 + 순대 세트 인기',
            tags: ['저렴', '빠른 식사']
        },
        { 
            name: '돈까스 전문점', 
            address: '서울 구로구 디지털로28길', 
            type: '일식', 
            lat: 37.4840, 
            lng: 126.8950, 
            priceRange: '10,000-15,000원',
            pricePerPerson: 13000,
            rating: 4.6,
            mealTime: ['점심', '저녁'],
            alcohol: false,
            recommendation: '바삭한 돈까스가 일품! 🍤',
            funFact: '밥 무한 리필',
            tags: ['단체석', '주차 가능']
        },
        // 저녁 식당
        { 
            name: '삼겹살집', 
            address: '서울 구로구 디지털로26길', 
            type: '한식', 
            lat: 37.4835, 
            lng: 126.8945, 
            priceRange: '15,000-30,000원',
            pricePerPerson: 25000,
            rating: 4.5,
            mealTime: ['저녁'],
            alcohol: true,
            recommendation: '삼겹살과 소주 한잔! 🥩🍶',
            funFact: '직원들이 자주 가는 곳',
            tags: ['단체석', '술안주', '야외석']
        },
        { 
            name: '중화요리', 
            address: '서울 구로구 디지털로36길', 
            type: '중식', 
            lat: 37.4865, 
            lng: 126.8975, 
            priceRange: '15,000-30,000원',
            pricePerPerson: 22000,
            rating: 4.3,
            mealTime: ['저녁'],
            alcohol: true,
            recommendation: '짜장면과 탕수육의 조합! 🥢',
            funFact: '대표 메뉴: 짬뽕',
            tags: ['단체석', '술안주']
        },
        { 
            name: '이탈리안 레스토랑', 
            address: '서울 구로구 디지털로38길', 
            type: '양식', 
            lat: 37.4870, 
            lng: 126.8980, 
            priceRange: '30,000원 이상',
            pricePerPerson: 45000,
            rating: 4.4,
            mealTime: ['저녁'],
            alcohol: true,
            recommendation: '로맨틱한 분위기의 파스타와 와인! 🍝🍷',
            funFact: '데이트 코스로 인기',
            tags: ['분위기 좋음', '와인', '데이트']
        },
        // 술자리
        { 
            name: '맥주집', 
            address: '서울 구로구 디지털로24길', 
            type: '기타', 
            lat: 37.4830, 
            lng: 126.8940, 
            priceRange: '15,000-30,000원',
            pricePerPerson: 20000,
            rating: 4.8,
            mealTime: ['술자리'],
            alcohol: true,
            recommendation: '시원한 맥주와 치킨! 🍺🍗',
            funFact: '야근 후 단합 회식 장소',
            tags: ['맥주', '치킨', '단체석', '야외석']
        },
        { 
            name: '포장마차', 
            address: '서울 구로구 디지털로22길', 
            type: '한식', 
            lat: 37.4825, 
            lng: 126.8935, 
            priceRange: '10,000-15,000원',
            pricePerPerson: 12000,
            rating: 4.6,
            mealTime: ['술자리'],
            alcohol: true,
            recommendation: '분위기 있는 포장마차에서 소주 한잔! 🍶',
            funFact: '야외에서 즐기는 분위기',
            tags: ['소주', '분위기', '야외석']
        },
        { 
            name: '칵테일 바', 
            address: '서울 구로구 디지털로40길', 
            type: '기타', 
            lat: 37.4875, 
            lng: 126.8985, 
            priceRange: '30,000원 이상',
            pricePerPerson: 35000,
            rating: 4.7,
            mealTime: ['술자리'],
            alcohol: true,
            recommendation: '트렌디한 칵테일과 안주! 🍸',
            funFact: '인스타 감성 폭발',
            tags: ['칵테일', '분위기', '데이트']
        },
        { 
            name: '와인바', 
            address: '서울 구로구 디지털로42길', 
            type: '기타', 
            lat: 37.4880, 
            lng: 126.8990, 
            priceRange: '30,000원 이상',
            pricePerPerson: 40000,
            rating: 4.5,
            mealTime: ['술자리'],
            alcohol: true,
            recommendation: '고급스러운 와인과 치즈! 🍷🧀',
            funFact: '와인 전문가 추천',
            tags: ['와인', '고급', '데이트']
        }
    ];
    
    // 필터링: 음식 타입, 식사 시간대, 술 선호도
    let filtered = allRestaurants.filter(rest => {
        // 음식 타입 필터
        if (foodTypes.length > 0 && !foodTypes.includes(rest.type)) {
            return false;
        }
        
        // 식사 시간대 필터
        if (mealTime && !rest.mealTime.includes(mealTime)) {
            return false;
        }
        
        // 술 선호도 필터
        if (alcoholPreference) {
            if (alcoholPreference === '안 마실래요' && rest.alcohol) {
                return false;
            }
            if (alcoholPreference !== '안 마실래요' && alcoholPreference !== '상관없음' && !rest.alcohol) {
                return false;
            }
        }
        
        return true;
    });
    
    // 각 식당에 거리 정보 추가
    const restaurantsWithDistance = filtered.map(rest => {
        const distanceKm = calculateDistance(officeLat, officeLng, rest.lat, rest.lng);
        const walkingInfo = calculateWalkingDistance(distanceKm);
        return {
            ...rest,
            distanceKm: distanceKm,
            walkingDistance: walkingInfo
        };
    });
    
    // 거리순으로 정렬
    restaurantsWithDistance.sort((a, b) => a.distanceKm - b.distanceKm);
    
    return restaurantsWithDistance;
}

// 지도 초기화 및 표시 (API 키 불필요)
async function initializeMap() {
    const mapDiv = document.getElementById('restaurant-map');
    
    try {
        // 맑은소프트 위치 검색
        officeLocation = await searchOfficeLocation();
        
        // Leaflet 지도 생성 (API 키 불필요)
        leafletMap = L.map(mapDiv).setView([officeLocation.lat, officeLocation.lng], 15);
        
        // OpenStreetMap 타일 레이어 추가 (무료, API 키 불필요)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(leafletMap);
        
        // 사무실 마커 추가
        const officeIcon = L.divIcon({
            className: 'office-marker',
            html: '<div style="background: #667eea; color: white; padding: 8px 12px; border-radius: 20px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.3); white-space: nowrap;">🏢 맑은소프트</div>',
            iconSize: [120, 40],
            iconAnchor: [60, 20]
        });
        
        const officeMarker = L.marker([officeLocation.lat, officeLocation.lng], { icon: officeIcon })
            .addTo(leafletMap)
            .bindPopup(`<strong>맑은소프트</strong><br>${officeLocation.address}`);
        
        return true;
    } catch (error) {
        console.error('지도 초기화 오류:', error);
        mapDiv.innerHTML = `
            <div class="map-placeholder">
                <p>지도 로드에 실패했습니다.</p>
                <p class="map-info">에러: ${error.message}</p>
            </div>
        `;
        return false;
    }
}

// 식당 마커 표시
function displayRestaurantMarkers(restaurants) {
    // 기존 마커 제거
    restaurantMarkers.forEach(marker => leafletMap.removeLayer(marker));
    restaurantMarkers = [];
    
    if (!leafletMap || !restaurants || restaurants.length === 0) return;
    
    const bounds = L.latLngBounds([[officeLocation.lat, officeLocation.lng]]);
    
    restaurants.forEach((restaurant) => {
        const restaurantIcon = L.divIcon({
            className: 'restaurant-marker',
            html: `<div style="background: #ff6b6b; color: white; padding: 6px 10px; border-radius: 15px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.3); white-space: nowrap; font-size: 12px;">🍽️ ${restaurant.name}</div>`,
            iconSize: [100, 30],
            iconAnchor: [50, 15]
        });
        
        const walkingInfo = restaurant.walkingDistance ? 
            `<br><span style="color: #2e7d32; font-size: 0.9em;">🚶 도보: ${restaurant.walkingDistance.formatted} (약 ${restaurant.walkingDistance.timeFormatted})</span>` : '';
        
        const marker = L.marker([restaurant.lat, restaurant.lng], { icon: restaurantIcon })
            .addTo(leafletMap)
            .bindPopup(`
                <div style="min-width: 200px;">
                    <strong>${restaurant.name}</strong><br>
                    <span style="color: #666; font-size: 0.9em;">📍 ${restaurant.address}</span><br>
                    <span style="color: #667eea;">🍽️ ${restaurant.type}</span><br>
                    <span style="color: #666;">💰 ${restaurant.priceRange}</span><br>
                    <span style="color: #ffa500;">⭐ ${restaurant.rating}</span>${walkingInfo}<br>
                    <span style="color: #28a745; font-size: 0.9em;">💡 ${restaurant.recommendation}</span>
                </div>
            `);
        
        restaurantMarkers.push(marker);
        bounds.extend([restaurant.lat, restaurant.lng]);
    });
    
    // 모든 마커가 보이도록 지도 범위 조정
    if (restaurantMarkers.length > 0) {
        leafletMap.fitBounds(bounds, { padding: [50, 50] });
    }
}

// 그룹별 예상 비용 계산
function calculateGroupCost(restaurant, groupSize) {
    const totalCost = restaurant.pricePerPerson * groupSize;
    return {
        total: totalCost,
        perPerson: restaurant.pricePerPerson,
        formatted: totalCost.toLocaleString('ko-KR') + '원'
    };
}

// 식당 추천 표시
async function displayRestaurants(groups) {
    const restaurantListDiv = document.getElementById('restaurant-list');
    
    // 그룹의 선호도에 맞는 식당 추천
    let html = '';
    const allRestaurants = [];
    
    for (let groupIndex = 0; groupIndex < Math.min(groups.length, 3); groupIndex++) {
        const group = groups[groupIndex];
        const groupPreferences = getGroupPreferences(group.members);
        const groupSize = group.members.length;
        
        // 식당 검색
        const recommended = await searchNearbyRestaurants(
            { lat: officeLocation?.lat || 37.4850, lng: officeLocation?.lng || 126.8960 },
            groupPreferences.foodTypes,
            groupPreferences.mealTime,
            groupPreferences.alcoholPreference
        );
        
        // 거리순으로 정렬 (이미 searchNearbyRestaurants에서 정렬됨)
        const sorted = recommended.slice(0, 3);
        
        if (sorted.length > 0) {
            html += `
                <div class="restaurant-section">
                    <h4>그룹 ${groupIndex + 1} 추천 식당 (${group.members.join(', ')})</h4>
                    <p class="group-info">${groupPreferences.mealTime} 식사 | ${groupPreferences.alcoholPreference !== '안 마실래요' && groupPreferences.alcoholPreference !== '상관없음' ? groupPreferences.alcoholPreference : '술 없음'}</p>
                    <div class="restaurant-cards">
                        ${sorted.map(rest => {
                            const cost = calculateGroupCost(rest, groupSize);
                            const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(rest.name + ' ' + rest.address)}`;
                            const naverSearchUrl = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${encodeURIComponent(rest.name + ' ' + rest.address)}`;
                            return `
                            <div class="restaurant-card" data-restaurant-name="${rest.name}" data-restaurant-address="${rest.address}">
                                <div class="restaurant-header">
                                    <h4>${rest.name}</h4>
                                    <div class="rating-badge">⭐ ${rest.rating}</div>
                                </div>
                                <p class="restaurant-address">📍 ${rest.address}</p>
                                <p class="restaurant-type">🍽️ ${rest.type}</p>
                                ${rest.walkingDistance ? `
                                <div class="walking-distance-box">
                                    <strong>🚶 도보 거리</strong>
                                    <p>${rest.walkingDistance.formatted} (약 ${rest.walkingDistance.timeFormatted})</p>
                                </div>
                                ` : ''}
                                <div class="price-estimate">
                                    <strong>💰 예상 비용</strong>
                                    <div class="price-details">
                                        <span>1인당: ${rest.priceRange}</span>
                                        <span>${groupSize}명 총액: 약 ${cost.formatted}</span>
                                    </div>
                                </div>
                                <div class="recommendation-box">
                                    <strong>💡 추천 이유</strong>
                                    <p>${rest.recommendation}</p>
                                </div>
                                <div class="fun-fact-box">
                                    <strong>🎉 재미있는 사실</strong>
                                    <p>${rest.funFact}</p>
                                </div>
                                <div class="tags">
                                    ${rest.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                                <div class="restaurant-actions">
                                    <a href="${naverMapUrl}" target="_blank" class="btn btn-map" onclick="event.stopPropagation();">
                                        🗺️ 네이버 지도
                                    </a>
                                    <a href="${naverSearchUrl}" target="_blank" class="btn btn-search" onclick="event.stopPropagation();">
                                        🔍 네이버 검색
                                    </a>
                                </div>
                            </div>
                        `;
                        }).join('')}
                    </div>
                </div>
            `;
            
            allRestaurants.push(...sorted);
        }
    }
    
    if (html === '') {
        html = '<p>추천할 식당이 없습니다. 다른 선호도를 선택해보세요!</p>';
    }
    
    restaurantListDiv.innerHTML = html;
    
    // 식당 카드 클릭 이벤트 추가 (카드 전체 클릭 시 네이버 지도로 이동)
    document.querySelectorAll('.restaurant-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // 버튼 클릭이 아닌 경우에만 실행
            if (!e.target.closest('.restaurant-actions') && !e.target.closest('a')) {
                const restaurantName = card.dataset.restaurantName;
                const restaurantAddress = card.dataset.restaurantAddress;
                const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(restaurantName + ' ' + restaurantAddress)}`;
                window.open(naverMapUrl, '_blank');
            }
        });
    });
    
    // 지도 자동 표시 (API 키 불필요)
    const mapInitialized = await initializeMap();
    if (mapInitialized && officeLocation) {
        displayRestaurantMarkers(allRestaurants);
    }
}

// 그룹 선호도 계산
function getGroupPreferences(memberNames) {
    const members = employees.filter(emp => memberNames.includes(emp.name));
    
    const mealTimes = new Set();
    const foodTypes = new Set();
    const priceRanges = new Set();
    const alcoholPreferences = new Set();
    
    members.forEach(member => {
        if (member.answers.q0) {
            const mealTime = member.answers.q0;
            if (mealTime.includes('점심')) mealTimes.add('점심');
            if (mealTime.includes('저녁')) mealTimes.add('저녁');
            if (mealTime.includes('술자리')) mealTimes.add('술자리');
        }
        if (member.answers.q1) foodTypes.add(member.answers.q1);
        if (member.answers.q2) priceRanges.add(member.answers.q2);
        if (member.answers.q6) alcoholPreferences.add(member.answers.q6);
    });
    
    // 가장 많이 선택된 식사 시간대
    const mealTimeCounts = {};
    mealTimes.forEach(time => {
        mealTimeCounts[time] = (mealTimeCounts[time] || 0) + 1;
    });
    const primaryMealTime = Object.keys(mealTimeCounts).reduce((a, b) => 
        mealTimeCounts[a] > mealTimeCounts[b] ? a : b, '점심'
    );
    
    // 가장 많이 선택된 술 선호도
    const alcoholCounts = {};
    alcoholPreferences.forEach(pref => {
        alcoholCounts[pref] = (alcoholCounts[pref] || 0) + 1;
    });
    const primaryAlcohol = Object.keys(alcoholCounts).reduce((a, b) => 
        alcoholCounts[a] > alcoholCounts[b] ? a : b, '상관없음'
    );
    
    return {
        mealTime: primaryMealTime,
        foodTypes: Array.from(foodTypes),
        priceRange: Array.from(priceRanges),
        alcoholPreference: primaryAlcohol
    };
}

// 데이터 삭제 함수
function deleteAllData() {
    localStorage.removeItem('lunchEmployees');
    employees = [];
    alert('모든 데이터가 삭제되었습니다.');
    showScreen('main-screen');
}

// 비밀번호 모달 열기
function openPasswordModal() {
    const modal = document.getElementById('password-modal');
    const passwordInput = document.getElementById('delete-password');
    modal.classList.add('active');
    passwordInput.value = '';
    passwordInput.focus();
}

// 비밀번호 모달 닫기
function closePasswordModal() {
    const modal = document.getElementById('password-modal');
    const passwordInput = document.getElementById('delete-password');
    modal.classList.remove('active');
    passwordInput.value = '';
}

// 비밀번호 확인 및 삭제
function confirmDelete() {
    const passwordInput = document.getElementById('delete-password');
    const enteredPassword = passwordInput.value.trim();
    
    if (!enteredPassword) {
        alert('비밀번호를 입력해주세요.');
        passwordInput.focus();
        return;
    }
    
    if (enteredPassword === DELETE_PASSWORD) {
        if (confirm('정말로 모든 데이터를 삭제하시겠습니까?\n\n이 작업은 되돌릴 수 없습니다.')) {
            deleteAllData();
            closePasswordModal();
        }
    } else {
        alert('비밀번호가 일치하지 않습니다.');
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// 이벤트 리스너
document.getElementById('start-btn').addEventListener('click', initQuiz);
document.getElementById('view-results-btn').addEventListener('click', () => {
    if (employees.length === 0) {
        alert('먼저 테스트를 완료해주세요.');
        return;
    }
    showResults();
});
document.getElementById('delete-data-btn').addEventListener('click', openPasswordModal);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('prev-btn').addEventListener('click', prevQuestion);
document.getElementById('submit-btn').addEventListener('click', submitQuiz);
document.getElementById('new-test-btn').addEventListener('click', initQuiz);
document.getElementById('back-to-main-btn').addEventListener('click', () => showScreen('main-screen'));

// 모달 이벤트 리스너
document.getElementById('confirm-delete-btn').addEventListener('click', confirmDelete);
document.getElementById('cancel-delete-btn').addEventListener('click', closePasswordModal);
document.querySelector('.modal-close').addEventListener('click', closePasswordModal);

// 모달 외부 클릭 시 닫기
document.getElementById('password-modal').addEventListener('click', (e) => {
    if (e.target.id === 'password-modal') {
        closePasswordModal();
    }
});

// Enter 키로 삭제 확인
document.getElementById('delete-password').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        confirmDelete();
    }
});

// 초기화
showCurrentQuestion();

