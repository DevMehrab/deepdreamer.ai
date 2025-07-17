import React, { useContext, useEffect, useState } from "react";
import { TbCloudDownload } from "react-icons/tb";
import { RiBookmarkLine } from "react-icons/ri";
import { ImageContext } from "../../context/context";
import { TbSquareCheckFilled } from "react-icons/tb";
import { RiBookmarkFill } from "react-icons/ri";

export const Image = ({ src }) => {
  const { downloaded, saved, setDownloaded, setSaved } =
    useContext(ImageContext);
  const [loading, setLoading] = useState(true);
  let style = loading ? "rounded opacity-0" : "rounded";

  async function downloadImage(imageUrl, fileName = "downloaded-image.jpg") {
    setDownloaded((prev) => [...prev, src]);
    try {
      const response = await fetch(imageUrl, { mode: "cors" });
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Image download failed:", err);
    }
  }
  function handleSaved() {
    if (!saved.includes(src)) {
      setSaved((prev) => [...prev, src]);
    }
  }
  function handleDownload() {
    if (!downloaded.includes(src)) {
      downloadImage(src, "my-photo.jpg");
    }
  }
  function handleLoad() {
    setLoading(false);
  }
  useEffect(() => {
    setLoading(false);
  }, [src]);
  return (
    <>
      <div className="relative h-min">
        {loading && <p className="absolute left-1/2 top-1/2">Loading...</p>}
        <img className={style} onLoad={handleLoad} src={src} alt="" />
        {!loading && (
          <>
            <button
              onClick={handleDownload}
              className="absolute right-4 bottom-4 h-8 w-8 rounded-2xl bg-gray-700 flex justify-center items-center opacity-40 hover:opacity-100"
            >
              {downloaded.includes(src) ? (
                <TbSquareCheckFilled />
              ) : (
                <TbCloudDownload />
              )}
            </button>

            <button
              onClick={handleSaved}
              className="absolute right-16 bottom-4 h-8 w-8 rounded-2xl bg-gray-700 flex justify-center items-center opacity-40 hover:opacity-100"
            >
              {saved.includes(src) ? <RiBookmarkFill /> : <RiBookmarkLine />}
            </button>
          </>
        )}
      </div>
    </>
  );
};
