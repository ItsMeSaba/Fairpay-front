import { Types } from "mongoose";
import { createContext } from "react";

const GlobalContext = createContext({
    openAuthPopup: () => {},
    openSalaryPopup: (companyName: string, companyId: Types.ObjectId) => {},
    openReviewPopup: (companyName: string, companyId: Types.ObjectId) => {},
});


export { GlobalContext };