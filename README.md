# Webpage Analyser

[![Netlify Status](https://api.netlify.com/api/v1/badges/75deca42-7374-44d2-9708-1399932ccfc2/deploy-status)](https://app.netlify.com/sites/russ-webpage-analyser/deploys)

[Try it out (hosted on Netlify)](https://russ-webpage-analyser.netlify.com)

Enter a URL to perform an analysis...

## If possible, the following information will be returned:

- \<title> of the page
- number of clickable links
- number of unique domains that these links point to
- details of the pages SSL certificate
- whether or not Google Analytics is running on the page

## Built With

- [Axios](https://github.com/axios/axios)
- [Cheerio](https://github.com/cheeriojs/cheerio)
- [Create React App](https://facebook.github.io/create-react-app/)
- [Node 12](https://nodejs.org)
- [React 16.8 (the one with hooks)](https://reactjs.org/)
- [Webpage-analyser-api](https://github.com/thatrussguy/webpage-analyser-api)

## Set up a copy to try out locally

### Prerequisites

- [Git CLI (version >= 2)](https://git-scm.com/)
- [Node (version >= 10.15.3)](https://nodejs.org)

### Instructions

Clone this repo

```bash
git clone https://github.com/thatrussguy/webpage-analyser.git
```

Open project folder

```bash
cd webpage-analyser
```

Install dependencies

```bash
npm install
```

Start the app locally

```bash
npm start
```
