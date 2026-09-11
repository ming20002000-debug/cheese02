// ============================================================
// 여름 노래 월드컵 후보 데이터 (v4 — 전부 공식 뮤직비디오(MV)로 교체)
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
// 이번 버전은 오디오/가사영상 대신 각 곡의 공식 뮤직비디오(Official MV)로 전부
// 교체했습니다. 딱 2곡만 진짜 MV가 없어서 예외로 다른 영상을 썼습니다 (아래 주석 참고).
// ============================================================

const CANDIDATES = [
  // ---- 여돌 (female) — 32곡 ----
  { id: "f01", name: "fromis_9", group: "4세대 · 2018.01 데뷔", song: "Stay This Way", gender: "female", youtubeId: "JC6budcACNE", start: 0 }, // Official MV
  { id: "f02", name: "Girls' Generation", group: "2세대 · 2007.08 데뷔", song: "FOREVER 1", gender: "female", youtubeId: "Qpf26PtBXgo", start: 0 }, // MV
  { id: "f03", name: "Red Velvet", group: "3세대 · 2014.08 데뷔", song: "빨간 맛 (Red Flavor)", gender: "female", youtubeId: "WyiIGEHQP8o", start: 0 }, // MV
  { id: "f04", name: "BLACKPINK", group: "3세대 · 2016.08 데뷔", song: "마지막처럼 (As If It's Your Last)", gender: "female", youtubeId: "Amq-qlqbjYA", start: 0 }, // M/V
  { id: "f05", name: "fromis_9", group: "4세대 · 2018.01 데뷔", song: "Supersonic", gender: "female", youtubeId: "wDkVNI5dyWM", start: 0 }, // Official MV
  { id: "f06", name: "권은비", group: "SOLO", song: "Underwater", gender: "female", youtubeId: "ny1YiHlX_iE", start: 0 }, // MV (WJSN 권은비 솔로)
  { id: "f07", name: "Oh My Girl", group: "3세대 · 2015.04 데뷔", song: "Dolphin", gender: "female", youtubeId: "ThEkQD-p71Q", start: 0 }, // Official Video
  { id: "f08", name: "TWICE", group: "3세대 · 2015.10 데뷔", song: "Alcohol-Free", gender: "female", youtubeId: "XA2YEHn-A8Q", start: 0 }, // M/V
  { id: "f09", name: "TWICE", group: "3세대 · 2015.10 데뷔", song: "Dance the Night Away", gender: "female", youtubeId: "Fm5iP0S1z9w", start: 0 }, // M/V
  { id: "f10", name: "fromis_9", group: "4세대 · 2018.01 데뷔", song: "LIKE YOU BETTER", gender: "female", youtubeId: "r1QapH1SIAI", start: 0 }, // MV
  { id: "f11", name: "fromis_9", group: "4세대 · 2018.01 데뷔", song: "WE GO", gender: "female", youtubeId: "HM6UpQZvbhY", start: 0 }, // M/V
  { id: "f12", name: "GFriend", group: "3세대 · 2015.01 데뷔", song: "여름여름해 (Sunny Summer)", gender: "female", youtubeId: "9iPLjmz3_U4", start: 0 }, // MV
  { id: "f13", name: "KiiiKiii", group: "5세대 · 2025.05 데뷔", song: "DANCING ALONE", gender: "female", youtubeId: "u5wMLWs6LSs", start: 0 }, // MV
  { id: "f14", name: "Apink", group: "2세대 · 2011.04 데뷔", song: "Remember", gender: "female", youtubeId: "bXlrqQKbjSM", start: 0 }, // MV
  { id: "f15", name: "GFriend", group: "3세대 · 2015.01 데뷔", song: "열대야 (Fever)", gender: "female", youtubeId: "Zll7O1v63aY", start: 0 }, // MV
  { id: "f16", name: "SISTAR", group: "2세대 · 2010.06 데뷔", song: "Touch My Body", gender: "female", youtubeId: "Q33SoblaZbU", start: 0 }, // MV
  { id: "f17", name: "Oh My Girl", group: "3세대 · 2015.04 데뷔", song: "여름이 들려 (Summer Comes)", gender: "female", youtubeId: "buW27gNb3DA", start: 0 }, // MV
  { id: "f18", name: "NMIXX", group: "4세대 · 2022.02 데뷔", song: "Party O'Clock", gender: "female", youtubeId: "Rd2wppggYxo", start: 0 }, // M/V
  { id: "f19", name: "Girls' Generation", group: "2세대 · 2007.08 데뷔", song: "PARTY", gender: "female", youtubeId: "HQzu7NYlZNQ", start: 0 }, // MV
  { id: "f20", name: "SISTAR", group: "2세대 · 2010.06 데뷔", song: "Shake It", gender: "female", youtubeId: "x9-TIy7WPQI", start: 0 }, // MV
  { id: "f21", name: "Brave Girls", group: "2세대 · 2011.03 데뷔", song: "치맛바람 (ChiMatBaRam)", gender: "female", youtubeId: "kA2H_Sjhnjs", start: 0 }, // MV
  { id: "f22", name: "Lovelyz", group: "3세대 · 2014.11 데뷔", song: "여름 한 조각 (Wag-zak)", gender: "female", youtubeId: "uer7k-jkk78", start: 0 }, // Official MV
  { id: "f23", name: "SISTAR", group: "2세대 · 2010.06 데뷔", song: "I Swear", gender: "female", youtubeId: "ktEEjk3Xy3s", start: 0 }, // MV
  { id: "f24", name: "Hearts2Hearts", group: "5세대 · 2025.02 데뷔", song: "Lemon Tang", gender: "female", youtubeId: "xHS8nA1NSWE", start: 0 }, // Official M/V
  { id: "f25", name: "MAMAMOO", group: "3세대 · 2014.06 데뷔", song: "너나 해 (Egotistic)", gender: "female", youtubeId: "pHtxTSiPh5I", start: 0 }, // MV
  { id: "f26", name: "Girl's Day", group: "2세대 · 2010.07 데뷔", song: "말해줘요 (Please Tell Me)", gender: "female", youtubeId: "zmqF2YmIYaI", start: 0 }, // 이 곡은 정식 MV가 없어(디지털 싱글) 방송 무대 영상으로 대체 — 예외 1
  { id: "f27", name: "AOA", group: "3세대 · 2012.08 데뷔", song: "심쿵해 (Heart Attack)", gender: "female", youtubeId: "74U7wm-dq5M", start: 0 }, // MV
  { id: "f28", name: "KARA", group: "2세대 · 2007.03 데뷔", song: "STEP", gender: "female", youtubeId: "m6tf4Ce-ZyQ", start: 0 }, // MV
  { id: "f29", name: "Wonder Girls", group: "2세대 · 2007.02 데뷔", song: "Like This", gender: "female", youtubeId: "7EZTUYwjWBs", start: 0 }, // M/V
  { id: "f30", name: "After School", group: "2세대 · 2009.01 데뷔", song: "Bang!", gender: "female", youtubeId: "GS0OqnnARNY", start: 0 }, // MV
  { id: "f31", name: "WJSN", group: "3세대 · 2016.02 데뷔", song: "부탁해 (Save Me, Save You)", gender: "female", youtubeId: "2wOBbRu3OOc", start: 0 }, // MV
  { id: "f32", name: "선미 (Sunmi)", group: "SOLO", song: "사이렌 (Siren)", gender: "female", youtubeId: "TNWMZIf7eSg", start: 0 }, // MV (전 원더걸스 선미 솔로)

  // ---- 남돌 (male) — 32곡 ----
  { id: "m01", name: "WINNER", group: "3세대 · 2014.08 데뷔", song: "ISLAND", gender: "male", youtubeId: "kRj4toENrnA", start: 0 }, // M/V
  { id: "m02", name: "EXO", group: "3세대 · 2012.04 데뷔", song: "Love Me Right", gender: "male", youtubeId: "RuqaVryDRd0", start: 0 }, // MV
  { id: "m03", name: "WINNER", group: "3세대 · 2014.08 데뷔", song: "I LOVE U", gender: "male", youtubeId: "waMAVn2hHBM", start: 0 }, // M/V
  { id: "m04", name: "BTOB", group: "2세대 · 2012.03 데뷔", song: "너 없인 안 된다", gender: "male", youtubeId: "RW9sb48p5fA", start: 0 }, // Official Music Video
  { id: "m05", name: "SHINee", group: "2세대 · 2008.05 데뷔", song: "View", gender: "male", youtubeId: "UF53cptEE5k", start: 0 }, // MV
  { id: "m06", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "WAVE", gender: "male", youtubeId: "FIInyEWWW-s", start: 0 }, // Official MV
  { id: "m07", name: "사자보이즈 (Saja Boys)", group: "가상 그룹 · 2025 (애니메이션)", song: "Soda Pop", gender: "male", youtubeId: "JZVWMISiI64", start: 0 }, // Official Music Video (넷플릭스 '케이팝 데몬 헌터스')
  { id: "m08", name: "THE BOYZ", group: "3세대 · 2017.12 데뷔", song: "D.D.D", gender: "male", youtubeId: "bTTczRe-Pj0", start: 0 }, // MV
  { id: "m09", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "UTOPIA", gender: "male", youtubeId: "p3cb7FzSAaI", start: 0 }, // Official MV (한국어 버전)
  { id: "m10", name: "SF9", group: "3세대 · 2016.10 데뷔", song: "여름 향기가 날 춤추게 해 (Summer Breeze)", gender: "male", youtubeId: "bU5K0kqaAME", start: 0 }, // MUSIC VIDEO
  { id: "m11", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "Time Out", gender: "male", youtubeId: "ukIGxgdbqqI", start: 0 }, // M/V
  { id: "m12", name: "Wanna One", group: "프로젝트 그룹 · 2017.08 데뷔", song: "에너제틱 (Energetic)", gender: "male", youtubeId: "EVaV7AwqBWg", start: 0 }, // MV
  { id: "m13", name: "SEVENTEEN", group: "3세대 · 2015.05 데뷔", song: "아주 Nice (Very Nice)", gender: "male", youtubeId: "J-wFp43XOrA", start: 0 }, // MV
  { id: "m14", name: "SHINee", group: "2세대 · 2008.05 데뷔", song: "Dream Girl", gender: "male", youtubeId: "vhxjEXDAy6s", start: 0 }, // MV
  { id: "m15", name: "NCT WISH", group: "5세대 · 2024.02 데뷔", song: "Surf", gender: "male", youtubeId: "1pyO6oNmACs", start: 0 }, // MV
  { id: "m16", name: "NCT DREAM", group: "3세대 · 2016.08 데뷔", song: "We Young", gender: "male", youtubeId: "h3aP1cxwCyk", start: 0 }, // MV
  { id: "m17", name: "B1A4", group: "2세대 · 2011.04 데뷔", song: "이게 무슨 일이야 (What's Going On)", gender: "male", youtubeId: "3PZhjDO5Xbc", start: 0 }, // MV
  { id: "m18", name: "Block B", group: "3세대 · 2012.04 데뷔", song: "YESTERDAY", gender: "male", youtubeId: "2cFPQjXo4CQ", start: 0 }, // Official Music Video
  { id: "m19", name: "NCT DREAM", group: "3세대 · 2016.08 데뷔", song: "고래 (Dive Into You)", gender: "male", youtubeId: "ynw8Pjw_N64", start: 0 }, // MV
  { id: "m20", name: "THE BOYZ", group: "3세대 · 2017.12 데뷔", song: "THRILL RIDE", gender: "male", youtubeId: "mwCeeVU_2Jo", start: 0 }, // MV
  { id: "m21", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Impossible", gender: "male", youtubeId: "Ey53EQhkLY8", start: 0 }, // MV
  { id: "m22", name: "TWS", group: "5세대 · 2024.03 데뷔", song: "hey! hey!", gender: "male", youtubeId: "EawadPfQmf4", start: 0 }, // Official MV
  { id: "m23", name: "Block B", group: "3세대 · 2012.04 데뷔", song: "HER", gender: "male", youtubeId: "eUHRw7g7KuM", start: 0 }, // MV
  { id: "m24", name: "CRAVITY", group: "4세대 · 2020.04 데뷔", song: "PARTY ROCK", gender: "male", youtubeId: "MrH-Aqtlak4", start: 0 }, // MV
  { id: "m25", name: "BTS", group: "3세대 · 2013.06 데뷔", song: "Dynamite", gender: "male", youtubeId: "gdZLi9oWNZg", start: 0 }, // Official MV
  { id: "m26", name: "TXT", group: "4세대 · 2019.03 데뷔", song: "Our Summer", gender: "male", youtubeId: "6RVsHGeo-3Y", start: 0 }, // MV
  { id: "m27", name: "ONF", group: "3세대 · 2017.08 데뷔", song: "바람이 분다 (Love Effect)", gender: "male", youtubeId: "Le9kDugaXRQ", start: 0 }, // Official Music Video
  { id: "m28", name: "ZEROBASEONE", group: "5세대 · 2023.07 데뷔", song: "SWEAT", gender: "male", youtubeId: "6J2tyiQ_V6s", start: 0 }, // 이 곡은 정식 MV 대신 'Special Summer Video'로 발매됨 — 예외 2
  { id: "m29", name: "B1A4", group: "2세대 · 2011.04 데뷔", song: "Solo Day", gender: "male", youtubeId: "tBUDRysyuMI", start: 0 }, // MV
  { id: "m30", name: "BOYNEXTDOOR", group: "5세대 · 2023.06 데뷔", song: "Serenade", gender: "male", youtubeId: "Uyq9OE8lIz8", start: 0 }, // Official MV
  { id: "m31", name: "ONEUS", group: "4세대 · 2019.01 데뷔", song: "Life is Beautiful", gender: "male", youtubeId: "8FtD9nybAlo", start: 0 }, // MV
  { id: "m32", name: "TWS", group: "5세대 · 2024.03 데뷔", song: "내가 S면 넌 나의 N이 되어줘 (Plot Twist)", gender: "male", youtubeId: "NRgZuuwD2WY", start: 0 }, // Official MV
];
