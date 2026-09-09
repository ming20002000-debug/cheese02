// ============================================================
// 여름 노래 월드컵 후보 데이터 (v3 — 직캠/뮤비 대신 "노래만 나오는" 오디오 영상으로 교체)
// ============================================================
// 이 배열 안의 항목을 자유롭게 추가 / 삭제 / 수정하세요.
// 앱 로직(script.js)은 절대 건드릴 필요 없이, 이 파일만 고치면 됩니다.
//
// [필드 설명]
//   id        : 다른 항목과 겹치지 않는 고유 값
//   name      : 화면에 표시될 이름 (그룹명 / 솔로 가수명)
//   group     : 세대 · 데뷔년월 (표시용)
//   song      : 곡 제목 (표시용)
//   gender    : "female"(여돌) 또는 "male"(남돌) — 이 값으로 구분합니다
//   youtubeId : 유튜브 영상 주소의 v= 뒤에 오는 11자리 코드
//   start     : 영상이 몇 초부터 재생될지 (기본 0)
//
// 이번 버전은 무대 직캠도, 뮤직비디오도 아닌 "노래만 나오는" 영상(Official Audio /
// 유튜브 자동생성 Topic 채널 오디오)으로만 채웠습니다. 순수 오디오 업로드라서
// 무대 직캠에서 겪었던 국내 방송사발 재생 차단 문제도 대부분 없습니다.
//
// 채널 신뢰도 참고:
//   - official-audio : 라벨/공식 채널이 올린 "(Official Audio)" 영상 (신뢰도 높음)
//   - topic-channel  : 유튜브가 자동 생성하는 "아티스트 - Topic" 오디오 채널 (신뢰도 높으나
//                       일부는 채널명을 직접 확인하지 못해 "미확인"으로 표시)
//   - lyric-video    : 공식/순수 오디오를 못 찾아 가사 영상으로 대체 (아래 주석에 표시)
//
// 8곡은 official audio / topic 채널 / 가사영상 어디에서도 찾지 못해 제외했습니다:
//   [여돌] 하이키 여름이었다, KISS OF LIFE Sticky, 씨스타 Loving U,
//          오마이걸 Dun Dun Dance, 레드벨벳 Power Up, 에이프릴 Now or Never,
//          aespa Better Things, 태연 Why
// ============================================================

const CANDIDATES = [
  // ---- 여돌 (female) — 24곡 ----
  { id: "f01", name: "fromis_9", group: "4세대 · 2018.01 데뷔", song: "Stay This Way", gender: "female", youtubeId: "NCar2TMzppA", start: 0 }, // official-audio (업로드 채널 미확인)
  { id: "f02", name: "Girls' Generation", group: "2세대 · 2007.08 데뷔", song: "FOREVER 1", gender: "female", youtubeId: "qSwQ8LajJT0", start: 0 }, // official-audio
  { id: "f03", name: "Red Velvet", group: "3세대 · 2014.08 데뷔", song: "빨간 맛 (Red Flavor)", gender: "female", youtubeId: "Y3DI2SojC2k", start: 0 }, // official-audio (업로드 채널 미확인)
  { id: "f04", name: "BLACKPINK", group: "3세대 · 2016.08 데뷔", song: "마지막처럼 (As If It's Your Last)", gender: "female", youtubeId: "gztMsjjxjIo", start: 0 }, // 순수 오디오를 못 찾아 공식 가사 영상으로 대체
  { id: "f05", name: "fromis_9", group: "4세대 · 2018.01 데뷔", song: "Supersonic", gender: "female", youtubeId: "nF5A1FOuHkQ", start: 0 }, // official-audio
  { id: "f06", name: "권은비", group: "SOLO", song: "Underwater", gender: "female", youtubeId: "W5gS2QjktVc", start: 0 }, // official-audio (WJSN 권은비 솔로)
  { id: "f07", name: "Oh My Girl", group: "3세대 · 2015.04 데뷔", song: "Dolphin", gender: "female", youtubeId: "V-fjVFoUmKw", start: 0 }, // official-audio (재업로드일 가능성 있어 확인 필요)
  { id: "f08", name: "TWICE", group: "3세대 · 2015.10 데뷔", song: "Alcohol-Free", gender: "female", youtubeId: "GGfCNVaRVVY", start: 0 }, // official-audio (한국어 버전)
  { id: "f09", name: "TWICE", group: "3세대 · 2015.10 데뷔", song: "Dance the Night Away", gender: "female", youtubeId: "xIUr_W0AxuU", start: 0 }, // official-audio
  { id: "f10", name: "fromis_9", group: "4세대 · 2018.01 데뷔", song: "LIKE YOU BETTER", gender: "female", youtubeId: "UqffWnCZsuw", start: 0 }, // official-audio
  { id: "f11", name: "fromis_9", group: "4세대 · 2018.01 데뷔", song: "WE GO", gender: "female", youtubeId: "ANXr9M1fCF0", start: 0 }, // official-audio
  { id: "f12", name: "GFriend", group: "3세대 · 2015.01 데뷔", song: "여름여름해 (Sunny Summer)", gender: "female", youtubeId: "1CZYtWN7QfY", start: 0 }, // topic-channel (채널 미확인)
  { id: "f13", name: "KiiiKiii", group: "5세대 · 2025.05 데뷔", song: "DANCING ALONE", gender: "female", youtubeId: "txhL5RzScw4", start: 0 }, // official-audio
  { id: "f14", name: "Apink", group: "2세대 · 2011.04 데뷔", song: "Remember", gender: "female", youtubeId: "0NdmoyaY9X4", start: 0 }, // official-audio (Full Audio)
  { id: "f15", name: "GFriend", group: "3세대 · 2015.01 데뷔", song: "열대야 (Fever)", gender: "female", youtubeId: "FDzYuXpyUTI", start: 0 }, // topic-channel (채널 미확인)
  { id: "f16", name: "SISTAR", group: "2세대 · 2010.06 데뷔", song: "Touch My Body", gender: "female", youtubeId: "Z60wVDC6nKM", start: 0 }, // official-audio
  { id: "f17", name: "Oh My Girl", group: "3세대 · 2015.04 데뷔", song: "여름이 들려 (Summer Comes)", gender: "female", youtubeId: "s_MDGRSDdoM", start: 0 }, // official-audio
  { id: "f18", name: "NMIXX", group: "4세대 · 2022.02 데뷔", song: "Party O'Clock", gender: "female", youtubeId: "ET9mYgp-9po", start: 0 }, // official-audio
  { id: "f19", name: "Girls' Generation", group: "2세대 · 2007.08 데뷔", song: "PARTY", gender: "female", youtubeId: "kBdxZyXgFZc", start: 0 }, // official-audio
  { id: "f20", name: "SISTAR", group: "2세대 · 2010.06 데뷔", song: "Shake It", gender: "female", youtubeId: "jBXLL0tADqs", start: 0 }, // official-audio
  { id: "f21", name: "Brave Girls", group: "2세대 · 2011.03 데뷔", song: "치맛바람 (ChiMatBaRam)", gender: "female", youtubeId: "QLLF9rhmCaQ", start: 0 }, // official-audio (MP3 Audio)
  { id: "f22", name: "Lovelyz", group: "3세대 · 2014.11 데뷔", song: "여름 한 조각 (Wag-zak)", gender: "female", youtubeId: "no3bL0h4U_Q", start: 0 }, // official-audio (Full Audio)
  { id: "f23", name: "SISTAR", group: "2세대 · 2010.06 데뷔", song: "I Swear", gender: "female", youtubeId: "N01jgYnEN9o", start: 0 }, // official-audio
  { id: "f24", name: "Hearts2Hearts", group: "5세대 · 2025.02 데뷔", song: "Lemon Tang", gender: "female", youtubeId: "ZFVzteG8CBI", start: 0 }, // official-audio

  // ---- 남돌 (male) — 32곡 ----
  { id: "m01", name: "WINNER", group: "3세대 · 2014.08 데뷔", song: "ISLAND", gender: "male", youtubeId: "2lPAg3srAO0", start: 0 }, // topic-channel (채널 미확인)
  { id: "m02", name: "EXO", group: "3세대 · 2012.04 데뷔", song: "Love Me Right", gender: "male", youtubeId: "r4ZPGfwqmI0", start: 0 }, // topic-channel (채널 미확인)
  { id: "m03", name: "WINNER", group: "3세대 · 2014.08 데뷔", song: "I LOVE U", gender: "male", youtubeId: "7RzkTxRzl0I", start: 0 }, // official-audio
  { id: "m04", name: "BTOB", group: "2세대 · 2012.03 데뷔", song: "너 없인 안 된다", gender: "male", youtubeId: "jikWCZUnGaw", start: 0 }, // topic-channel (채널 미확인)
  { id: "m05", name: "SHINee", group: "2세대 · 2008.05 데뷔", song: "View", gender: "male", youtubeId: "ElCSb3QdRhQ", start: 0 }, // official-audio (SM 산하 ScreaM Records)
  { id: "m06", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "WAVE", gender: "male", youtubeId: "QApC0Fvc17o", start: 0 }, // official-audio
  { id: "m07", name: "사자보이즈 (Saja Boys)", group: "가상 그룹 · 2025 (애니메이션)", song: "Soda Pop", gender: "male", youtubeId: "hAyPTJFgFEs", start: 0 }, // 넷플릭스 공식 가사 영상 (가상 그룹이라 순수 오디오 단독 업로드 없음)
  { id: "m08", name: "THE BOYZ", group: "3세대 · 2017.12 데뷔", song: "D.D.D", gender: "male", youtubeId: "lviJChi11Lg", start: 0 }, // topic-channel (채널 미확인)
  { id: "m09", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "UTOPIA", gender: "male", youtubeId: "wnnjxIs8aCA", start: 0 }, // 공식 오디오를 못 찾아 팬메이드 가사 영상으로 대체 (가장 불확실한 항목)
  { id: "m10", name: "SF9", group: "3세대 · 2016.10 데뷔", song: "여름 향기가 날 춤추게 해 (Summer Breeze)", gender: "male", youtubeId: "gyGCKrFhTA4", start: 0 }, // official-audio
  { id: "m11", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "Time Out", gender: "male", youtubeId: "ekn1ns3Urfo", start: 0 }, // official-audio
  { id: "m12", name: "Wanna One", group: "프로젝트 그룹 · 2017.08 데뷔", song: "에너제틱 (Energetic)", gender: "male", youtubeId: "-Oif1zcHV-4", start: 0 }, // topic-channel (채널 미확인)
  { id: "m13", name: "SEVENTEEN", group: "3세대 · 2015.05 데뷔", song: "아주 Nice (Very Nice)", gender: "male", youtubeId: "s3CjsNjiKyc", start: 0 }, // topic-channel (채널 미확인)
  { id: "m14", name: "SHINee", group: "2세대 · 2008.05 데뷔", song: "Dream Girl", gender: "male", youtubeId: "qX8jSxyRBgQ", start: 0 }, // topic-channel (채널 미확인)
  { id: "m15", name: "NCT WISH", group: "5세대 · 2024.02 데뷔", song: "Surf", gender: "male", youtubeId: "0hDfV1kHl1g", start: 0 }, // official-audio
  { id: "m16", name: "NCT DREAM", group: "3세대 · 2016.08 데뷔", song: "We Young", gender: "male", youtubeId: "7ZPF1ezmVjI", start: 0 }, // topic-channel (채널 미확인)
  { id: "m17", name: "B1A4", group: "2세대 · 2011.04 데뷔", song: "이게 무슨 일이야 (What's Going On)", gender: "male", youtubeId: "nTHkWxVhMI0", start: 0 }, // 공식 오디오를 못 찾아 팬메이드 가사 영상으로 대체
  { id: "m18", name: "Block B", group: "3세대 · 2012.04 데뷔", song: "YESTERDAY", gender: "male", youtubeId: "sdAKuA7Ui-U", start: 0 }, // 공식 오디오를 못 찾아 팬메이드 가사 영상으로 대체
  { id: "m19", name: "NCT DREAM", group: "3세대 · 2016.08 데뷔", song: "고래 (Dive Into You)", gender: "male", youtubeId: "hlrP9GXTx84", start: 0 }, // topic-channel (채널 미확인)
  { id: "m20", name: "THE BOYZ", group: "3세대 · 2017.12 데뷔", song: "THRILL RIDE", gender: "male", youtubeId: "LhBbCNaXOpc", start: 0 }, // topic-channel (채널 미확인)
  { id: "m21", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Impossible", gender: "male", youtubeId: "mVqvfA4B1j8", start: 0 }, // official-audio
  { id: "m22", name: "TWS", group: "5세대 · 2024.03 데뷔", song: "hey! hey!", gender: "male", youtubeId: "7SeI5FTCNJ4", start: 0 }, // official-audio
  { id: "m23", name: "Block B", group: "3세대 · 2012.04 데뷔", song: "HER", gender: "male", youtubeId: "g4pDuadNyzo", start: 0 }, // topic-channel (채널 미확인)
  { id: "m24", name: "CRAVITY", group: "4세대 · 2020.04 데뷔", song: "PARTY ROCK", gender: "male", youtubeId: "BRb_YgV36JI", start: 0 }, // topic-channel (채널 미확인)
  { id: "m25", name: "BTS", group: "3세대 · 2013.06 데뷔", song: "Dynamite", gender: "male", youtubeId: "OiMWFojB9Ok", start: 0 }, // official-audio
  { id: "m26", name: "TXT", group: "4세대 · 2019.03 데뷔", song: "Our Summer", gender: "male", youtubeId: "0NMMIT_L15Q", start: 0 }, // 공식 오디오를 못 찾아 팬메이드 가사 영상으로 대체
  { id: "m27", name: "ONF", group: "3세대 · 2017.08 데뷔", song: "바람이 분다 (Love Effect)", gender: "male", youtubeId: "njxtNRtHfeo", start: 0 }, // 공식 오디오를 못 찾아 팬메이드 가사 영상으로 대체
  { id: "m28", name: "ZEROBASEONE", group: "5세대 · 2023.07 데뷔", song: "SWEAT", gender: "male", youtubeId: "gFegtqx1j08", start: 0 }, // official-audio
  { id: "m29", name: "B1A4", group: "2세대 · 2011.04 데뷔", song: "Solo Day", gender: "male", youtubeId: "V2tEyVJEtXg", start: 0 }, // topic-channel (채널 미확인)
  { id: "m30", name: "BOYNEXTDOOR", group: "5세대 · 2023.06 데뷔", song: "Serenade", gender: "male", youtubeId: "ECgWPp8hvOs", start: 0 }, // topic-channel (채널 미확인)
  { id: "m31", name: "ONEUS", group: "4세대 · 2019.01 데뷔", song: "Life is Beautiful", gender: "male", youtubeId: "iXccxVPnJ0M", start: 0 }, // topic-channel (채널 미확인)
  { id: "m32", name: "TWS", group: "5세대 · 2024.03 데뷔", song: "내가 S면 넌 나의 N이 되어줘 (Plot Twist)", gender: "male", youtubeId: "fZqSGS1mRnw", start: 0 }, // topic-channel (채널 미확인)
];
