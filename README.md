## README

April Bollinger

[http://a1-aprilkat.glitch.me/](http://a1-aprilkat.glitch.me/)

This project shows the implementation of various HTML tags, the use of CSS and other resources to improve design, and the use of JavaScript to add additional effects to a website.

## Technical Achievements

- **Styled page with CSS**:

  - added rules for
    - body - basic styling that will be inherited by all elements inside the body (cuts down on repeated rules).
    - header
    - article - All of the sections are contained in an article. Used the margin to pull the edges away from the edge of the screen.
    - section - margins on the top and bottom of each to ensure they are seperated from each other.
    - img (image) - The image fills it's container.
    - h3 - letter spacing to increase the readibility of some of the text.
    - ul (unordered list) - left aligned (one of the few I did not want to inherit center aligned).
    - li (list item) - border radius for looks. Padding to ensure text was contained and margin to seperate the elements.
    - table - Removed borders.
    - th (table header)
    - td (table data)
    - tr (table row) - Brought back the bottom border to improve readibility.
    - footer
  - created ids
    - lastCell - special borders on the last cell in the table.
    - intro - special formatting and behavior for the box containing introduction information.
    - house - default settings for the icon in the header.
  - created classes
    - imagebox - containing the images and their borders.
    - flexbox - flexbox settings used for most of the sections (column and centering content).
    - flexbox-row - flexbox settings used for most of the sections (row, centering content, and allowing wrapping).

- **Added a JS Animation**: I added onmouseover and onmouseout events to change the size of the icon in the header.
- **Used Varius Semantic HTML Tags**: I used header, footer, img, a(the icon links back to the the page - reloads), table, article, and section.
- **Modifed Files**: I edited the server.js file so that I could use other files (CSS stylesheet and images). I also edited the package.json file to download a newer version of node.js.

## Design Achievements

- **Used Google Fonts**: I used the Bebas Neue as the font for my site.
- **Created and Used a Color Palette**:
  ![color palette](https://cdn.glitch.global/2755e9ec-b0de-4c7e-b28e-c84f9499e203/4a4b3548-d669-4520-81fe-3e0c3fa16552.image.png?v=1724896665372)
- **Used FontAwesome**: I used [Font Awesome](https://fontawesome.com/) to put an icon into the header.

## Resources

- [https://www.w3schools.com/](https://www.w3schools.com/)

## Notes

- Images may not display correctly due to incorrect file paths (I worked in Glitch)
