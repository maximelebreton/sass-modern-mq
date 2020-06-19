# Media Queries for modern devices!

> **Sass Modern MQ** is a mixin that helps you to create simple and accurate media queries by rethinking layouts as **landscape**, **square** and **portrait**

### 3 main breakpoints, based on aspect-ratio

`landscape`, `square`, `portrait`

`███` → `▐█▌` → `█`

_`landscape` is the lowest breakpoint\*, and `portrait` is the highest\*\*, **keep this order in mind**_

### Combinable with 4 operators\*

`>`, `<`, `>=`, `<=`

examples: `>landscape`, or `<=square`

_\*`landscape` doesn't have `<`, `<=`, & `>=` operators, and \*\*`portrait` doesn't have `>`, `>=`, & `<=` operators_

## Install

```js
npm install sass-modern-mq --save
// or
yarn add sass-modern-mq
```

## Usage

```scss
@import "sass-modern-mq";

.my-class {
  @include mq("landscape") {
    // for landscape only
  }
  @include mq("<portrait") {
    // for square and landscape
  }
  @include mq(">=square") {
    // for square and portrait
  }
  @include mq("portrait", "landscape") {
    // for portrait or landscape
  }
  @include mq("square and (min-device-pixel-ratio:2)") {
    // you can combine it with standard media queries :)
  }
}
```

## Optional breakpoints: width, height and retina

**Ratios breakpoints** are the main purpose of this library, and in most of the cases it's enough.  
But if needed, you can **enable additional width, height and retina breakpoints**

```scss
$mq-enable-width-breakpoints: true;
$mq-enable-height-breakpoints: true;
$mq-enable-retina-breakpoints: true;

.my-class {
  @include mq("retina") {
    // for retina screens
  }
  @include mq("width=small") {
    // for small width screens only
  }
  @include mq("height>medium") {
    // for greater than medium height screens only
  }
}
```

You can custom sizes with the variables `$mq-xsmall`, `$mq-small`, `$mq-medium`, `$mq-large`, `$mq-xlarge`

## Debug helper

<!-- <img style="max-width: 81px; border-radius: 2px; margin-left: 1em; float: right;" src="mq-debug-helper-@2x.png" /> -->

Look at the right top of the [Codesandbox playground](https://codesandbox.io/s/sass-modern-mq-playground-0sqv2?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fstyles.scss&theme=dark) and **resize the window**, the **debug helper** tells you instantly wich breakpoints are active!

```scss
// in your .scss file
$mq-debug: true;
```

```js
// in your .js file (it just adds dynamicly the HTML markup)
import "sass-modern-mq/debug.js";
```

## Play now on Codesandbox!

<iframe loading="lazy"
     src="https://codesandbox.io/embed/sass-modern-mq-playground-0sqv2?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fstyles.scss&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Sass Modern MQ Playground"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Why 'modern'?

Because with modern devices, the paradigm as changed!
The current CSS/Sass libraries base their **breakpoints on the device width**, wich is (for me) **not relevant anymore**.

If we take [Bootstrap](https://github.com/twbs/bootstrap), one of the most popular CSS library, their default breakpoints are `xs: 0`,
`sm: 576px`,
`md: 768px`,
`lg: 992px`,
`xl: 1200px`,
`xxl: 1400px`

But let's take some modern devices examples (thanks [screensiz.es](http://screensiz.es/)):

- [_iPhone X_](https://yesviz.com/devices/iphonex/) viewport's width is **_812px_** in landscape mode

- [_Apple Watch_](https://yesviz.com/devices/apple-watch-series-4-40mm/) viewport's width is **_197px_**.

- [_Apple iMac 27-inch_](https://www.a2zwebhelp.com/media-width-for-responsive-design) viewport's width is **_2560px_**

<small><i><b>Note:</b> I choose Apple devices because they are popular, not to promote them (I have a Dell computer and a Samsung smartphone!)</i></small>

How can we handle these cases with **width-based** approach, when the lowest breakpoint for _Bootstrap_ is _576px_, and the highest is _1400px_, without complexity, and with accuracy?

This where **Sass Modern MQ** takes an other approach.

## Rethinking responsive layouts?

As a senior **webdesigner and front-end developper**, and after integrating many layouts with many breakpoints, I finally came accross this conclusion:

> Every resolution cases can fit in 3 types: **Landscape**, **Square** and **Portrait**

Wich is a **ratio-based** approach.

So now I try to think my design layouts with these 3 types in mind, and I hope this will be relevant for you!

## How it works?

In CSS Media Queries spec, we have [aspect-ratio](https://developer.mozilla.org/fr/docs/Web/CSS/@media/aspect-ratio).

Instead of the classical **width-based** approach:

```css
@media (max-width: 992px) { ...
```

**Sass Modern MQ** use a **ratio-based** approach:

```css
@media (aspect-ratio: 10/8) { ...
```

## Todo list

- Write tests (any help is welcome!)
- Check browser compatibilty, but probably [98%](https://caniuse.com/#feat=css-mediaqueries)?
- Thanks
