import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex items-center">
      <SignIn />
    </main>
  );
}
