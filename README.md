로컬 실행 방법: `npm run dev`

# Commit Type

## `태그: 제목`의 형태이며, :뒤에만 space가 있음에 유의한다.

- `Feat` : 새로운 기능 추가
- `Fix` : 버그 수정
- `Docs` : 문서 수정
- `Style` : 스타일 변경, 세미콜론 누락, 코드 변경이 없는 경우
- `Refactor` : 코드 리펙토링
- `Test` : 테스트 코드, 리펙토링 테스트 코드 추가
- `Chore` : 빌드 업무 수정, 패키지 매니저 수정, 기타 등

# 명명 규칙

- 폴더명
  - 직접적으로 컴포넌트들이 들어있지 않은 디렉토리 폴더명: `camelCase`
  - 직접적으로 컴포넌트들이 들어있는 디렉토리 폴더명: `PascalCase`
- 컴포넌트 명: `PascalCase`
  - 컴포넌트 명과 파일명은 일치시킨다.
  - 컴포넌트를 제외한 모든 태그들은 소문자
- className: `camelCase`
- js 함수, 변수, hook: `camelCase`
- asset 파일: 소문자
