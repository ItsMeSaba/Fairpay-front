import { Types } from "mongoose";
import { createContext } from "react";
import { AuthData } from "types";

const GlobalContext = createContext({
    openAuthPopup: () => {},
    openSalaryPopup: (companyName: string, companyId: Types.ObjectId) => {},
    openReviewPopup: (companyName: string, companyId: Types.ObjectId) => {},
    authData: {
        user: null,
        status: "loading"
    } as AuthData
});

export { GlobalContext };