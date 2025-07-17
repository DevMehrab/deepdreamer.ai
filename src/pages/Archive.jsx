import React, { useContext } from "react";
import { Container } from "../utils/Container";
import { Result } from "../components/image/Result";
import { imageUrls } from "../data";
import { ImageContext } from "../context/context";

export const Archive = () => {
  const { saved, downloaded, history } = useContext(ImageContext);

  return (
    <>
      <Container>
        <Result title={"Saved Images"} imgArr={saved} />
        <Result title={"Downloaded Images"} imgArr={downloaded} />
        <Result title={"History"} imgArr={history} />
      </Container>
    </>
  );
};
