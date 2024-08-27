Explanations for CSS styling:

* {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0 auto;
}

I changed the font with the google font "Poppins"
The font weight changes the boldness of the text
font-style is normal, so we will not use a lighter or bolder version of Poppins
margin 0 auto will get rid of any preexisting margins and center the text
This changes everything on the page

body {
    background-color: #3a3b59;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    color: white;
    height: 100vh;
}

I used a website to find a color I liked and changed the background color to that by copying and pasting #3a3b59
I wanted to use a flex layout so that I could use justify content and align items. Flex makes the items in the container lay horizontal to each other, but I wanted the text to be on top of each other, so I changed the flex direction to a column.
Justify content aligns the text along the horziontal axis and align items aligns the text along the vertical axis. I also aligned the text using text align. I changed the text color to white and clarified the height of the container, which is 100vh or 100% of the vertical screen 

.container {
    padding: 0;
}

I did not want my container to have padding

.container h2, p {
    color: #EEE9B4;
}

I changed the text color using the color pallete

.container h1 {
    font-size: 60px;
    font-weight: bold;
    padding: 0;
}

I made "Rose Strobel" text size even bigger and made it bolder. I also wanted it closer to the other text so I made the padding 0

.container p {
    padding: 0;
}

I wanted the paragraph text closer so I made the padding 0


button {
    margin: 4em 0em;
    border-radius: 20px;
    padding: 10px;
    background-color: #EBCC65;
    font-weight: 400;
    font-size: 15px;
}


I mde all of the buttons a bit farther away from the text vertically and changed the radius of the border so that it is more round
I added padding inside of the buttons so that the edges are further out
I changed the background color of the buttons to #EBCC65 using the color pallete
I changed how bold the text inside the button was
I changed the font size to 15px


button a {
    color: black;
    text-decoration: none;
}

The a href tag applies it's own styles, so I wanted to get rid of it. I made the text inside the buttons black and changed the text decorations to none so that there is no underline

button:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: 0.8s;
}

When the user hovers their cursor over the button, made their cursor change to a pointer. I also made the opacity of the button less and added a transition so that the button does not change opacity instantly.

.paragraph-container p{
    width: 40vw;
}

I made the width of the text 40% of the viewing width

.paragraph-container ul {
    margin: 2em;
}

I added a margin to the list of languages I know

.paragraph-container ul li{
    text-decoration: none;
    margin: 10px;
    list-style: none;
}

I got rid of any automatic text decorations, like the bullet points and added a margin.


Describing JS:

function animateText() {
    var rose = document.getElementById('rose-text');
    rose.style.transition = 'transform 0.5s ease-in-out'
    rose.style.transform = 'scale(1.5)'
    console.log("transforming...")
    
    setTimeout(() => {
        rose.style.transform = 'scale(1)'
    }, 1000)
    }


I created the function animateText to make "Rose Strobel" become bigger after clicking on the "click me!" button
I made the variable "rose" and made it equal to the "Rose Strobel" text by giving the text an id
I used CSS styling to transform the text
I logged the transformation for debugging purposes
I created a timeout so that the text goes back to its original size