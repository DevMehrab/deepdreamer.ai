import { useState } from "react";

export function useImage() {
  function getImage({ prompt, height, width, model, imageStyle }, seed) {
    const src = `https://image.pollinations.ai/prompt/${prompt} its style is ${imageStyle}?width=${width}&height=${height}&model=${model}&seed=${seed}&nologo=${true}`;

    return src;
  }

  return getImage;
}
