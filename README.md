# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./public/design/desktop-preview.jpg)

### Links

- Solution URL: [WorldInfoBox Solution](https://worldinformation.netlify.app/)
- Live Site URL: [WorldInfoBox Live](https://worldinfobox.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Bootstrap 5
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React-Router](https://reactrouter.com/) - For multi-page application
- [Font Awesome](https://fontawesome.com/) - For icons
- [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) - For font
- [Rest Countries API](https://restcountries.com/) - For data

### What I learned

I learned how to use React-Router to dynamically create a multi-page application. This was only the tricky part in this project.

This is how I used React-Router to create a multi-page application:

```js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Main />} />

          <Route path='/:country' exact element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
```

### Continued development

I want to learn more about React-Router and how to use it to create a multi-page application.

### Useful resources

- [React Router](https://reactrouter.com/en/main) - This helped me to learn how to use React-Router to create a multi-page application. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@Saadaan-Hassan](https://www.frontendmentor.io/profile/Saadaan-Hassan)


## Acknowledgments

I would like to thank [Frontend Mentor](https://www.frontendmentor.io/) for providing me with this opportunity to learn and practice React. I would also like to thank [Naveenkumar M](https://plainenglish.io/blog/how-to-pass-data-between-pages-in-react-router-dom-v6) for this blog post on how to pass data between pages in React Router DOM v6. This blog post helped me to learn how to pass data between pages in React Router DOM v6.
