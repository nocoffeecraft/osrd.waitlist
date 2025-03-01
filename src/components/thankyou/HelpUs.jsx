export default function HelpUs() {
  return (
    <section className="bg-black text-white px-10 py-10 rounded-4xl space-y-7">
      <p className="text-xl text-gray-200">
        You know the struggles of research better than anyone.{" "}
      </p>
      <h2 className="text-4xl font-bold xl:text-6xl">
        Tell Us What Matters Most.
      </h2>
      <p>
        Join our core team for a conversation to help us shape a platform that
        truly empowers researchers.
      </p>
      <a
        href="/join"
        target="_blank"
        className="py-4 bg-[#0066FF] w-full block text-xl hover:scale-105 ease-in-out transform duration-500 rounded-xl text-white hover:bg-blue-600 mt-2 mx-auto xl:w-1/2"
      >
        Talk to Us
      </a>
    </section>
  );
}
