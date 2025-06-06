import { SignIn, SignUp } from "@clerk/nextjs";

export default function SignInPage() {
    return(
        <main className="flex items-center">
            <SignIn/>
            {/* <SignUp/> */}
        </main>
    )
}