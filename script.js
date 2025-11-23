// 퀴즈 질문 정의
const quizQuestions = [
    {
        question: "오늘 어떤 종류의 음식을 먹고 싶으신가요?",
        options: ["한식", "중식", "일식", "양식", "분식", "기타"]
    },
    {
        question: "예산은 어느 정도인가요?",
        options: ["5,000원 이하", "5,000-10,000원", "10,000-15,000원", "15,000원 이상"]
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
    }
];

// 직원 데이터 저장소
let employees = JSON.parse(localStorage.getItem('lunchEmployees') || '[]');
let currentEmployee = null;
let currentQuestionIndex = 0;
let answers = {};

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
    const total = quizQuestions.length + 1; // 이름 입력 포함
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
        const question = quizQuestions[currentQuestionIndex - 1];
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
                answers[`q${currentQuestionIndex - 1}`] = this.dataset.value;
            });
        });
        
        // 이전에 선택한 답이 있으면 표시
        if (answers[`q${currentQuestionIndex - 1}`]) {
            document.querySelectorAll('.quiz-option').forEach(option => {
                if (option.dataset.value === answers[`q${currentQuestionIndex - 1}`]) {
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
    const total = quizQuestions.length + 1;
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
    if (!answers[`q${currentQuestionIndex - 1}`]) {
        alert('답변을 선택해주세요.');
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
        // Nominatim API를 사용하여 주소 검색 (무료, API 키 불필요)
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=맑은소프트&limit=1&countrycodes=kr`);
        const data = await response.json();
        
        if (data && data.length > 0) {
            return {
                address: data[0].display_name,
                lat: parseFloat(data[0].lat),
                lng: parseFloat(data[0].lon)
            };
        } else {
            // 맑은소프트를 찾지 못한 경우, 서울 강남구 좌표 사용
            return {
                address: '서울시 강남구 (맑은소프트)',
                lat: 37.4979,
                lng: 127.0276
            };
        }
    } catch (error) {
        console.error('사무실 위치 검색 오류:', error);
        // 기본값으로 서울 강남구 좌표 반환
        return {
            address: '서울시 강남구 (맑은소프트)',
            lat: 37.4979,
            lng: 127.0276
        };
    }
}

// 근처 식당 검색
async function searchNearbyRestaurants(center, foodTypes) {
    // 샘플 식당 데이터 (실제로는 Places API를 사용할 수 있지만, 여기서는 샘플 데이터 사용)
    const sampleRestaurants = [
        { name: '맛있는 한식당', address: '서울시 강남구 테헤란로', type: '한식', lat: 37.4979, lng: 127.0276, price: '10,000-15,000원', rating: 4.5 },
        { name: '중화요리', address: '서울시 강남구 역삼동', type: '중식', lat: 37.4989, lng: 127.0286, price: '15,000원 이상', rating: 4.3 },
        { name: '일본라면', address: '서울시 강남구 선릉로', type: '일식', lat: 37.4969, lng: 127.0266, price: '5,000-10,000원', rating: 4.7 },
        { name: '이탈리안 레스토랑', address: '서울시 강남구 봉은사로', type: '양식', lat: 37.4999, lng: 127.0296, price: '15,000원 이상', rating: 4.4 },
        { name: '분식집', address: '서울시 강남구 논현로', type: '분식', lat: 37.4959, lng: 127.0256, price: '5,000원 이하', rating: 4.2 },
        { name: '돈까스 전문점', address: '서울시 강남구 학동로', type: '일식', lat: 37.5009, lng: 127.0306, price: '10,000-15,000원', rating: 4.6 },
        { name: '삼겹살집', address: '서울시 강남구 도곡로', type: '한식', lat: 37.4949, lng: 127.0246, price: '15,000원 이상', rating: 4.5 }
    ];
    
    // 선호 음식 타입에 맞는 식당 필터링
    return sampleRestaurants.filter(rest => 
        foodTypes.length === 0 || foodTypes.includes(rest.type)
    );
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
        
        const marker = L.marker([restaurant.lat, restaurant.lng], { icon: restaurantIcon })
            .addTo(leafletMap)
            .bindPopup(`
                <div style="min-width: 200px;">
                    <strong>${restaurant.name}</strong><br>
                    <span style="color: #666; font-size: 0.9em;">📍 ${restaurant.address}</span><br>
                    <span style="color: #667eea;">🍽️ ${restaurant.type}</span><br>
                    <span style="color: #666;">💰 ${restaurant.price}</span><br>
                    <span style="color: #ffa500;">⭐ ${restaurant.rating}</span>
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

// 식당 추천 표시
async function displayRestaurants(groups) {
    const restaurantListDiv = document.getElementById('restaurant-list');
    
    // 그룹의 선호도에 맞는 식당 추천
    let html = '';
    const allRestaurants = [];
    
    for (let groupIndex = 0; groupIndex < Math.min(groups.length, 3); groupIndex++) {
        const group = groups[groupIndex];
        const groupPreferences = getGroupPreferences(group.members);
        
        // 샘플 식당 데이터
        const sampleRestaurants = [
            { name: '맛있는 한식당', address: '서울시 강남구 테헤란로', type: '한식', lat: 37.4979, lng: 127.0276, price: '10,000-15,000원', rating: 4.5 },
            { name: '중화요리', address: '서울시 강남구 역삼동', type: '중식', lat: 37.4989, lng: 127.0286, price: '15,000원 이상', rating: 4.3 },
            { name: '일본라면', address: '서울시 강남구 선릉로', type: '일식', lat: 37.4969, lng: 127.0266, price: '5,000-10,000원', rating: 4.7 },
            { name: '이탈리안 레스토랑', address: '서울시 강남구 봉은사로', type: '양식', lat: 37.4999, lng: 127.0296, price: '15,000원 이상', rating: 4.4 },
            { name: '분식집', address: '서울시 강남구 논현로', type: '분식', lat: 37.4959, lng: 127.0256, price: '5,000원 이하', rating: 4.2 },
            { name: '돈까스 전문점', address: '서울시 강남구 학동로', type: '일식', lat: 37.5009, lng: 127.0306, price: '10,000-15,000원', rating: 4.6 },
            { name: '삼겹살집', address: '서울시 강남구 도곡로', type: '한식', lat: 37.4949, lng: 127.0246, price: '15,000원 이상', rating: 4.5 }
        ];
        
        const recommended = sampleRestaurants.filter(r => 
            groupPreferences.foodTypes.length === 0 || 
            groupPreferences.foodTypes.includes(r.type)
        );
        
        if (recommended.length > 0) {
            html += `
                <div class="restaurant-section">
                    <h4>그룹 ${groupIndex + 1} 추천 식당</h4>
                    <div class="restaurant-cards">
                        ${recommended.slice(0, 3).map(rest => `
                            <div class="restaurant-card">
                                <h4>${rest.name}</h4>
                                <p>📍 ${rest.address}</p>
                                <p>🍽️ ${rest.type}</p>
                                <p>💰 ${rest.price}</p>
                                <p>⭐ ${rest.rating}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            allRestaurants.push(...recommended);
        }
    }
    
    if (html === '') {
        html = '<p>추천할 식당이 없습니다.</p>';
    }
    
    restaurantListDiv.innerHTML = html;
    
    // 지도 자동 표시 (API 키 불필요)
    const mapInitialized = await initializeMap();
    if (mapInitialized && officeLocation) {
        const allFoodTypes = new Set();
        groups.forEach(group => {
            const prefs = getGroupPreferences(group.members);
            prefs.foodTypes.forEach(type => allFoodTypes.add(type));
        });
        
        const restaurants = await searchNearbyRestaurants(
            { lat: officeLocation.lat, lng: officeLocation.lng },
            Array.from(allFoodTypes)
        );
        displayRestaurantMarkers(restaurants);
    }
}

// 그룹 선호도 계산
function getGroupPreferences(memberNames) {
    const members = employees.filter(emp => memberNames.includes(emp.name));
    
    const foodTypes = new Set();
    const priceRanges = new Set();
    
    members.forEach(member => {
        if (member.answers.q0) foodTypes.add(member.answers.q0);
        if (member.answers.q1) priceRanges.add(member.answers.q1);
    });
    
    return {
        foodTypes: Array.from(foodTypes),
        priceRange: Array.from(priceRanges)
    };
}

// 지도는 자동으로 로드되므로 별도의 이벤트 리스너 불필요

// 이벤트 리스너
document.getElementById('start-btn').addEventListener('click', initQuiz);
document.getElementById('view-results-btn').addEventListener('click', () => {
    if (employees.length === 0) {
        alert('먼저 테스트를 완료해주세요.');
        return;
    }
    showResults();
});
document.getElementById('next-btn').addEventListener('click', nextQuestion);
document.getElementById('prev-btn').addEventListener('click', prevQuestion);
document.getElementById('submit-btn').addEventListener('click', submitQuiz);
document.getElementById('new-test-btn').addEventListener('click', initQuiz);
document.getElementById('back-to-main-btn').addEventListener('click', () => showScreen('main-screen'));

// 초기화
showCurrentQuestion();

