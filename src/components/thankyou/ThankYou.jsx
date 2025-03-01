import AvatarGroup from "./AvatarGroup";
import HelpUs from "./HelpUs";

export default function ThankYou() {
  return (
    <main className="px-6 py-10 flex flex-col items-center space-y-6 text-center sm:w-2/3 sm:mx-auto">
      <img
        src="/logo.png"
        alt="OSRD Logo"
        width={100}
        height={100}
        className="mx-auto mb-7"
      />
      <h1 className="text-6xl sm:text-6xl font-bold mb-4 xl:mb-6 xl:text-[95px] ">
        You have been added to our{" "}
        <span className="text-[#0066FF]">waitlist</span>!
      </h1>
      <p className="text-xl">
        Thank you for joining, you'll be the first to know when we are ready.
      </p>
      <div className="mb-10 xl:mb-20">
        <AvatarGroup />
        <p className="text-muted-foreground mt-2">
          You are not alone, <strong>10+</strong> researchers joined.
        </p>
      </div>
      <HelpUs />
    </main>
  );
}
