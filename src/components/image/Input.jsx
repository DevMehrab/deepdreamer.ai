import React, { useContext, useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import { PiStarFourBold } from "react-icons/pi";
import { ImageContext, ImgGenContext } from "../../context/context";
import { useImage } from "../../hooks/useImage";

import { ImSpinner10 } from "react-icons/im";

export const Input = ({ targetRef }) => {
    const [input, setInput] = useState(null);
    const { imgData, setImgData } = useContext(ImgGenContext);
    const { setCurrent, setHistory } = useContext(ImageContext);
    const getImage = useImage();

    let [icon, setIcon] = useState(<BiSolidSend />);

    function handleChange(e) {
        setImgData((prev) => {
            return {
                ...prev,
                prompt: e.target.value,
            };
        });
        setInput(e.target.value);
    }

    function handleClick(e) {
        if (input.trim()) {
            e.target.disabled = true;
            let newUrl = [];
            for (let i = 0; i < 3; i++) {
                newUrl.push(getImage(imgData, new Date().getTime() + i));
            }
            setHistory((prev) => [...newUrl, ...prev]);
            setCurrent(newUrl);
            setIcon(
                <div className="animate-spin">
                    <ImSpinner10 />
                </div>,
            );

            setTimeout(() => {
                e.target.disabled = false;
                setIcon(<BiSolidSend />);
                targetRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 5000);
        }
    }
    return (
        <>
            <div className="border border-gray-700 flex rounded-4xl my-8">
                <button className="text-gray-800  px-4 m-1 rounded-4xl">
                    <PiStarFourBold />
                </button>

                <input
                    onChange={handleChange}
                    className="w-full p-4 px-0 outline-none"
                    type="text"
                    placeholder="An image of batman"
                />

                <button
                    onClick={handleClick}
                    className="bg-fuchsia-700  px-4 m-1 rounded-4xl"
                >
                    {icon}
                </button>
            </div>
        </>
    );
};
