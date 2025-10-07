import { SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div>
    <h1>Home Page</h1>
    <SignedOut>
      <SignUpButton mode="modal">Sign Up</SignUpButton>
    </SignedOut>

    <SignedOut>
      <SignOutButton>Logout</SignOutButton>
    </SignedOut>
   </div>
  );

}
