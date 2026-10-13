# VS Code에서 시작하기

1. ZIP 파일을 먼저 압축 해제합니다.
2. Visual Studio Code에서 파일 → 폴더 열기를 누릅니다.
3. index.html이 들어 있는 yuji-portfolio 폴더를 선택합니다.
4. index.html, styles.css, script.js, projects.js를 클릭해 코드를 편집합니다.
5. 탐색기에서 index.html을 더블클릭하면 기본 브라우저에서 열립니다.
6. 코드를 수정한 뒤 Ctrl+S로 저장하고 브라우저를 새로고침합니다.

HTML 파일만 따로 옮기지 말고 assets와 documents 폴더도 함께 보관하세요.
설치 명령이나 npm 빌드는 필요하지 않습니다.
About에 새로 넣은 작업 공간 사진까지 포함된 버전입니다.
사이트 화면과 동작은 유지하고 CSS 줄바꿈만 보기 편하게 정리했습니다.

---

# YUJI — Stories in Motion

배유지의 영상편집·기획·비주얼 디자인 포트폴리오입니다.
첨부 레퍼런스의 사진 중심 레이아웃, 초록색 상단바, 중앙 제목, 가로 작품 슬라이드를 참고했습니다.

## 파일 구조

- `index.html`: 화면 구조와 소개 문구
- `styles.css`: 색상, 여백, 레이아웃, 반응형 스타일
- `script.js`: 슬라이드, 드래그, 분류 필터, 프로젝트 상세 창
- `projects.js`: 작품 정보. 작품을 추가할 때 주로 수정할 파일입니다.
- `assets/`: 실제 사용할 이미지와 글꼴
- `documents/`: 첨부받은 전체 PDF와 Illustrator 원본

빌드나 설치 없이 쓸 수 있는 HTML/CSS/JavaScript 사이트입니다. `yuji-portfolio` 폴더를 VS Code로 열고 Live Server로 `index.html`을 실행하면 됩니다. 일반 웹 호스팅에는 `yuji-portfolio` 내부 파일을 업로드하세요.

## 영상 작품 추가

1. 영상과 대표 이미지를 `assets`에 넣습니다. 파일명은 영문과 숫자 사용을 권장합니다.
2. `projects.js` 배열 맨 앞에 다음 형태의 항목을 추가합니다.

```javascript
{
  id: 'my-first-film',
  category: 'film',
  title: '영상 작품 제목',
  subtitle: '작품을 소개하는 한 문장',
  label: '영상편집 · 개인 작업',
  cover: 'assets/my-first-film-cover.webp',
  video: 'assets/my-first-film.mp4',
  english: 'An English subtitle',
  description: '실제 작업 내용과 기획 의도를 작성합니다.',
  format: '영상 · 01:30',
  role: '촬영 · 편집 · 색보정',
  scope: '개인 작업',
  intent: '이 영상을 만든 이유',
  direction: '장면의 흐름과 편집에서 신경 쓴 점',
  note: '',
  downloads: []
},
```

`video` 값이 있으면 상세 창에 재생 컨트롤이 있는 영상 플레이어가 나타납니다. 자동 재생은 하지 않습니다. 영상이 클 경우 본인이 관리하는 HTTPS MP4 주소를 사용할 수 있습니다. 현재 호스팅의 개별 파일 제한은 배포 환경에서 확인하세요.

`category`는 `film`, `design`, `illustration` 중 하나입니다. 분류별 개수는 자동으로 계산됩니다. 기존 AI/PDF 원본 목록을 바꾸려면 `index.html`의 `archive-list`도 함께 수정합니다.

## 디자인 수정

`styles.css` 맨 위 `:root`에서 색을 바꿀 수 있습니다.

- `--sage`: 상단바와 푸터의 초록색
- `--paper`: 따뜻한 아이보리 바탕
- `--ink`: 본문 글자색
- `--gutter`: 좌우 여백

PC: 두 작품과 다음 작품의 일부가 보이는 가로 슬라이드입니다.
모바일: 한 작품과 다음 작품의 일부가 보입니다.
화살표·마우스 드래그·터치 스와이프·방향키를 지원합니다. View all 버튼으로 전체 그리드를 볼 수 있습니다.
프로젝트 상세 창은 Escape 키로 닫을 수 있습니다.

## 수록 자료와 표시

현재 받은 자료는 완성 영상이 아닌 기획서 3개와 캐릭터 일러스트 2개입니다. 작품별 표기와 상세 설명에서 이를 구분했습니다. 밀리의서재와 비트로는 팀 프로젝트로 표시했습니다. 에뛰드 기획서에는 레퍼런스 이미지와 제작 시안이 함께 들어 있습니다. 라이언과 피카츄는 기존 캐릭터를 재현한 연습 작업입니다.

메인 사진은 사용자가 지정한 두 번째 첨부 이미지입니다. 본인 인물 사진이나 본인의 영상 결과물로 표기하지 않았습니다.
글꼴은 Cormorant Garamond와 시스템 한글 글꼴을 사용합니다. 제공된 PDF/AI 원본은 변경하지 않고 첨부합니다.

## 확인 범위

JavaScript 구문, HTML 내부 경로, 데이터의 이미지·원본 파일 연결을 확인했습니다.
이 환경에는 지원되는 브라우저 제어 기능이 없어 실제 브라우저 화면과 터치 동작은 직접 검수하지 못했습니다.
