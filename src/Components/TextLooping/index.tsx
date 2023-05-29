import React, { useEffect, useState } from "react";

const mappingArray = (title: string) => {
    const splitTitle = title.split("");

    return splitTitle.reduce((acc: string[], char, index) => {
        const subString = acc.length ? acc[index - 1] + char : char;
        acc.push(subString);
        return acc;
    }, []);
};

type Props = {
    title: string,
    ms: number
}

const TextLooping = ({ title, ms = 200 }: Props) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const desc = mappingArray(title);
    useEffect(() => {
        const scenio = setInterval(() => {
            setText(desc[index]);
            const currentIndex = index + 1 > desc.length ? 0 : index + 1;
            setIndex(currentIndex);
        }, ms);
        return () => {
            clearInterval(scenio);
        };
    }, [desc, index]);
    return (
        <h1 style={{
            height: 56
        }}>{text}</h1>
    );
};

export default TextLooping;