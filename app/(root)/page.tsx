//import { SignedOut } from "@clerk/clerk-react";
//import { UserButton, ClerkProvider, SignOutButton } from "@clerk/nextjs";

//import { ClerkProvider, SignedOut, UserButton } from '@clerk/nextjs'

import { UserButton } from "@clerk/nextjs";
const SetupPage = () => {
    return (
      <div className="p-4">
        <UserButton/>
      </div>
    );
  }
  
  export default SetupPage;

// <UserButton afterSignOutUrl="/"/>

/*
        <ClerkProvider>
          <SignedOut>
            <UserButton/>
          </SignedOut>

        </ClerkProvider>

*/

/*
        <UserButton/>

*/