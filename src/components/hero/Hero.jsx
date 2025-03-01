import JoinedBy from "./JoinedBy";

export default function Hero() {
  return (
    <div className="text-black px-6 py-10 pt-0 flex flex-col text-center mt-8 xl:px-16 xl:py-10 sm:w-2/3 sm:mx-auto">
      <img
        src="/logo.png"
        alt="OSRD Logo"
        width={100}
        height={100}
        className="mx-auto mb-7"
      />
      <h1 className="text-7xl sm:text-6xl font-bold mb-4 xl:mb-6 xl:text-[95px]">
        World Runs on Your Research.
      </h1>
      <p className="text-2xl mb-6 sm:text-xl">
        The old system is broken—funding is scarce, publishing is expensive.
        Together, we’re building a new era of decentralized research.
      </p>
      <a
        href="/join"
        className="py-4 bg-[#0066FF] w-full text-xl hover:scale-105 ease-in-out transform duration-500 rounded-xl text-white hover:bg-blue-600 mt-2 xl:w-2/3 mx-auto lg:w-2/3"
      >
        Join The Movement!
      </a>
      <div className="w-fit mx-auto mb-4 mt-3">
        <JoinedBy />
      </div>
    </div>
  );
}
