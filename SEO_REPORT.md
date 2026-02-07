# 🔍 SEO Performance Report (검색 엔진 최적화 리포트)

## 1. 메타 데이터 구조 (Metadata Structure)
`src/app/layout.tsx`에서 Next.js `generateMetadata` API를 사용하여 동적으로 메타태그를 생성합니다.

- **Title**: `더 노블 성형외과 | 하이엔드 의료 뷰티 솔루션` (브랜드명 + 핵심 키워드)
- **Description**: `강남구 도산대로 위치, 안티에이징, 눈, 코 성형 전문...` (지역 + 주요 시술 + 신뢰 포인트)
- **Keywords**: `성형외과`, `안티에이징`, `눈성형`, `코성형`, `강남성형외과`, `리프팅`

## 2. 시맨틱 마크업 (Semantic Markup)
검색 엔진이 페이지 구조를 쉽게 이해할 수 있도록 HTML5 시맨틱 태그를 사용했습니다.

| 컴포넌트 | 태그 | 역할 |
|---|---|---|
| `<Hero>` | `<section>` + `<h1>` | 페이지의 가장 중요한 주제 (슬로건) |
| `<ExpertiseSection>` | `<section>` + `<h2>` | 의사 프로필 및 전문성 소개 |
| `<MedicalServiceGrid>` | `<section>` + `<h3>` | 각 시술 항목의 제목 |
| `<BookingCTA>` | `Assuming role="complementary"` | 예약 유도 (보조 정보) |

## 3. 성능 최적화 (Core Web Vitals)
- **LCP (Largest Contentful Paint)**: Hero 섹션의 배경 이미지에 `priority` 속성을 부여하여 즉시 로딩되도록 최적화했습니다.
- **CLS (Cumulative Layout Shift)**: 이미지의 `width`, `height` 또는 `fill` 속성을 사용하여 레이아웃 이동을 방지했습니다.
- **Mobile Friendly**: 반응형 디자인을 적용하여 모바일 검색 결과에 우선 노출됩니다.

## 4. 권장 사항
1. **오픈 그래프 (Open Graph)**: 소셜 미디어 공유를 위해 `og:image`를 `public` 폴더에 추가하고 `layout.tsx`에 설정하는 것을 권장합니다.
2. **사이트맵 (sitemap.xml)**: 실제 도메인 연결 후 `next-sitemap` 패키지를 사용하여 사이트맵을 자동 생성하는 것이 좋습니다.
