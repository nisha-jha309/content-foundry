import { useRef } from "react";
import { Link } from "react-router";
import logos from "../data/logo";
import WebsiteGif from "../../src/assets/content-foundry-show-reel.mp4";
import mockupDrama from "../../public/reel-drama.mp4";
import heroNaJaneKyu from "../../src/assets/hero-na-jane-kyu.webp";
import naJaneKyu from "../../src/assets/na-jane-kyu.webp";
import campusDiaries from "../../src/assets/campus-diaries.webp";
import founderMagazine from "../../src/assets/founder-magazine.avif"
import Testimonial from "../components/testimonial";
import content from "../data/scrollCard";


const Home = () => {
  const moreWorkRef = useRef(null);

  const scrollWork = (direction) => {
    moreWorkRef.current?.scrollBy({
      left: direction * 400,
      behavior: "smooth",
    });
  };

  const feed = [{
    title: "Discovery",
    chips: [
      "YouTube Shorts",
      "Instagram Reels",
      "Facebook Reels",
    ],
    text: "Reach new viewers at scale.",
  },
  {
    title: "Bharat apps",
    chips: [
      "Josh",
      "Moj",
      "ShareChat",
      "Chingari",
    ],
    text: "Hindi and regional audiences beyond the metros.",
  },
  {
    title: "Share loop",
    chips: [
      "WhatsApp Channels",
      "Status",
      "Opt-in communities",
    ],
    text: "Viewers forward the cliffhanger to friends.",
  },
  ]
  return (
    <div id="top">
      {/* HERO */}
      <section className="grid min-h-[620px] grid-cols-1 lg:grid-cols-2">
        {/* Hero Copy */}
        <div className="flex flex-col justify-center px-[5vw] py-[65px] lg:py-[82px] lg:pl-[max(5vw,calc((100vw-1296px)/2))]">
          <div className="text-xs font-black uppercase tracking-[0.19em] text-violet">
            Micro-dramas for brands
          </div>
          <h1 className="my-6 font-serif text-[clamp(52px,6vw,98px)] text-extrBold font-medium leading-[0.94] tracking-[-0.055em]">
            Make them
            <br />
            watch the
            <br />
            next one.
          </h1>

          <p className="max-w-[520px] text-base leading-[1.6] text-[#4c4841]">
            We put your product inside a short series your customers follow, then take it to every feed they scroll.
          </p>

          <div className="mt-[23px] flex flex-wrap gap-3">
            <a href="#stories" className="inline-flex items-center justify-center bg-violet px-6 py-4 font-black text-s font-extrabold text-white hover:opacity-70">
              Watch the series ↗
            </a>
            <a href="#work" className="inline-flex items-center justify-center border border-ink bg-transparent px-6 py-4 font-black text-s font-extrabold hover:bg-black hover:text-white">
              How it pays back
            </a>
          </div>
        </div>

        {/* Hero Artwork */}
        <div className="relative flex min-h-[480px] items-center justify-center overflow-hidden bg-purple lg:min-h-[500px] overflow-hidden">
          <img src={heroNaJaneKyu} alt="na jane kyu banner" className="w-full h-full object-cover hover:scale-[1.08] transition-transform duration-300 ease" />
        </div>
      </section>

      {/* FORMAT STRIP */}
      <section className="overflow-hidden bg-ink py-[27px] text-white">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-[30px] px-[5vw]">
          <b className="mr-5 text-[11px] uppercase tracking-[0.17em] text-[#c9bdb0]">
            What we do
          </b>

          <span className="text-lg font-extrabold">Micro-dramas</span>
          <span className="text-lg font-extrabold">AI videos</span>
          <span className="text-lg font-extrabold">Channel cuts</span>
          <span className="text-lg font-extrabold">Hindi & regional versions</span>
          <span className="text-lg font-extrabold">Brand films</span>
        </div>
      </section>

      {/* SHOWREEL */}
      <section id="showreel" className="bg-[#211e22] py-20 text-white">
        <div className="mx-auto max-w-[1440px] px-[5vw]">
          <div className="text-[12px] font-black uppercase tracking-[0.19em] text-violet">
            The studio in motion
          </div>

          <div className="mt-3 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="m-0 font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em]">
              Showreel.
            </h2>

            <p className="max-w-[420px] text-[17px] leading-[1.6] text-[#ddd]">
              A fast look at the films, campaigns and stories Content
              Foundry makes. The final reel video and poster can be placed
              here when supplied.
            </p>
          </div>
        </div>
        <div className=" mt-[30px] w-full overflow-hidden ">
          <video autoPlay loop muted playsInline className="block h-auto w-full h-auto object-cover" src={WebsiteGif} title="Website Gif" />
        </div>
      </section>

      {/* brands */}
      <section className="bg-paper py-[70px] border-b border-line" aria-label="Credentials" >
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <div className="uppercase tracking-[0.19em] text-xs font-black text-violet mb-5">
            Trusted by brands that can't afford a miss
          </div>

          <div className="grid grid-cols-4 border-t border-ink border-b border-line max-[900px]:grid-cols-2">

            <div className="p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,64px)] leading-none tracking-[-0.04em]">
                14+
              </b>

              <span className="text-s text-muted">
                brands and institutions served
              </span>
            </div>

            <div className="p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,64px)] leading-none tracking-[-0.04em]">
                8
              </b>

              <span className="text-s text-muted">
                production services in-house
              </span>
            </div>

            <div className="p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,64px)] leading-none tracking-[-0.04em]">
                10
              </b>

              <span className="text-s text-muted">
                episode micro-drama delivered
              </span>
            </div>

            <div className="p-[26px_22px_26px_0]">
              <b className="block font-serif text-[clamp(40px,4.5vw,64px)] leading-none tracking-[-0.04em]">
                2
              </b>

              <span className="text-s text-muted">
                routes: live shoot and AI
              </span>
            </div>

          </div>

          <p className="mt-4 text-s text-muted">
            Founder Harshita Adlakha: cover story,
            Entrepreneurs Today 30 Under 30, July 2024.
            {" "}
            <a
              href="#founder"
              className="border-b border-current font-extrabold text-ink"
            >
              Meet her
            </a>
          </p>
          <div className="overflow-hidden mt-[34px]">
            <div className="flex w-max animate-logo-scroll gap-12">

              {[...logos, ...logos].map((client, index) => (
                <img
                  src={client.image}
                  key={index}
                  alt={client.name}
                  className="w-auto shrink-0 h-[24px] w-auto"
                />
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* STORIES */}
      <section id="stories" className="py-[105px] max-[800px]:py-[70px] max-w-[1440px] mx-auto px-[5vw]">
        <div className="flex justify-between items-end gap-[35px] max-[800px]:block">

          <div>
            <div className="uppercase tracking-[0.19em] text-xs mb-4 font-black text-violet">
              Our series
            </div>

            <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]">
              One ad is seen once.
              <br />
              A series brings them back.
            </h2>
          </div>

          <p className="text-base leading-[1.6] text-muted max-w-[420px]">
            Shot with real actors or made with AI.
          </p>

        </div>

        <div className="grid grid-cols-[1.4fr_1fr] gap-[18px] mt-[35px] max-[800px]:grid-cols-1">

          <article className="group relative min-h-[420px] text-white overflow-hidden">
            <div className="z-0 absolute inset-0 group-hover:scale-[1.08] transition-transform duration-300 ease">
              <img src={naJaneKyu} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="z-0 absolute inset-0  bg-black/60"></div>

            <div className="z-1 absolute inset-0 p-7 flex flex-col justify-end">
              <span className="absolute top-7 left-7 bg-white text-[#222] px-3 py-[9px] text-[11px] font-black uppercase">Live Shoot</span>
              <small className="tracking-[0.17em] uppercase font-extrabold">10 episodes</small>
              <h3 className="font-serif text-[45px] my-3">Na Jane Kyu</h3>
              <a className="self-start mt-[25px] font-extrabold border-b border-white pb-[5px]" href="https://drive.google.com/drive/folders/1QXgc0IrbJApkh5S4xiy4BPzbbZrnoqvl?usp=sharing" target="_blank" rel="noopener" >
                Watch the series ↗
              </a>
            </div>
          </article>

          <article className="group text-white  min-h-[420px] relative p-7 flex flex-col justify-end overflow-hidden">
            <div className="z-0 absolute inset-0 group-hover:scale-[1.08] transition-transform duration-300 ease">
              <img src={campusDiaries} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="z-0 absolute inset-0  bg-black/60"></div>

            <div className="z-1 absolute inset-0 p-7 flex flex-col justify-end">
              <span className="absolute top-7 left-7 bg-white text-[#222] px-3 py-[9px] text-[11px] font-black uppercase">AI video</span>
              <small className="tracking-[0.17em] uppercase font-extrabold">Campus series</small>
              <h3 className="font-serif text-[45px] my-3">Campus Diary</h3>
              <span className="self-start mt-[25px] font-extrabold border-b border-white pb-[5px]">Coming soon</span>
            </div>

          </article>

        </div>
      </section>

      {/* ROI */}
      <section id="offer" className="bg-offer py-[105px]" >
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <div className="uppercase tracking-[0.19em] text-xs mb-4 font-black text-violet">For companies</div>
          <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]">
            Your product, inside a story
            <br />
            your customers follow.
          </h2>
          <div className="grid grid-cols-4 gap-[15px] mt-[35px] max-[900px]:grid-cols-1">

            {[
              [
                "In the plot",
                "Characters use your product in the story.",
              ],
              [
                "Your own series",
                "A story world built around your category.",
              ],
              [
                "Presented by",
                "Sponsor a series. Fastest way in.",
              ],
              [
                "Explain it",
                "Complex products made simple through characters.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="bg-paper p-7 border-t-4 border-violet"
              >
                <h3 className="font-serif text-[26px] m-0 mb-[10px]">
                  {title}
                </h3>

                <p className="text-[15px] leading-[1.6] text-muted m-0">
                  {text}
                </p>
              </div>
            ))}

          </div>

          <h2 className="font-serif text-[clamp(30px,3.2vw,50px)] leading-[1.03] tracking-[-0.04em] mt-20 mb-[25px]">
            Why it pays back.
          </h2>

          <div className="grid grid-cols-2 gap-x-10 mt-[25px] border-t border-line max-[900px]:grid-cols-1">

            {[
              [
                "One shoot, many assets",
                "Dozens of cuts from a single production.",
              ],
              [
                "Viewers return on their own",
                "Repeat exposure you don't pay for again.",
              ],
              [
                "Shared, not just shown",
                "Cliffhangers get forwarded, adding free reach.",
              ],
              [
                "Budget behind what works",
                "We test hooks first, then boost the winner.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="py-6 border-b border-line"
              >
                <b className="text-[18px]">
                  {title}
                </b>

                <p className="text-[15px] leading-[1.6] text-muted m-0 mt-2">
                  {text}
                </p>
              </div>
            ))}

          </div>

          <div className="grid grid-cols-[1fr_1.6fr] gap-10 items-center bg-ink text-white p-10 mt-10 max-[900px]:grid-cols-1 max-[900px]:p-7">

            <div>
              <h3 className="font-serif text-[32px] m-0 mb-[10px]">
                What we report
              </h3>

              <p className="text-muted-light m-0">
                In your finance team's language.
              </p>
            </div>

            <div className="flex flex-wrap gap-[10px]">

              {[
                "Cost per returning viewer",
                "Cost per engaged minute",
                "Cost per enquiry or install",
              ].map((metric) => (
                <span
                  key={metric}
                  className="border border-white/30 px-[14px] py-[10px] font-bold text-[14px]"
                >
                  {metric}
                </span>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* AMPLIFICATION */}
      <section id="amplify" className="bg-amp text-white py-[105px] max-[900px]:py-[70px]" >
        <div className="max-w-[1440px] mx-auto px-[5vw]">

          <div className="uppercase tracking-[0.19em] text-xs font-black text-violet mb-4"> Amplification</div>
          <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em] my-[13px_0_25px]">
            Made for every feed
            <br />
            India scrolls.
          </h2>

          <div className="grid grid-cols-[300px_1fr] gap-14 mt-10 items-start max-[900px]:grid-cols-1">

            <div>
              <div role="img" aria-label="Vertical episode frame" className="w-[260px] aspect-[9/17] rounded-[34px] border-[10px] border-[#0f0d12]  relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.53)] max-[900px]:mx-auto" >
                <video src={mockupDrama} autoPlay muted loop className="w-full h-full object-cover"></video>
              </div>
            </div>

            <div className="flex flex-col gap-[14px]">

              {feed.map((feed) => (
                <div
                  key={feed.title}
                  className="group grid grid-cols-[230px_1fr] gap-7 py-[26px] border-t border-white/20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-3"
                >
                  <div>
                    <h3 className="font-serif text-[28px] m-0 mb-3">
                      {feed.title}
                    </h3>

                    <div className="flex flex-wrap gap-[7px]">
                      {feed.chips.map((chip) => (
                        <span key={chip} className="border border-white/30 px-[10px] py-[6px] text-[13px] font-bold hover:border-gray-500 hover:text-gray-500">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="m-0 text-[15px] text-white/80">
                    {feed.text}
                  </p>
                </div>
              ))}

            </div>
          </div>

          <div className="grid grid-cols-3 gap-[15px] mt-[60px] max-[900px]:grid-cols-1">

            {[
              [
                "Channel-ready",
                "Included",
                "Platform cuts, hooks, captions and a release plan.",
              ],
              [
                "Seeded",
                "Add-on",
                "Creators and community partners carry the series.",
              ],
              [
                "Boosted",
                "Paid media",
                "Targeted promotion on YouTube and Meta.",
              ],
            ].map(([title, label, text]) => (
              <div
                key={title}
                className="group border border-white/20 p-[30px] flex flex-col hover:bg-violet hover:border-violet"
              >
                <h3 className="font-serif text-[30px] m-0 mb-[6px]">
                  {title}
                </h3>

                <em className="not-italic text-[13px] text-violet group-hover:text-white font-extrabold mb-4">
                  {label}
                </em>

                <p className="text-[15px] m-0">
                  {text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FOUNDER */}
      <section id="founder" className="bg-cream py-20 md:py-28" >
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-20">

          {/* Cover */}
          <div className="relative max-w-[300px]">
            <img src={founderMagazine} alt="Harshita Adlakha on the cover of Entrepreneurs Today, 30 Under 30 special issue, July 2024" className="block w-full" />

            <span className="absolute -right-8 top-4 bg-violet px-3 py-1 text-sm font-bold text-white rotate-45">
              Cover story
            </span>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-violet">
              The founder
            </div>

            <h2 className="font-serif text-5xl leading-[0.95] tracking-tight text-ink md:text-6xl">
              Led by
              <br />
              Harshita Adlakha.
            </h2>

            {/* Recognition */}
            <div className="mt-8 grid grid-cols-[90px_1fr] gap-x-5 gap-y-3 border-t border-line pt-5 text-sm">
              <b className="font-bold text-ink">Featured</b>
              <span className="text-[#4c4841]"> Cover story, Entrepreneurs Today</span>
              <b className="font-bold text-ink">Issue</b>
              <span className="text-[#4c4841]">30 Under 30 special, July 2024</span>
              <b className="font-bold text-ink">Category </b>
              <span className="text-[#4c4841]"> Advertising, Marketing and Media </span>
            </div>

            {/* Quote */}
            <p className="mt-8 mb-7 max-w-[650px] font-serif text-[22px] leading-[1.35] text-ink md:text-[30px]">
              “A video is the moving face of your brand, capturing more
              attention and driving top-of-mind awareness.”
            </p>

            {/* Button */}
            <a href="https://www.linkedin.com/in/harshita-adlakha-37a256152/" target="_blank" rel="noopener noreferrer" className="inline-flex border border-ink px-5 py-3 text-sm font-bold text-ink transition hover:bg-ink hover:text-white" >
              Connect on LinkedIn ↗
            </a>
          </div>

        </div>
      </section>


      {/* PROOF */}
      <section id="clients" className="bg-[#201e1a] py-[70px] text-white lg:py-[105px]">
        <div className="mx-auto max-w-[1440px] px-[5vw]">
          <div className="text-[12px] font-black uppercase tracking-[0.19em] text-violet">
            Experience behind the stories
          </div>

          <h2 className="mt-[13px] font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em]">
            Trusted by brands that
            <br />
            need the work to deliver.
          </h2>

          {/* LOGOS */}
          <div className="my-[30px] mb-[45px] flex flex-wrap gap-4">
            {["JCB", "Surya", "TECNO", "HMD", "GJEPC", "Incredible India",].map((logo) => (
              <span
                key={logo}
                className="border border-[#716b63] px-[21px] py-[15px] text-[16px] font-extrabold hover:border-gray-700 hover:text-gray-700"
              >
                {logo}
              </span>
            ))}
          </div>

          <div className="mb-[15px] text-xs font-black uppercase tracking-[0.19em] text-[#d6b4a3]">
            What our clients say
          </div>

          {/* TESTIMONIALS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Testimonial
              text="The film arrived quickly and at a fair price, and helped us secure our first Japanese customer."
              name="Vineet Taneja"
              role="CEO, ACE Automation Engineers"
            />

            <Testimonial
              text="Harshita and her team understood our brief, delivered within a reasonable time, and were creative and accommodating throughout."
              name="Payal Majmudar"
              role="Editor, Luxebook"
            />

            <Testimonial
              text="The project ran smoothly from beginning to delivery, and the quality of the finished work met our expectations."
              name="Lead, Branding and Communication"
              role="JCB India"
            />
          </div>

          <p className="mt-[26px] text-[12px] text-[#bdb5ab]">
            Client feedback paraphrased from Content Foundry’s existing
            website. Confirm final wording with clients before launch.
          </p>
        </div>
      </section>

      {/* pilot points */}
      <section id="start" className=" max-w-[1440px] mx-auto px-[5vw] py-[105px] grid  grid-cols-2   gap-[50px]  items-start  max-[900px]:grid-cols-1  max-[800px]:py-[70px]">
        <div>

          <div className="uppercase tracking-[0.19em] text-xs mb-4 font-black text-violet">
            Start small
          </div>

          <h2 className="font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] mb-6 tracking-[-0.04em] my-[13px_0_25px]">
            Start with a pilot.
          </h2>

          <p className="text-[17px] leading-[1.6] text-muted">
            Test the story before you commit to a season.
          </p>

          <div className="flex gap-3 flex-wrap mt-[23px]">

            <a href="mailto:info@contentfoundry.in?subject=Book%20a%20story%20session" className=" inline-flex items-center justify-center px-[22px] py-[15px] rounded-[2px] bg-violet text-white font-extrabold  text-s hover:opacity-80 ">
              Book a 30-minute story session ↗
            </a>

          </div>

        </div>


        {/* PILOT STEPS */}

        <ol className="m-0 p-0 list-none border-t border-line">

          <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

            <span className="text-violet font-black">
              1
            </span>

            <div>
              One pilot episode
            </div>

          </li>


          <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

            <span className="text-violet font-black">
              2
            </span>

            <div>
              Three opening hooks to test
            </div>

          </li>


          <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

            <span className="text-violet font-black">
              3
            </span>

            <div>
              Series blueprint
            </div>

          </li>


          <li className="py-[18px] border-b border-line text-[17px] grid grid-cols-[40px_1fr]">

            <span className="text-violet font-black">
              4
            </span>

            <div>
              Channel and amplification plan
            </div>

          </li>

        </ol>

      </section>

      {/* WORK */}
      <section id="work" className="bg-[#eee6db] py-[70px] lg:py-[85px]">
        <div className="flex flex-col justify-between gap-5 px-[5vw] lg:flex-row lg:items-end">
          <div>
            <div className="text-[12px] font-black uppercase tracking-[0.19em] text-violet">
              Keep exploring
            </div>

            <h2 className="mt-[13px] font-serif text-[clamp(36px,4vw,66px)] leading-[1.03] tracking-[-0.04em]">
              More stories. More formats.
            </h2>
          </div>

          <div className="flex gap-2">
            <button type="button" onClick={() => scrollWork(-1)} className="h-[45px] w-[45px] cursor-pointer border border-[#27231f] bg-transparent text-[22px] hover:bg-violet hover:text-white hover:border-violet" >
              ←
            </button>

            <button type="button" onClick={() => scrollWork(1)} aria-label="Scroll work right" className="h-[45px] w-[45px] cursor-pointer border border-[#27231f] bg-transparent text-[22px]  hover:bg-violet hover:text-white hover:border-violet" >
              →
            </button>
          </div>
        </div>
        {/* <div ref={moreWorkRef} className="mt-[30px] flex gap-4 overflow-x-auto px-[5vw] pb-[18px] [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {content.map((card, index) => (
            <div className={`group relative min-w-[300px] h-[350px] aspect-[4/3] shrink-0 rounded-[20px]`}>
              <img src={card.thumbnail} alt="" className="relative w-full h-full object-cover" />
              <div className="z-100 absolute inset-0 bg-black/50"></div>
              <div className="z-1000 absolute inset-0 text-white flex flex-col justify-between p-4 group-hover:p-5">
                <span className="font-black text-lg">{card.number} / {card.type}</span>
                <div>
                  <h3 className="mb-3">{card.title}</h3>
                  {index > 0 && (<a href={card.href} target="_blank" rel="noopener noreferrer" className="border-b-[3px] border-line pb-1 text-lg font-black ">
                    {card.link}
                  </a>)}
                  {index === 0 && (<Link to={`/micro-drama/${card.slug}`} rel="noopener noreferrer" className="border-b-[3px] border-line pb-1 text-lg font-black ">
                    {card.link}
                  </Link>)}

                </div>

              </div>

            </div>
          ))}
        </div> */}
<div className="w-full overflow-visible">
  <div
    ref={moreWorkRef}
    className="
      mt-[30px]
      w-full
      flex
      gap-4
      overflow-x-auto
      overflow-y-visible
      px-[5vw]
      pt-[70px]
      pb-[100px]
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
  >
    {content.map((card, index) => (
      <div
        key={card.slug || index}
        className="
          group
          relative
          w-[300px]
          min-w-[300px]
          h-[350px]
          shrink-0
          cursor-pointer
          overflow-visible
          hover:z-[100]
        "
      >
        {/* CARD */}
        <div
          className="
            absolute
            left-0
            top-0
            w-full
            h-[350px]

            overflow-hidden
            rounded-xl
            bg-black

            transition-[height,transform,box-shadow]
            duration-300
            ease-out

            group-hover:h-[460px]
            group-hover:-translate-y-[35px]
            group-hover:rounded-xl
            group-hover:shadow-2xl
          "
        >
          {/* IMAGE */}
          <img
            src={card.thumbnail}
            alt={card.title}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover

              transition-transform
              duration-500
              ease-out

              group-hover:scale-105
            "
          />

          {/* DARK GRADIENT */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/20
              to-transparent
            "
          />

          {/* NUMBER */}
          <div
            className="
              absolute
              top-3
              left-3
              z-20
              text-white
              font-black
              text-lg
            "
          >
            {String(card.number).padStart(2, "0")}
          </div>

          {/* CARD TITLE */}
          <div
            className="
              absolute
              left-0
              right-0
              bottom-0
              z-20
              p-4

              transition-all
              duration-300
              ease-out

              group-hover:bottom-[130px]
            "
          >
            <span
              className="
                text-xs
                uppercase
                tracking-wider
                text-white/70
              "
            >
              {card.type}
            </span>

            <h3
              className="
                mt-1
                text-lg
                font-bold
                leading-tight
                text-white
              "
            >
              {card.title}
            </h3>
          </div>

          {/* HOVER PANEL */}
          <div
            className="
              absolute
              left-0
              right-0
              bottom-0
              z-30

              min-h-[130px]

              rounded-b-xl
              bg-[#171717]

              p-4
              text-white

              translate-y-full
              opacity-0

              transition-all
              duration-300
              ease-out

              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            {/* DESCRIPTION */}
            {card.description && (
              <p
                className="
                  mb-4
                  line-clamp-3
                  text-sm
                  leading-5
                  text-white/80
                "
              >
                {card.description}
              </p>
            )}

            {/* LINK */}
            {index === 0 ? (
              <Link
                to={`/micro-drama/${card.slug}`}
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full
                  bg-red-600

                  px-4
                  py-2

                  text-sm
                  font-bold
                  text-white

                  transition-colors
                  duration-200

                  hover:bg-red-500
                "
              >
                {card.link || "Play Now"}
                <span className="text-xs">▶</span>
              </Link>
            ) : (
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full
                  bg-red-600

                  px-4
                  py-2

                  text-sm
                  font-bold
                  text-white

                  transition-colors
                  duration-200

                  hover:bg-red-500
                "
              >
                {card.link || "View Work"}
                <span className="text-xs">▶</span>
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-violet py-[90px] text-white">
        <div className="mx-auto max-w-[1440px] px-[5vw]">
          <h2 className="mb-6 max-w-[850px] font-serif text-[clamp(36px,4vw,66px)] font-black leading-[1.03] tracking-[-0.04em]">
            What happens in episode one?
          </h2>

          <p className="text-[17px] leading-[1.6] text-white">
            Bring your product and audience. We'll bring three story hooks.
          </p>

          <a
            href="mailto:info@contentfoundry.in?subject=Content%20Foundry%20project"
            className="mt-5 inline-flex items-center justify-center bg-[#171613] px-6 py-4 text-s font-black text-white"
          >
            info@contentfoundry.in ↗
          </a>
        </div>
      </section>
    </div>

  );
};

export default Home;