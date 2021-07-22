import React, { useState } from "react";
import "./styles.css";

const mySongs = {
  Lofi: [
    {
      Name: "Riha",
      Date: "2 years ago",
      Description:
        "Riha is one of the best song, sung and composed by Anuv Jain.",
      Image:
        "https://images.genius.com/621bdd4975845663c246fc8b8fdcee9c.1000x1000x1.jpg",
      Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: "Baarishein",
      Date: "5 years ago",
      Description:
        "Baarishein is a Hindi song, composed and sung by Anuv Jain.",
      Image: "https://i1.sndcdn.com/artworks-000147299353-4ww3qc-t500x500.jpg",
      Rating: `⭐⭐⭐⭐`
    },
    {
      Name: "Aziyat",
      Date: "1 year ago",
      Description:
        "Aziyat is a Valentine day special romantic song written & composed by Pratyush Dhiman.",
      Image:
        "https://songdewnetwork.com/sgmedia/250x250/12924/cdlabel/images/Album_Art.jpg",
      Rating: `⭐⭐⭐⭐`
    }
  ],
  Pop: [
    {
      Name: "Pretty Girl",
      Date: "4 years ago",
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0HSW0lp5IapKxKAm-TG1FcVeZf_nM6O2lQ&usqp=CAU",
      Description:
        "Pretty Girl is a song by American singer and songwriter Maggie Lindemann.",
      Rating: `⭐⭐⭐⭐⭐`
    },

    {
      Name: "Why-Sabrina",
      Date: "4 years ago",
      Image: "https://wallpapercave.com/wp/wp1900885.jpg",
      Description:
        "Tells a story of a girl and a boy who have nothing alike but thats what makes them perfect.",
      Rating: `⭐⭐⭐⭐`
    },

    {
      Name: "Powfu-Death Bed",
      Date: "1 years ago",
      Image: "https://wallpapercave.com/wp/wp6161534.jpg",
      Description: "The song samples the 2017 song 'Coffee' by Beabadoobee.",
      Rating: `⭐⭐⭐⭐`
    }
  ],

  Indie: [
    {
      Name: "Izhaar",
      Date: "4 years ago",
      Description:
        "Released on 19 June'17, sung by Gurnazar and female lead Kanika Mann",
      Image: "https://wallpapercave.com/wp/wp9520568.jpg",
      Rating: `⭐⭐⭐⭐⭐`
    },
    {
      Name: "Koi Vi Nahi",
      Date: "3 years ago",
      Description:
        "Released in 2018, 'Koi Vi Nahi' is a song sung by Shirley Setia and Gurnazar.",
      Image: "https://wallpapercave.com/wp/wp2296632.jpg",
      Rating: `⭐⭐⭐⭐`
    },
    {
      Name: "Tu Mileya",
      Date: "1 years ago",
      Image: "https://wallpapercave.com/wp/wp4484068.jpg",
      Description: "The love song is sung and composed by Darshan Raval.",
      Rating: `⭐⭐⭐⭐⭐`
    }
  ]
};

const genreNames = Object.keys(mySongs);

export default function App() {
  const [songsList, setSongsList] = useState(mySongs.Lofi);

  function genreClickHandler(genre) {
    var songs = mySongs[genre];
    setSongsList(songs);
  }

  function getSongsPost(songs) {
    var name = songs.Name;
    var imageUrl = songs.Image;
    var date = songs.Date;
    var desc = songs.Description;
    var rating = songs.Rating;
    var songList = (
      <li>
        <img alt="song thubnail" src={imageUrl} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3 style={{ marginBottom: "0.5rem" }}>{name}</h3>
          <small style={{ fontSize: "0.7rem" }}>{date}</small>
          <p style={{ fontSize: "0.9rem" }}>{desc}</p>
          <p>{rating}</p>
        </div>
      </li>
    );
    return songList;
  }

  return (
    <div className="App">
      <h1>My Favourite Songs</h1>
      <p>Checkout my favorite songs. Select a genre to get started</p>
      <div>
        {genreNames.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {songsList.map((songs) => {
          return getSongsPost(songs);
        })}
      </ul>
    </div>
  );
}
