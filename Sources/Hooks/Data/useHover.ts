import { useState } from "react";

export const useHover = () => {
    const [isHovered, setHovered] = useState(false);

    return {
        isHovered: isHovered,
        hover: () => setHovered(true),
        unhover: () => setHovered(false)
    };
};
