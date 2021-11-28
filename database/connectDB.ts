import mongoose from "mongoose"

export async function connectDB(mongodbURI: string) {
    return await mongoose.connect(mongodbURI);
}

