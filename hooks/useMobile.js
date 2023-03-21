import { useState, useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

export function useMobile() {
    const [mobile, setMobile] = useState(window.innerWidth < 728);
    const {width} = useWindowSize();
    
    useEffect(() => {
        if (width > 728 && mobile) {
            setMobile(false)
        } else if (width <= 728 && !mobile) {
            setMobile(true)
        }
    }, [width]);

    return mobile;
};

