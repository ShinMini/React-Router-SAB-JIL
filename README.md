### HashRouter

* 음.. server로 전송해 client가 요청한 url을 전송하느 대신 customer의 hash주소에 값을 보존해둬, 뽑아쓰는 방식이다.
* 이러한 단점은... 우선,

1. 휘발성의 temporary data로 저장되는 까닭에 고객의 hash값이 초기화되었을때, data의 유지가 힘들다는 점,
2. server에서 update가 필요성이 있는 component의 경우 데이터의 update가 힘들다는 점,
3. 고객 URL에 저장되는 data의 보안 취약점..등이 있을 것같다.

* 음.. 그럼 왜쓸까..? 장점이 뭐가 있을까?
* 아마..

1. 서버와 연동이 필요없어 데이터의 update가 빠르다. -> 이제 일을 고객한테 떠넘겨 버리는 ...
2. 서버와 연동이 필요없어(2) 서버 유지비용이 절약된다.
3. 전체 사이트의 size가 줄어든다.

> 결론: 음.. 최근 본 탭? 물품 정도로 사이드바에 위치시킬 data 정도는 사용해도 괜찮을지도..?
> .. 라고 하기엔,,, 최근 본 물품이라면.. 고객 맞춤 추천을 위해 데이터를 따로 추출해야할텐데..
> 아! 최근 본 물품의 장르만 따로 서버로 받아온 뒤, 물품의 정확한 정보창은 hashrouter을 이용해 띄워주면 괜찮겠네.

### BrowserRouter

* 특징
* URL을 이용해 web component를 route 시켜주는 효자 녀석
* 심지어 URL창을 기존 server간 이동시 나오는 복잡한 string이 아닌, 깔끔한 built in 된 모습으로 보여주는 센스쟁이다.
  
* 장점, 무난하죠 뭐 그냥
* React의 기존 장점을 유지한 효자

* 단점, 흠,,, Browser라우터로 떡칠된 코드가 많다면.. 정신이 아득해진다.. 정도?

### NativeRouter

* 특징
* React Native App사용시 추천한다고 적혀있네요.. 이유가 뭘까?
  * 뭐 React Native App에 최적화 되어있으니 쓰라했겠죠~
  * Type declaration 코드를 보니 모든 라우터를 통틀어 가장 간결하게 작성되어있네요,
  * 아무래도 Browser Router처럼 URL을 빌트인 시키거나, web interface를 간결화 시키지 않아 그런 것이 아닐까 하고 유추해봅니다..

``` js
declare function NativeRouter(
  props: NativeRouterProps
): React.ReactElement;

interface NativeRouterProps extends MemoryRouterProps {}

```

### MemoryRouter 

* 특징
* 어? 이녀석 메모리가 들어간 것이 벌써부터 배열이 떠오르게 만드네요..
* 아니나 다를까 memory에 history stack을 추적해 하나씩 저장하는 방식인가 보네요

* 바로 장점
* 캬, 메모리에 하나씩 저장하므로, 메모리 최적화와, 속도, 그리고 아름다운 코드 작성 가능까지!
* 데이터를 저장하는 속도와 가져오는 속도 또한 매우 빠르겠죠? 아름답네요~

* 단점
* 사용자가 필요할 데이터를 예측해 적당히 할당해 줘야하며, 메모리 주소값을 고려해 코드를 작성해야겠네요~
* 개발자가 신경쓸 것이 조금 많아지겠네요~

* 아름답네요

### unstable_HistoryRouter

* 특징
* 아, 이녀석.. React 개발자분들께서 다른 언어에 react를 접목시키고자 하는 개발자들을 위해 만들어진 것같네요
* 위 router를 이용해, 다른 language 혹은 data를 parameter(props)로 가져와, 형식에 맞게 작성시
* outer data의 argument값을 가져와 활용할 수 있을 것같네요~
* 이 경우, 반환값과 가져올 값을 정말 잘 설계해야 할것같네요~

* 장점
* 재미있는 실험을 많이 해볼 수 있을거같네요 ㅎㅎ 
* 다른 language로 작성된 data를 가져와 react에 맞게 내 입맛데로 갖고 놀 수 있는 틀을 제시한 것만해도 감사하죠

* 단점
* 오류 뜨면 정신이 나가버릴지도..?

---