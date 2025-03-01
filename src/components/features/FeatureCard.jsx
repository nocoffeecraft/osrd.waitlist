export default function FeatureCard({
  title,
  description,
  icon,
  classes,
  image,
}) {
  return (
    <div
      className={`rounded-2xl ${classes} flex flex-col justify-between p-4 sm:pt-0 pb-0 xl:p-4 xl:pb-0`}
    >
      <div className="mx-2 pt-4">
        <div className="flex gap-2 mb-2 items-center">
          {icon}
          <h3 className="text-2xl font-bold lg:text-xl sm:text-sm xl:text-2xl">
            {title}
          </h3>
        </div>
        <p className="text-base lg:text-base sm:text-xs xl:text-xl">
          {description}
        </p>
      </div>
      <img src={`${image}`} alt={title} className={`w-full rounded-b-2xl`} />
    </div>
  );
}
