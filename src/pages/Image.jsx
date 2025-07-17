import React, { useContext, useEffect, useRef } from "react";
import { Container } from "../utils/Container";
import { Title } from "../components/image/Title";
import { Input } from "../components/image/Input";
import { Settings } from "../components/image/Settings";
import { Result } from "../components/image/Result";
import { imageUrls } from "../data";
import { ImgGenProvider } from "../provider/ImgGenProvider";
import { ImageContext } from "../context/context";

export const Image = () => {
  const bottomRef = useRef();
  const { current } = useContext(ImageContext);
  useEffect(() => {
    let interval = setTimeout(() => {
      
    }, 5000);
  }, [current]);
  return (
    <>
      <ImgGenProvider>
        <Container>
          <Title />
          <Input targetRef = {bottomRef}/>
          <Settings />

          <div ref={bottomRef} />
          <Result title={"Result"} imgArr={current} />
          <Result title={"Examples"} imgArr={imageUrls} />
        </Container>
      </ImgGenProvider>
    </>
  );
};
