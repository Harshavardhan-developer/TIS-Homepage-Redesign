const TIS_ASSETS = "https://tis.edu.in/_next/static/media";

export const siteInfo = {
  name: "Tulas International School",
  shortName: "TIS",
  tagline: "LET'S DO IT with Tulas",
  location: "Dehradun, Uttarakhand, India",
  address:
    "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011, Uttarakhand",
  phone: ["0135-2699444", "0135-2699666"],
  admissionHelpline: "+91-9837983791",
  email: "info@tis.edu.in",
  established: "2012",
  trust: "Rishabh Educational Trust",
  logo: `${TIS_ASSETS}/schoolLogo.95f6e121.png`,
  footerLogo: `${TIS_ASSETS}/footer-logo.230b79ff.png`,
};

const NAV_IMG = "https://tis.edu.in/_next/static/media";

// `section` = id of the matching block on this homepage (used for the active
// highlight and in-page scrolling). `href` = the official TIS page.
export const navigation = [
  {
    label: "About TIS",
    href: "https://tis.edu.in/about-tis/why-choose-us/",
    section: "about",
    description: "Explore our vibrant campus life.",
    image: `${NAV_IMG}/header-admissions1.05209ff0.JPG`,
    dropdown: true,
  },
  {
    label: "Academics",
    href: "https://tis.edu.in/academics/streams-offered",
    description: "Discover our comprehensive academic programs.",
    image: `${NAV_IMG}/header-admissions2.38fb234e.JPG`,
    dropdown: true,
  },
  {
    label: "Boarding Life",
    href: "https://tis.edu.in/boarding-life/facilities",
    section: "campus",
    description: "Learn about our state-of-the-art boarding facilities.",
    image: `${NAV_IMG}/header-admissions3.1a11a772.JPG`,
    dropdown: true,
  },
  {
    label: "Beyond Academics",
    href: "https://tis.edu.in/beyond-academics/clubs-and-societies",
    section: "sports",
    description: "Join us in celebrating diverse cultural events.",
    image: `${NAV_IMG}/header-admissions4.40f56300.JPG`,
    dropdown: true,
  },
  { label: "Events", href: "https://tis.edu.in/events/" },
  { label: "Admission", href: "https://admission.tis.edu.in/", section: "admissions", more: true },
  { label: "Mandatory Disclosure", href: "https://tis.edu.in/mandatory-disclosure/", more: true },
  { label: "Alumni Network", href: "https://tis.edu.in/alumni-network/", more: true },
  { label: "Quick Links", href: "https://tis.edu.in/", more: true },
];

export const hero = {
  eyebrow: "TULAS INTERNATIONAL SCHOOL",
  title: "LET'S DO IT",
  subtitle: "with Tulas",
  description:
    "A school experience where curiosity leads, creativity thrives, and students discover opportunities to grow, explore and shape their own futures.",
  primaryButton: {
    label: "APPLY NOW",
    href: "https://admission.tis.edu.in/",
  },
  secondaryButton: {
    label: "ENQUIRE NOW",
    href: "#enquire",
  },
  scrollLabel: "SCROLL",
  images: [
    `${TIS_ASSETS}/Image%202.0c5295c9.webp`,
    `${TIS_ASSETS}/polo.973ddbae.webp`,
    `${TIS_ASSETS}/Image%203.21dc9e69.webp`,
    `${TIS_ASSETS}/karate.4020fba5.webp`,
    `${TIS_ASSETS}/swimming.6fc81e65.webp`,
    `${TIS_ASSETS}/Image%201.0a814859.webp`,
    `${TIS_ASSETS}/pot.6f7c2ee3.webp`,
    `${TIS_ASSETS}/dance.88843edb.webp`,
  ],
  decorativeImages: [
    `${TIS_ASSETS}/petal-3.1aec06e8.svg`,
    `${TIS_ASSETS}/petal-2.57797264.webp`,
    `${TIS_ASSETS}/petal1.e89e415d.svg`,
  ],
};

export const about = {
  id: "about",
  eyebrow: "ABOUT TIS",
  title: "Tulas International School",
  heading:
    "Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.",
  description:
    "At Tulas, we believe in bringing out the best in every student—whether it's academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn't just about lessons, it's about endless opportunities waiting to be explored.",
  images: [
    {
      src: `${TIS_ASSETS}/Image%203.21dc9e69.webp`,
      alt: "Tulas International School",
    },
    {
      src: `${TIS_ASSETS}/ladyInPink.c358aa8f.png`,
      alt: "Student at Tulas International School",
    },
    {
      src: `${TIS_ASSETS}/manInBlue.46316cbf.png`,
      alt: "Student at Tulas International School",
    },
    {
      src: `${TIS_ASSETS}/madeForFuture.e96fe7c1.png`,
      alt: "Made for the future",
    },
  ],
  contact: {
    title: "Contact Us",
    admissionHelpline: "+91-9837983791",
    email: "info@tis.edu.in",
    address:
      "Tulas International School Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)",
    landline: ["0135-2699444", "0135-2699666"],
  },
};

export const studentExperience = {
  id: "experience",
  sections: [
    {
      title: "We feel supported in what we do and nudged further to do more",
      description:
        "At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.",
      image: `${TIS_ASSETS}/ladyInPink.c358aa8f.png`,
      imagePosition: "right",
    },
    {
      title: "Tulas helped me thrive and become the best version of myself",
      description:
        "When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.",
      image: `${TIS_ASSETS}/manInBlue.46316cbf.png`,
      imagePosition: "left",
    },
  ],
};

export const future = {
  id: "future",
  eyebrow: "MADE FOR THE FUTURE",
  title: "At Tulas, we always ask,",
  highlight: "“What’s the secret to making school awesome?”",
  description:
    "The secret to making one's school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.",
  closingText: "There, we cracked it!",
  image: `${TIS_ASSETS}/AtTIS.59351600.png`,
  futureImage: `${TIS_ASSETS}/madeForFuture.e96fe7c1.png`,
};

export const sports = {
  id: "sports",
  eyebrow: "SPORTS",
  title: "Sports?",
  heading: "It’s not just a facility. At Tulas it’s the foundation!",
  description: "16+ sports curated to bring joy and discipline to your life.",
  sportsList: [
    {
      name: "Archery",
      image: `${TIS_ASSETS}/archery.7a805345.png`,
    },
    {
      name: "Cycling",
      image: `${TIS_ASSETS}/cycling.80dbb9b1.png`,
    },
    {
      name: "Hockey",
      image: `${TIS_ASSETS}/hockey.219fe552.png`,
    },
    {
      name: "Swimming",
      image: `${TIS_ASSETS}/swimming.d4285534.png`,
    },
    {
      name: "Taekwondo",
      image: `${TIS_ASSETS}/taekwando.86e26406.png`,
    },
    {
      name: "Football",
      image: `${TIS_ASSETS}/football.ca61e5d0.png`,
    },
    {
      name: "Shooting Range",
      image: `${TIS_ASSETS}/shooting.b0b11d74.png`,
    },
    {
      name: "Horse Riding",
      image: `${TIS_ASSETS}/horseRiding.8f259127.png`,
    },
    {
      name: "Billiards",
      image: `${TIS_ASSETS}/billiards-single.a1e831c6.png`,
    },
    {
      name: "Squash",
      image: `${TIS_ASSETS}/squash.ffa0360a.png`,
    },
    {
      name: "Volleyball",
      image: `${TIS_ASSETS}/volleyball.045be884.png`,
    },
    {
      name: "Basketball",
      image: `${TIS_ASSETS}/basketball.fa70909d.png`,
    },
    {
      name: "Cricket",
      image: `${TIS_ASSETS}/Cricket.b06b18ca.png`,
    },
    {
      name: "Lawn Tennis",
      image: `${TIS_ASSETS}/lawnTennis.7b3b894a.png`,
    },
    {
      name: "Badminton",
      image: `${TIS_ASSETS}/badminton.a314ff00.png`,
    },
    {
      name: "Table Tennis",
      image: `${TIS_ASSETS}/tableTennis.61f6bd56.png`,
    },
  ],
};

export const campus = {
  id: "campus",
  eyebrow: "AT TIS",
  title: "A place designed for learning, living and growing",
  description:
    "Tulas creates an environment where learning extends beyond the classroom and students have space to explore academics, sports, creativity and everyday school life.",
  mainImage: `${TIS_ASSETS}/campus.e67b1a0a.png`,
  supportingImages: [
    `${TIS_ASSETS}/sports.e695b690.png`,
    `${TIS_ASSETS}/image3.b8273b93.png`,
    `${TIS_ASSETS}/medical.e87071fe.png`,
    `${TIS_ASSETS}/image2.5d908b38.webp`,
    `${TIS_ASSETS}/ratio.6ca07c6a.png`,
    `${TIS_ASSETS}/image1.a3011dda.png`,
  ],
};

export const statistics = {
  id: "statistics",
  title: "TIS by the numbers",
  items: [
    {
      value: 22,
      suffix: "",
      label: "ACRE POLLUTION FREE CAMPUS",
      image: `${TIS_ASSETS}/campus.e67b1a0a.png`,
    },
    {
      value: 16,
      suffix: "+",
      label: "OLYMPIC SPORTS",
      image: `${TIS_ASSETS}/sports.e695b690.png`,
    },
    {
      value: 24,
      suffix: "*7",
      label: "MEDICAL ASSISTANCE",
      displayValue: "24*7",
      image: `${TIS_ASSETS}/medical.e87071fe.png`,
    },
    {
      value: 6,
      suffix: ":1",
      label: "STUDENT TEACHER RATIO",
      displayValue: "6:1",
      image: `${TIS_ASSETS}/ratio.6ca07c6a.png`,
    },
  ],
};

export const rankings = {
  id: "rankings",
  title: "Recognised among schools in India and the region",
  rankingImage: `${TIS_ASSETS}/ranking.157c5a68.png`,
  seeMoreImage: `${TIS_ASSETS}/see-all-activities.c481082d.png`,
  items: [
    {
      rank: "#1",
      region: "In Dehradun",
      title: "Co-Educational Boarding School in Dehradun by Education Today",
    },
    {
      rank: "#2",
      region: "In Uttarakhand",
      title: "Co-Educational Boarding School in North India by Education Today",
    },
    {
      rank: "#1",
      region: "In North India",
      title: "Co-Educational Boarding School in North India by Outlook",
    },
    {
      rank: "#4",
      region: "In India",
      title: "Co-Educational Boarding School in India by Education Today",
    },
  ],
};

export const influentialPersonalities = {
  id: "influential-personalities",
  eyebrow: "INFLUENTIAL PERSONALITIES ON CAMPUS",
  title: "Sports Persons & Social Media Influencers",
  people: [
    {
      name: "Sakshi Malik",
      image: `${TIS_ASSETS}/SakshiMalik.91174bf4.webp`,
      description:
        "First Indian wrestler to win medal in Rio 2016 Olympics, Olympics Bronze Medalist in Wrestling, Silver Medalist in 2014 Commonwealth Games, Rajeev Gandhi Khel Ratan Awardee 2016, Padma Shri Awardee 2017.",
    },
    {
      name: "Vishesh Bhriguvanshi",
      image: `${TIS_ASSETS}/VisheshBhriguvanshi.52af8bfd.webp`,
      description:
        "Indian Basketball Team Captain & Major FIBA Asia Championship Player. Under his Captaincy Team India won a 3x3 basketball Gold Medal at the Asian Beach Games in 2008.",
    },
    {
      name: "Prakashi Tomar & Late Ms Chandro Tomar",
      image: `${TIS_ASSETS}/PrakashiTomar.339dbb95.webp`,
      description:
        "Based on their real life Bhumi Pednekar & Taapsee Pannu acted in the Biopic Movie “Saand ke Aakh” known as Shooter Dadi, 30 National Championship winner.",
    },
    {
      name: "Abhishek Verma",
      image: `${TIS_ASSETS}/AbhishekVerma.18f9d349.webp`,
      description:
        "6th Highest World Ranking, Arjuna Awardee, Asian Games Gold Medalist in Archery 2013.",
    },
    {
      name: "Aditi Gopichand Swami",
      image: `${TIS_ASSETS}/AditiGopichandSwami.b7afa246.webp`,
      description:
        "7th Highest World Ranking, Arjuna Awardee, World Champion in Archery 2024.",
    },
    {
      name: "Jeevan Jyot Singh Teja",
      image: `${TIS_ASSETS}/JeevanJyotSinghTeja.9a07711c.webp`,
      description: "Dronacharya Awardee in Archery 2022.",
    },
    {
      name: "Ojus Devtale",
      image: `${TIS_ASSETS}/OjasPravinDeotale.1d2e01cc.webp`,
      description:
        "9th Highest World Ranking, Arjuna Awardee 2023 and current world champion in Archery.",
    },
    {
      name: "Rajat Chauhan",
      image: `${TIS_ASSETS}/RajatChauhan.bcb1fbf2.webp`,
      description:
        "5th Highest World Ranking Arjuna Awardee 2016 in Archery.",
    },
    {
      name: "Devendra Singh Bisht",
      image: `${TIS_ASSETS}/DevendraSinghBisht.09635f71.webp`,
      description: "Under 18 School Indian Football Team Selector.",
    },
    {
      name: "Manish Metani",
      image: `${TIS_ASSETS}/ManishMetani.ca55bf71.webp`,
      description: "Indian Football Player.",
    },
    {
      name: "Saurabh Joshi",
      image: `${TIS_ASSETS}/SaurabhJoshi.450ff5df.webp`,
      description: "Influencer with 30 Million Subscribers on YouTube.",
    },
    {
      name: "Arushi Nishank",
      image: `${TIS_ASSETS}/ArushiNishank.f3341404.webp`,
      description:
        "Kathak dancer, actor, film producer, environmentalist, TEDx speaker, and National Convener of Sparsh Ganga.",
    },
    {
      name: "Laxmi Agarwal",
      image: `${TIS_ASSETS}/LakshmiAgarwal.7405df5d.webp`,
      description:
        "International Women Empowerment Award from the Ministry of Women and Child Development, Founder and President of The Laxmi Foundation, a NGO dedicated to acid attack victims.",
    },
  ],
};

export const leadersOfIndia = {
  id: "leaders",
  eyebrow: "LEADERS OF INDIA",
  people: [
    {
      name: "Shri Dhan Singh Rawat Ji",
      image: `${TIS_ASSETS}/DhanSinghRawat.f504bd14.webp`,
      description: "Minister of Higher Education, Uttarakhand.",
    },
    {
      name: "Shri Trivendra Singh Rawat Ji",
      image: `${TIS_ASSETS}/TrivendraSinghRawat.c2e8d88b.webp`,
      description:
        "Member of Parliament & Former Chief Minister, Uttarakhand.",
    },
    {
      name: "Shri Subodh Uniyal Ji",
      image: `${TIS_ASSETS}/SubodhUniyal.25533860.webp`,
      description: "Technical Education and Forest Minister, Uttarakhand.",
    },
    {
      name: "Dr Ramesh Pokhriyal Nishank Ji",
      image: `${TIS_ASSETS}/RameshPokhriyalNishank.5f11fd77.webp`,
      description:
        "Former Union Cabinet Minister for Education, Government of India | Former Chief Minister of Uttarakhand.",
    },
    {
      name: "Shri Bhagat Singh Koshyari Ji",
      image: `${TIS_ASSETS}/BhagatSinghKoshyari.f996a329.webp`,
      description:
        "Former governor of Maharashtra and Goa, Former Chief Minister of Uttarakhand.",
    },
    {
      name: "Shri Dharmendra Pradhan Ji",
      image: `${TIS_ASSETS}/DharmendraPradhan.cae1e9ae.webp`,
      description: "Union Minister of Education for India.",
    },
    {
      name: "Shri Anurag Tripathi Ji",
      image: `${TIS_ASSETS}/AnuragTripathi.a8e203b4.webp`,
      description: "CBSE Secretary Uttarakhand.",
    },
    {
      name: "Shri Arvind Pandey Ji",
      image: `${TIS_ASSETS}/ArvindPandey.3f959220.webp`,
      description: "MLA, Former Education Minister.",
    },
    {
      name: "Shri Namami Bansal Ji",
      image: `${TIS_ASSETS}/NamamiBansal.97f4f0f0.webp`,
      description: "I.A.S Municipal Commissioner Uttarakhand.",
    },
    {
      name: "Shri Abhinav Kumar Ji",
      image: `${TIS_ASSETS}/AbhinavKumar.8cbdb15a.webp`,
      description: "ADG and former DGP of Uttarakhand Police.",
    },
    {
      name: "Shri Janmejaya Khanduri Ji",
      image: `${TIS_ASSETS}/JanmejayaKhanduri.18ae0527.webp`,
      description: "IG Dehradun - Government of India.",
    },
    {
      name: "Shri Ashok Kumar Ji",
      image: `${TIS_ASSETS}/AshokKumar.b9a984fa.webp`,
      description: "Former DGP, Uttarakhand.",
    },
    {
      name: "Shri Amit Kumar Sinha Ji",
      image: `${TIS_ASSETS}/AmitKumarSinha.5e245cdc.webp`,
      description: "ADG, Principal Secretary Sports, Uttarakhand.",
    },
    {
      name: "Shri Sunil Uniyal Gama Ji",
      image: `${TIS_ASSETS}/SunilUniyalGama.55361603.webp`,
      description: "Former Mayor Municipal Corporation, Dehradun.",
    },
    {
      name: "Shri Sahdev Singh Pundir Ji",
      image: `${TIS_ASSETS}/SahdevSinghPundir.7aa9859f.webp`,
      description: "MLA Sahaspur, Uttarakhand.",
    },
  ],
};

export const awards = {
  id: "awards",
  eyebrow: "AWARDS",
  title: "We believe in celebrating the hard work and perseverance of the best!",
  images: [
    {
      src: `${TIS_ASSETS}/TopBoarding.e5405c1a.jpg`,
      alt: "TIS award",
    },
    {
      src: `${TIS_ASSETS}/BestResidential.5173db8d.jpg`,
      alt: "TIS residential school award",
    },
    {
      src: `${TIS_ASSETS}/UTTARAKHAND.652376d5.jpg`,
      alt: "TIS Uttarakhand award",
    },
  ],
  seeMoreImage: `${TIS_ASSETS}/see-more-text.b85bc127.png`,
};

export const virtualTour = {
  id: "virtual-tour",
  eyebrow: "DIVE INTO OUR...",
  title: "VIRTUAL TOUR",
  image: `${TIS_ASSETS}/360.75b351f1.png`,
  href: "https://tis.edu.in/virtual-tour/",
};

export const testimonials = {
  id: "testimonials",
  eyebrow: "FROM THE PARENTS",
  title: "Google Reviews",
  quote:
    "Tulas International School has truly exceeded our expectations. The focus on holistic development and the encouragement provided by the teachers have played a significant role in our child's growth. We are grateful for the personalized attention and the care the school offers.",
  backgroundImage: `${TIS_ASSETS}/googleReviewsBackground.3003d907.png`,
  quoteDecoration: `${TIS_ASSETS}/commas.f9c745a3.svg`,
};

export const collaborations = {
  id: "collaborations",
  title: "12+ COLLABORATIONS",
  logos: [
    `${TIS_ASSETS}/Universidad.935e33e1.png`,
    `${TIS_ASSETS}/yhnbepcntet.3b80eac6.jpg`,
    `${TIS_ASSETS}/Universitat.f7fac869.jpg`,
    `${TIS_ASSETS}/Cpi6.106c6037.jpg`,
    `${TIS_ASSETS}/inseec.780a3115.png`,
    `${TIS_ASSETS}/Trinty.31016999.png`,
    `${TIS_ASSETS}/University.6c89dc70.png`,
    `${TIS_ASSETS}/International_Award_for_Young_People_logo.a0d1c4fa.jpg`,
    `${TIS_ASSETS}/lions.bf493cc1.png`,
    `${TIS_ASSETS}/inseecU.1e5c929a.png`,
    `${TIS_ASSETS}/Universitas.d9db402c.png`,
    `${TIS_ASSETS}/universityLogo.6e446aad.jpg`,
  ],
};

export const enquiry = {
  id: "enquire",
  title: "Enquire Now!",
  classes: [
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
    "Class XI",
    "Class XII",
  ],
  states: [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Other",
    "Pondicherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ],
  consent:
    "I Agree to receive information regarding my submitted application by signing up on Tulas International School, Dehradun",
};

export const quickLinks = [
  {
    label: "FAQ",
    href: "https://tis.edu.in/faq/",
  },
  {
    label: "Calendar",
    href: "https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf",
  },
  {
    label: "Brochure",
    href: "https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf",
  },
  {
    label: "Privacy Policy",
    href: "https://tis.edu.in/privacy-policy/",
  },
  {
    label: "Terms & Conditions",
    href: "https://tis.edu.in/terms-conditions/",
  },
  {
    label: "Disclaimer",
    href: "https://tis.edu.in/disclaimer/",
  },
  {
    label: "Disciplinary Policy",
    href: "https://tis.edu.in/MandatoryPDF/DisciplinaryPolicy.pdf",
  },
  {
    label: "Mobile Phone Policy",
    href: "https://tis.edu.in/MandatoryPDF/MobilePhonePolicy.pdf",
  },
  {
    label: "Child Welfare & Safety Policy",
    href: "https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf",
  },
];

export const footer = {
  logo: `${TIS_ASSETS}/footer-logo.230b79ff.png`,
  schoolName: "Tulas International School",
  address: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)",
  phone: ["0135-2699444", "0135-2699666"],
  admissionHelpline: "+91-9837983791",
  email: "info@tis.edu.in",
  virtualTour: "https://tis.edu.in/virtual-tour/",
  applyNow: "https://admission.tis.edu.in/",
  fedenaLogin: "https://tis.fedena.com/",
  copyright:
    "Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved",
  managedBy: "NetPuppys",
  managedByUrl: "https://netpuppys.com/",
  socialLinks: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/tulasinternationalschool/",
      icon: `${TIS_ASSETS}/facebook.71a69609.svg`,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/tulas_intschool?lang=en",
      icon: `${TIS_ASSETS}/twitter.64c93709.svg`,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/school/tulas-international-school/?originalSubdomain=in",
      icon: `${TIS_ASSETS}/linkedin.33acc93c.svg`,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/tulasinternationalschool/?hl=en",
      icon: `${TIS_ASSETS}/instagram.80644d47.svg`,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
      icon: `${TIS_ASSETS}/youtube.044db034.svg`,
    },
  ],
};

/* ------------------------------------------------------------------
   Derived exports used by the section components.
   Everything below is built from the data above, so each image/text
   lives in exactly one place.
------------------------------------------------------------------- */

export const images = {
  hero: hero.images[0],
  about: about.images[0].src,
  campus: campus.mainImage,
};

export const stats = statistics.items;

export const sportsAll = sports.sportsList;

// Featured sports use the large lifestyle photos from the hero gallery
export const sportsFeatured = [
  { name: "Polo", image: hero.images[1] },
  { name: "Karate", image: hero.images[3] },
  { name: "Swimming", image: hero.images[4] },
  { name: "Dance", image: hero.images[7] },
];

// "Why TIS" accordion: real copy from the student-experience and future blocks
export const whyItems = [
  {
    title: "Supported and nudged further",
    text: studentExperience.sections[0].description,
    image: studentExperience.sections[0].image,
  },
  {
    title: "Thrive and belong",
    text: studentExperience.sections[1].description,
    image: studentExperience.sections[1].image,
  },
  {
    title: "Made for the future",
    text: future.description,
    image: future.futureImage,
  },
];

// Official application stages from https://admission.tis.edu.in/
export const admissionSteps = [
  {
    title: "Register",
    text: "Fill in your personal details in the form and register as a user. Once registered, use your mobile number to log in.",
  },
  {
    title: "Academic details",
    text: "Fill in your academic details and upload your documents.",
  },
  {
    title: "Application fee",
    text: "Complete your application form and pay the application fee.",
  },
  {
    title: "Interview",
    text: "We will send a confirmation email for the interview date, subject to availability.",
  },
];
