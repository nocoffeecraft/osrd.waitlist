export default function JoinedBy() {
  return (
    <div className="flex items-center justify-center rounded-full border border-gray-500 bg-transparent p-1 shadow shadow-black/5">
      <div className="flex -space-x-1.5">
        <img
          className="rounded-full ring-background lg:w-8 lg:h-8"
          src="/avatar/image1.png"
          width={30}
          height={30}
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-background lg:w-8 lg:h-8 sm:w-7 sm:h-7"
          src="/avatar/image2.png"
          width={30}
          height={30}
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-background lg:w-8 lg:h-8 sm:w-7 sm:h-7"
          src="/avatar/image3.png"
          width={30}
          height={30}
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-background lg:w-8 lg:h-8 sm:w-7 sm:h-7"
          src="/avatar/image4.png"
          width={30}
          height={30}
          alt="Avatar 04"
        />
      </div>
      <p className="px-2 text-xs text-gray-800 xl:text-base">
        <strong>10+</strong> Researchers already joined.
      </p>
    </div>
  );
}
