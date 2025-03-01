"use client";

import { useState } from "react";
import SignUp from "@/components/SignUp";
import ThankYou from "@/components/thankyou/ThankYou";
import Footer from "@/components/Footer";

export default function Page() {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);

  return (
    <>
      <main>
        {isClicked || <SignUp setIsClicked={setIsClicked} />}
        {isClicked && <ThankYou />}
      </main>
      {isClicked && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
}
