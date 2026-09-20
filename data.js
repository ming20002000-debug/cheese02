// ============================================================
// 여름 노래 월드컵 후보 데이터 (v5 — 사용자 지정 링크로 다수 교체)
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
// 교체했었고, 이후 재생 문제 및 사용자 지정 링크로 여러 곡을 다시 교체했습니다.
// 4곡만 진짜 MV가 없거나 다른 형식(가사영상/퍼포먼스 영상)이라 예외로 표시했습니다
// (ZEROBASEONE, TXT, 사자보이즈, SUPER JUNIOR — 아래 주석 참고).
// ============================================================

const CANDIDATES = [
  // ---- 여돌 (female) — 32곡 ----
  { id: "f01", name: "fromis_9", group: "4세대 · 2018.01 데뷔", song: "Stay This Way", gender: "female", youtubeId: "JC6budcACNE", start: 0 }, // Official MV
  { id: "f02", name: "Girls' Generation", group: "2세대 · 2007.08 데뷔", song: "FOREVER 1", gender: "female", youtubeId: "Qpf26PtBXgo", start: 0 }, // MV
  { id: "f03", name: "Red Velvet", group: "3세대 · 2014.08 데뷔", song: "빨간 맛 (Red Flavor)", gender: "female", youtubeId: "WyiIGEHQP8o", start: 0 }, // MV
  { id: "f04", name: "BLACKPINK", group: "3세대 · 2016.08 데뷔", song: "마지막처럼 (As If It's Your Last)", gender: "female", youtubeId: "Amq-qlqbjYA", start: 0 }, // M/V
  { id: "f05", name: "SISTAR", group: "2세대 · 2010.06 데뷔", song: "Loving U", gender: "female", youtubeId: "oL2AlXWVbKU", start: 0 }, // MV — 사용자 지정 링크로 교체 (기존: fromis_9 Supersonic)
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
  { id: "f24", name: "Kiss of Life", group: "5세대 · 2023.07 데뷔", song: "Sticky (스티키)", gender: "female", youtubeId: "IajeQM00yfE", start: 0 }, // Official MV — 사용자 지정 링크로 교체 (기존: Hearts2Hearts Lemon Tang)
  { id: "f25", name: "MAMAMOO", group: "3세대 · 2014.06 데뷔", song: "너나 해 (Egotistic)", gender: "female", youtubeId: "pHtxTSiPh5I", start: 0 }, // MV
  { id: "f26", name: "H1-KEY", group: "4세대 · 2022.09 데뷔", song: "여름이었다 (It Was Summer)", gender: "female", youtubeId: "1NeLQ-Wl5QU", start: 0 }, // Official M/V — 사용자 지정 링크로 교체 (기존: Girl's Day 말해줘요)
  { id: "f27", name: "NewJeans", group: "4세대 · 2022.07 데뷔", song: "Bubble Gum", gender: "female", youtubeId: "ft70sAYrFyY", start: 88 }, // Official MV — 사용자 지정 링크로 교체 (기존: AOA Heart Attack)
  { id: "f28", name: "Girl's Day", group: "2세대 · 2010.07 데뷔", song: "달링 (Darling)", gender: "female", youtubeId: "QB4dQcxgJPY", start: 0 }, // MV — 사용자 지정 링크로 교체 (기존: KARA STEP)
  { id: "f29", name: "RAINBOW", group: "2세대 · 2009.01 데뷔", song: "선샤인 (SUNSHINE)", gender: "female", youtubeId: "h-3V0FwPzes", start: 0 }, // M/V — 사용자 지정 링크로 교체 (기존: Wonder Girls Like This)
  { id: "f30", name: "aespa", group: "4세대 · 2020.11 데뷔", song: "Better Things", gender: "female", youtubeId: "gfk3QLU1x0E", start: 0 }, // MV — 사용자 지정 링크로 교체 (기존: After School Bang!)
  { id: "f31", name: "IVE", group: "4세대 · 2021.12 데뷔", song: "SUMMER FESTA", gender: "female", youtubeId: "9adnWMIVHQ0", start: 0 }, // MV — 사용자 지정 링크로 교체 (기존: WJSN 부탁해)
  { id: "f32", name: "(G)I-DLE", group: "4세대 · 2018.05 데뷔", song: "클락션 (Klaxon)", gender: "female", youtubeId: "rTKqSmX9XhQ", start: 0 }, // Official MV — 사용자 지정 링크로 교체 (기존: 선미 Siren)

  // ---- 남돌 (male) — 32곡 ----
  { id: "m01", name: "WINNER", group: "3세대 · 2014.08 데뷔", song: "ISLAND", gender: "male", youtubeId: "kRj4toENrnA", start: 0 }, // M/V
  { id: "m02", name: "EXO", group: "3세대 · 2012.04 데뷔", song: "Love Me Right", gender: "male", youtubeId: "RuqaVryDRd0", start: 0 }, // MV
  { id: "m03", name: "CRAVITY", group: "4세대 · 2020.04 데뷔", song: "SET NET GO?!", gender: "male", youtubeId: "IV6yrrLyhCA", start: 0 }, // MV — 사용자 지정 링크로 교체 (기존: WINNER I LOVE U)
  { id: "m04", name: "BTOB", group: "2세대 · 2012.03 데뷔", song: "너 없인 안 된다", gender: "male", youtubeId: "RW9sb48p5fA", start: 0 }, // Official Music Video
  { id: "m05", name: "SHINee", group: "2세대 · 2008.05 데뷔", song: "View", gender: "male", youtubeId: "UF53cptEE5k", start: 0 }, // MV
  { id: "m06", name: "ATEEZ", group: "4세대 · 2018.10 데뷔", song: "WAVE", gender: "male", youtubeId: "FIInyEWWW-s", start: 0 }, // Official MV
  { id: "m07", name: "사자보이즈 (Saja Boys)", group: "가상 그룹 · 2025 (애니메이션)", song: "Soda Pop", gender: "male", youtubeId: "983bBbJx0Mk", start: 0 }, // 사용자 지정 링크로 교체 — Official Lyric Video (넷플릭스 '케이팝 데몬 헌터스', Sony Pictures Animation), 정식 MV가 아닌 가사영상 — 예외 1
  { id: "m08", name: "THE BOYZ", group: "3세대 · 2017.12 데뷔", song: "D.D.D", gender: "male", youtubeId: "bTTczRe-Pj0", start: 0 }, // MV
  { id: "m09", name: "SUPER JUNIOR", group: "1세대 · 2005.11 데뷔", song: "Devil", gender: "male", youtubeId: "LzujUrSZihc", start: 58 }, // 사용자 지정 링크로 교체 (기존: ATEEZ UTOPIA) — SMTOWN 'Performance Video', 정식 MV가 아님 — 예외 2
  { id: "m10", name: "SF9", group: "3세대 · 2016.10 데뷔", song: "여름 향기가 날 춤추게 해 (Summer Breeze)", gender: "male", youtubeId: "bU5K0kqaAME", start: 0 }, // MUSIC VIDEO
  { id: "m11", name: "Stray Kids", group: "4세대 · 2018.03 데뷔", song: "Time Out", gender: "male", youtubeId: "ukIGxgdbqqI", start: 0 }, // M/V
  { id: "m12", name: "Wanna One", group: "프로젝트 그룹 · 2017.08 데뷔", song: "에너제틱 (Energetic)", gender: "male", youtubeId: "EVaV7AwqBWg", start: 0 }, // MV
  { id: "m13", name: "SEVENTEEN", group: "3세대 · 2015.05 데뷔", song: "아주 Nice (Very Nice)", gender: "male", youtubeId: "J-wFp43XOrA", start: 0 }, // MV
  { id: "m14", name: "GOT7", group: "3세대 · 2014.01 데뷔", song: "Just Right (딱 좋아)", gender: "male", youtubeId: "vrdk3IGcau8", start: 0 }, // M/V — 사용자 지정 링크로 교체 (기존: SHINee Dream Girl)
  { id: "m15", name: "NCT WISH", group: "5세대 · 2024.02 데뷔", song: "Surf", gender: "male", youtubeId: "1pyO6oNmACs", start: 0 }, // MV
  { id: "m16", name: "NCT DREAM", group: "3세대 · 2016.08 데뷔", song: "We Young", gender: "male", youtubeId: "h3aP1cxwCyk", start: 0 }, // MV
  { id: "m17", name: "B1A4", group: "2세대 · 2011.04 데뷔", song: "이게 무슨 일이야 (What's Going On)", gender: "male", youtubeId: "3PZhjDO5Xbc", start: 0 }, // MV
  { id: "m18", name: "Block B", group: "3세대 · 2012.04 데뷔", song: "YESTERDAY", gender: "male", youtubeId: "2cFPQjXo4CQ", start: 0 }, // Official Music Video
  { id: "m19", name: "NCT DREAM", group: "3세대 · 2016.08 데뷔", song: "Beatbox", gender: "male", youtubeId: "bagFQCTHXy8", start: 0 }, // MV — 기존 '고래(Dive Into You)'는 재생 불가 + 정식 MV 자체가 없는 곡이라 여름 느낌의 다른 곡으로 교체
  { id: "m20", name: "THE BOYZ", group: "3세대 · 2017.12 데뷔", song: "THRILL RIDE", gender: "male", youtubeId: "mwCeeVU_2Jo", start: 0 }, // MV
  { id: "m21", name: "RIIZE", group: "5세대 · 2023.09 데뷔", song: "Impossible", gender: "male", youtubeId: "Ey53EQhkLY8", start: 0 }, // MV
  { id: "m22", name: "TWS", group: "5세대 · 2024.03 데뷔", song: "hey! hey!", gender: "male", youtubeId: "EawadPfQmf4", start: 0 }, // Official MV
  { id: "m23", name: "Block B", group: "3세대 · 2012.04 데뷔", song: "HER", gender: "male", youtubeId: "eUHRw7g7KuM", start: 0 }, // MV
  { id: "m24", name: "CRAVITY", group: "4세대 · 2020.04 데뷔", song: "PARTY ROCK", gender: "male", youtubeId: "MrH-Aqtlak4", start: 0 }, // MV
  { id: "m25", name: "BTS", group: "3세대 · 2013.06 데뷔", song: "Dynamite", gender: "male", youtubeId: "gdZLi9oWNZg", start: 0 }, // Official MV
  { id: "m26", name: "TXT", group: "4세대 · 2019.03 데뷔", song: "Our Summer", gender: "male", youtubeId: "M_iYqRNS_o0", start: 0 }, // 재생 불가 링크 교체 — 이 곡은 정식 MV가 없어(디지털 싱글) 소속사 공식 채널의 'Our Summer (selfie ver.)' 영상으로 대체 — 예외 3
  { id: "m27", name: "ONF", group: "3세대 · 2017.08 데뷔", song: "바람이 분다 (Love Effect)", gender: "male", youtubeId: "Le9kDugaXRQ", start: 0 }, // Official Music Video
  { id: "m28", name: "ZEROBASEONE", group: "5세대 · 2023.07 데뷔", song: "SWEAT", gender: "male", youtubeId: "6J2tyiQ_V6s", start: 0 }, // 이 곡은 정식 MV 대신 'Special Summer Video'로 발매됨 — 예외 4
  { id: "m29", name: "B1A4", group: "2세대 · 2011.04 데뷔", song: "Solo Day", gender: "male", youtubeId: "tBUDRysyuMI", start: 0 }, // MV
  { id: "m30", name: "B1A4", group: "2세대 · 2011.04 데뷔", song: "Rollin'", gender: "male", youtubeId: "cbBMwrdEIdc", start: 92 }, // MV (Full ver.) — 사용자 지정 링크로 교체 (기존: BOYNEXTDOOR Serenade)
  { id: "m31", name: "ONEUS", group: "4세대 · 2019.01 데뷔", song: "Life is Beautiful", gender: "male", youtubeId: "8FtD9nybAlo", start: 0 }, // MV
  { id: "m32", name: "TWS", group: "5세대 · 2024.03 데뷔", song: "내가 S면 넌 나의 N이 되어줘 (Plot Twist)", gender: "male", youtubeId: "NRgZuuwD2WY", start: 0 }, // Official MV
];
