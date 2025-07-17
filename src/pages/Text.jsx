import React from "react";
import { UseCase } from "../components/text/UseCase";
import { Container } from "../utils/Container";
import { Transform } from "../components/text/Trsansform";
import { TextProvider } from "../provider/TextProvider";
export const Text = () => {
  return (
    <>
      <TextProvider>
        <Container>
          <Transform />
        </Container>
      </TextProvider>
    </>
  );
};
