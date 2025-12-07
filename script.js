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
                title: '숫자 1-10',
                description: '1부터 10까지의 숫자',
                words: [
                    { indonesian: 'Satu', pronunciation: '[사뚜]', korean: '하나', example: 'Satu buku (책 한 권)' },
                    { indonesian: 'Dua', pronunciation: '[두아]', korean: '둘', example: 'Dua orang (두 사람)' },
                    { indonesian: 'Tiga', pronunciation: '[띠가]', korean: '셋', example: 'Tiga hari (삼일)' },
                    { indonesian: 'Empat', pronunciation: '[음빳]', korean: '넷', example: 'Empat tahun (사년)' },
                    { indonesian: 'Lima', pronunciation: '[리마]', korean: '다섯', example: 'Lima ribu (오천)' },
                    { indonesian: 'Enam', pronunciation: '[으남]', korean: '여섯', example: 'Enam bulan (육개월)' },
                    { indonesian: 'Tujuh', pronunciation: '[뚜주]', korean: '일곱', example: 'Tujuh hari (칠일)' },
                    { indonesian: 'Delapan', pronunciation: '[드라빤]', korean: '여덟', example: 'Delapan jam (팔시간)' },
                    { indonesian: 'Sembilan', pronunciation: '[슴빌란]', korean: '아홉', example: 'Sembilan tahun (구년)' },
                    { indonesian: 'Sepuluh', pronunciation: '[스뿔루]', korean: '열', example: 'Sepuluh orang (십명)' }
                ]
            },
            {
                id: 'basics-4',
                title: '질문하기',
                description: '질문하는 방법',
                words: [
                    { indonesian: 'Apa', pronunciation: '[아빠]', korean: '무엇', example: 'Apa ini? (이것은 무엇인가요?)' },
                    { indonesian: 'Siapa', pronunciation: '[시아빠]', korean: '누구', example: 'Siapa nama Anda? (당신의 이름은 무엇인가요?)' },
                    { indonesian: 'Di mana', pronunciation: '[디 마나]', korean: '어디', example: 'Di mana toilet? (화장실이 어디인가요?)' },
                    { indonesian: 'Kapan', pronunciation: '[까빤]', korean: '언제', example: 'Kapan Anda datang? (언제 오셨나요?)' },
                    { indonesian: 'Bagaimana', pronunciation: '[바가이마나]', korean: '어떻게', example: 'Bagaimana kabar Anda? (어떻게 지내세요?)' },
                    { indonesian: 'Berapa', pronunciation: '[뻬라빠]', korean: '얼마', example: 'Berapa harga? (얼마인가요?)' }
                ]
            },
            {
                id: 'basics-5',
                title: '시간 표현',
                description: '시간과 관련된 표현',
                words: [
                    { indonesian: 'Sekarang', pronunciation: '[스까랑]', korean: '지금', example: 'Sekarang jam berapa? (지금 몇 시인가요?)' },
                    { indonesian: 'Hari ini', pronunciation: '[하리 이니]', korean: '오늘', example: 'Hari ini cuaca bagus. (오늘 날씨가 좋습니다.)' },
                    { indonesian: 'Kemarin', pronunciation: '[끄마린]', korean: '어제', example: 'Kemarin saya pergi ke pasar. (어제 저는 시장에 갔습니다.)' },
                    { indonesian: 'Besok', pronunciation: '[뻬속]', korean: '내일', example: 'Besok saya akan pergi. (내일 갈 예정입니다.)' },
                    { indonesian: 'Pagi', pronunciation: '[빠기]', korean: '아침', example: 'Saya bangun pagi. (저는 아침에 일어납니다.)' },
                    { indonesian: 'Siang', pronunciation: '[시앙]', korean: '점심', example: 'Makan siang (점심 식사)' },
                    { indonesian: 'Malam', pronunciation: '[말람]', korean: '저녁', example: 'Malam hari (저녁 시간)' }
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
                    { indonesian: 'Saya lelah', pronunciation: '[사야 르라]', korean: '저는 피곤합니다', example: 'Saya lelah hari ini. (오늘 피곤합니다.)' },
                    { indonesian: 'Saya bahagia', pronunciation: '[사야 바하기아]', korean: '저는 행복합니다', example: 'Saya sangat bahagia. (저는 매우 행복합니다.)' },
                    { indonesian: 'Saya marah', pronunciation: '[사야 마라]', korean: '저는 화가 납니다', example: 'Saya marah karena itu. (그 때문에 화가 납니다.)' },
                    { indonesian: 'Saya takut', pronunciation: '[사야 따쿠트]', korean: '저는 무서워합니다', example: 'Saya takut gelap. (저는 어둠을 무서워합니다.)' }
                ]
            },
            {
                id: 'daily-3',
                title: '가족',
                description: '가족 구성원 호칭',
                words: [
                    { indonesian: 'Keluarga', pronunciation: '[끄루아르가]', korean: '가족', example: 'Keluarga saya (제 가족)' },
                    { indonesian: 'Ayah', pronunciation: '[아야]', korean: '아버지', example: 'Ayah saya bekerja. (제 아버지는 일하십니다.)' },
                    { indonesian: 'Ibu', pronunciation: '[이부]', korean: '어머니', example: 'Ibu saya memasak. (제 어머니는 요리하십니다.)' },
                    { indonesian: 'Kakak', pronunciation: '[까깍]', korean: '형/누나/언니/오빠', example: 'Kakak saya di Jakarta. (제 형/누나는 자카르타에 있습니다.)' },
                    { indonesian: 'Adik', pronunciation: '[아딕]', korean: '동생', example: 'Adik saya masih sekolah. (제 동생은 아직 학교에 다닙니다.)' },
                    { indonesian: 'Suami', pronunciation: '[수아미]', korean: '남편', example: 'Suami saya dokter. (제 남편은 의사입니다.)' },
                    { indonesian: 'Istri', pronunciation: '[이스트리]', korean: '아내', example: 'Istri saya guru. (제 아내는 교사입니다.)' }
                ]
            },
            {
                id: 'daily-4',
                title: '날씨',
                description: '날씨에 관한 표현',
                words: [
                    { indonesian: 'Cuaca', pronunciation: '[추아짜]', korean: '날씨', example: 'Cuaca hari ini bagus. (오늘 날씨가 좋습니다.)' },
                    { indonesian: 'Panas', pronunciation: '[빠나스]', korean: '덥다', example: 'Hari ini sangat panas. (오늘 매우 덥습니다.)' },
                    { indonesian: 'Dingin', pronunciation: '[딩인]', korean: '춥다', example: 'Malam ini dingin. (오늘 밤은 춥습니다.)' },
                    { indonesian: 'Hujan', pronunciation: '[후잔]', korean: '비', example: 'Hari ini hujan. (오늘 비가 옵니다.)' },
                    { indonesian: 'Mendung', pronunciation: '[믄둥]', korean: '흐리다', example: 'Langit mendung. (하늘이 흐립니다.)' },
                    { indonesian: 'Cerah', pronunciation: '[체라]', korean: '맑다', example: 'Cuaca cerah. (날씨가 맑습니다.)' }
                ]
            },
            {
                id: 'daily-5',
                title: '취미',
                description: '취미와 관심사 표현',
                words: [
                    { indonesian: 'Hobi', pronunciation: '[호비]', korean: '취미', example: 'Apa hobi Anda? (취미가 무엇인가요?)' },
                    { indonesian: 'Membaca', pronunciation: '[음바짜]', korean: '읽기', example: 'Saya suka membaca. (저는 읽기를 좋아합니다.)' },
                    { indonesian: 'Menonton', pronunciation: '[므논톤]', korean: '보기', example: 'Saya suka menonton film. (저는 영화 보기를 좋아합니다.)' },
                    { indonesian: 'Olahraga', pronunciation: '[올라그라]', korean: '운동', example: 'Saya suka olahraga. (저는 운동을 좋아합니다.)' },
                    { indonesian: 'Musik', pronunciation: '[무식]', korean: '음악', example: 'Saya suka musik. (저는 음악을 좋아합니다.)' },
                    { indonesian: 'Memasak', pronunciation: '[므마삭]', korean: '요리하기', example: 'Hobi saya memasak. (제 취미는 요리입니다.)' }
                ]
            },
            {
                id: 'daily-6',
                title: '일상 활동',
                description: '일상에서 하는 활동들',
                words: [
                    { indonesian: 'Bangun', pronunciation: '[방운]', korean: '일어나다', example: 'Saya bangun pagi. (저는 아침에 일어납니다.)' },
                    { indonesian: 'Mandi', pronunciation: '[만디]', korean: '씻다', example: 'Saya mandi setiap pagi. (저는 매일 아침 씻습니다.)' },
                    { indonesian: 'Makan', pronunciation: '[마깐]', korean: '먹다', example: 'Saya makan nasi. (저는 밥을 먹습니다.)' },
                    { indonesian: 'Bekerja', pronunciation: '[뻬르케르자]', korean: '일하다', example: 'Saya bekerja di kantor. (저는 사무실에서 일합니다.)' },
                    { indonesian: 'Tidur', pronunciation: '[띠두르]', korean: '자다', example: 'Saya tidur malam. (저는 밤에 잡니다.)' },
                    { indonesian: 'Belajar', pronunciation: '[뻬라자르]', korean: '공부하다', example: 'Saya belajar bahasa Indonesia. (저는 인도네시아어를 공부합니다.)' }
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
                    { indonesian: 'Check out', pronunciation: '[첵 아웃]', korean: '체크아웃', example: 'Saya mau check out. (체크아웃하고 싶습니다.)' },
                    { indonesian: 'Hotel', pronunciation: '[호텔]', korean: '호텔', example: 'Hotel ini bagus. (이 호텔은 좋습니다.)' },
                    { indonesian: 'Reservasi', pronunciation: '[레세르바시]', korean: '예약', example: 'Saya punya reservasi. (저는 예약이 있습니다.)' },
                    { indonesian: 'Kunci', pronunciation: '[쿤치]', korean: '열쇠', example: 'Kunci kamar (방 열쇠)' }
                ]
            },
            {
                id: 'travel-3',
                title: '방향 물어보기',
                description: '길을 물어보는 표현',
                words: [
                    { indonesian: 'Jalan', pronunciation: '[잘란]', korean: '길', example: 'Jalan ini ke mana? (이 길은 어디로 가나요?)' },
                    { indonesian: 'Kiri', pronunciation: '[키리]', korean: '왼쪽', example: 'Belok kiri (왼쪽으로 돌다)' },
                    { indonesian: 'Kanan', pronunciation: '[까난]', korean: '오른쪽', example: 'Belok kanan (오른쪽으로 돌다)' },
                    { indonesian: 'Lurus', pronunciation: '[루루스]', korean: '직진', example: 'Jalan lurus (직진하세요)' },
                    { indonesian: 'Jauh', pronunciation: '[자우]', korean: '멀다', example: 'Jauh dari sini? (여기서 멀어요?)' },
                    { indonesian: 'Dekat', pronunciation: '[드깟]', korean: '가깝다', example: 'Dekat dari sini. (여기서 가깝습니다.)' }
                ]
            },
            {
                id: 'travel-4',
                title: '관광지',
                description: '관광지와 관련된 표현',
                words: [
                    { indonesian: 'Wisata', pronunciation: '[위사따]', korean: '관광', example: 'Tempat wisata (관광지)' },
                    { indonesian: 'Pantai', pronunciation: '[빤따이]', korean: '해변', example: 'Pantai ini indah. (이 해변은 아름답습니다.)' },
                    { indonesian: 'Gunung', pronunciation: '[구눙]', korean: '산', example: 'Saya naik gunung. (저는 산에 올라갑니다.)' },
                    { indonesian: 'Museum', pronunciation: '[무세움]', korean: '박물관', example: 'Museum ini menarik. (이 박물관은 흥미롭습니다.)' },
                    { indonesian: 'Foto', pronunciation: '[포토]', korean: '사진', example: 'Boleh foto? (사진 찍어도 되나요?)' },
                    { indonesian: 'Pemandangan', pronunciation: '[뻬만당안]', korean: '경치', example: 'Pemandangan indah. (아름다운 경치)' }
                ]
            },
            {
                id: 'travel-5',
                title: '공항',
                description: '공항에서 사용하는 표현',
                words: [
                    { indonesian: 'Bandara', pronunciation: '[반다라]', korean: '공항', example: 'Saya pergi ke bandara. (저는 공항에 갑니다.)' },
                    { indonesian: 'Tiket', pronunciation: '[띠켓]', korean: '표', example: 'Saya beli tiket. (저는 표를 삽니다.)' },
                    { indonesian: 'Paspor', pronunciation: '[빠스포르]', korean: '여권', example: 'Ini paspor saya. (이것은 제 여권입니다.)' },
                    { indonesian: 'Koper', pronunciation: '[코뻬르]', korean: '여행가방', example: 'Koper saya besar. (제 여행가방은 큽니다.)' },
                    { indonesian: 'Keberangkatan', pronunciation: '[끄뻬랑깟탄]', korean: '출발', example: 'Keberangkatan jam berapa? (몇 시에 출발하나요?)' },
                    { indonesian: 'Kedatangan', pronunciation: '[끄다탕안]', korean: '도착', example: 'Kedatangan jam berapa? (몇 시에 도착하나요?)' }
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
                    { indonesian: 'Satay', pronunciation: '[사떼이]', korean: '사테', example: 'Saya suka satay ayam. (저는 닭고기 사테를 좋아합니다.)' },
                    { indonesian: 'Gado-gado', pronunciation: '[가도-가도]', korean: '가도가도', example: 'Gado-gado adalah salad Indonesia. (가도가도는 인도네시아 샐러드입니다.)' },
                    { indonesian: 'Soto', pronunciation: '[소토]', korean: '소토', example: 'Soto ayam enak. (닭고기 소토가 맛있습니다.)' },
                    { indonesian: 'Bakso', pronunciation: '[박소]', korean: '바크소', example: 'Bakso adalah bakso Indonesia. (바크소는 인도네시아 만두입니다.)' }
                ]
            },
            {
                id: 'food-3',
                title: '음료',
                description: '음료 주문하기',
                words: [
                    { indonesian: 'Air', pronunciation: '[아이르]', korean: '물', example: 'Saya mau air putih. (저는 물을 원합니다.)' },
                    { indonesian: 'Kopi', pronunciation: '[코삐]', korean: '커피', example: 'Saya mau kopi. (저는 커피를 원합니다.)' },
                    { indonesian: 'Teh', pronunciation: '[떼]', korean: '차', example: 'Teh manis (단 차)' },
                    { indonesian: 'Jus', pronunciation: '[주스]', korean: '주스', example: 'Jus jeruk (오렌지 주스)' },
                    { indonesian: 'Es', pronunciation: '[으스]', korean: '얼음', example: 'Es teh (아이스 티)' },
                    { indonesian: 'Dingin', pronunciation: '[딩인]', korean: '차갑다', example: 'Saya mau minuman dingin. (저는 차가운 음료를 원합니다.)' }
                ]
            },
            {
                id: 'food-4',
                title: '맛 표현',
                description: '맛에 대한 표현',
                words: [
                    { indonesian: 'Enak', pronunciation: '[으낙]', korean: '맛있다', example: 'Makanan ini enak. (이 음식은 맛있습니다.)' },
                    { indonesian: 'Pedas', pronunciation: '[뻬다스]', korean: '맵다', example: 'Makanan ini pedas. (이 음식은 맵습니다.)' },
                    { indonesian: 'Manis', pronunciation: '[마니스]', korean: '달다', example: 'Kue ini manis. (이 케이크는 달습니다.)' },
                    { indonesian: 'Asin', pronunciation: '[아신]', korean: '짜다', example: 'Makanan ini asin. (이 음식은 짭니다.)' },
                    { indonesian: 'Pahit', pronunciation: '[파힛]', korean: '쓰다', example: 'Kopi ini pahit. (이 커피는 씁니다.)' },
                    { indonesian: 'Asam', pronunciation: '[아삼]', korean: '시다', example: 'Buah ini asam. (이 과일은 셉니다.)' }
                ]
            }
        ]
    },
    shopping: {
        title: '쇼핑',
        description: '쇼핑할 때 유용한 표현들',
        lessons: [
            {
                id: 'shopping-1',
                title: '쇼핑 기본',
                description: '쇼핑할 때 기본 표현',
                words: [
                    { indonesian: 'Toko', pronunciation: '[토코]', korean: '가게', example: 'Saya pergi ke toko. (저는 가게에 갑니다.)' },
                    { indonesian: 'Beli', pronunciation: '[뻬리]', korean: '사다', example: 'Saya mau beli ini. (저는 이것을 사고 싶습니다.)' },
                    { indonesian: 'Harga', pronunciation: '[하르가]', korean: '가격', example: 'Berapa harga? (얼마인가요?)' },
                    { indonesian: 'Murah', pronunciation: '[무라]', korean: '싸다', example: 'Ini murah. (이것은 쌉니다.)' },
                    { indonesian: 'Mahal', pronunciation: '[마할]', korean: '비싸다', example: 'Ini mahal. (이것은 비쌉니다.)' },
                    { indonesian: 'Diskon', pronunciation: '[디스콘]', korean: '할인', example: 'Ada diskon? (할인이 있나요?)' }
                ]
            },
            {
                id: 'shopping-2',
                title: '옷 쇼핑',
                description: '옷을 살 때 사용하는 표현',
                words: [
                    { indonesian: 'Baju', pronunciation: '[바주]', korean: '옷', example: 'Saya mau beli baju. (저는 옷을 사고 싶습니다.)' },
                    { indonesian: 'Celana', pronunciation: '[첼라나]', korean: '바지', example: 'Celana ini bagus. (이 바지는 좋습니다.)' },
                    { indonesian: 'Sepatu', pronunciation: '[스빠뚜]', korean: '신발', example: 'Sepatu ini nyaman. (이 신발은 편합니다.)' },
                    { indonesian: 'Coba', pronunciation: '[초바]', korean: '입어보다', example: 'Boleh coba? (입어봐도 되나요?)' },
                    { indonesian: 'Ukuran', pronunciation: '[우쿠란]', korean: '사이즈', example: 'Ukuran berapa? (사이즈가 몇인가요?)' },
                    { indonesian: 'Cocok', pronunciation: '[초첵]', korean: '맞다', example: 'Ini cocok. (이것은 맞습니다.)' }
                ]
            },
            {
                id: 'shopping-3',
                title: '결제',
                description: '결제할 때 사용하는 표현',
                words: [
                    { indonesian: 'Bayar', pronunciation: '[바야르]', korean: '지불하다', example: 'Saya mau bayar. (저는 지불하고 싶습니다.)' },
                    { indonesian: 'Tunai', pronunciation: '[투나이]', korean: '현금', example: 'Bayar tunai (현금으로 지불)' },
                    { indonesian: 'Kartu', pronunciation: '[까르뚜]', korean: '카드', example: 'Bayar pakai kartu (카드로 지불)' },
                    { indonesian: 'Kembalian', pronunciation: '[끔발리안]', korean: '거스름돈', example: 'Kembaliannya berapa? (거스름돈이 얼마인가요?)' },
                    { indonesian: 'Struk', pronunciation: '[스트룩]', korean: '영수증', example: 'Boleh minta struk? (영수증을 주시겠어요?)' }
                ]
            }
        ]
    },
    business: {
        title: '비즈니스',
        description: '비즈니스 상황에서 사용하는 표현들',
        lessons: [
            {
                id: 'business-1',
                title: '회의',
                description: '회의에서 사용하는 표현',
                words: [
                    { indonesian: 'Rapat', pronunciation: '[라빳]', korean: '회의', example: 'Ada rapat hari ini. (오늘 회의가 있습니다.)' },
                    { indonesian: 'Presentasi', pronunciation: '[뻬레센타시]', korean: '발표', example: 'Saya akan presentasi. (저는 발표할 예정입니다.)' },
                    { indonesian: 'Proyek', pronunciation: '[프로옥]', korean: '프로젝트', example: 'Proyek ini penting. (이 프로젝트는 중요합니다.)' },
                    { indonesian: 'Deadline', pronunciation: '[데드라인]', korean: '마감일', example: 'Deadline kapan? (마감일이 언제인가요?)' },
                    { indonesian: 'Kesepakatan', pronunciation: '[끄스빠깟탄]', korean: '합의', example: 'Kita perlu kesepakatan. (우리는 합의가 필요합니다.)' }
                ]
            },
            {
                id: 'business-2',
                title: '이메일/전화',
                description: '이메일과 전화에서 사용하는 표현',
                words: [
                    { indonesian: 'Email', pronunciation: '[이메일]', korean: '이메일', example: 'Saya kirim email. (저는 이메일을 보냅니다.)' },
                    { indonesian: 'Telepon', pronunciation: '[뜨레폰]', korean: '전화', example: 'Saya telepon Anda. (저는 당신에게 전화합니다.)' },
                    { indonesian: 'Pesan', pronunciation: '[뻬산]', korean: '메시지', example: 'Saya terima pesan. (저는 메시지를 받았습니다.)' },
                    { indonesian: 'Balas', pronunciation: '[발라스]', korean: '답장', example: 'Saya akan balas. (저는 답장할 예정입니다.)' },
                    { indonesian: 'Konfirmasi', pronunciation: '[콘피르마시]', korean: '확인', example: 'Tolong konfirmasi. (확인해주세요.)' }
                ]
            },
            {
                id: 'business-3',
                title: '직장',
                description: '직장에서 사용하는 표현',
                words: [
                    { indonesian: 'Kantor', pronunciation: '[깐토르]', korean: '사무실', example: 'Saya bekerja di kantor. (저는 사무실에서 일합니다.)' },
                    { indonesian: 'Bos', pronunciation: '[보스]', korean: '상사', example: 'Bos saya baik. (제 상사는 좋습니다.)' },
                    { indonesian: 'Rekan kerja', pronunciation: '[레깐 케르자]', korean: '동료', example: 'Rekan kerja saya ramah. (제 동료는 친절합니다.)' },
                    { indonesian: 'Tugas', pronunciation: '[투가스]', korean: '업무', example: 'Saya punya banyak tugas. (저는 많은 업무가 있습니다.)' },
                    { indonesian: 'Libur', pronunciation: '[리부르]', korean: '휴가', example: 'Saya mau libur. (저는 휴가를 원합니다.)' }
                ]
            }
        ]
    },
    health: {
        title: '건강',
        description: '건강과 병원 관련 표현들',
        lessons: [
            {
                id: 'health-1',
                title: '병원',
                description: '병원에서 사용하는 표현',
                words: [
                    { indonesian: 'Rumah sakit', pronunciation: '[루마 삭잇]', korean: '병원', example: 'Saya pergi ke rumah sakit. (저는 병원에 갑니다.)' },
                    { indonesian: 'Dokter', pronunciation: '[독떼르]', korean: '의사', example: 'Saya mau bertemu dokter. (저는 의사를 만나고 싶습니다.)' },
                    { indonesian: 'Sakit', pronunciation: '[삭잇]', korean: '아프다', example: 'Saya sakit kepala. (저는 두통이 있습니다.)' },
                    { indonesian: 'Obat', pronunciation: '[오밧]', korean: '약', example: 'Saya perlu obat. (저는 약이 필요합니다.)' },
                    { indonesian: 'Periksa', pronunciation: '[뻬릭사]', korean: '진찰', example: 'Saya mau periksa. (저는 진찰을 받고 싶습니다.)' }
                ]
            },
            {
                id: 'health-2',
                title: '증상',
                description: '증상을 설명하는 표현',
                words: [
                    { indonesian: 'Demam', pronunciation: '[드맘]', korean: '열', example: 'Saya demam. (저는 열이 있습니다.)' },
                    { indonesian: 'Batuk', pronunciation: '[바뚝]', korean: '기침', example: 'Saya batuk. (저는 기침을 합니다.)' },
                    { indonesian: 'Pusing', pronunciation: '[푸싱]', korean: '어지러움', example: 'Saya pusing. (저는 어지럽습니다.)' },
                    { indonesian: 'Mual', pronunciation: '[무알]', korean: '메스꺼움', example: 'Saya mual. (저는 메스꺼움을 느낍니다.)' },
                    { indonesian: 'Luka', pronunciation: '[루까]', korean: '상처', example: 'Saya punya luka. (저는 상처가 있습니다.)' }
                ]
            }
        ]
    },
    hobbies: {
        title: '취미',
        description: '취미와 여가 활동 표현들',
        lessons: [
            {
                id: 'hobbies-1',
                title: '스포츠',
                description: '스포츠 관련 표현',
                words: [
                    { indonesian: 'Sepak bola', pronunciation: '[스빡 볼라]', korean: '축구', example: 'Saya suka sepak bola. (저는 축구를 좋아합니다.)' },
                    { indonesian: 'Basket', pronunciation: '[바스켓]', korean: '농구', example: 'Saya main basket. (저는 농구를 합니다.)' },
                    { indonesian: 'Renang', pronunciation: '[르낭]', korean: '수영', example: 'Saya bisa renang. (저는 수영을 할 수 있습니다.)' },
                    { indonesian: 'Lari', pronunciation: '[라리]', korean: '달리기', example: 'Saya suka lari pagi. (저는 아침 달리기를 좋아합니다.)' },
                    { indonesian: 'Bersepeda', pronunciation: '[뻬르스뻬다]', korean: '자전거 타기', example: 'Saya bersepeda setiap hari. (저는 매일 자전거를 탑니다.)' }
                ]
            },
            {
                id: 'hobbies-2',
                title: '예술',
                description: '예술과 문화 활동',
                words: [
                    { indonesian: 'Lukis', pronunciation: '[루끼스]', korean: '그림 그리기', example: 'Saya suka lukis. (저는 그림 그리기를 좋아합니다.)' },
                    { indonesian: 'Fotografi', pronunciation: '[포토그라피]', korean: '사진', example: 'Hobi saya fotografi. (제 취미는 사진입니다.)' },
                    { indonesian: 'Tari', pronunciation: '[따리]', korean: '춤', example: 'Saya bisa tari. (저는 춤을 출 수 있습니다.)' },
                    { indonesian: 'Musik', pronunciation: '[무식]', korean: '음악', example: 'Saya suka musik. (저는 음악을 좋아합니다.)' },
                    { indonesian: 'Nyanyi', pronunciation: '[냐니]', korean: '노래', example: 'Saya suka nyanyi. (저는 노래를 좋아합니다.)' }
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
        lastMonthlyReset: getMonthStart(),
        totalLearningTime: 0, // 총 학습 시간 (밀리초)
        lessonStartTime: null // 현재 레슨 시작 시간
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
    
    // 학습 시간 추적 시작
    if (currentUser) {
        currentUser.lessonStartTime = Date.now();
        saveUserData();
    }
    
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

// 연습 문제 관련 변수
let practiceQuestions = [];
let currentPracticeIndex = 0;
let practiceAnswers = [];

// 연습 문제 생성 및 표시
function showPractice() {
    document.getElementById('learning-card').style.display = 'none';
    document.getElementById('practice-section').style.display = 'block';
    
    // 최소 3개의 연습 문제 생성
    const numQuestions = Math.min(3, currentLesson.words.length);
    practiceQuestions = [];
    practiceAnswers = [];
    currentPracticeIndex = 0;
    
    // 사용된 단어 추적
    const usedWords = new Set();
    
    for (let i = 0; i < numQuestions; i++) {
        // 아직 사용하지 않은 단어 선택
        const availableWords = currentLesson.words.filter(w => !usedWords.has(w.indonesian));
        if (availableWords.length === 0) break;
        
        const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];
        usedWords.add(randomWord.indonesian);
        
        // 오답 선택
        const wrongWords = currentLesson.words
            .filter(w => w.indonesian !== randomWord.indonesian)
            .sort(() => Math.random() - 0.5)
            .slice(0, 2);
        
        const options = [randomWord, ...wrongWords].sort(() => Math.random() - 0.5);
        
        practiceQuestions.push({
            word: randomWord,
            options: options
        });
    }
    
    // 첫 번째 문제 표시
    showCurrentPracticeQuestion();
    
    document.getElementById('prev-card-btn').style.display = 'none';
    document.getElementById('next-card-btn').style.display = 'none';
    document.getElementById('complete-lesson-btn').style.display = 'none';
}

// 현재 연습 문제 표시
function showCurrentPracticeQuestion() {
    if (currentPracticeIndex >= practiceQuestions.length) {
        // 모든 문제 완료
        showPracticeResults();
        return;
    }
    
    const question = practiceQuestions[currentPracticeIndex];
    const questionNum = currentPracticeIndex + 1;
    const totalQuestions = practiceQuestions.length;
    
    document.getElementById('practice-question').textContent = 
        `문제 ${questionNum}/${totalQuestions}: "${question.word.korean}"을 인도네시아어로 말하면?`;
    
    const optionsDiv = document.getElementById('practice-options');
    optionsDiv.innerHTML = '';
    
    question.options.forEach(option => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'practice-option';
        optionBtn.textContent = option.indonesian;
        optionBtn.onclick = () => checkAnswer(optionBtn, option, question.word);
        optionsDiv.appendChild(optionBtn);
    });
    
    document.getElementById('practice-feedback').textContent = '';
    document.getElementById('practice-feedback').className = 'practice-feedback';
    
    // 다음 문제 버튼 숨기기
    const nextQuestionBtn = document.getElementById('next-question-btn');
    if (nextQuestionBtn) {
        nextQuestionBtn.style.display = 'none';
    }
}

// 연습 결과 표시
function showPracticeResults() {
    const correctCount = practiceAnswers.filter(a => a.correct).length;
    const totalQuestions = practiceQuestions.length;
    const accuracy = Math.round((correctCount / totalQuestions) * 100);
    
    const optionsDiv = document.getElementById('practice-options');
    optionsDiv.innerHTML = `
        <div class="practice-results">
            <h3>연습 완료! 🎉</h3>
            <p>정답: ${correctCount}/${totalQuestions}</p>
            <p>정확도: ${accuracy}%</p>
        </div>
    `;
    
    document.getElementById('practice-feedback').textContent = 
        accuracy >= 70 ? '훌륭합니다! 레슨을 완료할 수 있습니다.' : '조금 더 연습이 필요해요. 다시 시도해보세요!';
    document.getElementById('practice-feedback').className = `practice-feedback ${accuracy >= 70 ? 'correct' : 'incorrect'}`;
    
    // 레슨 완료 버튼 표시 (정확도 70% 이상일 때만)
    if (accuracy >= 70) {
        document.getElementById('complete-lesson-btn').style.display = 'block';
    } else {
        // 다시 시도 버튼 추가
        const retryBtn = document.createElement('button');
        retryBtn.className = 'btn btn-secondary';
        retryBtn.textContent = '다시 시도';
        retryBtn.style.marginTop = '15px';
        retryBtn.onclick = () => {
            showPractice();
        };
        optionsDiv.appendChild(retryBtn);
    }
}

// 정답 확인
function checkAnswer(selectedBtn, selectedOption, correctWord) {
    const options = document.querySelectorAll('.practice-option');
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    const isCorrect = selectedOption.indonesian === correctWord.indonesian;
    
    // 답안 저장
    practiceAnswers.push({
        correct: isCorrect,
        selected: selectedOption.indonesian,
        correctAnswer: correctWord.indonesian
    });
    
    if (isCorrect) {
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
    
    // 다음 문제 버튼 표시
    setTimeout(() => {
        const nextQuestionBtn = document.getElementById('next-question-btn');
        if (nextQuestionBtn) {
            nextQuestionBtn.style.display = 'block';
        } else {
            // 다음 문제 버튼 생성
            const optionsDiv = document.getElementById('practice-options');
            const nextBtn = document.createElement('button');
            nextBtn.id = 'next-question-btn';
            nextBtn.className = 'btn btn-primary';
            nextBtn.textContent = currentPracticeIndex + 1 < practiceQuestions.length ? '다음 문제' : '결과 보기';
            nextBtn.style.marginTop = '15px';
            nextBtn.style.width = '100%';
            nextBtn.onclick = () => {
                currentPracticeIndex++;
                showCurrentPracticeQuestion();
            };
            optionsDiv.appendChild(nextBtn);
        }
    }, 1000);
}

// 레슨 완료
function completeLesson() {
    if (!currentUser) return;
    if (!currentLesson) return;
    
    const userData = getUserData();
    if (!userData.completedLessons.includes(currentLesson.id)) {
        currentUser.completedLessons = currentUser.completedLessons || [];
        currentUser.completedLessons.push(currentLesson.id);
        saveUserData();
        updateXP(50);
    }
    
    // 학습 시간 업데이트
    if (currentUser.lessonStartTime) {
        const lessonTime = Date.now() - currentUser.lessonStartTime;
        currentUser.totalLearningTime = (currentUser.totalLearningTime || 0) + lessonTime;
        currentUser.lessonStartTime = null;
        saveUserData();
    }
    
    // 정확도 계산
    const correctCount = practiceAnswers.filter(a => a.correct).length;
    const totalQuestions = practiceQuestions.length;
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 100;
    
    // 마지막 완료한 레슨 ID 저장 (복습하기를 위해)
    lastCompletedLessonId = currentLesson.id;
    
    document.getElementById('xp-earned').textContent = '+50';
    document.getElementById('accuracy').textContent = `${accuracy}%`;
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
    // currentLesson이 없으면 저장된 레슨 ID로 복원 시도
    if (!currentLesson && lastCompletedLessonId) {
        // 모든 레슨에서 해당 ID 찾기
        for (const categoryKey in lessonsData) {
            const category = lessonsData[categoryKey];
            const lesson = category.lessons.find(l => l.id === lastCompletedLessonId);
            if (lesson) {
                currentLesson = lesson;
                break;
            }
        }
    }
    
    // 여전히 currentLesson이 없으면 경고
    if (!currentLesson) {
        alert('레슨 정보를 찾을 수 없습니다. 다시 레슨을 선택해주세요.');
        showScreen('home-screen');
        return;
    }
    
    // 먼저 화면 전환
    showScreen('learn-screen');
    
    // 카드 인덱스 초기화
    currentCardIndex = 0;
    
    // 카드와 연습 섹션 초기화
    document.getElementById('learning-card').style.display = 'block';
    document.getElementById('practice-section').style.display = 'none';
    document.getElementById('pronunciation-section').style.display = 'none';
    
    // 약간의 지연 후 카드 표시 (화면 전환 완료 후)
    setTimeout(() => {
        showCard();
        updateLessonProgress();
    }, 100);
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

// 마이페이지
document.getElementById('mypage-btn').addEventListener('click', () => {
    showMyPage();
});

document.getElementById('back-from-mypage').addEventListener('click', () => {
    showScreen('home-screen');
});

// 마이페이지 표시
function showMyPage() {
    if (!currentUser) {
        showScreen('auth-screen');
        return;
    }
    
    // 학습한 단어 수 계산
    const completedLessons = currentUser.completedLessons || [];
    let totalWords = 0;
    completedLessons.forEach(lessonId => {
        for (const categoryKey in lessonsData) {
            const category = lessonsData[categoryKey];
            const lesson = category.lessons.find(l => l.id === lessonId);
            if (lesson) {
                totalWords += lesson.words.length;
                break;
            }
        }
    });
    
    // 학습 시간 계산 (분 단위)
    const totalLearningTime = currentUser.totalLearningTime || 0;
    const learningMinutes = Math.floor(totalLearningTime / 60000);
    const learningHours = Math.floor(learningMinutes / 60);
    const displayTime = learningHours > 0 
        ? `${learningHours}시간 ${learningMinutes % 60}분`
        : `${learningMinutes}분`;
    
    // 통계 업데이트
    document.getElementById('total-words').textContent = totalWords;
    document.getElementById('completed-lessons-count').textContent = completedLessons.length;
    document.getElementById('learning-time').textContent = displayTime;
    document.getElementById('total-xp').textContent = currentUser.xp || 0;
    
    // 카테고리별 진행 상황 표시
    const progressContainer = document.getElementById('progress-by-category');
    progressContainer.innerHTML = '';
    
    for (const categoryKey in lessonsData) {
        const category = lessonsData[categoryKey];
        const categoryLessons = category.lessons;
        const completedInCategory = categoryLessons.filter(l => 
            completedLessons.includes(l.id)
        ).length;
        const totalInCategory = categoryLessons.length;
        const progressPercent = totalInCategory > 0 
            ? Math.round((completedInCategory / totalInCategory) * 100) 
            : 0;
        
        const progressItem = document.createElement('div');
        progressItem.className = 'category-progress-item';
        progressItem.innerHTML = `
            <div class="category-progress-header">
                <span class="category-progress-name">${category.title}</span>
                <span class="category-progress-count">${completedInCategory}/${totalInCategory}</span>
            </div>
            <div class="category-progress-bar">
                <div class="category-progress-fill" style="width: ${progressPercent}%"></div>
            </div>
        `;
        progressContainer.appendChild(progressItem);
    }
    
    showScreen('mypage-screen');
}

// 학습 진행 초기화
function resetProgress() {
    if (!currentUser) return;
    
    if (confirm('정말로 모든 학습 진행 상황을 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
        currentUser.completedLessons = [];
        currentUser.xp = 0;
        currentUser.weeklyXP = 0;
        currentUser.monthlyXP = 0;
        currentUser.totalLearningTime = 0;
        currentUser.lessonStartTime = null;
        saveUserData();
        updateUserDisplay();
        showMyPage();
        alert('학습 진행 상황이 초기화되었습니다.');
    }
}

document.getElementById('reset-progress-btn').addEventListener('click', resetProgress);

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

// 제목 클릭 시 홈 화면으로 이동
document.getElementById('app-title').addEventListener('click', () => {
    if (currentUser) {
        showScreen('home-screen');
    }
});

// 초기화
if (checkSession()) {
    // 세션이 있으면 자동 로그인됨
} else {
    showScreen('auth-screen');
}
