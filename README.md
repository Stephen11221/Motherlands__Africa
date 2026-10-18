# Motherland Africa

A React travel website for discovering African destinations, stays, and local vehicle rentals. Built with Vite.

## Getting started

```sh
npm install
npm run dev
```

To create a production build, run `npm run build`.

The booking forms currently provide an on-page trip inquiry confirmation. Connect them to a booking service or backend to accept and manage reservations.

## Source structure

- `src/components/` contains shared UI such as the header, footer, booking forms, cards, and hero slideshow.
- `src/pages/` contains the Home, Stays, Vehicles, and Destinations page components.
- `src/data/travelData.js` contains the sample destination, stay, vehicle, and slideshow content.
- `public/images/` contains the locally stored photos used by the site.
- `src/App.jsx` selects the active page and renders the shared site layout.
