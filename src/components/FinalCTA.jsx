export default function FinalCTA() {
  return (
    <div className="text-white bg-black px-7 py-10 mx-6 sm:px-16 sm:py-10 mb-7 text-center sm:mx-16 xl:py-16 xl:px-80 xl:mx-40 rounded-4xl space-y-7">
      <h2 className="text-4xl font-bold xl:mb-5 xl:text-6xl sm:w-3/4 mx-auto">
        Join the Future of Research Today!
      </h2>
      <p className="text-lg sm:text-xl">
        Connect with top researchers, secure funding, and own your discoveries.
      </p>
      <a
        href="/join"
        className="py-4 bg-[#0066FF] block xl:mx-auto sm:mx-auto text-xl w-full text-white rounded-xl xl:w-1/2 sm:w-1/2 hover:bg-blue-600 mt-2 hover:scale-105 ease-in-out transform duration-500"
      >
        Join The Waitlist
      </a>
    </div>
  );
}
