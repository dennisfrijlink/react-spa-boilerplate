<p align="center">
  <img width="400" src="https://raw.githubusercontent.com/dennisfrijlink/development-utilities/c6575f43bf340f38a05bafb26705240961e5a766/images/React-Spa.svg" alt="logo of React Single Page Application Repository">
</p>
<h1 align="center">
  Single Page Application Boilerplate - React.js
</h1>
<p align="center">
  A boilerplate for single page applications based on the React.js Library
  </a>
</p>

## 🧐 What's inside
- [Quick start](#user-content--quick-start)
- [What is a SPA](#user-content-️-what-is-a-single-page-application) 
- [Folder Structure](#user-content-folder-structure)
	- [Assets](#user-content-assets)
	- [Components](#user-content-components)
	- [Hooks](#user-content-hooks)
	- [Layouts](#user-content-layouts)
	- [Pages](#user-content-pages)
- [App Structure](#user-content--app-structure)
- [Mobile first](#user-content--breakpoints-mobile-first)

## ✨ Quick start

1.  **Clone this repository.**

    ```sh
    git clone https://github.com/dennisfrijlink/react-spa-boilerplate.git
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd react-spa-boilerplate/
    npm install
    npm start
    ```

3.  **Running!**

    Your site is now running at `http://localhost:3000`!

4.  **Generate for deploy**
    
    Generate a static project that will be located in the ``dist`` folder:
    ```bash
    $ npm run build
    ```
## ⚙️ What is a Single Page Application
A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of the browser loading entire new pages.

In a SPA, all necessary HTML, JavaScript, and CSS code is either retrieved by the browser with a single page load, or the appropriate resources are dynamically loaded and added to the page as necessary, usually in response to user actions. The page does not reload at any point in the process, nor does it transfer control to another page, although the location hash or the HTML5 History API can be used to provide the perception and navigability of separate logical pages in the application.

<p align="center">
  <img width="100%" src="https://raw.githubusercontent.com/dennisfrijlink/development-utilities/main/images/SPA%20lifecycle.png" alt="Lifecycle of Single Page Application">
</p>


## Folder Structure

### assets
The `assets` folder has three subfolders. First for the main css/scss files. Think of mixins, breakpoints or defined fonts. Secondly, the folder `images` and I think this folder speaks for itself. And at last the folder `fonts` for the local font-files.
```
-| assets/
----| images/
----| scss/
------| DMSans-Regular.ttf
------| DMSans-Bold.ttf
----| fonts/
------| DMSans-Regular.ttf
------| DMSans-Bold.ttf
```
### components
The components directory contains your React.js components. Components are what makes up the different parts of your page and can be reused and imported into your pages, layouts and even other components.
```
-| components/
----| card/
------| index.js
------| card.js
------| card.scss
```
### Hooks
The hooks directory contains all your custom Hooks.  Custom hooks are a mechanism to reuse stateful logic.

### Layouts
Layouts are the wrapper around the React Router [(check structure)](#user-content--app-structure). Inside the Layout you'll see the router with links to the pages.
```
-| layouts/
----| app.js
```
Example of app.js:
```jsx
import  React, { Fragment } from  'react';
import { Link } from  'react-router-dom';

const  App  = ({ children }) => {
  return (
    <Fragment>
      <div  className="navigation">
        <Link  to="/">home</Link>
        <Link  to="/about">about</Link>
      </div>
      <Fragment>
       {children}
      </Fragment>
    </Fragment>
  );
};

export  default  App;
```

### Pages
The `pages` directory contains your application routes. By creating a React component in the pages directory you must import it in the `root.js` where you can use the routes:

```jsx
const Home = lazy(() =>  import("./pages/Home"));
const About = lazy(() =>  import("./pages/About"));

const  Root  = (props) => {
  return (
    <Router>
      <App>
        <Suspense  fallback={<div></div>}>
          <Switch>
            <Route  exact  path="/"  component={Home}  />
            <Route  path="/about"  component={About}  />
          </Switch>
        </Suspense>
      </App>
    </Router>
   );
};
```
## App Structure
<p align="center">
  <img width="100%" src="https://raw.githubusercontent.com/dennisfrijlink/development-utilities/636b12091d93560a23dab3e671c32300706e3044/images/React-Spa-boilerplate.svg" alt="App structure of React SPA boilerplate">
</p>

## 📱 Breakpoints mobile first
The scss folder located in  ``./assets/scss/``  contains two files to make it easier for web developers to prototype, build, scale, and maintain CSS for responsive websites:
### SCSS Files
```
assets
│
└─── scss
    │
    └─── _mixins.scss
    │
    └─── breakpoints.scss
```
Building responsive websites is a must-have skill for front-end developers today, so we've made the breakpoints mobile first. They are all defined with a ``@media (min-width:``  so that the main css you write is based on mobile screens.
````scss
// breakpoints.scss


/* Small (sm) */
$screen-sm-min: 640px;

/* Medium (md) */
$screen-md-min: 768px;

/* Large (lg) */
$screen-lg-min: 1024px;

/* Extra Large (xl) */
$screen-xl-min: 1280px;

/* Fluid */
$screen-fluid-min: 1536px;
````

Now it’s time to create the most important element – mixins:
````scss
// _mixins.scss


// Small devices
@mixin  sm {
  @media (min-width: #{$screen-sm-min}) {
    @content;
  }	
}

// Medium devices
@mixin  md {
  @media (min-width: #{$screen-md-min}) {
    @content;
  }	
}

// Large devices
@mixin  lg {
  @media (min-width: #{$screen-lg-min}) {
    @content;
  }	
}

// Extra large devices
@mixin  xl {
  @media (min-width: #{$screen-xl-min}) {
    @content;
  }	
}

// Extra large devices
@mixin  fluid {
  @media (min-width: #{$screen-fluid-min}) {
    @content;
  }	
}
````

I always build my websites in a mobile-first approach, so I don’t need to define the smallest screen size (xs – extra small) and I write my SCSS code first for the smallest devices and next for the largest. Sometimes we also need to define some styles beyond the rigidly defined breakpoints. Let’s add one more mixin – I called it “rwd”:
````scss
// _mixins.scss


// Custom devices
@mixin rwd($screen) {
  @media (min-width: $screen+'px') {
    @content;
  }
}
````
As a parameter `$screen` we can put any screen size.

### For Example
````css
.container {
    padding: 0 15px;
    
	/* 576px window width and more */
    @include sm {
        padding: 0 20px;
    }
    
	/* 992px window width and more */
    @include lg {
        margin-left: auto;
        margin-right: auto;
        max-width: 1100px;
    }
    
	/* 1400px window width and more */
    @include rwd(1400) {
        margin-bottom: 20px;
        margin-top: 20px;
    }
}
````
