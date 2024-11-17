import { Session } from 'inspector/promises'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import connectToDb from '../../../../utils/database'
import User from '../../../../models/User'
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
            
        })
    ],
    callbacks:{
        async Session({sesssion}){
            const sessionUser = await User.findOne({email:session.user.email })
            Session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({profile}){
            try {
                await connectToDb();
                const userExists = await User.findOne({
                    email: profile.email
                });
                if(!userExists) {
                    await User.create({
                        email: profile.email,
                        userName: profile.name.replace (' ', '').toLowerCase(),
                        image: profile.picture
                    })
                }
                return true;
            } catch (error){
                console.log(error);
                return false;
            }
        }
    }
   
})
export {handler as GET, handler as POST}


