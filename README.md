# Paradise Nursery - e-plantShopping

A shopping cart application for an online plant shop that sells aromatic and medicinal house plants.
Built with React, Redux Toolkit and React Router.

## Features

- **Landing page** with the company name and a "Get Started" button linking to the product listing.
- **Navigation bar** linking to Home, Plants, About Us and the Cart. The cart icon shows the total number of items.
- **Product listing** grouped into sections (*Aromatic Plants* and *Medicinal Plants*). Each plant card shows the image, name, description, cost and an *Add to Cart* button.
- **Shopping cart** with one card per plant type showing the thumbnail, unit cost, line subtotal, quantity controls (+ / −) and a *Delete* button. The page shows the cart total and has *Continue Shopping* and *Checkout* buttons.
- **About Us** page describing the nursery.

## Project structure

```
src/
  App.jsx                  Routes and landing page
  App.css                  Styles (including the landing page background)
  main.jsx                 Redux Provider and router setup
  components/
    AboutUs.jsx            About page
    CartItem.jsx           Shopping cart page with one card per plant type
    NavBar.jsx             Navigation bar with cart badge
    ProductList.jsx        Plant sections and plant cards
  data/plants.js           Plant catalogue
  redux/
    CartSlice.jsx          Cart state: addItem, removeItem, updateQuantity
    CartSlice.test.js      Reducer and selector tests
    store.js               Redux store
  utils/formatPrice.js     Currency formatting
public/images//             Plant thumbnails (SVG)
```

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm test          # run the cart reducer tests
npm run lint      # run oxlint
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Deployment

The app uses `HashRouter` and a relative Vite `base`, so it works on static hosts such as GitHub Pages
without extra server rewrite rules.

Live URL: https://muadzizizulala02.github.io/e-plantShopping/

