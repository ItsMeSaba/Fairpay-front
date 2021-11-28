import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log("STARTING")
    const data = req.socket.address();
    const test = data.address
    console.log("IP --->", req.headers["x-real-ip"] || req.socket.address())



    res.send("DATA");
}