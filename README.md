# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/design/solution-screenshot.png)


### Links

- Live Site URL: [Live Site](https://kaantkin.github.io/FAQ-Accordion-FM/index.html)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JavaScript

### What I learned

I learnt how to make a webpage responsive and presentable across different devices. Thanks to the CSS media query:
```css
@media (max-width: 600px) {
    ...
}
```

And relative units such as `em`, `rem` and `%`.

I also learnt how to position an element in front of other elements - that is the FAQ block in front of the 2-section background. This was done using:
```css
.foreground-section {
    height: 100%;
    width: 100%;
    background-color: transparent;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
```
Which overlapped the foreground section over the background section.

I learnt how to scale, fill and prevent a background image from repeating:
```css
.bg-svg {
    background: url(../assets/images/background-pattern-desktop.svg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
}
```

The final major thing I learnt was to smoothly hide and show answers when the question was clicked:
```css
.show-ans {
    transition: .1s ease-in-out;
    height: auto;
    opacity: 1;
    margin-top: 20px;
    visibility: visible;
}

.hide-ans {
    visibility: hidden;
    height: 0;
    transition: .1s ease;
    opacity: 0;
    margin: 0;
    position: relative;
    z-index: -1;
}
```

### Continued development

For future projects, I am going to focus on using semantic HTML as I feel like this would benefit development, making code more structured and readable. At this stage, I want to focus more on CSS and I do not feel completely confident, especially with alignment and positioning of items. I also want to refine my ability to refactor code, especially in terms of reducing duplicates and making it more modular. I would also like to continue practicing responsive web design, as it proved to be quite challenging on this project (and I still don't have it 100% with issues such as div clipping out of screen when contents expanded). I would also like to continue practicing responsive web design, as it proved to be quite challenging on this project (and I still don't have it 100% with issues such as div clipping out of screen when contents expanded).


### Useful resources

- [Making elements keyboard focusable and clickable](https://www.456bereastreet.com/archive/201302/making_elements_keyboard_focusable_and_clickable/) - This article is very clear and concise and gets straight to the point to explain how to make elements accessible.
- [CSS min() Function](https://www.w3schools.com/cssref/func_min.php) - I found this very useful for making my elements responsive.
- [Enable :focus only on keyboard use (or tab press)](https://stackoverflow.com/questions/31402576/enable-focus-only-on-keyboard-use-or-tab-press/45191208#45191208) - Very clear answer and references for keyboard focus only styling.


## Author
- Author Website - [My Page](https://kaantkin.github.io/)
- Frontend Mentor - [@kaantkin](https://www.frontendmentor.io/profile/kaantkin)
