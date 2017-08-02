## Overview

#### # Designed a mockup "Contact Us" page for **Fluent City** website

---

## Built With

* **HTML5**
* **SCSS** - For reusable mixins and variables
* **JavaScript** - DOM manipulation
* **Flexbox** - For responsive layout and columns
* **Sketch** - For wire framing

---

## Techs

#### # HTML form - Created a Message Submission form
* **Modal opens up ON CLICK of "Send a Message" button**
* **Series of two forms -**
**1.** ```<input type="radio">``` for selection of options **2.** ```<input type="text">``` for entering user information and message

#### # Interactive Buttons
* **Buttons: disabled state -** onclick => triggers wiggle animation
* **Buttons: enabled state -** onchange => triggers background color slideIn transition

* SCSS code snippet
```
// Animation for a button to show error
@keyframes wiggle {
  from, to {
    transform: translateX(0);
  }

  10%, 40%, 70%, 100% {
    transform: translateX(-10px);
  }

  25%, 55%, 85% {
    transform: translateX(10px);
  }
}

.error {
  animation: wiggle 0.7s 1;
}
```

* JS code snippet

```
// Function to add wiggle animation to a button
const wiggleAnimation = (el) => {
  el.classList.remove("slide-bg");
  el.classList.add("error");

  setTimeout(() => {
    el.classList.remove("error");
  }, 1000);
}
```

#### # Reusable Code

**Example Code Snippet**

* Mixin for button background color transition
```
@mixin readyToSlide($color) {
  box-shadow: inset 0 0 0 0 $color;
  transition: all 0.7s ease;
}

@mixin slideToTop($size, $color) {
  box-shadow: inset 0 $size 0 0  $color;
}
```
* Usage Example
```
.faq-btn {
  @include readyToSlide($accent-pink);
  &:hover {
    @include slideToTop(-100px, $accent-pink);
    cursor: pointer;
  }
}
```

---

## Design

#### # Conformed to the Fluent City's style guide

* **Color Swatches -** (from left to right: Accent Pink **#FB0D57** /  Light Blue **#B6F8FF** / Accent Green **#46F992** / White **#FFFFFF** / Black **#1A1A1A**)


![accent-pink](https://user-images.githubusercontent.com/18605009/28884159-ceecd850-777e-11e7-8d3b-018d62e90935.png) ![light-blue](https://user-images.githubusercontent.com/18605009/28884179-d92ee196-777e-11e7-9907-4ece51373391.png)   ![accent-green](https://user-images.githubusercontent.com/18605009/28884120-b4f83d68-777e-11e7-9558-19e5df4f3ec5.png)   ![white](https://user-images.githubusercontent.com/18605009/28884206-ee59e23c-777e-11e7-9935-d8caecfc8d68.png)
![black](https://user-images.githubusercontent.com/18605009/28884193-e5329884-777e-11e7-9b50-6117daf18362.png)


* Wire frame using **Sketch**
![screen shot 2017-08-02 at 12 13 01 pm](https://user-images.githubusercontent.com/18605009/28884269-2499ceac-777f-11e7-8bd8-748085b769ca.png)
---
