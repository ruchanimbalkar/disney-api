import { useEffect, useState } from "react";
import optionButtons from "../optionButtons.js";
import Button from "./Button.jsx";
export default function MainContent({ character }) {
  const [data, setData] = useState();
  const [list, setList] = useState([]);
  // const [click, setClick] = useState([true, false, false, false]);

  const handleClickBtn = (option, characterName) => {
    switch (characterName) {
      case "Mickey Mouse":
        switch (option) {
          case "Films":
            setList(data[1].films);
            break;
          case "Tv Shows":
            setList(data[1].tvShows);
            break;
          case "Video Games":
            setList(data[1].videoGames);
            break;
          case "Park Attractions":
            setList(data[1].parkAttractions);
            break;
        }
        break;

      case "Minnie Mouse":
      case "Daisy Duck":
        switch (option) {
          case "Films":
            setList(data.films);
            break;
          case "Tv Shows":
            setList(data.tvShows);
            break;
          case "Video Games":
            setList(data.videoGames);
            break;
          case "Park Attractions":
            setList(data.parkAttractions);
            break;
        }
        break;
      case "Donald Duck":
        switch (option) {
          case "Films":
            setList(data[0].films);
            break;
          case "Tv Shows":
            setList(data[0].tvShows);
            break;
          case "Video Games":
            setList(data[0].videoGames);
            break;
          case "Park Attractions":
            setList(data[0].parkAttractions);
            break;
        }
        break;
    }
    // let result = click.map((_, i) => {
    //   if (i != index) {
    //     return false;
    //   }
    //   return true;
    // });
    // setClick(result);
  };

  const getCharacterData = async () => {
    try {
      const response = await fetch(
        `https://api.disneyapi.dev/character?name=${character.text}`
      );
      if (!response.ok) {
        console.error(`Response status: ${response.status}`);
        return;
      }
      const data = await response.json();
      console.log("data : ", data);
      setData(data.data);
    } catch (error) {
      console.error("Error Fetching API : ", error.message);
    }
  };

  useEffect(() => {
    getCharacterData();
  }, []);

  return (
    <>
      <main>
        <div className="character-option-div">
          <h2>{character.text}</h2>
          <div className="option-div">
            {optionButtons.map((item, index) => (
              <Button
                buttonText={item}
                handleClick={() => handleClickBtn(item, character.text)}
                key={"index_" + index}
              />
            ))}
          </div>
        </div>
        <section className="option-result">
          {character.imageUrl && (
            <img src={character.imageUrl} alt={character.text} />
          )}
          <ol>
            {list.map((item, index) => (
              <li key={"index_" + index}>{item}</li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}
