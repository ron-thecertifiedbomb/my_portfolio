import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AppScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // instant scroll to top
    }, [pathname]);

    return null;
};
