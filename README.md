# Motion Library

A simple JavaScript library for basic motion and animation tasks.

## Features

- Move an element to a specified position with animation.
- Fade in an element with animation.
- Fade out an element with animation.
- Scale an element.
- Rotate an element.
- Skew an element.
- Translate an element.
- Change the background color of an element.
- Change the text color of an element.
- Set the width of an element.
- Set the height of an element.
- Change the border color of an element.
- Blur an element.
- Brighten an element.
- Add grayscale to an element.
- Invert the colors of an element.
- Change the border radius of an element.
- Change the opacity of an element.
- Slide an element to the right.
- Slide an element to the left.
- Slide an element up.
- Slide an element down.
- Rotate an element around its X-axis.
- Rotate an element around its Y-axis.
- Rotate an element around its Z-axis.
- Flip an element horizontally.
- Flip an element vertically.
- Change the z-index of an element.
- Change the box shadow of an element.
- Change the text shadow of an element.

## Usage

Include the library in your HTML file and use the functions as shown in the examples below:


```javascript
// Get the element
const element = document.getElementById('myElement');

// Move the element to position (100, 200) over 1 second
MotionLibrary.moveTo(element, 100, 200, 1000);

```
### Fading In an Element
To fade in an element over a duration:
```javascript
// Get the element
const element = document.getElementById('myElement');

// Fade in the element over 0.5 seconds
MotionLibrary.fadeIn(element, 500);
```

### Fading Out an Element
To fade out an element over a duration:

```Javascript
// Get the element
const element = document.getElementById('myElement');

// Fade out the element over 0.5 seconds
MotionLibrary.fadeOut(element, 500);
```

### HTML TUTORIAL

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Motion Library Demo</title>
    <style>
        #demoElement {
            width: 100px;
            height: 100px;
            background-color: red;
            position: absolute;
            top: 50px;
            left: 50px;
            opacity: 0;
        }
    </style>
</head>
<body>

<div id="demoElement"></div>

<script src="https://motion-js.vercel.app/motionLibrary.bundle.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const demoElement = document.getElementById('demoElement');

        // Example usage
        MotionLibrary.moveTo(demoElement, 200, 200, 1000);
        setTimeout(() => MotionLibrary.fadeIn(demoElement, 1000), 1000);
        setTimeout(() => MotionLibrary.scale(demoElement, 1.5, 1000), 2000);
        setTimeout(() => MotionLibrary.rotate(demoElement, 45, 1000), 3000);
        setTimeout(() => MotionLibrary.skew(demoElement, 30, 20, 1000), 4000);
        setTimeout(() => MotionLibrary.translate(demoElement, 100, 100, 1000), 5000);
        setTimeout(() => MotionLibrary.changeBackgroundColor(demoElement, 'blue', 1000), 6000);
        setTimeout(() => MotionLibrary.changeTextColor(demoElement, 'white', 1000), 7000);
        setTimeout(() => MotionLibrary.setWidth(demoElement, '200px', 1000), 8000);
        setTimeout(() => MotionLibrary.setHeight(demoElement, '200px', 1000), 9000);
        setTimeout(() => MotionLibrary.changeBorderColor(demoElement, 'black', 1000), 10000);
        setTimeout(() => MotionLibrary.blur(demoElement, 5, 1000), 11000);
        setTimeout(() => MotionLibrary.brighten(demoElement, 150, 1000), 12000);
        setTimeout(() => MotionLibrary.grayscale(demoElement, 100, 1000), 13000);
        setTimeout(() => MotionLibrary.invert(demoElement, 100, 1000), 14000);
        setTimeout(() => MotionLibrary.changeBorderRadius(demoElement, '50%', 1000), 15000);
        setTimeout(() => MotionLibrary.changeOpacity(demoElement, 0.5, 1000), 16000);
        setTimeout(() => MotionLibrary.slideRight(demoElement, 100, 1000), 17000);
        setTimeout(() => MotionLibrary.slideLeft(demoElement, 100, 1000), 18000);
        setTimeout(() => MotionLibrary.slideUp(demoElement, 100, 1000), 19000);
        setTimeout(() => MotionLibrary.slideDown(demoElement, 100, 1000), 20000);
        setTimeout(() => MotionLibrary.rotateX(demoElement, 180, 1000), 21000);
        setTimeout(() => MotionLibrary.rotateY(demoElement, 180, 1000), 22000);
        setTimeout(() => MotionLibrary.rotateZ(demoElement, 180, 1000), 23000);
        setTimeout(() => MotionLibrary.flipHorizontally(demoElement, 1000), 24000);
        setTimeout(() => MotionLibrary.flipVertically(demoElement, 1000), 25000);
        setTimeout(() => MotionLibrary.changeZIndex(demoElement, 10, 1000), 26000);
        setTimeout(() => MotionLibrary.changeBoxShadow(demoElement, '10px 10px 5px gray', 1000), 27000);
        setTimeout(() => MotionLibrary.changeTextShadow(demoElement, '2px 2px 5px black', 1000), 28000);
    });
</script>

</body>
</html>
```

## Development
- To contribute to the Motion Library:

- Clone the repository.
- Install dependencies: npm install
- Make your changes.
- Build the project: npm run build
- Test your changes.


### Alternative way
```javascript
import {
    moveTo,
    fadeIn,
    fadeOut,
    scale,
    rotate,
    skew,
    translate,
    changeBackgroundColor,
    changeTextColor,
    setWidth,
    setHeight,
    changeBorderColor,
    blur,
    brighten,
    grayscale,
    invert,
    changeBorderRadius,
    changeOpacity,
    slideRight,
    slideLeft,
    slideUp,
    slideDown,
    rotateX,
    rotateY,
    rotateZ,
    flipHorizontally,
    flipVertically,
    changeZIndex,
    changeBoxShadow,
    changeTextShadow
} from './motionLibrary.js';

// Example usage
const demoElement = document.getElementById('demoElement');

moveTo(demoElement, 200, 200, 1000);
fadeIn(demoElement, 1000);
```


### installing dependencies!
```bash
npm install webpack webpack-cli --save-dev
```
### installing the dist/.bundle.js
```bash
npx webpack
```

&copy;All the Rights are reserved! -Atmosoft&trade;
~president & Co-Founder KUNAL SINGH