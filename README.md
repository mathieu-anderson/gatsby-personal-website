[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/mathieu-anderson/gatsby-personal-website)

# My digital home : [matand.dev](https://matand.dev/)

This is a remake of [the old Svelte version](https://old-svelte-version-of-website.netlify.com/) of my personal website. I used [Gatsby](https://www.gatsbyjs.org/) this time around, because I am far more comfortable with [React](https://reactjs.org/) than I ever was with [Svelte](https://svelte.dev/), and Gatsby lets me create a static web page (all I need) with the tools I'm confortable with.

This project was based on [the default Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default), and was very much a case of [refactoring the UI](https://refactoringui.com/) with a focus on micro-interactions, polish and, as [Josh W Comeau](https://joshwcomeau.com/) puts it, [whimsy](https://youtu.be/Z2d9rw9RwyE).

# Running locally

```
// Clone repo
git clone https://github.com/mathieu-anderson/gatsby-personal-website.git

// Move to project folder
cd gatsby-personal-website

// Install dependencies
yarn install

// Run development server on localhost:8000
yarn start

// Build static files
yarn build

// Serve static files on localhost:9000
yarn serve
```

# TODO

If there is something I learnt here is always ways to improve things. Here are a few of the features I would like to add :

 - [ ] P1 - A self hosted blog. Medium is nice, but owning your content is ideal. With Gatsby too!
 - [x] ~~P2 - Dark mod. Probably through React context, probably need some refactor of my CSS 😬~~
 - [ ] P2 - A separate page for side-projects. They are not very good, but deserve better than links to Github repo.
 - [ ] P3 - Maybe [sound](https://joshwcomeau.com/react/announcing-use-sound-react-hook/)?
 - [ ] P3 - Make it a PWA. Gatsby enables it way more easily than doing everything by hand.
 - [x] ~~P3 - Polish: better link hover effect~~
 - [x] ~~P3 - Polish: Try putting side project / article links in boxes and be more descriptive. Add tech tag too.~~
 - [ ] P3 - Add soft skills to 'Most used tools' box? Public speaking, written communication, pair programming...
