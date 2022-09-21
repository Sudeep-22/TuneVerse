import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

function Searched() {
  let params = useParams();
  const [container, setContainer] = useState([]);
  const [container2, setContainer2] = useState([]);
  const fetchData = (endPoint) => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/search/",
      params: {
        q: endPoint,
        type: "multi",
        offset: "0",
        limit: "10",
        numberOfTopResults: "5",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_SPOT_API,
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        setContainer(data.tracks.items);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //------------------------------------------------Get track api

  const fetchTrackData = (endPointTrack) => {
    const options = {
      method: "GET",
      url: "https://spotify23.p.rapidapi.com/tracks/",
      params: { ids: endPointTrack },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_SPOT_API,
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const dataTrack = response.data.tracks[0].preview_url;
        setContainer2(dataTrack);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //------------------------------------------------Get track api

  useEffect(() => {
    fetchData(params.searchParam);
  }, [params.searchParam]);

  return (
    <Div1>
      <H2>Songs</H2>
      <AudioPlayer1 src={container2} controls></AudioPlayer1>
      <Div2>
        {container.map((item) => {
          return (
            <Div3>
              <ImgCard
                src={item.data.albumOfTrack.coverArt.sources[0].url}
                className="cardImage"
                alt="pic here"
                onClick={() => {
                  fetchTrackData(item.data.id);
                }}
              />

              <H4>{item.data.name}</H4>
            </Div3>
          );
        })}
      </Div2>
      <Div4></Div4>
    </Div1>
  );
}

const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5vh;
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 10vw;
  /* gap: 10vw; */
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgCard = styled.img`
  height: 20vh;
  width: 20vh;
  transition: 0.25s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 0.4rem;
  :hover {
    transform: scale(1.3);
    border-radius: 1rem;
  }
`;

const H2 = styled.h2`
  text-align: center;
  font-family: "Fira Sans";
  color: black;
`;

const H4 = styled.h4`
  text-align: center;
  font-family: "Fira Sans";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 14ch;
  color: black;
`;

const AudioPlayer1 = styled.audio`
  ::-webkit-media-controls-panel {
    background-color: white;
  }
  position: fixed;
  width: 100vw;
  bottom: 0;
  padding: 0;
  background-color: white;
`;

const Div4 = styled.div`
  height: 10vh;
  width: 100vw;
`;

export default Searched;
