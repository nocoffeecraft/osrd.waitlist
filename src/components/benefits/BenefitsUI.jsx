import texts from "./benefitsData";

export default function Benefits() {
  return (
    <div className="text-black px-7 py-10 xl:px-16 xl:py-10 sm:px-16 sm:py-10 xl:flex xl:items-center xl:mx-24 xl:gap-10">
      <div>
        <h2 className="mb-7 text-4xl lg:text-5xl font-bold xl:text-6xl">
          Benefits & Outcomes
        </h2>
        {texts.map((text) => {
          return (
            <div key={text.title} className="mb-7">
              <div className="flex items-center gap-4 mb-3">
                {text.icon}
                <h3 className="text-2xl font-bold sm:text-2xl">{text.title}</h3>
              </div>
              <p className="text-xl">{text.description}</p>
            </div>
          );
        })}
      </div>
      <img src="/books.png" alt="Books" className="rounded-2xl xl:w-1/2" />
    </div>
  );
}
