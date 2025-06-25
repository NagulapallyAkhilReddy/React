import React from 'react'
import Movie from './components/movie';
import Movieline from './components/movieline';
function App() {
  const actionAnime = [
  {
    name: "Naruto",
    url: "https://m.media-amazon.com/images/I/81Zj-BWityL._UF894%2C1000_QL80_.jpg"
  },
  {
    name: "One Piece",
    url: "https://m.media-amazon.com/images/I/81zwj54srRL.jpg"
  },
  {
    name: "Attack on Titan",
    url: "https://m.media-amazon.com/images/I/61t9ie31jgL._UF894%2C1000_QL80_.jpg"
  },
  {
    name: "My Hero Academia",
    url: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/3229182/6215545/TIARP15510__28371.1709700644.jpg?c=2"
  }
];
const comedyAnime = [
  {
    name: "Azumanga Daioh",
    url: "https://m.media-amazon.com/images/I/51vi1Ky2SeL._UF894%2C1000_QL80_.jpg"
  },
  {
    name: "FLCL",
    url: "https://i.ebayimg.com/images/g/OlgAAOSwCORkpBVB/s-l1200.jpg"
  },
  {
    name: "Barakamon",
    url: "https://m.media-amazon.com/images/I/61xqR1S8OvL._AC_UF894%2C1000_QL80_.jpg"
  },
  {
    name: "Trinity Seven",
    url: "https://m.media-amazon.com/images/I/71Q%2BO0OeDdL._AC_UF894%2C1000_QL80_.jpg"
  }
];

const horrorAnime = [
  {
    name: "Tokyo Ghoul",
    url: "https://i.pinimg.com/736x/07/b2/85/07b28575a61b590c416033acb64c23f4.jpg"
  },
  {
    name: "Parasyte: The Maxim",
    url: "https://i.pinimg.com/474x/df/0d/d5/df0dd523fcb3ebf3240390d56d7aac9b.jpg"
  },
  {
    name: "Death Note",
    url: "https://m.media-amazon.com/images/I/61k3qe5zitL.jpg"
  },
  {
    name: "Shiki",
    url: "https://i.ebayimg.com/images/g/1TwAAOSw-pNhjGpN/s-l1200.jpg"
  }
];

const scifiAnime = [
  {
    name: "Ghost in the Shell",
    url: "https://japanesegallery.com/pub/media/catalog/product/cache/d864fe008ccb1396261d22d112b7dce0/j/g/jgkp1148.jpg"
  },
  {
    name: "Akira",
    url: "https://m.media-amazon.com/images/I/913iYTmWPwL.jpg"
  },
  {
    name: "Gurren Lagann",
    url: "https://m.media-amazon.com/images/I/610Kw6oLUuL._UF894%2C1000_QL80_.jpg"
  },
  {
    name: "Cowboy Bebop",
    url: "https://m.media-amazon.com/images/I/71heVvvMJvL.jpg"
  }
];

  return (
    <div>
      <h1>ANIMES</h1>
      <h2>Action Animes</h2>
      <Movieline movies={actionAnime} />
      <h2>Comedy Animes</h2>
      <Movieline movies={comedyAnime} />
      <h2>Horror Animes</h2>
      <Movieline movies={horrorAnime} />
      <h2>Scifi Animes</h2>
      <Movieline movies={scifiAnime} />

    </div>
  )
}

export default App
