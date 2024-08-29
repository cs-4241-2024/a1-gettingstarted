# A1 - Getting Started

Eddie Stump
My github username is Eddie048
Glitch Link: https://a1-eddie048.glitch.me/

This project used the simple template and added a few styles, a google font, a button, and a fun javascript animation. See below for details on all of these features.

## Technical Achievements

### CSS Styles (The 5 most interesting ones)

1. On the headings, h1 and h2 elements, I added an underline with 'border-width: 0 0 2px 0; border-color: black; border-style: solid;'
2. To ensure the button was a pill button, I added a border radius with 'border-radius: 20px;'
3. To give the button a more interesting background (and a correstponding hover effect), I added 'background-color: darkslategray;' to the button tag and 'background-color: slategray;' to the button:hover tag. (I'm Unsure of the exact vocabulary)
4. To ensure the button stood out and was visible, I gave it a margin and padding with 'margin: 20px; padding: 8px 40px;'.
5. To make the text bigger to fit the button's larger size, I added the line 'font-size: large;'.

### Javascript Animation

I decided to add a racing animation. When the button at the bottom is clicked, all the lines of text begin accelerating randomly. They are stored in a javascript array, keeping track of current position and velocity. The acceleration is randomized each frame, making the elements accelerate smoothly (as opposed to velocity being randomized each frame.) The elements are moved by adding to thier left margins. The animation is handled using requestAnimationFrame, which updates the animation once every frame

### Additional HTML Elements

1. I used a button html element for the race start button (Although I overrode all default styling)

### Design Achievements

### Google Font

I Used a google font, Moderustic, but importing it into my CSS file with '@import url("https://fonts.googleapis.com/css2?family=Moderustic:wght@300..800&display=swap");'.
