import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { AuthData } from "types";



// let data: AuthData = {
//     user: null,
//     status: "loading"
// }

// let isAlreadyFetching = false;

// export default function useCheckAuth() {
//     const [, forceUpdate] = useState(false);

//     useEffect(() => {
//         console.log("useCheckAuth", data, isAlreadyFetching);
//         if (data.status === "loading" && !isAlreadyFetching) {
//             console.log("Fetching from jwt");

//             (async () => {
//                 console.log("SENDING REQ TOCHECK")
//                 isAlreadyFetching = true;

//                 const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/auth/cu`, false, { withCredentials: true });
//                 console.log("IM FORCE UPDATING LMAO")
//                 isAlreadyFetching = false;

//                 if (res.data.userId) {
//                     data = {
//                         user: {
//                             id: res.data.userId as string,
//                         },
//                         status: "authenticated"
//                     };
//                 }

//                 else data = {
//                     user: null,
//                     status: "unauthenticated"
//                 };
//                 console.log("AUTH DATA IS THIS =====", data);
//                 forceUpdate(true);
//             })();
//         }
//     }, []);

//     return data;
// };



export default function useCheckAuth() {
    const [data, setData] = useState<AuthData>({
        user: null,
        status: "loading"
    });
    const isAlreadyFetching = useRef(false);

    useEffect(() => {
        if (data.status === "loading" || !isAlreadyFetching.current) {

            (async () => {
                isAlreadyFetching.current = true;

                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/auth/cu`, false, { withCredentials: true });

                isAlreadyFetching.current = false;

                if (res.data.userId) {
                    setData({
                        user: {
                            id: res.data.userId as string,
                        },
                        status: "authenticated"
                    });
                }

                else setData({
                    user: null,
                    status: "unauthenticated"
                });
            })();
        }
    }, []);

    return data;
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export default function useCheckAuth() {
//     const [userId, setUserId] = useState<string | null>(null);
//     // const [wasCookieChecked, setWasCookieChecked] = useState(false);

//     useEffect(() => {
//         if (!userId && !wasCookieChecked) {
//             console.log("Fetching from jwt");

//             (async () => {
//                 console.log("SENDING REQ TOCHECK")

//                 const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/auth/cu`, false, { withCredentials: true });

//                 setWasCookieChecked(true);

//                 if (res.data.userId) return setUserId(res.data.userId);

//                 console.log("Invalid JWT");
//             })();
//         }
//     }, []);



//     if (!userId) {
//         if (!wasCookieChecked) return ({
//             user: null,
//             status: "loading",
//         });

//         // Else
//         return ({
//             user: null,
//             status: "unauthenticated"
//         })
//     }

//     // Else
//     return ({
//         user: {
//             id: userId
//         },
//         status: "authenticated"
//     })
// }



// import axios from "axios";
// import { useEffect, useState } from "react";
// type User = any
// enum LoadStatusEnum {
//     loading,
//     unauthenticated,
//     authenticated,
//     error
// }
// interface AuthResTypeGen<E = User, S = LoadStatusEnum> {
//     user: User
//     status: S
// }
// type AuthResType = AuthResTypeGen<undefined, LoadStatusEnum.loading | LoadStatusEnum.unauthenticated | LoadStatusEnum.error> |
//     AuthResTypeGen<User, LoadStatusEnum.authenticated>

// //  {
// //     user?: User
// //     status: LoadStatusEnum
// // }
// export default function useCheckAuth() {
//     const [resData, setResData] = useState<AuthResType>({
//         user: undefined,
//         status: LoadStatusEnum.loading
//     });
//     const [wasCookieChecked, setWasCookieChecked] = useState(false);

//     useEffect(() => {
//         const setError = () => setResData({
//             user: undefined,
//             status: LoadStatusEnum.error
//         })
//         axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/auth/cu`, false, { withCredentials: true }).then((res: User) => {
//             const userId = res.data.userId
//             if (userId) {
//                 setResData({
//                     user: { id: userId },
//                     status: LoadStatusEnum.authenticated
//                 })
//             } else {
//                 setError()
//             }

//         }).catch(setError)
//     }, []);



//     return resData
// }
