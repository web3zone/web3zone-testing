
const BLOG_POSTS = {
  cs: [
    { id: 1, title: "Budoucnost Etherea po upgradu Dencun", date: "14. března 2024", category: "Technologie", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232", excerpt: "Podrobný pohled na to, jak nejnovější upgrade sítě Ethereum snižuje poplatky na L2 sítích a co to znamená pro běžné uživatele." },
    { id: 2, title: "Jak bezpečně uchovávat své první kryptoměny", date: "5. března 2024", category: "Návody", image: "https://images.unsplash.com/photo-1621416894522-d38a586a9242?auto=format&fit=crop&q=80&w=2070", excerpt: "Bezpečnost je ve Web3 na prvním místě. Naučíme vás rozdíl mezi hot a cold peněženkou a jak se vyhnout běžným scamům." },
    { id: 3, title: "Úvod do světa DeFi: Co jsou to liquidity pooly?", date: "28. února 2024", category: "Finance", image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=2232", excerpt: "Pochopte základy decentralizovaných financí. Vysvětlíme vám, jak fungují automatizovaní tvůrci trhu bez bank." },
    { id: 4, title: "Web 3.0 vs Web 2.0: Hlavní rozdíly, které musíte znát", date: "15. února 2024", category: "Vzdělávání", image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=2093", excerpt: "Internet se mění. Zjistěte, proč je decentralizace důležitá a jak Web3 vrací kontrolu nad daty zpět do rukou uživatelů." },
    { id: 5, title: "Bitcoin Halving 2024: Co očekávat od trhu?", date: "2. února 2024", category: "Analýza", image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=2069", excerpt: "Příští halving Bitcoinu se blíží. Podíváme se na historické souvislosti a co by tato událost mohla znamenat pro cyklus." },
    { id: 6, title: "AI a Blockchain: Perfektní symbióza pro rok 2024", date: "20. ledna 2024", category: "Inovace", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2232", excerpt: "Dva největší technologické trendy současnosti se propojují. Jak blockchain řeší ověřitelnost AI modelů?" }
  ],
  en: [
    { id: 1, title: "Future of Ethereum after Dencun Upgrade", date: "March 14, 2024", category: "Technology", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232", excerpt: "A detailed look at how the latest Ethereum network upgrade reduces fees on L2 networks and what it means for everyday users." },
    { id: 2, title: "How to Safely Store Your First Cryptocurrencies", date: "March 5, 2024", category: "Guides", image: "https://images.unsplash.com/photo-1621416894522-d38a586a9242?auto=format&fit=crop&q=80&w=2070", excerpt: "Security is paramount in Web3. We'll teach you the difference between hot and cold wallets and how to avoid common scams." },
    { id: 3, title: "Intro to DeFi: What are Liquidity Pools?", date: "February 28, 2024", category: "Finance", image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=2232", excerpt: "Understand the basics of decentralized finance. We'll explain how automated market makers work without banks." },
    { id: 4, title: "Web 3.0 vs Web 2.0: Key Differences You Need to Know", date: "February 15, 2024", category: "Education", image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=2093", excerpt: "The internet is changing. Find out why decentralization matters and how Web3 puts data control back in users' hands." },
    { id: 5, title: "Bitcoin Halving 2024: What to Expect from the Market?", date: "February 2, 2024", category: "Analysis", image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=2069", excerpt: "The next Bitcoin halving is coming. We'll look at historical context and what this event could mean for the cycle." },
    { id: 6, title: "AI and Blockchain: Perfect Symbiosis for 2024", date: "January 20, 2024", category: "Innovation", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2232", excerpt: "The two biggest tech trends of today are merging. How does blockchain solve AI model verifiability?" }
  ]
};

const FEATURE_DATA = {
  cs: [
    { title: "Web3 Dashboard", desc: "Mějte přehled o všech svých peněženkách a aktivech na jednom místě s intuitivním rozhraním.", icon: "layout", color: "orange" },
    { title: "Nástroje pro Vývojáře", desc: "Integrujte naše API a SDK do svých projektů během několika minut. Rychle a bezpečně.", icon: "cpu", color: "blue" },
    { title: "Komunitní DAO", desc: "Hlasujte o budoucím směřování platformy. Na Web3zone rozhodují uživatelé, ne korporace.", icon: "users", color: "orange" },
    { title: "Analýza Trhu", desc: "Získejte real-time data z řetězce (on-chain) zpracovaná do přehledných grafů a predikcí.", icon: "bar-chart-3", color: "blue" },
    { title: "Maximální Bezpečí", desc: "Vaše privátní klíče nikdy neopouštějí vaše zařízení. Non-custodial řešení bez kompromisů.", icon: "lock", color: "orange" },
    { title: "Rychlé Transakce", desc: "Optimalizované routování přes L2 sítě pro minimální poplatky a bleskovou rychlost.", icon: "zap", color: "blue" }
  ],
  en: [
    { title: "Web3 Dashboard", desc: "Keep track of all your wallets and assets in one place with an intuitive interface.", icon: "layout", color: "orange" },
    { title: "Developer Tools", desc: "Integrate our APIs and SDKs into your projects in minutes. Fast and secure.", icon: "cpu", color: "blue" },
    { title: "Community DAO", desc: "Vote on the future direction of the platform. At Web3zone, users decide, not corporations.", icon: "users", color: "orange" },
    { title: "Market Analysis", desc: "Get real-time on-chain data processed into clear charts and predictions.", icon: "bar-chart-3", color: "blue" },
    { title: "Maximum Security", desc: "Your private keys never leave your device. Non-custodial solutions without compromise.", icon: "lock", color: "orange" },
    { title: "Fast Transactions", desc: "Optimized routing via L2 networks for minimal fees and lightning speed.", icon: "zap", color: "blue" }
  ]
};

const TECH_DATA = {
  cs: [
    { id: 'ai', name: 'AI', icon: 'brain', color: 'orange', x: '65%', y: '50%', description: 'Nervový systém moderního digitálního světa.', details: ['Generativní modely', 'On-chain analýza'] },
    { id: 'data', name: 'Datacentres', icon: 'database', color: 'blue', x: '58%', y: '64%', description: 'Infrastruktura pro neomezený růst dat.', details: ['Edge computing', 'IPFS storage'] },
    { id: 'cyber', name: 'Cybersecurity', icon: 'shield-alert', color: 'orange', x: '42%', y: '64%', description: 'Neprůstřelná ochrana aktiv a digitální suverenita.', details: ['ZK Proofs', 'MPC technologie'] },
    { id: 'blockchain', name: 'Blockchain', icon: 'link', color: 'blue', x: '35%', y: '50%', description: 'Základní vrstva důvěry a vlastnictví.', details: ['DeFi protokoly', 'Tokenizace aktiv'] },
    { id: 'robotics', name: 'Robotics', icon: 'bot', color: 'orange', x: '42%', y: '36%', description: 'Fyzická ruka digitální revoluce.', details: ['Industry 4.0', 'Coboti'] },
    { id: 'energy', name: 'Energy', icon: 'zap', color: 'blue', x: '58%', y: '36%', description: 'Čistá energie pro digitální budoucnost.', details: ['Smart Grids', 'Energy Markets'] },
    { id: 'hardware', name: 'Hardware', icon: 'microchip', color: 'orange', x: '88%', y: '50%', description: 'Fyzická páteř decentralizovaných sítí.', details: ['ASIC těžaři', 'Hardware peněženky'] },
    { id: 'biotech', name: 'Biotech', icon: 'dna', color: 'blue', x: '83%', y: '69%', description: 'Průnik biologie a decentralizované vědy.', details: ['Genomika', 'Bio-tokenizace'] },
    { id: 'quantum', name: 'Quantum Computing', icon: 'atom', color: 'orange', x: '69%', y: '83%', description: 'Příprava na éru výpočetní síly nové generace.', details: ['Kvantová odolnost', 'Q-bits'] },
    { id: 'cloud-comp', name: 'Cloud Computing', icon: 'cloud', color: 'blue', x: '50%', y: '88%', description: 'Decentralizovaný výkon dostupný odkudkoliv.', details: ['P2P Computing', 'Serverless'] },
    { id: 'fintech', name: 'Fintech', icon: 'wallet', color: 'orange', x: '31%', y: '83%', description: 'Nová generace finančních služeb.', details: ['Asset Banking', 'Pay-fi'] },
    { id: 'space', name: 'Space industry', icon: 'rocket', color: 'blue', x: '17%', y: '69%', description: 'Nová hranice pro decentralizaci.', details: ['Satelitní internet', 'Off-planet data'] },
    { id: 'crypto', name: 'Krypto', icon: 'coins', color: 'orange', x: '12%', y: '50%', description: 'Srdce a krev decentralizovaného ekosystému.', details: ['Kryptoměny', 'Stablecoiny'] },
    { id: 'ev', name: 'EV', icon: 'car', color: 'blue', x: '17%', y: '31%', description: 'Budoucnost mobility a transportu.', details: ['V2G technologie', 'Autonomní řízení'] },
    { id: 'iot', name: 'IoT', icon: 'network', color: 'orange', x: '31%', y: '17%', description: 'Miliardy propojených zařízení.', details: ['Smart Home', 'Senzory'] },
    { id: 'longevity', name: 'Longevity', icon: 'activity', color: 'blue', x: '50%', y: '12%', description: 'Technologie pro prodloužení života.', details: ['Biohacking', 'Prevence stárnutí'] },
    { id: 'gaming', name: 'Gaming', icon: 'gamepad-2', color: 'orange', x: '69%', y: '17%', description: 'Herní průmysl s reálným vlastnictvím.', details: ['Web3 Gaming', 'NFT aktiva'] },
    { id: 'software', name: 'Software', icon: 'code-2', color: 'blue', x: '83%', y: '31%', description: 'Základní stavební kameny pro dApps.', details: ['Open Source', 'Frameworky'] }
  ],
  en: [
    { id: 'ai', name: 'AI', icon: 'brain', color: 'orange', x: '65%', y: '50%', description: 'The nervous system of the modern digital world.', details: ['Generative models', 'On-chain analysis'] },
    { id: 'data', name: 'Datacentres', icon: 'database', color: 'blue', x: '58%', y: '64%', description: 'Infrastructure for unlimited data growth.', details: ['Edge computing', 'IPFS storage'] },
    { id: 'cyber', name: 'Cybersecurity', icon: 'shield-alert', color: 'orange', x: '42%', y: '64%', description: 'Bulletproof asset protection and digital sovereignty.', details: ['ZK Proofs', 'MPC technology'] },
    { id: 'blockchain', name: 'Blockchain', icon: 'link', color: 'blue', x: '35%', y: '50%', description: 'The base layer of trust and ownership.', details: ['DeFi protocols', 'Asset tokenization'] },
    { id: 'robotics', name: 'Robotics', icon: 'bot', color: 'orange', x: '42%', y: '36%', description: 'The physical hand of the digital revolution.', details: ['Industry 4.0', 'Cobots'] },
    { id: 'energy', name: 'Energy', icon: 'zap', color: 'blue', x: '58%', y: '36%', description: 'Clean energy for a digital future.', details: ['Smart Grids', 'Energy Markets'] },
    { id: 'hardware', name: 'Hardware', icon: 'microchip', color: 'orange', x: '88%', y: '50%', description: 'The physical backbone of decentralized networks.', details: ['ASIC miners', 'Hardware wallets'] },
    { id: 'biotech', name: 'Biotech', icon: 'dna', color: 'blue', x: '83%', y: '69%', description: 'Intersection of biology and decentralized science.', details: ['Genomics', 'Bio-tokenization'] },
    { id: 'quantum', name: 'Quantum Computing', icon: 'atom', color: 'orange', x: '69%', y: '83%', description: 'Preparing for the next generation of computing power.', details: ['Quantum resistance', 'Q-bits'] },
    { id: 'cloud-comp', name: 'Cloud Computing', icon: 'cloud', color: 'blue', x: '50%', y: '88%', description: 'Decentralized power available anywhere.', details: ['P2P Computing', 'Serverless'] },
    { id: 'fintech', name: 'Fintech', icon: 'wallet', color: 'orange', x: '31%', y: '83%', description: 'The next generation of financial services.', details: ['Asset Banking', 'Pay-fi'] },
    { id: 'space', name: 'Space industry', icon: 'rocket', color: 'blue', x: '17%', y: '69%', description: 'The new frontier for decentralization.', details: ['Satellite internet', 'Off-planet data'] },
    { id: 'crypto', name: 'Crypto', icon: 'coins', color: 'orange', x: '12%', y: '50%', description: 'The heart and blood of the decentralized ecosystem.', details: ['Cryptocurrencies', 'Stablecoins'] },
    { id: 'ev', name: 'EV', icon: 'car', color: 'blue', x: '17%', y: '31%', description: 'The future of mobility and transport.', details: ['V2G technology', 'Autonomous driving'] },
    { id: 'iot', name: 'IoT', icon: 'network', color: 'orange', x: '31%', y: '17%', description: 'Billions of connected devices.', details: ['Smart Home', 'Sensors'] },
    { id: 'longevity', name: 'Longevity', icon: 'activity', color: 'blue', x: '50%', y: '12%', description: 'Technologies for extending life.', details: ['Biohacking', 'Aging prevention'] },
    { id: 'gaming', name: 'Gaming', icon: 'gamepad-2', color: 'orange', x: '69%', y: '17%', description: 'Gaming industry with real ownership.', details: ['Web3 Gaming', 'NFT assets'] },
    { id: 'software', name: 'Software', icon: 'code-2', color: 'blue', x: '83%', y: '31%', description: 'The building blocks for dApps.', details: ['Open Source', 'Frameworks'] }
  ]
};

const AI_MODELS = {
  cs: [
    { name: "Gemini 3 Pro", provider: "Google", type: "Multimodal LLM", hype: 98, desc: "Nová éra multimodálního uvažování s neomezeným kontextem.", tags: ["Long context", "Native Video"] },
    { name: "GPT-5 Preview", provider: "OpenAI", type: "Reasoning Model", hype: 95, desc: "Zaměřeno na komplexní vědecké uvažování a řešení problémů.", tags: ["Reasoning", "Logic"] },
    { name: "Claude 3.5 Sonnet", provider: "Anthropic", type: "General Assistant", hype: 92, desc: "Nejpřirozenější psaní a kódování s vysokou mírou bezpečnosti.", tags: ["Coding", "Nuance"] }
  ],
  en: [
    { name: "Gemini 3 Pro", provider: "Google", type: "Multimodal LLM", hype: 98, desc: "A new era of multimodal reasoning with unlimited context.", tags: ["Long context", "Native Video"] },
    { name: "GPT-5 Preview", provider: "OpenAI", type: "Reasoning Model", hype: 95, desc: "Focused on complex scientific reasoning and problem solving.", tags: ["Reasoning", "Logic"] },
    { name: "Claude 3.5 Sonnet", provider: "Anthropic", type: "General Assistant", hype: 92, desc: "Most natural writing and coding with high security.", tags: ["Coding", "Nuance"] }
  ]
};

const TECH_NEWS = {
  cs: {
    'longevity': [
      { titulek: "Vědec z Harvardu na WGS 2026: Stárnutí by mohlo být brzy reverzibilní", popis: "Profesor David Sinclair oznámil přípravu klinických testů na lidech zaměřených na epigenetické programování buněk. Cílem je vrátit buňkám jejich mladistvý stav pomocí modifikovaných Yamanakových faktorů.", zdroj: "https://www.worldgovernmentsummit.org/", datum: "21. února 2026", icon: "activity", tag: "VÝZKUM" },
      { titulek: "NIH investuje 80 milionů dolarů do výzkumu výjimečné dlouhověkosti", popis: "Nové financování podpoří studium rodin s extrémně dlouhým životem za účelem identifikace genetických variant chránících před nemocemi. Vědci objevili specifický gen spojený s níhlým tlakem.", zdroj: "https://medicine.wustl.edu/", datum: "21. února 2026", icon: "dna", tag: "GENETIKA" }
    ],
    'ai': [
      { titulek: "EU podepisuje deklaraci na Summitu AI v Indii", popis: "Evropská unie se připojila k iniciativě pro globální správu AI, která má zajistit férové sdílení benefitů technologie napříč lidstvem. Součástí je i spuštění 'Frontier AI Grand Challenge'.", zdroj: "https://ec.europa.eu/commission/presscorner/home/en", datum: "21. února 2026", icon: "globe", tag: "REGULACE" },
      { titulek: "Itálie zavádí přísná pravidla pro AI na pracovišti", popis: "Nový italský zákon o AI (Law No. 132) začíná plně definovat interakci mezi algoritmy a bezpečností zaměstnanců. Legislativa se zaměřuje na transparentnost rozhodování AI v HR procesech.", zdroj: "https://www.klgates.com/", datum: "21. února 2026", icon: "briefcase", tag: "LEGISLATIVA" }
    ],
    'blockchain': [
      { titulek: "Zákon 'Clarity Act' míří k americkému kongresu", popis: "Nová legislativa zaměřená na stabilní regulaci digitálních aktiv v USA by mohla být schválena do poloviny roku 2026. Cílem je vytvořit jasný federální rámec pro stablecoiny a kryptoměnové burzy.", zdroj: "https://www.forex.com/", datum: "21. února 2026", icon: "landmark", tag: "ADOPCE" }
    ],
    'crypto': [
      { titulek: "Bitcoin se propadl na historickou odchylku od dlouhodobého trendu", popis: "Analýza ukazuje, že BTC se obchoduje hluboko pod svým 200denním průměrem, což je úroveň nevídaná za posledních 10 let. Trh prochází masivním snižováním pákového efektu.", zdroj: "https://www.vaneck.com/", datum: "21. února 2026", icon: "trending-down", tag: "TRH" }
    ],
    'biotech': [
      { titulek: "Nové algoritmy pro detekci rakoviny pomocí AI v EU", popis: "Evropská komise spustila výzvu pro zdravotnické organizace k vytvoření sítě center pro pokročilý screening poháněný AI. Projekt se zaměřuje na včasnou diagnostiku.", zdroj: "https://ec.europa.eu/", datum: "21. února 2026", icon: "microscope", tag: "ZDRAVOTNICTVÍ" },
      { titulek: "Nanomedicína a regenerativní terapie jako lídři trhu 2026", popis: "Aktuální tržní reporty predikují 8% růst v oblasti technologií pro zmírnění buněčné senescence. Klíčovým trendem je konvergence biotechnologií a nanotechnologií.", zdroj: "https://www.worldhealth.net/", datum: "21. února 2026", icon: "test-tube", tag: "INOVACE" }
    ],
    'hardware': [
      { titulek: "Vzestup modulárního hardwaru jako služby (HaaS)", popis: "V reakci na krizi s elektroodpadem začínají velcí výrobci v roce 2026 nabízet hardware, který lze snadno repasovat a vracet do řetězce. Tento model se stává standardem.", zdroj: "https://internationalbanker.com/", datum: "21. února 2026", icon: "refresh-cw", tag: "UDRŽITELNOST" }
    ],
    'data': [
      { titulek: "Uhlíkově uvědomělá datová centra", popis: "Nová generace datových center implementuje systémy pro dynamické přesouvání zátěže podle dostupnosti obnovitelné energie v reálném čase. Tento přístup výrazně snižuje stopu.", zdroj: "https://internationalbanker.com/", datum: "21. února 2026", icon: "leaf", tag: "EKOLOGIE" }
    ],
    'robotics': [
      { titulek: "Norská laboratoř simuluje povrch Měsíce pro roboty nové generace", popis: "Inženýři vytvořili věrnou kopii lunárního terénu pro testování algoritmů autonomní mobility. Cílem je umožnit robotům pohyb v nezkoumáných lunárních jeskyních.", zdroj: "https://ae.gatech.edu/", datum: "21. února 2026", icon: "map", tag: "SIMULACE" }
    ],
    'space': [
      { titulek: "Trh s vesmírnou robotikou dosáhne 7,3 miliardy USD", popis: "Poptávka po servisování satelitů přímo na orbitě a hlubokém vesmírném průzkumu žene trh k rekordním číslům. Klíčovými hráči se stávají firmy integrující AI.", zdroj: "https://nationaltoday.com/", datum: "21. února 2026", icon: "rocket", tag: "VESMÍR" }
    ],
    'cyber': [
      { titulek: "USA spouští iniciativu pro kybernetickou bezpečnost AI ve financích", popis: "Ministerstvo financí USA představilo veřejno-soukromé partnerství pro ochranu infrastruktury AI v bankovním sektoru. Cílem je bránit se útokům na modely.", zdroj: "https://home.treasury.gov/", datum: "21. února 2026", icon: "shield-check", tag: "BEZPEČNOST" },
      { titulek: "EU uvádí 'ICT Supply Chain Security Toolbox'", popis: "Nástroj má pomoci členským státům identifikovat a zmírnit rizika v dodavatelských řetězcích technologií. Zaměřuje se zejména na kritické dodavatele.", zdroj: "https://ec.europa.eu/", datum: "21. února 2026", icon: "package", tag: "DODAVATELÉ" }
    ],
    'quantum': [
      { titulek: "Objev 'Svatého grálu' kvantových počítačů: Tripletový supravodič", popis: "Vědci v Norsku pravděpodobně identifikovali materiál, který přenáší elektřinu i spin elektronů bez odporu. Tento objev by mohl drasticky stabilizovat kvantové počítače.", zdroj: "https://www.sciencedaily.com/", datum: "21. února 2026", icon: "zap", tag: "FYZIKA" },
      { titulek: "NSF buduje národní kvantovou virtuální laboratoř", popis: "USA otevírají platformu, která umožní vědcům vzdálený přístup k nejmodernějšímu kvantovému hardwaru. To má urychlit vývoj léků a optimalizaci logistiky.", zdroj: "https://www.nsf.gov/", datum: "21. února 2026", icon: "monitor", tag: "VÝZKUM" }
    ]
  },
  en: {
    'longevity': [
      { titulek: "Harvard Scientist at WGS 2026: Aging Could Soon Be Reversible", popis: "Professor David Sinclair announced human clinical trials focused on epigenetic cell programming. The goal is to return cells to their youthful state using modified Yamanaka factors.", zdroj: "https://www.worldgovernmentsummit.org/", datum: "February 21, 2026", icon: "activity", tag: "RESEARCH" },
      { titulek: "NIH Invests $80 Million in Exceptional Longevity Research", popis: "New funding will support studying families with extreme longevity to identify genetic variants protecting against disease. Scientists discovered a specific gene linked to low blood pressure.", zdroj: "https://medicine.wustl.edu/", datum: "February 21, 2026", icon: "dna", tag: "GENETICS" }
    ],
    'ai': [
      { titulek: "EU Signs Declaration at AI Summit in India", popis: "The European Union joined an initiative for global AI governance to ensure fair sharing of tech benefits across humanity. Includes the launch of the 'Frontier AI Grand Challenge'.", zdroj: "https://ec.europa.eu/commission/presscorner/home/en", datum: "February 21, 2026", icon: "globe", tag: "REGULATION" },
      { titulek: "Italy Introduces Strict Rules for AI in the Workplace", popis: "New Italian AI law (Law No. 132) fully defines the interaction between algorithms and employee safety. Legislation focuses on transparency in AI decision-making for HR processes.", zdroj: "https://www.klgates.com/", datum: "February 21, 2026", icon: "briefcase", tag: "LEGISLATION" }
    ],
    'blockchain': [
      { titulek: "'Clarity Act' Heads to US Congress", popis: "New legislation focused on stable regulation of digital assets in the US could be approved by mid-2026. The goal is to create a clear federal framework for stablecoins and crypto exchanges.", zdroj: "https://www.forex.com/", datum: "February 21, 2026", icon: "landmark", tag: "ADOPTION" }
    ],
    'crypto': [
      { titulek: "Bitcoin Drops to Historical Deviation from Long-term Trend", popis: "Analysis shows BTC trading deep below its 200-day average, a level unseen in the last 10 years. The market is undergoing massive deleveraging.", zdroj: "https://www.vaneck.com/", datum: "February 21, 2026", icon: "trending-down", tag: "MARKET" }
    ],
    'biotech': [
      { titulek: "New Algorithms for Cancer Detection using AI in EU", popis: "The European Commission launched a call for healthcare organizations to create a network of centers for advanced AI-powered screening. Project focuses on early diagnosis.", zdroj: "https://ec.europa.eu/", datum: "February 21, 2026", icon: "microscope", tag: "HEALTHCARE" },
      { titulek: "Nanomedicine and Regenerative Therapy as Market Leaders 2026", popis: "Current market reports predict 8% growth in technologies for mitigating cellular senescence. Key trend is the convergence of biotech and nanotech.", zdroj: "https://www.worldhealth.net/", datum: "February 21, 2026", icon: "test-tube", tag: "INNOVATION" }
    ],
    'hardware': [
      { titulek: "Rise of Modular Hardware as a Service (HaaS)", popis: "In response to the e-waste crisis, major manufacturers in 2026 are starting to offer hardware that can be easily refurbished and returned to the chain. This model is becoming standard.", zdroj: "https://internationalbanker.com/", datum: "February 21, 2026", icon: "refresh-cw", tag: "SUSTAINABILITY" }
    ],
    'data': [
      { titulek: "Carbon-Aware Data Centers", popis: "A new generation of data centers implements systems for dynamic load shifting based on real-time renewable energy availability. This approach significantly reduces footprint.", zdroj: "https://internationalbanker.com/", datum: "February 21, 2026", icon: "leaf", tag: "ECOLOGY" }
    ],
    'robotics': [
      { titulek: "Norwegian Lab Simulates Moon Surface for Next-Gen Robots", popis: "Engineers created a faithful copy of lunar terrain for testing autonomous mobility algorithms. The goal is to enable robots to move in unexplored lunar caves.", zdroj: "https://ae.gatech.edu/", datum: "February 21, 2026", icon: "map", tag: "SIMULATION" }
    ],
    'space': [
      { titulek: "Space Robotics Market to Reach $7.3 Billion", popis: "Demand for in-orbit satellite servicing and deep space exploration drives the market to record numbers. Key players are firms integrating AI directly into space hardware.", zdroj: "https://nationaltoday.com/", datum: "February 21, 2026", icon: "rocket", tag: "SPACE" }
    ],
    'cyber': [
      { titulek: "US Launches Initiative for AI Cybersecurity in Finance", popis: "The US Treasury Department introduced a public-private partnership to protect AI infrastructure in the banking sector. Goal is to defend against attacks on models.", zdroj: "https://home.treasury.gov/", datum: "February 21, 2026", icon: "shield-check", tag: "SECURITY" },
      { titulek: "EU Introduces 'ICT Supply Chain Security Toolbox'", popis: "The tool is intended to help member states identify and mitigate risks in technology supply chains. Focuses on critical suppliers.", zdroj: "https://ec.europa.eu/", datum: "February 21, 2026", icon: "package", tag: "SUPPLIERS" }
    ],
    'quantum': [
      { titulek: "Discovery of Quantum Computing 'Holy Grail': Triplet Superconductor", popis: "Scientists in Norway likely identified a material that carries electricity and electron spin without resistance. This discovery could drastically stabilize quantum computers.", zdroj: "https://www.sciencedaily.com/", datum: "February 21, 2026", icon: "zap", tag: "PHYSICS" },
      { titulek: "NSF Builds National Quantum Virtual Laboratory", popis: "The US opens a platform that will allow scientists remote access to state-of-the-art quantum hardware. This is intended to accelerate drug development and logistics optimization.", zdroj: "https://www.nsf.gov/", datum: "February 21, 2026", icon: "monitor", tag: "RESEARCH" }
    ]
  }
};

const TRANSLATIONS = {
  cs: {
    hero_badge: "Naše budoucnost je technologická",
    hero_title: "Vstupte do světa Web3 a technologií.",
    hero_desc: "Objevujte svět technologií a Webu3 s námi. Technologický průvodce ve formě novinek, vzdělání a zábavy na jednom místě.",
    hero_btn_map: "Mapa technologií",
    hero_btn_blog: "Číst blog",
    features_badge: "Proč si vybrat nás?",
    features_title: "Nástroje pro digitální suverenitu",
    stats_users: "Aktivních uživatelů",
    stats_volume: "Objem transakcí",
    stats_networks: "Podporovaných sítí",
    stats_support: "Podpora komunity",
    community_title: "Nestaňte se jen divákem. Tvořte Web3zone s námi.",
    community_desc: "Připojte se k tisícům nadšenců na Discordu a Telegramu. Sdílejte své nápady, získávejte exkluzivní airdropy a učte se od nejlepších v oboru.",
    footer_desc: "První ucelená česká platforma zaměřená na vzdělávání a rozvoj v decentralizovaném světě Web 3.0.",
    footer_platform: "Platforma",
    footer_about: "O nás",
    footer_newsletter: "Newsletter",
    footer_newsletter_desc: "Neutečou vám žádné airdropy ani novinky ze světa Web3.",
    blog_badge: "Znalosti jsou moc",
    blog_title: "Náš Blog",
    blog_desc: "Aktuální zprávy, hloubkové analýzy a praktické návody ze světa Web 3.0, DeFi a kryptoměn. Vše přehledně na jednom místě.",
    about_title: "Jsme vaše zóna pro technologie a Web3.",
    about_founding: "Rok založení",
    about_experts: "Expertů v týmu",
    contact_title: "Pojďme se spojit.",
    contact_desc: "Máte dotaz k Web3, hledáte partnerství nebo potřebujete poradit s přechodem vaší firmy do decentralizovaného světa? Jsme tu pro vás.",
    contact_form_name: "Vaše jméno",
    contact_form_email: "Váš e-mail",
    contact_form_msg: "Zpráva",
    contact_form_btn: "Odeslat zprávu",
    tech_map_badge: "Mapujeme horizonty",
    tech_map_title: "Mapa Technologií",
    tech_map_desc: "Digitální pavoučí síť symbolizuje neustále se vyvíjející a propojený ekosystém Web3zone.",
    tech_news_btn: "Novinky",
    back_to_map: "Zpět na mapu technologií",
    back_to_blog: "Zpět na blog",
    read_more: "Přečíst více",
    source: "Zdroj",
    preparing_content: "Připravujeme čerstvý obsah",
    preparing_content_desc: "Právě pro vás analyzujeme nejnovější události. Brzy zde najdete hloubkové analýzy a aktuality."
  },
  en: {
    hero_badge: "Our future is technological",
    hero_title: "Enter the world of Web3 and technology.",
    hero_desc: "Discover the world of technology and Web3 with us. A technological guide in the form of news, education, and entertainment in one place.",
    hero_btn_map: "Technology Map",
    hero_btn_blog: "Read Blog",
    features_badge: "Why choose us?",
    features_title: "Tools for Digital Sovereignty",
    stats_users: "Active Users",
    stats_volume: "Transaction Volume",
    stats_networks: "Supported Networks",
    stats_support: "Community Support",
    community_title: "Don't just be a spectator. Build Web3zone with us.",
    community_desc: "Join thousands of enthusiasts on Discord and Telegram. Share your ideas, get exclusive airdrops, and learn from the best in the industry.",
    footer_desc: "The first comprehensive Czech platform focused on education and development in the decentralized world of Web 3.0.",
    footer_platform: "Platform",
    footer_about: "About Us",
    footer_newsletter: "Newsletter",
    footer_newsletter_desc: "Don't miss any airdrops or news from the Web3 world.",
    blog_badge: "Knowledge is Power",
    blog_title: "Our Blog",
    blog_desc: "Current news, in-depth analysis, and practical guides from the world of Web 3.0, DeFi, and cryptocurrencies. All clearly in one place.",
    about_title: "We are your zone for technology and Web3.",
    about_founding: "Founded",
    about_experts: "Team Experts",
    contact_title: "Let's connect.",
    contact_desc: "Have a question about Web3, looking for a partnership, or need advice on transitioning your company to the decentralized world? We're here for you.",
    contact_form_name: "Your Name",
    contact_form_email: "Your Email",
    contact_form_msg: "Message",
    contact_form_btn: "Send Message",
    tech_map_badge: "Mapping Horizons",
    tech_map_title: "Technology Map",
    tech_map_desc: "The digital spider web symbolizes the constantly evolving and interconnected Web3zone ecosystem.",
    tech_news_btn: "News",
    back_to_map: "Back to technology map",
    back_to_blog: "Back to blog",
    read_more: "Read more",
    source: "Source",
    preparing_content: "Preparing fresh content",
    preparing_content_desc: "We are currently analyzing the latest events for you. In-depth analysis and updates will be here soon."
  }
};

export { BLOG_POSTS, FEATURE_DATA, TECH_DATA, AI_MODELS, TECH_NEWS, TRANSLATIONS };
