# Confetti-button

- To create the confetti effect, the external library **`canvas-confetti`** was used.
- **`canvas-confetti`** library should be involved directly in HTML code

``` html
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0"></script>
```
> [!TIP]
> Ensure this is placed before your `script.js` **so the library loads first**.

## The typical usage of the canvas-confetti library involves calling confetti() with specific options if needed. 

### Options 

**The confetti parameter is a single optional options object, which has the following properties:**

- `particleCount Integer (default: 50)`: The number of confetti to launch. More is always fun... but be cool, there's a lot of math involved.
- `angle Number (default: 90)`: The angle in which to launch the confetti, in degrees. 90 is straight up.
- `spread Number (default: 45)`: How far off center the confetti can go, in degrees. 45 means the confetti will launch at the defined angle plus or minus 22.5 degrees.
- `startVelocity Number (default: 45)`: How fast the confetti will start going, in pixels.
- `decay Number (default: 0.9)`: How quickly the confetti will lose speed. Keep this number between 0 and 1, otherwise the confetti will gain speed. Better yet, just never change it.
- `gravity Number (default: 1)`: How quickly the particles are pulled down. 1 is full gravity, 0.5 is half gravity, etc., but there are no limits. You can even make particles go up if you'd like.
- `drift Number (default: 0)`: How much to the side the confetti will drift. The default is 0, meaning that they will fall straight down. Use a negative number for left and positive number for right.
- `origin.x Number (default: 0.5)`: The x position on the page, with 0 being the left edge and 1 being the right edge.
- `origin.y Number (default: 0.5)`: The y position on the page, with 0 being the top edge and 1 being the bottom edge...[more please find here](https://www.npmjs.com/package/canvas-confetti)


## Please, find below the corresponding files

- HTML code you can find here [index.html](index.html)
- CSS code you can find here [style.css](style.css)
- JavaScript code you can find here [script.js](script.js)

> [!NOTE]
> all 3 files should be placed in one folder
