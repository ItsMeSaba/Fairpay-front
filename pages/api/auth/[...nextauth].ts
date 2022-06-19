import NextAuth, { Session, User } from "next-auth"
import { JWT } from "next-auth/jwt"
import FacebookProvider from "next-auth/providers/facebook"
import crypto from "crypto"
import bcrypt from "bcrypt"
import axios from "axios"

export default NextAuth({
  	providers: [
    	FacebookProvider({
      		clientId: process.env.FACEBOOK_ID!,
      		clientSecret: process.env.FACEBOOK_SECRET!,
    	}),
  	],
  	callbacks: {
		async jwt ({ token, user, account, profile, isNewUser }) {
			
			if (profile) {
				token.profileId = crypto.createHash("sha256").update(profile.id as string).digest("hex");
				
				await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/initialize`, { userId: token.profileId });
				return token;
			}
			
			console.log("JWT END")
			return token
		},

    	async session({ session, token, user }) {
           
			  if (session) session.user = { userId: token.profileId };
			
			return Promise.resolve(session);
    	},

  	},
	secret: "DelI+EbP8lYCo9QxYxFYR1w4lJwUAFb5GKqXJqRcFP8=",
})

// 4687286118025284
// $2b$10$USZ19uGpnMUBujvfIp44me5gziQ6O8ijOrZcPXwCeByK2krNaqSOe
// $2b$10$pydjOGudl/wSeE0VH9FncOvDbSD2R3tfLxRTk52sk7RkqqrWVZqlK
// $2b$10$BxLpss3bTBmXRQfGLPNEZez4WI2jaOzFScnQiTh2lTeMlgEVZJG.S
// $2b$10$CbOwByp8SpLf0JPW8N8kSuy.hiiJYoMEoa6Lgz4VrUIqP.e3/GAMS


// d76b0aaff03811730d86e726beaf7e5248a0feae6fefe8d70fa9b7537ffb762e
// d76b0aaff03811730d86e726beaf7e5248a0feae6fefe8d70fa9b7537ffb762e
// d76b0aaff03811730d86e726beaf7e5248a0feae6fefe8d70fa9b7537ffb762e
// d76b0aaff03811730d86e726beaf7e5248a0feae6fefe8d70fa9b7537ffb762e