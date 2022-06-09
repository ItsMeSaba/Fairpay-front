import { createContext } from "react";

const GlobalContext = createContext({
    openAuthPopup: () => {},
});


export { GlobalContext };