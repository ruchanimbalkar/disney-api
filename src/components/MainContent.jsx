import { useEffect, useState } from "react";
import optionButtons from "../optionButtons.js";
import Button from "./Button.jsx";
export default function MainContent({ character }) {
  const [data, setData] = useState();
  const [list, setList] = useState([]);
  const [url, setUrl] = useState("https://api.disneyapi.dev/characters/4703");
  // const [click, setClick] = useState([true, false, false, false]);

  const handleClickBtn = (option, characterUrl) => {
    setUrl(characterUrl);
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
      const response = await fetch(url);
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
  }, [url]);

  return (
    <>
      <main>
        <div className="character-option-div">
          <h2>{character.text}</h2>
          <div className="option-div">
            {optionButtons.map((item, index) => (
              <Button
                buttonText={item}
                handleClick={() => handleClickBtn(item, character.url)}
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
