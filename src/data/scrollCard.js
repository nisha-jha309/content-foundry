const portfolioUrl = "https://contentfoundry.in/portfolio/";

const driveUrl =
  "https://drive.google.com/drive/folders/1QXgc0IrbJApkh5S4xiy4BPzbbZrnoqvl?usp=sharing";

import naJaneKyu from "../assets/na-jane-kyu.webp";
  import gjecpThumbnail from "../assets/thumbnails/gjecp-thumbnail.png";
import jcbThumbnail from "../assets/thumbnails/jcb-thumbnail.png";
import suryaThumbnail from "../assets/thumbnails/surya-thumbnail.png";
import technoThumbnail from "../assets/thumbnails/techno-thumbnail.png";


const content = [
  {
    slug: "na-jane-kyu",
    number: "01",
    type: "Micro-drama",
    title: "Na Jane Kyu",
    link: "Watch episodes ↗",
    thumbnail: naJaneKyu,

    description:
      "A short-form story created to make audiences watch the next one.",

    about:
      "Na Jane Kyu is a micro-drama series built around everyday emotions, unexpected moments and stories that leave you wondering what happens next.",
    
    episodes: [
      {
        id: 1,
        title: "Episode 01",
        description: "The story begins.",
        duration: "02:14",
        videoUrl: "",
      },
      {
        id: 2,
        title: "Episode 02",
        description: "Things take an unexpected turn.",
        duration: "01:58",
        videoUrl: "",
      },
      {
        id: 3,
        title: "Episode 03",
        description: "The story continues.",
        duration: "02:31",
        videoUrl: "",
      },{
        id: 4,
        title: "Episode 01",
        description: "The story begins.",
        duration: "02:14",
        videoUrl: "",
      },
      {
        id: 5,
        title: "Episode 02",
        description: "Things take an unexpected turn.",
        duration: "01:58",
        videoUrl: "",
      },
      {
        id: 6,
        title: "Episode 03",
        description: "The story continues.",
        duration: "02:31",
        videoUrl: "",
      },{
        id: 7,
        title: "Episode 01",
        description: "The story begins.",
        duration: "02:14",
        videoUrl: "",
      },
      {
        id: 8,
        title: "Episode 02",
        description: "Things take an unexpected turn.",
        duration: "01:58",
        videoUrl: "",
      },
      {
        id: 9,
        title: "Episode 03",
        description: "The story continues.",
        duration: "02:31",
        videoUrl: "",
      },
      {
        id: 10,
        title: "Episode 03",
        description: "The story continues.",
        duration: "02:31",
        videoUrl: "",
      },
    ],

    credits: {
      production: "Content Foundry",
      creative: "Content Foundry",
      brand: "Content Foundry",
    },
    
  },

  {
    slug: "jcb-digi-reward",
    number: "02",
    type: "Brand film",
    title: "JCB · Digi Reward",

    link: "View work ↗",

    href: portfolioUrl,

    thumbnail: jcbThumbnail,

    description:
      "A brand film created for JCB's Digi Reward initiative.",

    about:
      "A digital-first brand film created to communicate JCB Digi Reward through a clear and engaging visual story.",

    credits: {
      production: "Content Foundry",
      creative: "Content Foundry",
      brand: "JCB",
    },
  },

  {
    slug: "surya-downlighter",
    number: "03",
    type: "Commercial",
    title: "Surya · Downlighter",

    link: "View work ↗",

    href: portfolioUrl,

    thumbnail: suryaThumbnail,

    description:
      "A commercial created for Surya's Downlighter range.",

    about:
      "A commercial concept focused on presenting Surya Downlighter through a visually engaging brand narrative.",

    credits: {
      production: "Content Foundry",
      creative: "Content Foundry",
      brand: "Surya",
    },
  },

  {
    slug: "gjepc-india",
    number: "04",
    type: "TVC & docufilm",
    title: "GJEPC India",

    link: "View work ↗",

    href: portfolioUrl,

    thumbnail: gjecpThumbnail,

    description:
      "A TVC and documentary-style film created for GJEPC India.",

    about:
      "A visual storytelling project created for GJEPC India, combining commercial communication with documentary-style storytelling.",

    credits: {
      production: "Content Foundry",
      creative: "Content Foundry",
      brand: "GJEPC India",
    },
  },

  {
    slug: "tecno-spark-g",
    number: "05",
    type: "Film",
    title: "TECNO Spark G",

    link: "View work ↗",

    href: portfolioUrl,

    thumbnail: technoThumbnail,

    description:
      "A film created for TECNO Spark G.",

    about:
      "A product-focused film created to communicate the personality and features of TECNO Spark G through visual storytelling.",

    credits: {
      production: "Content Foundry",
      creative: "Content Foundry",
      brand: "TECNO",
    },
  },
];

export default content;