# What I learned today about React router

### written "21.12.12"

---

## Primary Components

### 3 primary categories of components in react router

* routers, like `<BrowerRouter> `and `<HashRouter>`
* route matchers, like` <Route>`and `<Switch>`
* and navigation, like` <Link>, <NavLink>`, and `<Redirect>`

> Point
>> navigation components working like "route changers".
>> all of components must be imported from react-router-dom.

## importants

* At the core of every react Router application shoud be a router components!
* Cause react-router-dom provides `<BrowserRoute> `and `<HashRouter>` routers.

## what's main difference between the` <BrowserRoute>` and `<HashRouter>` ?

* main difference is the way they store the URL and communicate with web server

## about ditails

<img src="./src/images/reactBrowserWeb_Detail.png.jpg" alt="react browserroute img" style="height: 400px; width:800px;"/>

> `<BrowserRoute> `uses regular URL paths. 
>> these are generally the best-looking URLs
>> But!, they are require your server to be configured correctly ! -> 엄격하다!!
>> Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router.
>> Create React App supports this out of the box in development, and comes with instrructions on how to configure your production server as well

> `<HashRouter>` stores the current location in the hash portion of the URL, so the URL looks something like `http://exmaple.com/#your/page`.
>> Since the hash is never sent to the server, this means that no server configuration is needed.
>> -> URL에 다 처박아둔뒤, 하나씩 서버에서 뽑아쓴다! -> 때문에, BrowserRotue보다 속도가 느릴것으로 예상된다! 각각  URL이동전환이 많은 앱에서 쓰일 것 같다만..
>> 굳이..? 애초에 리엑트로 앱만들면서 URL로 직접이동하는 방식을 많이 쓰는 앱은 특정상황에서 쓰일 것 같다.

## Tip!
* To user a router, just make sure it is rendered at the root of your element hierarchy. 
* element hierarchy(계층)을 root에 넣어 랜더링할 때 써라, -> elements 관리할 root 파일 만들어서 한번에 쉽게 관리하셈 ㅇㅇ

* Typically you'll wrap your top-level `<App>` element in a router.

## example

``` javascript 
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return <h1>Hello React Router</h1>;
}

ReactDOM.render(
  <BrowserRouter>     // BrowserRotuer에 <App /> component를 넣어줌.
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
Route Matchers
```

## Route Matchers
* There are two route matching components: Switch and Route. 
* When a `<Switch> ` and Route elements to find one whose `path` matches the current URL. 
* when it finds one. it renders that `<Rotues>` with more specific (typically longer) path **before** less-specific ones.
## ***If*** 
#### no `<Route>` matches, the `<Switch>` renders nothing(null).
---
### example
``` js
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        <Route path="/about">
          <About />
        </Route>

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        <Route path="/contact/:id">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContacts />
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```

## plus important thing!
* `<Route path>` matches the beginning of the URL, not the whole thing. 
* So a `<Route path="/">` will always match the URL, 
* Because of this, we typically put this `<Route>` last in our `<Switch>`.
* Another possible solution is to use `<Route exact path="/">` which does match the entire URL.
### -> 즉, `<Route path="/">` 요런식으로 라우터 path를 설정해두면, 뒤에붙은 URL의 특정 path값이 맞춰지지 않은이상 `<Route path="/" element="<설정할 엘리먼트 값 />`으로 이동된다.

## Note!
* Although React Router does support rendering `<Route>` elements outside of a `<Switch>` as of version 5.1
* So -> RECOMMAND Thing is 
* Use the `userRtoueMatch hook` instead, 
* Additionally, do not recommand ;
* render a `<Route>` without a path and instead suggest you use a hook to get access to whatever variable you need.
---
# What's different `git fetch` vs `git pull` ?
## `git fetch`
git fetch is the command that tells your local git to retrieve the latest meta-data info from the original (yet doesn’t do any file transferring. It’s more like just checking to see if there are any changes available).

## `git pull`
git pull on the other hand does that AND brings (copy) those changes from the remote repository.
---


## Navigation (or Route Changers)
* React Router provide a `<Link>` component to create links in your application. Wherever you render a `<Link>`, an anchor `(<a>)` will be rendered in your HTML document.

### The `<NavLink>`is a special type of `<Link>` that can style itself as "active" when its to prop matches the current location. 


``` js

<Link to="/">Home</Link>
// <a href="/">Home</>
 
<NavLink to="/react" activeClassName="hurray">
React
</NavLink>
// when the URL is /react. this renders:
// <a herf="/react" className="hurray">React</a>

// when it's something else:
// <a href="/react">React</a>

<Redirect to="/login" />
```

* Any time that you want to force navigation, you can render a `<Redirect>`
* when a `<Redirect>`renders, it will navigate useing its to prop.

