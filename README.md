## 🎞 MINSGY CINEMA

영화 검색 사이트

```
🔍영화 검색 API를 통해 영화 목록을 확인 할 수 있어요.
🎟 즐겨찾기 기능을 이용해서 보고 싶은 영화를 저장해요.
🖱 즐겨찾기 리스트를 Drag&Drop해서 원하는 위치에 둘 수 있어요.(PC)
```

## 프로젝트 및 배포 URL

해당 [링크](https://minsgy-cinema-react.netlify.app/)를 통해 DEMO 확인이 가능합니다.

```text
  npm install
  yarn install
```

```text
  npm run start
  yarn start
```

## 기술 스택

- `TypeScript`와 `React 17`, `CRA(create-react-app)`을 활용했습니다.
- 클라이언트 상태 관리와 서버 상태를 분리하기 위해 `Recoil`과 `react-query`를 사용했습니다.
- `CSS-in-JS` 방식의 `styled-components`를 활용하였고, 전역 CSS 초기화를 위해 `styled-reset`을 활용했습니다.
- `craco`를 선택하여 CRA로 만들어진 프로젝트의 webpack 설정을 override해 `alias` 설정을 해주었습니다.

```json
  "typescript": "^4.6.3",
  "@craco/craco": "^6.4.3",
  "craco-alias": "^3.0.1",
  "react": "^17.0.2"
  "react-router-dom": "6.2.2",
  "recoil": "^0.7.0",
  "recoil-persist": "^4.1.0",
  "styled-components": "^5.3.5",
  "styled-reset": "^4.3.4",
  "axios": "^0.26.1",
  "recoil": "^0.6.1",
  "recoil-persist": "^4.1.0",
  "prettier": "^2.6.2"
  "eslint": "^8.13.0",
```

## 구현 리스트

### 필수 구현

- 앱은 하단 탭바를 가지며 총 두개의 하단 탭으로 구성됩니다.

  - [x] 검색, 즐겨찾기

- 앱 첫 진입 시 화면

  - [x] 검색 탭에서 시작합니다.
  - [x] 검색 탭은 상단에 검색 입력/검색 버튼 그리고 아래 부분은 검색 결과 화면이 노출됩니다.
  - [x] 처음 검색 결과 영역은 "검색 결과가 없습니다."로 노출됩니다.
  - [x] 검색어 입력박스 아래로 검색 결과가 노출됩니다.
  - [x] 한 줄에 하나의 영화를 노출하는 리스트 형 목록입니다. 스크롤 중이더라도 검색어 입력 박스는 함께 스크롤되지 않고 고정되어있습니다.
  - [x] 각 영화 아이템은 왼쪽에 영화 포스터 이미지, 오른쪽에 영화 제목, 연도, 타입이 표시됩니다.
  - [x] 검색결과 목록을 최하단으로 내렸을 때 API를 이용하여 다음페이지를 불러와 노출
  - [x] 검색결과가 없는 경우 "검색 결과가 없습니다."로 노출됩니다.

- 검색 결과 중 영화 클릭

  - [x] 선택 창이 뜨며 "즐겨찾기" or "취소" 를 선택 가능합니다.
  - [x] "즐겨찾기"를 선택 시 해당 영화정보를 즐겨찾기 탭에서 조회할 수 있습니다.
  - [x] "즐겨찾기"된 데이터는 로컬에 저장하여, 다음에 접속 했을 때, 즐겨찾기 조회가 되어야 합니다.
  - [x] 이미 즐겨찾기 한 영화를 선택한 경우 "즐겨찾기" 대신 "즐겨찾기 해제"를 노출합니다.
  - [x] 즐겨찾기 된 영화는 검색 목록에서 알아볼 수 있도록 아이콘 혹은 텍스트등을 노출해줍니다.

- 하단 즐겨찾기 탭 선택
  - [x] "내 즐겨찾기"라는 Title이 노출됩니다.
  - [x] 현재까지 즐겨찾기한 영화들의 목록이 노출됩니다.
  - [x] 디자인은 검색결과 탭과 동일합니다.
  - [x] 영화를 클릭 시 선택 창이 뜨며 "즐겨찾기 해제" or "취소"를 선택 가능합니다.
  - [x] "즐겨찾기 해제"를 누르는 순간 해당 영화는 목록에서 즉시 제거됩니다.
  - [x] 즐겨찾기 탭은 별도의 페이징 없이 한 번에 모든 데이터를 로딩합니다.

### 선택 구현

- 즐겨찾기 목록 수정
  - [x] 즐겨찾기한 영화의 순서를 Drag&Drop으로 조절 가능
  - PC만 적용, Mobile은 적용되지 않음.
- [x] 영화 포스트 이미지 최적화를 위해 `Lazy Loading` 기능 추가
- [x] 메모이제이션을 활용한 렌더링 최적화
- [x] 사용자 경험 향상을 위한 `Skeleton UI` 적용
- [x] 배포 URL 추가

## 구현 상세 내용

1. 리스트 데이터 최적화를 위한 무한스크롤 구현

   - 제공되는 영화 리스트 API가 페이징 단위로 제공하여 데이터를 최적화하기 위해 적용한 기능입니다.
   - `Intersection Observer`를 활용하여 `Target DOM`을 지정하였고, viewport를 추적하여 영화리스트 API를 호출하는 방식으로 최적화했습니다.
   - `useIntersectionObserver`을 활용해 `Target`을 관리했습니다.
   - `react-query`에서 제공하는 `useInfiniteQuery` hook을 활용해 서버 데이터를 캐싱 처리를 하여 효율적인 fetching을 진행했습니다. 그리고 cache를 통해 이전 Scroll로 돌아갈 수 있습니다.
   - `Skeleton` 컴포넌트를 활용해 Fetch 로딩을 나타냈습니다.

   ```tsx
   const {
     status,
     data: movies,
     isLoading,
     hasNextPage,
     fetchNextPage,
     isFetchingNextPage,
   } = useInfiniteQuery(
     // 검색 값이 바뀔때마다 Refetch
     REACT_QUERY_KEY.SEARCH_MOVIES(searchKeyword),
     async ({ pageParam = { page: 1, query: searchKeyword } }) => {
       const data = await fetchGetMovies({ keyword: pageParam.query, page: pageParam.page });
       return data;
     },
     {
       //
       getNextPageParam: (lastPage) => {
         const nextParams = lastPage.isLast
           ? false
           : { query: searchKeyword, page: lastPage.page + 1 };
         return nextParams;
       },
       staleTime: 60 * 1000 * 5, // @NOTE: 5분간 refetch 방지
       retry: 0,
     },
   );

   // Intersection Observer Hook을 통해 useInfinityQuery를 관리
   useIntersectionObserver({
     target: hasMoreNextRef, // Ref 지정
     onIntersect: fetchNextPage, // Target 발견 시, 다음 페이지 fetching
     enabled: !!hasNextPage, // hasNextPage가 undefined일 경우, boolean 상태 값으로 변경
   });

   // 밑과 같이 Target을 Ref로 지정하여 사용.
   <ObserverBox ref={hasMoreNextRef} />;
   ```

   <img src="https://user-images.githubusercontent.com/60251579/163796770-81c52395-982b-4d38-ab5f-70875b7b081b.png" width="250"/>

2. 즐겨찾기 전역 상태 관리 및 로컬 스토리지(persist) 활용

   - 즐겨찾기를 클라이언트 단에서 관리하기 때문에 `Recoil`로 상태 관리를 했습니다.
   - 즐겨찾기 데이터를 로컬에 저장하기 위해서 `LocalStorage`를 선택했습니다.
   - 주어진 조건에 있어서 브라우저 종료 후에도 조회가 된다고 생각하여 `SessionStorage` 대신 선택했습니다.
   - 즐겨찾기 목록을 `Recoil` 전역 상태로 관리하여 `LocalStorage` 로직을 따로 구현해주어야 했지만, 여러 렌더링 이슈를 고려해서 `recoil-persist` 플러그인을 활용해 `LocalStorage`에 저장합니다.
   - `Recoil` 상태를 `Storage`로 저장하여 브라우저 종료 후에도 상태가 유지되도록 합니다.

   ```jsx
   import { recoilPersist } from 'recoil-persist';
   import { atom } from 'recoil';

   const { persistAtom } = recoilPersist();

   export const favoritesState = atom<IMovie[]>({
     key: 'favoritesState',
     default: [],
     effects_UNSTABLE: [persistAtom],
   });
   ```

3. 영화 포스터 이미지 최적화하기

   - 영화 포스터 이미지를 많이 불러오는 만큼 최적화가 필요하다고 생각했습니다. `Lazy` 기능을 적용하여 `Image` 컴포넌트를 구성했습니다.
   - `Intersection Observer`를 활용하여 Image 컴포넌트가 viewport에 들어오기 전까지 이미지를 불러오지 않습니다.
   - 이렇게 하여 서버로부터 필요한 자원만 요청받고, 사용자가 사용하지 않는 데이터는 요청받지 않습니다.
   - 추가적으로 브라우저 렌더링 시간을 줄여주어 프로세스 시간을 단축 시킬 수 있습니다.

   ```tsx
   // example
   <ImageContainer>
     <Image mode="fill" src={posterUrl} alt="영화 포스터" lazy />
   </ImageContainer>;

   // Lazy 적용
   useEffect(() => {
     if (!lazy) {
       // Lazy가 false라면, 바로 로딩 시작.
       setIsLoaded(true);
       return;
     }
     // 만약 Lazy가 true라면, IntersectionObserver를 사용하여 로딩 시작.
     const handleLoadImage = () => setIsLoaded(true);
     const imgElement = imgRef.current;

     // imgElement가 지정되었다면, 로딩 이벤트를 적용
     imgElement && imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
     return () => {
       imgElement && imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
     };
   }, [lazy]);
   ```

   ![image](https://user-images.githubusercontent.com/60251579/163798534-a35a4e7b-ce84-4599-8d97-7e0d8cd13c7b.png)

4. 즐겨찾기 선택 창/표시 아이콘

   - `Modal` 컴포넌트를 활용하여 클릭 이후, 즐겨찾기 선택창이 띄어집니다.
   - `Modal` 컴포넌트는 `useClickAway` hook을 활용하여 Dim 처리 된 부분을 클릭해도 닫히게 됩니다.
   - 즐겨찾기는 카드 오른쪽 상단 하트 아이콘으로 표현하였고, 영화 리스트에 있어서 현재 즐겨찾기 목록에 포함된다면 표시하게 됩니다.

   ```tsx
   return movies?.map((movie: IMovie, index: number) => {
     // @NOTE: 즐겨찾기 리스트에서 하나라도 imdbID 값이 같다면 true
     const isFavorite = favorites.some((favorite: IMovie) => favorite.imdbID === movie.imdbID);
      <MovieItem
          ...
          isFavorite={isFavorite}
          ...
      />
    }
   ```

   ![image](https://user-images.githubusercontent.com/60251579/163799552-d0be6487-e642-4a77-9be2-f942e9783817.png)

5. QueryString을 활용한 검색 구현

   - 기존에는 Recoil을 활용하여 검색 키워드를 저장하려고 했지만, 새로고침을 하게되면 State가 저장되지 않았습니다.
   - 여러 포탈 사이트를 참고하여 QueryString 변화에 맞게 검색되어 QueryString을 통해 검색하도록 로직을 구현했습니다.
   - `useSearchParams` hook을 활용하여 `q`에 대한 dataset을 뽑아 API를 실행하는 방법으로 구현했습니다.
   - 그렇게 지정 한 QueryString을 사용하기 위해 `useQueryString` custom hook을 구현하여 입력받은 key의 Querystring을 반환받아 구현했습니다.

   ```tsx
   // SearchForm.tsx
   const [_, setSearchParams] = useSearchParams();
   setSearchParams({ tab: 'search', q: keyword });
   // URL이 변경된다 -> ?tab=search&q={검색어}

   // 사용 example
   const searchKeyword = useQueryString(SEARCH_ID); // 새로고침해도 사용할 수 있도록 QueryString 이용
   ```

6. 즐겨찾기 Drag&Drop 구현 (추가구현)

   - 관련 라이브러리를 사용하지 않고 드래그앤드롭을 구현해보았습니다.
   - 즐겨찾기 탭에서만 사용 할 수 있도록 `draggable` 설정을 하였고, 관련 된 Drag&Drop API를 활용하여 구현했습니다.

   ```tsx
   // OnDrop 이벤트 활성화를 위해서 정의
   const onDragOver = useCallback((e: React.DragEvent<HTMLLIElement>) => {
     e.stopPropagation(); // 상위 element 이벤트 전파 방지
     e.preventDefault(); // 발생하는 이벤트는 사용 할 일이 없음.
   }, []);

   // 요소를 Dragging 할 때 발생하는 Event
   const onDragStart = useCallback(
     (e: React.DragEvent<HTMLLIElement>) => {
       const { position } = e.currentTarget.dataset;
       setDragMovieIndex(Number(position));
       e.currentTarget.classList.add('grabbing');
       e.dataTransfer.effectAllowed = 'move'; // Grab상태에서 끌어오는 데이터를 유지하는데 사용합니다. move 옵션으로 항목을 새위치로 옮길 수 있음.
     },
     [dragMovieIndex],
   );

   // onDrop 이후 발생하는 Event
   // 이벤트 종료 시에는 이벤트 클래스를 제거합니다.
   const onDragEnd = useCallback((e: React.DragEvent<HTMLLIElement>) => {
     e.currentTarget.classList.remove('grabbing');
     e.dataTransfer.dropEffect = 'move';
     setDragMovieIndex(null);
   }, []);

   // 요소 Dragging을 멈추고 발생하는 Event
   const onDrop = useCallback(
     (e: React.DragEvent<HTMLLIElement>) => {
       const grabIndex = dragMovieIndex;
       const dropIndex = Number(e.currentTarget.dataset.position);

       // 옮기려는 곳이 같거나, 이전 값이 존재하지 않는다면.
       if (grabIndex === dropIndex || grabIndex === null) {
         return;
       }

       const newFavorites = [...favorites];
       // 1. 옮기려는(dropIndex) 위치에서 1개의 요소를 제거하고, 옮기려는 데이터를 추가합니다.
       // 2. 반환 된 데이터는 삭제 된 데이터로 기존 dropIndex에 있던 아이템을 옮긴 데이터 index위치로 이동합니다
       newFavorites[grabIndex] = newFavorites.splice(dropIndex, 1, newFavorites[grabIndex])[0];
       setFavorites(newFavorites); // 교체 된 데이터를 업데이트합니다.
     },
     [dragMovieIndex],
   );

   // @NOTE: Event를 적용시킵니다.
   // 1. position(index)를 활용해 drag&drop한 element를 재배치합니다.
   // 2. draggable을 통해 즐겨찾기 탭에서만 가능하도록 설정합니다.
    return <ItemContainer
      draggable={draggable}
      data-position={position}
      onClick={onClickItem}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      onDragStart={_onDragStart}
      onDragOver={onDragOver}
      ...
    />
   ```

   ![Drag Drop](https://user-images.githubusercontent.com/60251579/163801231-465f39bc-ad69-454d-a6f7-4215c94afbc1.gif)

## 고민 한 점/아쉬운 점

1. React 18 사용 여부

   - React 18 버전이 나오면서 사용 할 지 말지 고민했지만 선택하지 않았습니다.
   - 먼저 사용하려고 했던 `react-query`가 지원하지 않았던 문제가 치명적이였습니다.
   - 그리고 18 버전에서 새로 제공하는 기능들에 대해 필요성을 느끼지 못했습니다. (`Suspence`, `SSR Component`)
   - 다른 라이브러리와의 호환성이 걱정되었습니다.
   - 결론은 위와 같은 이유로 기존 17 버전을 선택하게 되었습니다.

2. react-query + Recoil

   - 기존에 전역 상태 관리를 하면서 비동기 처리를 왜 이걸로 해야 하는 지? 전역 상태만을 관리해야하지 않나? 라는 점을 고민했습니다.
   - 그래서 서버로부터 받아오는 상태와 클라이언트 단의 상태 관리를 따로 하고자 해당 기술 스택을 사용하게 되었습니다.
   - `react-query`는 기본적으로 캐싱 기능도 잘 되어있어 fetching 효율이 좋았고, 기존 비동기 로직을 작성하면서 불필요하게 길어진 코드를 개선할 수 있었습니다.
   - `Recoil`의 경우 프로젝트 규모가 커다랗지 않아 선택했던 상태 관리 라이브러리입니다. 제시해주신 요건으로 Recoil을 권장해서 선택하기도 했지만, 심플하게 관리할 수 있어서 성공적인 선택이였습니다.

3. 이미지 최적화와 사용자 입장에서의 생각

   - Reflow을 방지하기 위해 width, height 값을 고정할까 고민했습니다.
   - 그렇지만 포스터 크기가 다양하다보니 고정 된 값을 지정하게 된다면 포스터 해상도가 희미해지는 문제가 발생했습니다.
   - 그래서 사용자에게 정보는 확실하게 전달하는 게 맞다 생각하여 `Lazy Loading`으로 타협해 이미지 최적화를 했습니다.
   - 제공되는 이미지 포스터의 크기를 고려하여 가변적인 이미지가 나오도록 따로 높이 값을 지정하지 않고 깨지지 않는 이미지를 제공합니다.
   - 해당 API가 이미지가 많이 나와서 어떻게 이미지를 최적화할 지 고민을 많이했었습니다.

4. API key를 어떻게 감추지?

   - 기존 로컬에서는 `.env`를 통해 환경변수 처리를 했지만 전달해주신 조건에서 바로 `Clone`받고 실행 될 수 있는 환경을 원하셔서 어떻게 할 지 고민했습니다. 결국 그냥 명시를 하는 방향으로 작성했습니다.

5. `LocalStorage` 대신 `recoil-persist`로 구현한 이유

   - recoil Persist 라이브러리는 recoil state 상태를 storage에 저장하게 되고, storage의 데이터가 자동으로 동기화되서 recoil 상태를 유지할 수 있었습니다.
   - recoil-persist를 선택한 이유는, 전역 상태를 로컬스토리지로 관리해도 되지만, 렌더링을 위해서 추적해야 할 때 추가적인 분기 코드도 작성하고 성능 문제로도 이어질 수 있다고 생각했고 불필요한 코드들이 필요 없어져서 선택하게 되었습니다.
   - 또한 라이브러리 업데이트도 꾸준히 해서 유지보수에도 괜찮을 것이라 생각했고 없어진다고 해도 크게 복잡해질 기능이 아니라 생각해 선택했습니다.

6. 무한스크롤 구현을 무엇으로 할까?

   - 고민한 방법으로는 `Intersection Observer`와 `Scroll Event` 방식이였습니다.
   - 제가 고려할 점은 `주어진 환경에 있어서 실행 가능한 지?`, `어떤 것이 효율이 더 좋을 지?` 였습니다. 결론적으로는 Observer를 선택했습니다.
   - ScrollEvent는 특정 지점까지 스크롤 되었을 때, 다음 콘텐츠를 불러오는 방식입니다. Throttle과 같은 최적화 작업이 있어야 이벤트 호출에 있어서 최적화가 된다는 단점이 있었습니다. 또한 싱글 스레드로 작동하여 성능 상으로도 좋지 않습니다.
   - 그렇지만 observer의 경우, 메인 스레드와 별개로 비동기적으로 실행되어서 Scroll보다 훨씬 빠른 퍼포먼스를 보여주어서 선택했습니다.
   - 성능과 크로스 브라우징을 고려해도 Observer를 사용 안 할 이유가 없어서 선택했습니다.
   - 추가적으로 `react-query`에서 제공하는 `useInfinityQuery` hook을 활용했습니다.
     - 자동으로 캐싱해주는 점에 있어서 최적화적인 부분에서 편리했음.
     - 이전 스크롤 위치 캐싱, fetching 데이터 캐싱 기능 등..

7. Drag&Drop PC 버전만 구현

   - 기존 drag와 관련 된 API는 PC 환경에서만 작동되어 Mobile 환경에서도 구현하려고 했습니다.
   - 이와 관련한 메소드로 onTouchCancel, onTouchEnd, onTouchMove, onTouchStart를 대입하여 사용하려고 했지만 event 객체와 관련된 `dataTransfer` 요소가 Mobile에서는 존재하지 않는 문제가 발생했습니다.
   - 시간 관계 상 더 추가하지 못하고 이정도로 마무리하게 되어 아쉬움이 남는 기능이였습니다.

8. `useInfinityQuery`의 에러 처리

   - `useInfinityQuery`에 에러 처리를 전역적으로 Toast 메세지 방식을 적용할 지 어떻게 보여줄 지 고민했지만 시간이 별로 없어 구현하지 못했습니다.
