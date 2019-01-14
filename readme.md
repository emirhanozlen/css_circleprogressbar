Online preview:
http://emirhanozlen.github.io/css_circleprogressbar/compiled/

# Pure css and javascript
# Circle progress spinner bar with ease transition

I have created this spinner a long ago (approx. 1 year) on codepen and decided to publish here.

  - Click + button to fill circle
  - Click - button for opposite

# Known issues

  - Taking progress backwards when clicked on 0%. Taking progress forward after 100% I had known how to fix it, It's an easy fix, just can't remember at the moment.

# How to customize & use

The parameters you should be looking for should be:

   - **stylus source file** for all customization **(color width etc.)** and front end work
   - **steps** variable in **script.js** to determine how long is the each step you take in degrees. **Note:** You should always use something that can divide 360 without leaving reminder. Ex: 360 / 45 leads to 8 steps. 360 / 30 leads to 12 steps. 360 / 67 leads to confusion (don't use)


