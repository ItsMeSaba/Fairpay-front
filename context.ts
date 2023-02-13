import { Types } from "mongoose";
import { createContext } from "react";
import { AuthData } from "types";

const GlobalContext = createContext({
    openAuthPopup: () => {},
    openSalaryPopup: (companyName: string, companyId: string) => {},
    openReviewPopup: (companyName: string, companyId: string) => {},
    openInterviewPopup: (companyName: string, companyId: string) => {},
    authData: {
        user: null,
        status: "loading"
    } as AuthData
});

export { GlobalContext };