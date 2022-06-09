import "next-auth";

declare module "next-auth" {
	interface User {
	  	userId: string;
	}
  
	interface Session {
	  	user: User;
	}
  }