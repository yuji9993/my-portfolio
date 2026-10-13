/*
 * 작품을 추가할 때 이 배열에 새 항목을 넣으세요. 앞에 넣을수록 먼저 보입니다.
 * 편집 영상: video: 'assets/my-film.mp4' (현재 파일들은 기획서와 일러스트입니다.)
 * 썸네일: cover, 설명 이미지: gallery, 내려받을 파일: downloads
 * 경로는 index.html을 기준으로 작성합니다. 상세 수정법은 README.md를 참고하세요.
 */
window.PORTFOLIO_PROJECTS = [
  {
    id: "millie",
    category: "film",
    title: "밀리의서재",
    subtitle: "일상에 이어지는 독서의 순간",
    label: "광고 역기획 · 팀 프로젝트",
    cover: "assets/millie-cover.webp",
    english: "A story that stays with you",
    description:
      "기존 광고의 메시지와 연출을 분석하고, 워킹맘의 하루를 따라가는 캠페인을 제안했습니다. 바쁜 저녁에도 아이와 함께하는 독서가 이어지도록 15초의 이야기를 구성했습니다.",
    format: "광고 역기획 · 26쪽",
    role: "콘텐츠 구성·표현 방식 공동 분석",
    scope: "팀 프로젝트 / 신규 캠페인 제안",
    intent:
      "“읽는 방법은 달라져도, 독서는 계속되니까.” 바쁜 일상에서도 독서가 이어질 수 있다는 메시지를 중심으로, 서비스의 기능과 생활 속 장면을 연결했습니다.",
    direction:
      "바쁜 저녁 → 독서의 어려움 → 오디오북으로 전환 → 함께하는 시간 → 메시지 완성. 15초의 흐름 안에서 상황과 감정, 기능을 차례로 전달하도록 기획했습니다.",
    note: "첨부된 자료는 팀 광고 역기획서입니다. 배유지의 참여 영역은 콘텐츠 구성 및 표현 방식 공동 분석이며, 캠페인 이미지는 제안서에 수록된 시안입니다.",
    gallery: [
      {
        src: "assets/millie-23.webp",
        caption: "새로운 편집·연출 방식 — 오디오북 편 시안",
      },
      {
        src: "assets/millie-24.webp",
        caption: "15초 장면 구성 — 바쁜 저녁에서 함께하는 독서로",
      },
      {
        src: "assets/millie-21.webp",
        caption: "네 가지 생활 장면을 연결한 시리즈 구성",
      },
      {
        src: "assets/millie-20.webp",
        caption: "워킹맘의 하루를 따라가는 스토리형 광고 제안",
      },
      {
        src: "assets/millie-09.webp",
        caption: "기존 광고의 콘텐츠와 메시지 분석",
      },
      { src: "assets/millie-01.webp", caption: "광고 캠페인 역기획서 표지" },
    ],
    downloads: [
      {
        label: "전체 기획서 보기",
        url: "documents/millie-planning.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "vitro",
    category: "film",
    title: "VITRO",
    subtitle: "움직임으로 전하는 기술의 차이",
    label: "홍보영상 기획 · 팀 프로젝트",
    cover: "assets/vitro-cover.webp",
    english: "Feel the movement",
    description:
      "배드민턴화의 기능을 실사 동작과 데이터 그래픽으로 보여주는 홍보영상 제안입니다. 기능을 설명하는 영상과 실제 착화 경험을 듣는 인터뷰 영상, 두 방향으로 구성했습니다.",
    format: "영상 제작 제안서 · 29쪽",
    role: "영상 제작 제안서 공동 작성",
    scope: "배유지 · 이혜정 · 금나현 / 팀 작업",
    intent:
      "텍스트만으로 전달하기 어려운 착지, 안정성, 접지의 차이를 플레이 동작과 연결했습니다. 제품의 기술적 특징을 보는 사람이 직관적으로 이해하도록 촬영과 그래픽을 함께 설계했습니다.",
    direction:
      "오프닝 인터뷰와 준비 B-roll로 몰입을 만들고, 실제 플레이·기능별 디테일·데이터 HUD로 전개합니다. 이후 사용자의 반응과 감성적인 엔딩으로 마무리하는 8단계 스토리보드입니다.",
    note: "제공된 파일은 영상 제작 제안서입니다. 이미지와 데이터 그래픽은 촬영·연출 방향을 설명하는 기획 자료이며, 완성된 편집 영상이 아닙니다.",
    gallery: [
      {
        src: "assets/vitro-11.webp",
        caption: "실제 플레이 촬영 — 동작과 제품 기능의 연결",
      },
      {
        src: "assets/vitro-08.webp",
        caption: "오프닝부터 엔딩까지, 기능성 영상 8단계 스토리보드",
      },
      {
        src: "assets/vitro-20.webp",
        caption: "실사 촬영과 생성형 AI·3D CG 연계 방향",
      },
      {
        src: "assets/vitro-22.webp",
        caption: "직접 신고, 움직이고, 이야기하는 체험형 인터뷰",
      },
      {
        src: "assets/vitro-01.webp",
        caption: "배드민턴화 홍보영상 제작 제안서 표지",
      },
    ],
    downloads: [
      {
        label: "전체 제안서 보기",
        url: "documents/vitro-planning.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "etude",
    category: "design",
    title: "ETUDE",
    subtitle: "한 가지 컬러, 두 가지 분위기",
    label: "상세페이지 기획 · 비주얼 시안",
    cover: "assets/etude-cover.webp",
    english: "One color, two moods",
    description:
      "컬러 틴트와 투명 글로스로 완성하는 두 가지 립 무드. 듀오 픽싱 틴트의 특징을 부드러운 색감과 비교 구성으로 정리한 상세페이지 기획입니다.",
    format: "상세페이지 구성안 · 24쪽",
    role: "정보 흐름 · 카피 · 비주얼 구성",
    scope: "뷰티 / 듀오 픽싱 틴트",
    intent:
      "사용자의 립 메이크업 고민에서 출발해 두 제형의 특징과 차이를 전달합니다. 한 가지 컬러가 마무리 방식에 따라 달라지는 모습을 SOFT LOOK과 GLOW LOOK으로 정리했습니다.",
    direction:
      "제품 소개와 고민 제시 → 컬러·글로스의 개별 특징 → 비교 → 활용법 → 컬러 선택. 각 단계의 설명이 겹치지 않도록, 구매 판단에 필요한 순서로 배치했습니다.",
    note: "기획서에 담긴 레퍼런스와 제작 시안을 함께 보여줍니다. 상세페이지의 완성 결과가 아닌 구성·디자인 계획 자료입니다.",
    gallery: [
      {
        src: "assets/etude-05.webp",
        caption: "듀오 구성 설명 — 컬러 틴트와 글로스의 역할",
      },
      {
        src: "assets/etude-03.webp",
        caption: "제품 핵심 소개 — 한 가지 컬러, 두 가지 분위기",
      },
      { src: "assets/etude-08.webp", caption: "두 가지 마무리의 비교 구성" },
      {
        src: "assets/etude-10.webp",
        caption: "제품의 구조와 사용 경험을 설명하는 구성",
      },
      { src: "assets/etude-13.webp", caption: "컬러 선택을 돕는 상세 구성" },
      { src: "assets/etude-02.webp", caption: "표지의 무드와 비주얼 방향" },
    ],
    downloads: [
      {
        label: "전체 구성안 보기",
        url: "documents/etude-planning.pdf",
        type: "pdf",
      },
    ],
  },
  {
    id: "ryan",
    category: "illustration",
    title: "Ryan",
    subtitle: "부드러운 형태, 작은 빛의 차이",
    label: "Illustrator · 캐릭터 재현 연습",
    cover: "assets/ryan-cover.webp",
    english: "A study of form and light",
    description:
      "둥근 얼굴과 표정의 비례를 관찰하고, 색의 변화와 명암으로 입체감을 표현한 Adobe Illustrator 연습 작업입니다.",
    format: "벡터 일러스트 · AI",
    role: "형태 재현 · 그라데이션 · 명암",
    scope: "개인 연습 / 기존 캐릭터 재현",
    intent:
      "단순한 형태 안에서도 캐릭터를 알아볼 수 있는 비례와 표정의 특징을 살리는 데 집중했습니다.",
    direction:
      "외곽 실루엣과 얼굴 요소를 분리하고, 그라데이션으로 빛의 방향과 볼륨을 표현했습니다. 원본 아트보드에는 참고 이미지가 함께 들어 있습니다.",
    note: "기존 캐릭터 ‘라이언’을 재현한 학습 작업입니다. 캐릭터 자체의 창작·소유권을 주장하지 않습니다.",
    gallery: [
      {
        src: "assets/ryan-artboard.webp",
        caption: "Illustrator 원본 아트보드 — 라이언 재현 연습",
      },
    ],
    downloads: [
      {
        label: "Illustrator 원본 받기",
        url: "documents/ryan-illustration.ai",
        type: "ai",
      },
    ],
  },
  {
    id: "pikachu",
    category: "illustration",
    title: "Pikachu",
    subtitle: "선과 색면으로 완성하는 표정",
    label: "Illustrator · 캐릭터 재현 연습",
    cover: "assets/pikachu-cover.webp",
    english: "Lines with personality",
    description:
      "귀와 꼬리의 실루엣, 검은 윤곽선과 노란 색면의 대비를 관찰하며 캐릭터의 인상과 자세를 표현했습니다.",
    format: "벡터 일러스트 · AI",
    role: "윤곽선 · 색면 분리 · 음영",
    scope: "개인 연습 / 기존 캐릭터 재현",
    intent:
      "곡선과 각진 실루엣의 차이를 살리고, 캐릭터의 특징이 또렷하게 읽히도록 형태를 정리했습니다.",
    direction:
      "부위별 색면과 외곽선을 나누고, 밝고 어두운 면으로 몸의 볼륨과 자세를 표현했습니다. 작업 과정이 남아 있는 원본 아트보드와 AI 파일을 함께 수록했습니다.",
    note: "기존 캐릭터 ‘피카츄’를 재현한 학습 작업입니다. 캐릭터 자체의 창작·소유권을 주장하지 않습니다.",
    gallery: [
      {
        src: "assets/pikachu-artboard.webp",
        caption: "Illustrator 원본 아트보드 — 피카츄 재현 연습",
      },
    ],
    downloads: [
      {
        label: "Illustrator 원본 받기",
        url: "documents/pikachu-illustration.ai",
        type: "ai",
      },
    ],
  },
];
