
import { useRef } from "react";
import { Link, useParams } from "react-router";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaAngleLeft ,FaAngleRight } from "react-icons/fa6";

import content from "../data/scrollCard";

const MicroDramaDetails = () => {
    const episodesRef = useRef(null);

const scroll = (direction) => {
  const container = episodesRef.current;

  if (!container) return;

  container.scrollBy({
    left:
      direction === "left"
        ? -container.clientWidth
        : container.clientWidth,
    behavior: "smooth",
  });
};
    const { slug } = useParams();

    const drama = content.find(
        (item) => item.slug === slug
    );

    if (!drama) {
        return (
            <main className="min-h-screen flex items-center justify-center px-6">
                <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">
                        404
                    </p>

                    <h1 className="text-3xl font-semibold">
                        Micro-drama not found
                    </h1>

                    <Link
                        to="/"
                        className="inline-block mt-6 text-sm underline underline-offset-4"
                    >
                        Back to home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-white text-black">

            {/* ================= HERO ================= */}
            {/* Hero Image */}

            <div className="relative w-full overflow-x-hidden h-screen aspect-video overflow-hidden bg-gray-100">

                <img src={drama.thumbnail} alt={drama.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 w-full h-full bg-black/60 "></div>

                <div className="absolute inset-0 flex flex-col justify-end items-start p-8 md:p-16 text-white">
                    <h1 className="uppercase text-7xl font-black tracking-wide">{drama.title}</h1>
                    <p className="text-lg w-[50%]">{drama.about}</p>
                </div>

            </div>


            {/* ================= EPISODES ================= */}

            {drama.episodes?.length > 0 && (

                <section className="border-t border-gray-200 px-6 md:px-10 lg:px-16 py-16">

                    <div className="max-w-7xl mx-auto">

                        {/* Heading */}

                        <div className="flex items-end justify-between mb-8">

                            <div>

                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                    Episodes
                                </p>

                                <h2 className="text-3xl md:text-4xl font-semibold">
                                    Watch the series
                                </h2>

                            </div>


                            <p className="text-sm text-gray-500">
                                {drama.episodes.length} Episodes
                            </p>

                        </div>


                        {/* Episode List */}

<div className="group w-full flex gap-4 items-center">

  {/* LEFT BUTTON */}
  <button
    onClick={() => scroll("left")}
    className="invisible
      w-10 h-10
      rounded-full
      bg-white
      text-black
      flex items-center justify-center group-hover:visible group-hover:visible hover:bg-violet hover:text-white
    "
  >
    <FaAngleLeft/>
  </button>


  {/* SCROLL CONTAINER */}
  <div
    ref={episodesRef}
    className=" w-full
      flex gap-4
      overflow-x-auto
      scrollbar-none
      scroll-smooth
    "
  >
    {drama.episodes.map((episode, index) => (
      <div
        key={episode.id}
        className="
          shrink-0
          w-[80%]
          sm:w-[45%]
          lg:w-[30%]
          aspect-square
          rounded-xl
          overflow-hidden
          relative
          bg-black
          text-white
        "
      >
        <video
          src="/reel-drama.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 z-10 flex flex-col justify-end p-4">
          <span className="text-lg font-extrabold">
            Episode {String(index + 1).padStart(2, "0")}
          </span>

          <p className="text-sm mt-2">
            {episode.description}
          </p>

          <span className="text-sm flex items-center gap-3 mt-3">
            <FaPlay/>
            {episode.duration}
          </span>
        </div>
      </div>
    ))}
  </div>


  {/* RIGHT BUTTON */}
  <button
    onClick={() => scroll("right")}
    className="invisible
      w-10 h-10
      rounded-full
      bg-white
      text-black
      flex items-center justify-center group-hover:visible hover:bg-violet hover:text-white
    "
  >
        <FaAngleRight/>

  </button>

</div>
                </div>

        </section>

    )
}


{/* ================= BEHIND THE STORY ================= */ }

{
    drama.credits && (

        <section className="border-t border-gray-200 px-6 md:px-10 lg:px-16 py-16">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">

                <div>

                    <p className="text-xs uppercase tracking-widest text-gray-500">
                        Behind the story
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

                    <div>

                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                            Production
                        </p>

                        <p className="text-base">
                            {drama.credits.production}
                        </p>

                    </div>


                    <div>

                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                            Creative
                        </p>

                        <p className="text-base">
                            {drama.credits.creative}
                        </p>

                    </div>


                    <div>

                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                            Brand
                        </p>

                        <p className="text-base">
                            {drama.credits.brand}
                        </p>

                    </div>

                </div>

            </div>

        </section>

    )
}


{/* ================= MORE MICRO-DRAMAS ================= */ }

<section className="border-t border-gray-200 px-6 md:px-10 lg:px-16 py-16">

    <div className="max-w-7xl mx-auto">

        <div className="mb-8">

            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Explore more
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold">
                More micro-dramas
            </h2>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {content.filter((item) => item.slug !== drama.slug).slice(0, 2).map((item) => (

                <Link
                    key={item.slug}
                    to={`/micro-dramas/${item.slug}`}
                    className="group"
                >

                    <div className="aspect-video overflow-hidden bg-gray-100">

                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                    </div>


                    <div className="flex items-center justify-between mt-4">

                        <h3 className="text-lg font-medium">
                            {item.title}
                        </h3>

                        <span className="text-sm text-gray-400">
                            ↗
                        </span>

                    </div>

                </Link>

            ))}

        </div>

    </div>

</section>
{/* ================= ABOUT ================= */ }

<section className="border-t border-gray-200 px-6 md:px-10 lg:px-16 py-16">

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">

        <div>

            <p className="text-xs uppercase tracking-widest text-gray-500">
                About the series
            </p>

        </div>


        <div>

            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
                {drama.about}
            </p>

        </div>

    </div>

</section>



    </main >
  );
};

export default MicroDramaDetails;
