

export type Extracurricular = {
    name: string,
    frequency: string,
    value: number,
    biography?: string,
    location?: string,
    teacherAdvisors?: string[],
    contactInformation?: string[],
    presidents?: string[],
    welcomingNewMembers?: boolean
}

export const clubs: Extracurricular[] = [
    {
        name: "AXIOM Newspaper",
        frequency: "Tuesday biweekly",
        value: 1,
        biography: "STR's official newspaper, bringing you news regarding all that happens at St Robs!",
        location: "Room 223",
        teacherAdvisors: ["Mr. Wood"],
        contactInformation: ["IG: @theaxiomnewspaper", "Website: theaxiom.ca"],
        welcomingNewMembers: undefined
    },
    {
        name: "Band (Junior, Intermediate, Senior)",
        frequency: "Schedule available to music students",
        value: 1,
        biography: "St Robs' various bands are here to deliver excellent musical melodies to your ears!",
        location: "Rooms 111 and 133",
        teacherAdvisors: ["B. Facchini", "A. DeGirolamo"],
        welcomingNewMembers: undefined
    },
    {
        name: "Board Games Club",
        frequency: "Friday weekly",
        value: 1,
        biography: "Sharing our love and utter enjoyment for all Board Games!! Come join us and play a few rounds of various Board Games!",
        teacherAdvisors: ["J. Buckley"],
        welcomingNewMembers: undefined
    },
    {
        name: "Chaplaincy Choir",
        value: 1,
        frequency: "Friday weekly",
        biography: "Combining our love of music with our faith! Join us and sing your heart out with the many hymns we perform!",
        location: "Chapel",
        teacherAdvisors: ["A. Koon"],
        contactInformation: ["IG: @strchaplaincy"],
        welcomingNewMembers: undefined
    },
    {
        name: "Chinese Cultural Heritage Club",
        frequency: "Tuesday weekly",
        value: 1,
        biography: "Join St Rob's very own Chinese Cultural Heritage Club as we appreciate China's heritage and unique culture!",
        location: "Room 141",
        teacherAdvisors: ["J. Liu"],
        welcomingNewMembers: undefined
    },
    {
        name: "Concert Choir",
        frequency: "Tuesday weekly",
        value: 1,
        biography: "Run by our wonderful Ms. Facchini, we at Concert Choir diligently practice to bring extraordinary vocals, (which are fit for a concert) to St Roberts!!",
        location: "Room 111",
        teacherAdvisors: ["B. Facchini"],
        welcomingNewMembers: undefined
    },
    {
        name: "Coding Club",
        frequency: "Friday weekly",
        value: 1,
        biography: "//print string “club bio”// We're the Coding Club at STR, where programmers and anyone who LOVES coding come together!",
        location: "Rooms 119 and 120",
        teacherAdvisors: ["V. Odhutan"],
        contactInformation: ["IG: @strcodingclub"],
        welcomingNewMembers: undefined
    },
    {
        name: "Creative Writing Club",
        frequency: "Wednesday weekly",
        value: 1,
        biography: "The Creative Writing Club",
        location: "Room 254",
        teacherAdvisors: ["M. Durrant"],
        welcomingNewMembers: undefined
    },
    {
        name: "Cultures Club",
        frequency: "Tuesday weekly",
        value: 1,
        biography: "Celebrate the beauty of culture at STR's Cultures Club! We encourage all to join us and unlock a realm of diversity and cultural knowledge.",
        location: "P08",
        teacherAdvisors: ["J. Buckley"],
        welcomingNewMembers: undefined
    },
    {
        name: "STR Debate",
        frequency: "Tuesday weekly",
        value: 1,
        biography: "Don't hate it, debate it! At STR Debate, we hone our debating skills and bring our passion and knowledge to various tournaments throughout the year!",
        teacherAdvisors: ["J. Conte"],
        contactInformation: ["IG: @strdebate"],
        welcomingNewMembers: undefined
    },
    {
        name: "DECA",
        frequency: "Thursday weekly",
        value: 1,
        biography: "Interested in business? Then come join DECA, where we prepare students for careers in business, as well as business competitions that have the opportunity to win awards!",
        location: "Rooms 119, 120, 244, 246, 248, and the Library",
        teacherAdvisors: ["K. Cruz", "T. Frattaroli", "E. Grah", "B. Lam", "W. Mak", "J. Miele"],
        contactInformation: ["IG: @str.deca"],
        welcomingNewMembers: undefined
    },
    {
        name: "ESL Squad",
        frequency: "Wednesday biweekly",
        value: 1,
        biography: "We're the ESL Squad - a club dedicated to fostering English language proficiency and cultural exchange!",
        location: "Room 218",
        teacherAdvisors: ["M. Ferrari", "M. Buchignani"],
        welcomingNewMembers: undefined
    },
    {
        name: "ESP",
        frequency: "Tuesday weekly",
        value: 1,
        biography: "Wanna help make STR a safer space for all? Empowered Student Partnerships, or ESP, works with the York Region Police, promoting crucial messages to the student body with the goal of making the school a safer environment! Don't hesitate and join ESP!",
        location: "Room 200",
        teacherAdvisors: ["G. Provenzano"],
        contactInformation: ["IG: @st.robert_esp"],
        welcomingNewMembers: undefined
    },
    {
        name: "French Homework Club",
        frequency: "Monday weekly",
        value: 1,
        biography: "Need help avec le français? Don't worry, because the French Homework Club got you! Drop in and get the help you need with any of YOUR French work! Just know that, nous sommes là pour vous aider!",
        location: "Room 222",
        teacherAdvisors: ["N. Torresan"],
        welcomingNewMembers: undefined
    },
    {
        name: "GRL PWR",
        frequency: "Friday weekly from 2:40 - 3:30",
        value: 1,
        location: "Room 152",
        contactInformation: ["Google Classroom: vixlob2"],
        welcomingNewMembers: undefined 
    },
    {
        name: "STR HOSA",
        frequency: "Wednesday biweekly",
        value: 1,
        biography: "Hey St Robs! Would you like to learn more about the health-sci field? To network with like-minded people and build connections? To learn about different future medical career pathways? Then join STR HOSA because we would love to have you!",
        teacherAdvisors: ["C. Cusimano"],
        contactInformation: ["IG: @strhosa"],
        welcomingNewMembers: undefined
    },
    {
        name: "Jazz Band",
        frequency: "Wednesday weekly",
        value: 1,
        biography: "We're STR's Jazz Band, dedicated to adding a jazzy twist to the school community! If you enjoy playing jazz as much as we do, come practice with us!",
        location: "Room 133",
        teacherAdvisors: ["A. DeGirolamo"],
        welcomingNewMembers: undefined
    },
    {
        name: "La Silhouette",
        frequency: "Wednesday biweekly",
        value: 1,
        biography: "Nous sommes le journal français de l'école St Robert! Read our award-winning articles or come write one yourself! You don't need to be good at french to do so - JUSTE ESSAYER DE VOTRE MIEUX (JUST TRY YOUR BEST)!",
        location: "Room 218",
        contactInformation: ["IG: @lasilhouettejournal", "Twitter/X: https://twitter.com/LaSilhouette3", "Website: https://silhouettejournal.com"],
        welcomingNewMembers: undefined
    },
    {
        name: "Math Club",
        frequency: "Wednesday weekly",
        value: 1,
        biography: "Putting STR on the map, one equation at a time! Join fellow “mathemati-cians” as we explore, break down and solve a myriad of math problems from the simple to complex!",
        location: "Rooms 203 and 205",
        teacherAdvisors: ["G. Provenzano", "D. Do"],
        welcomingNewMembers: undefined
    },
    {
        name: "Med-Sci & Statistics",
        frequency: "Thursday weekly",
        value: 1,
        biography: "We are focused on educating eager students about medical innovations and exploring health pathways. Interested? Then come join us to meet healthcare professionals and learn about all things medicine!",
        location: "Library",
        teacherAdvisors: ["J. Buckley"],
        contactInformation: ["IG: @strmsclub"],
        welcomingNewMembers: undefined
    },
    {
        name: "Mindful Club",
        frequency: "Thursday weekly",
        value: 1,
        biography: "School can be a stressful place - but here at Mindful Club, we aim to help students manage their stress, connect them to much needed resources and turn STR into a less stressful environment!",
        location: "Room 118",
        teacherAdvisors: ["M. Boccia"],
        contactInformation: ["IG: @mindful.str"],
        welcomingNewMembers: undefined,
    },
    {
        name: "Orchestra",
        frequency: "Wednesday weekly",
        value: 1,
        biography: "STR's Orchestral band - combining different musical families to perform wonderful melodies!",
        location: "Room 111",
        teacherAdvisors: ["B. Facchini"],
        welcomingNewMembers: undefined,
    },
    {
        name: "Mural Club",
        frequency: "Friday weekly",
        value: 1,
        biography: "Have you ever wanted to paint on walls, embrace school spirit, or brighten the school community? Well Mural Club is the right club for you! Join us as we create more amazing murals and beautify the walls around the school!",
        location: "Room 226",
        teacherAdvisors: ["V. Meloche"],
        contactInformation: ["IG: @strmuralclub"],
        welcomingNewMembers: undefined
    },
    {
        name: "Philosophy Club",
        frequency: "Wednesday biweekly",
        value: 1,
        biography: "Join the Philosophy Club, where curious minds gather to explore life's big questions through engaging discussions. Discover new perspectives, and connect with fellow critical thinkers and philosophical students of STR!",
        location: "Room 218",
        teacherAdvisors: ["A. Parravani", "R. Wood"],
        contactInformation: ["IG: @str.philosophy"],
        welcomingNewMembers: undefined
    },
    {
        name: "Physics Club",
        frequency: "Thursday biweekly",
        value: 1,
        biography: "Calling all physics enthusiasts! The Physics Club is a place of learning the natural science of matter - from simple kinematics to quantum physics! Join us for, physics contest prep sessions, discussions of certain concepts and special fun events involving PHYSICS!",
        location: "Room 145",
        teacherAdvisors: ["B. Leduc"],
        contactInformation: ["IG: @strobphysics"],
        welcomingNewMembers: undefined
    },
    {
        name: "PRISM Interfaith",
        frequency: "Wednesday weekly",
        value: 1,
        location: "P07",
        teacherAdvisors: ["G. Cara"],
        welcomingNewMembers: undefined
    },
    {
        name: "Psychology Club",
        frequency: "Tuesday biweekly",
        value: 1,
        biography: "Exploring behaviours in humans and non-humans alike, the one and only STR Psychology is here to be a place of discovery and learning! Join us, and together we'll delve into the study of the mind, all while uncovering the diverse applications of psychology in everyday life!",
        location: "P09",
        teacherAdvisors: ["M. Boccia"],
        contactInformation: ["IG: @str.psychology"],
        welcomingNewMembers: undefined
    },
    {
        name: "RAMS Roadies Tech Club",
        frequency: "Tuesday weekly",
        value: 1,
        biography: "Keeping our assemblies working, one wire at a time! The Tech Club, led by Mr. Lothian is in charge of the technical aspects that power this school! New members are ALWAYS welcome!",
        location: "Room 122",
        teacherAdvisors: ["R. Lothian"],
        welcomingNewMembers: undefined
    },
    {
        name: "Reach for the Top",
        frequency: "Wednesday weekly",
        value: 1,
        biography: "If participating in a game of wit and skill, answering a slew of trivia questions, or outsmarting opponents is interesting to you - JOIN OUR REACH FOR THE TOP TEAM! We'll be waiting for you!",
        location: "Room 206",
        teacherAdvisors: ["J. Guerrisi", "D. Zmak"],
        welcomingNewMembers: undefined
    },
    {
        name: "SPECTRUM (Pride Club)",
        frequency: "Tuesday weekly",
        value: 1,
        biography: "We are SPECTRUM, St. Robert's very own Pride Club - providing an all-inclusive safe space for members and allies of the LGBTQIA2S community! Drop by to help plan school initiatives, make friends, and unwind in a relaxing atmosphere!",
        location: "Room 226",
        teacherAdvisors: ["J. Buckley", "M. Boon"],
        contactInformation: ["IG: @robs.spectrum"],
        welcomingNewMembers: undefined
    },
    {
        name: "St. Robs Yearbook Committee",
        frequency: "Monday weekly",
        value: 1,
        biography: "Capturing each and every era of this school, the Yearbook Committee is dedicated to compiling all the BEST moments of the year! From editors, and page designers to our very own photography crew - we have many roles and positions that YOU can fill. Join us and have a part in recording St. Robs history!",
        location: "Room 228",
        teacherAdvisors: ["T. Klobucar"],
        contactInformation: ["IG: @strobsyearbook"],
        welcomingNewMembers: undefined
    },
    {
        name: "STR Finance",
        frequency: "Thursday weekly",
        value: 1,
        biography: "Empowering and educating students on various financial topics! Join us and learn about financial literacy, investments, and more!",
        location: "P08",
        teacherAdvisors: ["E. Nagy-Bakos"],
        contactInformation: ["IG: @str.finance", "YT:@STRFinance"],
        welcomingNewMembers: undefined
    },
    {
        name: "Ram's Media Club (RMC)",
        frequency: "Find more info on Instagram/Discord",
        value: 1,
        teacherAdvisors: ["C. Laboni-Laviolette"],
        contactInformation: ["IG: @ramsmediaclub"],
        welcomingNewMembers: undefined
    },
    {
        name: "STR Cafe Club",
        frequency: "Friday weekly",
        value: 1,
        biography: "At STR's Cafe Club, we're BAKING up a storm!! We prepare delicious confections ranging from baked goods to sweet treats that leave your mouths wanting more. If you ever get that sweet craving, come join us after-school!",
        location: "Room 118B",
        teacherAdvisors: ["J. Conte"],
        contactInformation: ["IG: @strcafeclub"],
        welcomingNewMembers: undefined
    },
    {
        name: "STR Announcements",
        frequency: "N/A",
        value: 1,
        biography: "Interested in being the voice of our school? Want to help hand-pick the songs that play over the morning PA? If so, then apply to join our team of talented and enthusiastic readers! Together, we'll elevate your mornings with energizing voices and upbeat tunes! Follow us on Instagram as we bring you the latest announcements at STR!",
        teacherAdvisors: ["S. Barclay", "K. Dela Cruz"],
        contactInformation: ["IG: @strannouncements"],
        welcomingNewMembers: undefined
    }
].sort((first, second) => first.name.localeCompare(second.name));

export const councils: Extracurricular[] = [
    {
        name: "Arts Council",
        frequency: "Monday weekly from 2:30 to 3:30",
        value: 1,
        biography: "To promote the Arts and offer opportunities for students to participate in activities involving art, drama and music.",
        teacherAdvisors: ["B. Facchini", "M. Boon"],
        contactInformation: ["IG: @strobs.arts"],
        welcomingNewMembers: undefined
    },
    {
        name: "Chaplaincy Council",
        frequency: "Monday weekly from 2:30 to 3:30",
        value: 1,
        biography: "Supporting the needs of our school community through faith.",
        teacherAdvisors: ["P. Karisch"],
        contactInformation: ["IG: @strchaplaincy"],
        welcomingNewMembers: undefined
    },
    {
        name: "Environmental Council",
        frequency: "Monday weekly from 2:30 to 3:30",
        value: 1,
        biography: "To promote environmental stewardship in the school community.",
        teacherAdvisors: ["C. Ciobanu"],
        contactInformation: ["IG: @STREnvirocouncil", "TikTok: Strobertenviro"],
        welcomingNewMembers: undefined
    },
    {
        name: "French Council",
        frequency: "Monday weekly from 2:30 to 3:30",
        value: 1,
        biography: "To promote and encourage the French language in a bilingual setting.",
        teacherAdvisors: ["N. Torresan"],
        contactInformation: ["IG: @strfrenchcouncil", "Twitter/X: @strobertfrench"],
        welcomingNewMembers: undefined
    },
    {
        name: "SAC (Student Athletic Council)",
        frequency: "Monday weekly from 2:30 to 3:30",
        value: 1,
        biography: "Promote physical activity and school spirit through participation in sport.",
        teacherAdvisors: ["M. Elacqua"],
        contactInformation: ["IG: @strobertsac", "Twitter/X: @StrobsSAC"],
        welcomingNewMembers: undefined
    },
    {
        name: "Social Justice Council",
        frequency: "Monday weekly from 2:30 to 3:30",
        value: 1,
        biography: "To promote both awareness, teachings and actions within Social Justice (Includes teaching that are Scripture based and a calling to all.).",
        teacherAdvisors: ["C. Roccari"],
        contactInformation: ["IG: @str.socialjustice"],
        welcomingNewMembers: undefined
    },
    {
        name: "STEAM Council",
        frequency: "Monday weekly from 2:30 to 3:30",
        value: 1,
        biography: "To engage students in STEAM activities.",
        contactInformation: ["IG: @strstemcouncil"],
        welcomingNewMembers: undefined
    },
    {
        name: "STUCO (Student Council)",
        frequency: "Monday weekly from 2:30 to 3:30",
        value: 1,
        biography: "Student body government providing opportunities to build community.",
        contactInformation: ["IG: @StRobsStuco", "Twitter/X: @StRobsStuco"],
        welcomingNewMembers: undefined
    }
].sort((first, second) => first.name.localeCompare(second.name));