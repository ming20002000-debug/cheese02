# 여름 노래 월드컵 (여돌 그룹 vs 남돌 그룹)

여자 아이돌 여름 노래 vs 남자 아이돌 여름 노래로 진행되는 개인용 이상형 월드컵입니다. (v5: 공식 뮤직비디오 위주 + 사용자 지정 링크로 다수 교체)
순수 HTML/CSS/JS로만 만들어져 있어서 별도 설치 없이 GitHub Pages에 바로 올릴 수 있습니다.

## 파일 구성

```
index.html   화면 구조
style.css    디자인
config.js    사이트 제목 / 선택 가능한 강수 설정
data.js      후보(여름 노래 무대) 데이터  ← 보통 이 파일만 수정하면 됩니다
script.js    토너먼트 진행 로직 (건드릴 필요 없음)
```

## 후보 데이터 수정하기 (`data.js`)

`data.js`를 열면 아래와 같은 형태의 배열이 있습니다.

```js
{ id: "f01", name: "Red Velvet", group: "3세대 · 2014.08 데뷔", song: "Red Flavor", gender: "female", youtubeId: "k_VlIR4gTkg", start: 0 },
```

| 필드 | 설명 |
|---|---|
| `id` | 다른 항목과 겹치지 않는 고유 값 |
| `name` | 화면에 표시될 이름 (여기서는 그룹명) |
| `group` | 세대 · 데뷔년월 (표시용, 없으면 `""`) |
| `song` | 곡 제목 (표시용, 없으면 `""`) |
| `gender` | `"female"`(여돌 그룹) 또는 `"male"`(남돌 그룹) — 이 값으로 구분합니다 |
| `youtubeId` | 유튜브 영상 주소의 `v=` 뒤 11자리 코드 |
| `start` | 영상이 몇 초부터 재생될지 |

## 현재 들어있는 데이터

- 여돌 32곡, 남돌 32곡, 총 64곡 — 64강까지 진행할 수 있습니다
- 대부분 각 곡의 **공식 뮤직비디오(Official MV)**로 채웠습니다
- 예외 4곡은 정식 MV가 아니거나 다른 형식의 영상입니다 (`data.js` 주석에도 표시):
  - **ZEROBASEONE** — SWEAT: 정식 MV 대신 'Special Summer Video'로 발매되어 그 영상을 사용
  - **TXT** — Our Summer: 디지털 싱글이라 정식 MV가 없어 소속사 공식 채널의 'selfie ver.' 영상으로 대체
  - **사자보이즈 (Saja Boys)** — Soda Pop: 사용자 지정 링크로 교체하면서 'Official Lyric Video'(Sony Pictures Animation)로 바뀜, 정식 MV 아님
  - **SUPER JUNIOR** — Devil: 사용자 지정 링크로 교체하면서 SMTOWN의 'Performance Video'로 바뀜, 정식 MV 아님
- 뮤직비디오는 그룹의 대표 공식 콘텐츠라 무대 직캠에서 겪었던 국내 재생 차단 문제가 거의 없습니다

## 설정 바꾸기 (`config.js`)

- `siteTitle`, `siteSubtitle` : 제목/부제목 문구
- `roundOptions` : 시작 화면에서 고를 수 있는 강수 목록 (기본 8/16/32/64)
- `defaultRound` : 시작 화면에 기본으로 선택되어 있는 강수

## 대결 매칭 방식

- 강수를 선택하면 후보 데이터 중 여돌/남돌 그룹에서 정확히 절반씩 무작위로 뽑아 대진을 만듭니다.
- 매 라운드마다 여돌 vs 남돌 매칭을 최대한 만들고, 인원이 안 맞을 경우에만 동성 그룹끼리 대결합니다. 홀수로 남으면 한 팀은 자동으로 다음 라운드에 진출합니다(부전승).
- 여돌 vs 남돌 매칭에서는 항상 화면 왼쪽 = 여돌, 오른쪽 = 남돌로 고정됩니다.

## GitHub Pages로 배포하기

1. 이 폴더 전체를 새 GitHub 저장소에 올립니다(push).
2. 저장소의 **Settings → Pages**로 들어갑니다.
3. **Branch**를 배포할 브랜치(보통 `main`)와 루트 폴더(`/`)로 지정하고 저장합니다.
4. 잠시 후 `https://<계정이름>.github.io/<저장소이름>/` 주소로 접속하면 바로 사용할 수 있습니다.
