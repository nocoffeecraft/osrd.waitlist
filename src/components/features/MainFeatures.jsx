import FeatureCard from "./FeatureCard";
import features from "./features";

export default function MainFeatures() {
  return (
    <div className="text-black px-6 py-10 xl:px-16 xl:py-10 xl:mx-20 sm:px-16 sm:py-10">
      <h2 className="text-4xl lg:text-5xl font-bold xl:text-6xl">
        Turn your
        <span className="text-[#FF6375]"> research into assets, </span>
        <span className="text-[#FDA801]"> connect with researchers, </span>
        and
        <span className="text-[#00B4A8]"> shape the future of science</span>.
      </h2>

      <div className="mt-10 flex gap-6 flex-col xl:flex-row sm:flex-row xl:gap-6">
        {features.map((feature) => {
          return (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              classes={feature.classes}
              image={feature.image}
            />
          );
        })}
      </div>
    </div>
  );
}
