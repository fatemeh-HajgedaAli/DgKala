import { posterData } from "../../../data/posterDescription.data";

export default function PosterDescription() {
  return (
    <>
      <div className="hidden lg:flex flex-row gap-5 justify-items-center mx-25 ">
        {posterData.map((poster) => (
          <div className=" items-center  " key={poster.id}>
            <img
              src={poster.image}
              alt={poster.title}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        ))}
      </div>
    </>
  );
}
