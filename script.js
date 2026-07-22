/**
 * Demonte Walker Portfolio
 * Interactive functionality
 */

// Project data for modals
const projectData = {
    visualizer: {
        title: "Visualizer",
        subtitle: "Web App",
        role: "Founder / Mobile Developer / Web Developer / UI/UX Designer",
        timeline: "October 21, 2024 → Present",
        tools: "API, CSS, Figma, Github, HTML, JS, Swift, Xcode",
        link: "https://visualizerwebsite.com",
        page: "projects/visualizer.html",
        summary: "The development of the Visualizer Website aimed to transform complex audio data into an engaging, interactive experience using visual effects. The project focused on designing an immersive platform that presents visual data intuitively, blending modern aesthetics with robust functionality. This project was made specifically for music enthusiast of all kinds to be able to enjoy their personal favorite music in a refreshing new way.",
        problem: "Users often struggle with finding the optimal way for them to enjoy music while having a visualizer tied to it, many options were either outdated or too complicated for the average user.",
        solution: "The solution was to develop a dynamic website that utilizes modern UI elements and interactive design features to transform data into visually digestible and engaging formats. The website offers interactive effects, animations, and intuitive navigation to help users explore and understand data effortlessly.",
        learned: "This project provided valuable insights into creating a user-centered design working with audio visualization. The experience helped the gain the value of iterative development and real user feedback in creating a product that is both functional and aesthetically engaging."
    },
    coralgala: {
        title: "Coral Gala",
        subtitle: "Web App",
        role: "Founder / Web Developer / UI/UX Designer",
        timeline: "June 23, 2025 → Present",
        tools: "API, CSS, Figma, Github, HTML, JS, Xcode",
        link: "https://coralgala.live",
        page: "projects/coralgala.html",
        summary: "Coral Gala is a virtual fish tank experience built as a live, browser-based aquarium that users can interact with in real time. Designed with playful animation, atmospheric sounds, and multiplayer persistence, the site blends nostalgia with modern web interactivity—serving as both a digital toy and a social experiment.",
        problem: "Despite the popularity of ambient apps and screensavers, most virtual fish tanks are static, single-user, or tied to outdated software. There's a gap in fun, lightweight web-based experiences that users can visit casually—but return to often.",
        solution: "The solution was to develop Coral Gala as a real-time fish tank website where users can add fish, customize them, and watch them swim in a shared environment. Fish movement is animated using JavaScript, and persistent data is stored via Firebase.",
        learned: "Coral Gala taught me how to blend ambient design with multiplayer systems. I learned the power of shared digital spaces and how to give users just enough control to make them feel connected."
    },
    oldyorktimes: {
        title: "Old York Times",
        subtitle: "Publication Website",
        role: "Web Developer / UI/UX Designer",
        timeline: "June 10, 2024 → September 28, 2025",
        tools: "CSS, HTML, JS, Webflow",
        link: "https://oldyorktimes.com",
        page: "projects/oldyorktimes.html",
        summary: "The development of the Old York Times website was built to evoke the timeless charm of pulp fiction and classic journalism, the Old York Times website redefines news delivery for modern audiences. Designed to engage users with both current news and fictional stories, the site blends a nostalgic aesthetic with modern interactive features.",
        problem: "Looking at current news and article sites, they seem to have become less expressive and creative for users, with some even added unwanted complexity to its site design.",
        solution: "The solution involved developing the site as a unique platform that merges the timeless look of vintage newspapers with contemporary digital design. By integrating retro typography, layout elements reminiscent of retro designs, and modern interactive features.",
        learned: "This project deepened my understanding of how to integrate historical design elements with contemporary technology. I learned the importance of iterative design and user feedback in creating a product that is both authentic and functional."
    },
    vosyn: {
        title: "Vosyn",
        subtitle: "AI Startup Website",
        role: "UI/UX Designer / Web Developer Intern",
        timeline: "February 12, 2024 → May 20, 2024",
        tools: "CSS, Figma, Github, HTML, JS, Wordpress",
        link: "https://vosyn.ai/",
        page: "projects/vosyn.html",
        summary: "The redesign of the Vosyn website aimed to elevate the tech startup's website with industry-leading design and enhanced user engagement. The project focused on creating visually appealing and user-friendly interfaces, driving user sign-ups, and increasing interest in the company's products and career opportunities.",
        problem: "Vosyn's previous website lacked the modern design elements and user-friendly features necessary to attract and retain users. The main issues included ineffective call-to-actions, outdated design aesthetics, and insufficient information on key pages.",
        solution: "The solution involved collaborating with team members in the website team to implement a comprehensive redesign using Figma and WordPress. The redesign focused on improving call-to-action effectiveness, enhancing the careers and accessibility pages, and ensuring a cohesive, modern aesthetic throughout the site.",
        learned: "Throughout this project and internship, I learned how to effectively collaborate with a tech startup to deliver on their goals and mission to redesign their website and enhance their brand identity."
    },
    artist: {
        title: "Artist Website",
        subtitle: "Portfolio Website",
        role: "Web Developer / UI/UX Designer",
        timeline: "May 1, 2024 → January 30, 2025",
        tools: "CSS, Figma, Github, HTML, JS, Three.js",
        link: "https://deshaunwalker.art",
        page: "projects/artist.html",
        summary: "The development of the artist's website aimed to create an engaging online portfolio that effectively showcased the artist's work. The project focused on integrating unique design elements and interactive features to immerse users in the artist's aesthetic.",
        problem: "The challenge was to design a website that not only displayed the artist's work but also captured their unique style and vision. The primary issues included creating an interactive and immersive experience.",
        solution: "The solution involved developing a highly interactive website with unique design elements that reflected the artist's vision. The website featured an intuitive layout, interactive galleries, and aesthetic consistency throughout.",
        learned: "Throughout this project, I learned how to effectively translate a client's vision into a tangible online presence. The experience taught me the importance of close collaboration and iterative design."
    },
    ours: {
        title: "OURS Studio",
        subtitle: "Production Website",
        role: "UI/UX Designer / Web Developer / Product Design",
        timeline: "November 6, 2023 → January 5, 2024",
        tools: "CSS, Figma, HTML, JS, Wordpress",
        page: "projects/ours.html",
        summary: "The development of the OURS Studio website aimed to revamp and modernize the studio's online presence. The project focused on enhancing aesthetics, implementing modern design elements, and ensuring a cohesive look across all related websites.",
        problem: "OURS Studio had an outdated online presence that lacked modern design elements and a cohesive aesthetic. The primary issues included low-quality images, lack of modern features, and inconsistent design.",
        solution: "The solution involved redesigning the OURS Studio website using Figma and WordPress, leveraging its extensive theme library, plugin ecosystem, and user-friendly interface.",
        learned: "Throughout this project, I learned how to effectively collaborate with a company that is less tech-oriented, successfully delivering on their goals and mission to redesign their website and enhance their brand identity."
    },
    quicker: {
        title: "QuickER",
        subtitle: "Health Mobile App",
        role: "UI/UX Designer / Mobile App Developer",
        timeline: "May 2, 2023 → July 31, 2023",
        tools: "Figma, Flutter",
        link: "https://www.figma.com/proto/8mJG0q1QBuP3NEiucSJlK2/D%5E2K?node-id=77-8&starting-point-node-id=77%3A8",
        page: "projects/quicker.html",
        summary: "The development of QuickER aimed to streamline the emergency room (ER) experience for patients and healthcare providers. The project focused on reducing wait times, improving patient satisfaction, and optimizing the intake process in hospitals through a user-friendly mobile application.",
        problem: "Patients with non-life-threatening conditions often face long wait times and a cumbersome intake process in emergency rooms. This results in patient dissatisfaction and inefficiencies for healthcare providers.",
        solution: "QuickER provides a digital platform for patients to check in to the ER remotely. By offering a seamless and efficient intake process, QuickER helps patients secure their place in the queue before arriving at the hospital.",
        learned: "Through this project, I learned the importance of user-centered design and iterative development. The experience taught me how to effectively gather and incorporate user feedback to create a product that meets the needs of its users."
    },
    peerpair: {
        title: "PeerPair",
        subtitle: "Mobile App",
        role: "UI/UX Designer / Mobile App Developer",
        timeline: "July 10, 2023 → July 31, 2023",
        tools: "API, Flutter, Github, Swift",
        page: "projects/peerpair.html",
        summary: "The development of the TikMatch app aimed to create a unique platform that matches users based on their TikTok activity and preferences. The project focused on leveraging user-generated content to facilitate connections and provide a fun and engaging user experience.",
        problem: "The challenge was to develop an app that could effectively match users based on their TikTok activity, ensuring a seamless and enjoyable experience.",
        solution: "The solution involved developing the TikMatch app with a focus on user-generated content and activity. The app utilized TikTok's API to gather user data and created a matching algorithm to connect users with similar interests.",
        learned: "The experience helped me further my ability in thinking outside the box in terms of not only UI/UX design but Product Design as well."
    },
    amazeweb: {
        title: "Amaze Web",
        subtitle: "Web Design Service",
        role: "Founder / UI/UX Designer / Web Developer",
        timeline: "March 12, 2020 → Present",
        tools: "CSS, Figma, Framer, Github, HTML, JS, Shopify, Webflow, Wordpress",
        link: "http://amazeweb.shop",
        page: "projects/amazeweb.html",
        summary: "The Amaze Web design service is a offering of digital products ranging from website theme templates using Framer and Shopify, to AI Automation Kits and Email Design Services delivered to business owners and creators. It's designed to empower creators and small businesses with great design and automation tools at fixed prices.",
        problem: "Many early entrepreneurs, indie brands, and small businesses lack access to high quality design assets, email templates, and automation workflows that they can deploy immediately without the overhead of lengthy contracts or subscriptions.",
        solution: "The solution was to create four core product lines which are Framer Themes, Shopify Themes, AI Automation Kits, and Email Design Services. Each service is sold as a fixed-price download with clear documentation.",
        learned: "Building Amaze Web taught me how to turn early client feedback and market research into a clear and scalable product strategy."
    },
    creator: {
        title: "Creator Website",
        subtitle: "Portfolio Website",
        role: "Web Developer / UI/UX Designer",
        timeline: "April 1, 2024 → May 3, 2024",
        tools: "CSS, Figma, HTML, JS, Webflow",
        page: "projects/creator.html",
        summary: "The development of the creator's portfolio website aimed to blend modern design elements with classic blog aesthetics, providing a familiar yet fresh and unique online presence.",
        problem: "The creator needed a portfolio website that effectively displayed their diverse content, combining modern design elements with a classic blog style.",
        solution: "The solution involved developing a website that integrated modern design features with the nostalgic feel of classic blogs.",
        learned: "Through this project, I learned the importance of balancing creativity with client requirements."
    },
    clothing: {
        title: "Clothing Brand Website",
        subtitle: "E-commerce Website",
        role: "Web Developer / UI/UX Designer",
        timeline: "March 11, 2024 → March 29, 2024",
        tools: "CSS, HTML, JS, Shopify",
        page: "projects/clothing.html",
        summary: "The development of the clothing brand website aimed to establish a strong and appealing online presence for the brand. The project focused on creating a cohesive branding strategy, modern design elements, and a compelling visual identity.",
        problem: "The clothing brand website struggled with an outdated website that lacked a distinct brand identity and modern design features.",
        solution: "The solution involved a comprehensive redesign of the clothing brand website, focusing on developing a cohesive branding strategy using tools like Figma and Shopify.",
        learned: "This project provided valuable insights into creating a strong brand identity and designing a visually appealing and user-friendly website."
    },
    safebrowsing: {
        title: "Safe Browsing+",
        subtitle: "Chrome Extension",
        role: "UI/UX Designer / Web Developer",
        timeline: "February 12, 2023 → May 20, 2023",
        tools: "API, CSS, Chrome, Figma, Github, HTML, JS",
        page: "projects/safebrowsing.html",
        summary: "Safe Browsing+ is a Chrome extension designed to enhance online safety by selectively blurring harmful or offensive words on web pages. Combining an intuitive UI with powerful background scripting, it preserves full website functionality while giving users control over their browsing experience.",
        problem: "Users frequently encounter distressing or inappropriate language online, but blanket content blockers can break site layouts or hide too much information.",
        solution: "Safe Browsing+ injects a lightweight content script that scans page text, matches against a customizable word list, and applies CSS blur effects to just the offending terms.",
        learned: "This project taught me how to build browser extensions and handle DOM manipulation efficiently."
    },
    reflexo: {
        title: "Reflex-o",
        subtitle: "Apple Watch App",
        role: "UI/UX Designer / App Developer",
        timeline: "May 26, 2025 → June 20, 2025",
        tools: "Figma, Github, JS, Swift, WatchOS, Xcode",
        page: "projects/reflexo.html",
        summary: "Reflexo is a fast-paced Apple Watch game designed to test user reflexes using voice commands, real-time animations, and haptic feedback. Built entirely in SwiftUI and AVFoundation, it delivers an intuitive, playful experience that fits perfectly on the wrist.",
        problem: "Smartwatch games often struggle with limited screen real estate, unreliable audio integration, and lackluster feedback loops.",
        solution: "Reflexo uses SwiftUI for fluid UI components, AVFoundation for crisp voice prompts, and WatchKit haptics for tactile feedback. Randomized 'Bop It,' 'Twist It,' and 'Shake It' commands keep players on their toes.",
        learned: "Reflex-o taught me how to make something fun quick to pick up, satisfying to play, and perfectly sized for the wrist."
    },
    fibber: {
        title: "Fibber - Truth Detector",
        subtitle: "Apple Watch App",
        role: "UI/UX Designer / App Developer",
        timeline: "May 26, 2025 → June 20, 2025",
        tools: "Figma, Github, JS, Swift, WatchOS, Xcode",
        page: "projects/fibber.html",
        summary: "Fibber is an Apple Watch app that simulates a lie-detector by leveraging heart-rate data to infer truthfulness. Using HealthKit and SwiftUI, it guides users through a baseline capture, live monitoring during questioning, and then visualizes results.",
        problem: "Users are intrigued by polygraphs but lack accessible, personal tools to explore biometric feedback.",
        solution: "Truth Detector uses a custom DetectorSession to record a stable baseline heart rate, then streams live HealthKit data during a questioning phase. The app computes BPM changes against baseline and maps the delta to 'Truth,' 'Uncertain,' or 'Lie.'",
        learned: "Building Fibber taught me how to walk the line between serious tech and playful UX. I learned how to make biometric data feel emotional."
    },
    moodring: {
        title: "Mood Ring",
        subtitle: "Apple Watch App",
        role: "UI/UX Designer / App Developer",
        timeline: "May 26, 2025 → June 20, 2025",
        tools: "Figma, Github, JS, Swift, WatchOS, Xcode",
        page: "projects/moodring.html",
        summary: "The Mood Ring Apple Watch app transforms real-time biometric data into a dynamic, color-shifting ring that reflects the wearer's emotional state. Leveraging HealthKit and SwiftUI, it offers an intuitive glanceable experience.",
        problem: "Traditional mood-ring jewelry uses skin temperature to infer emotion but offers no context or personalization. On Apple Watch, raw sensor data is underutilized.",
        solution: "Mood Ring uses HealthKit to fetch heart rate and heart rate variability, applies a custom algorithm to map physiological signals to an emotional spectrum, and renders a smooth, animated ring.",
        learned: "Mood Ring deepened my understanding of emotional design—how visual feedback can shape user experience on a subconscious level."
    },
    packtrack: {
        title: "Pack Track",
        subtitle: "Flipper Zero App",
        role: "UI/UX Designer / App Developer",
        timeline: "June 2, 2025 → June 27, 2025",
        tools: "C, Flipper Zero SDK, FlipperHTTP, ufbt, Github",
        link: "https://github.com/thecoolguy2001/flipper-pack-track",
        page: "projects/packtrack.html",
        summary: "Pack Track is a native shipment tracker for the Flipper Zero — a clean, glanceable list of your packages on the 128×64 monochrome display. It's manual-first, driven by a plain text file on the SD card with no internet or accounts needed, and optionally goes live with a Wi-Fi devboard to fetch real tracking status.",
        problem: "Traditional package tracking requires a smartphone or computer to constantly go online to check their provider site for delivery information, creating friction when users just want a quick status glance.",
        solution: "Pack Track works two ways. Manual mode keeps the list in packages.txt on the SD card — no backend at all. Live mode uses a Wi-Fi devboard running FlipperHTTP plus your own tracking-service API key: no provider is hardcoded, so a config file points it at any service, and pressing RIGHT refreshes every package.",
        learned: "Pack Track is teaching me how to balance embedded constraints with real-world utility — parsing config and JSON in pure, host-tested C, talking HTTP over a UART, and designing glanceable UI for a 128×64 monochrome screen."
    },
    roulette: {
        title: "Roulette",
        subtitle: "Flipper Zero App",
        role: "UI/UX Designer / App Developer",
        timeline: "June 2, 2025 → June 9, 2025",
        tools: "C, Flipper Zero SDK, ufbt, Github",
        link: "https://github.com/thecoolguy2001/flipper-roulette",
        page: "projects/roulette.html",
        summary: "Roulette is a polished, single-screen revolver roulette game for the Flipper Zero, built natively as a FAP in under three hundred lines of C. A hand-drawn six-chamber cylinder, hardware-randomized bullet placement, multi-tone audio, vibration, and synchronized LED feedback deliver a tense, arcade-style game loop.",
        problem: "The Flipper Zero is widely known for its tools and hacking modules—but it lacks playful, high-stakes games that utilize the device's buzzer, screen, and input in a theatrical way.",
        solution: "Each round hides the bullet in one of six chambers using the Flipper's on-die hardware random number generator, then advances the cylinder one position per trigger pull. A click gives a short haptic tap and ticks the survival counter; a bang ends the round with a full-screen flash, a low tone, the red LED, and a sustained vibration.",
        learned: "Roulette is teaching me how to build emotional feedback systems with almost no UI. The app has pushed my thinking on timing, pacing, and physical feedback."
    },
    pod: {
        title: "Pod",
        subtitle: "Flipper Zero App",
        role: "UI/UX Designer / App Developer",
        timeline: "June 2, 2025 → July 29, 2025",
        tools: "C, Flipper Zero SDK, Sub-GHz Radio, ufbt, Github",
        link: "https://github.com/thecoolguy2001/flipper-pod",
        page: "projects/pod.html",
        summary: "Pod is a Flipper-to-Flipper encounter game played over the built-in sub-GHz radio — no add-on hardware. Carry your Flipper with Pod open and it quietly broadcasts your dolphin and listens for others; cross paths with another player and it logs the encounter, linger near each other and you can battle in a live 10-second tap race.",
        problem: "The Flipper Zero community thrives on interaction and creativity—but most peer-to-peer activity requires active input or hacking modules. There's no playful, automatic way for Flipper owners to recognize and 'battle' each other in the wild.",
        solution: "While Walk Mode is open, Pod broadcasts a tiny calling card — your callsign, a random ID, and your real dolphin level — on 433.92 MHz and listens for others. Catching a beacon logs the encounter; if both players opt in, a battle starts: a 3-2-1 countdown, then mash OK for 10 seconds — most taps wins XP toward ranks from Minnow to Kraken.",
        learned: "Pod is teaching me how to build a radio protocol from scratch — self-framed messages with CRC-8 and de-duplication over the Flipper's sub-GHz worker — and how to design a multiplayer handshake that could be host-tested before two devices ever met."
    },
    arfilter: {
        title: "AR Filter Games",
        subtitle: "AR Design",
        role: "Founder / UI/UX Designer / Web Developer",
        timeline: "June 16, 2025 → September 26, 2025",
        tools: "AR, Effect House, Figma, VR",
        link: "http://amazeweb.shop",
        page: "projects/arfilter.html",
        summary: "The Amaze Games AR Filter TikTok series is a collection of interactive TikTok game filters built using Effect House. These augmented reality (AR) games are designed to engage users with fast, reflex-based challenges that blend nostalgia, humor, and social competitiveness.",
        problem: "Most TikTok filters are either purely visual or static. Users engage with them briefly but rarely return. There's a missed opportunity to turn filters into repeatable micro games.",
        solution: "The solution was to use Effect House to develop a series of AR game filters. These include fast-tap challenges, reflex timers, face gesture games, and playful mini-games.",
        learned: "This project taught me how to design for micro interactions games that are instantly understandable, visually rewarding, and optimized for viral spread."
    },
    le: {
        title: "LE",
        subtitle: "Local AI Agentic Bot",
        role: "Founder / Hardware & Software Developer / Designer",
        timeline: "April 14, 2026 → Present",
        tools: "Raspberry Pi, Camera Module 3, Local LLM, Local Vision LLM, Cloud AI, Python, USB Microphone, USB Speaker",
        page: "projects/le.html",
        summary: "LE is a Raspberry Pi-based local AI agentic bot designed to be a smarter home assistant. It runs a locally-downloaded LLM on-device alongside a local visual LLM for camera-based intelligence, with a face UI and mirror UI for ambient interaction. More demanding requests can be routed to a cloud AI of choice, giving LE the breadth of cloud assistants without sacrificing the privacy and immediacy of on-device processing.",
        problem: "Today's home assistants — Alexa, Google Home, Siri — are limited. They live in walled-garden ecosystems, send most queries to the cloud, can't see or reason about their environment, and can't perform agentic multi-step tasks. There's no easily-extensible home assistant that combines local privacy, vision, and the ability to act as a true agent.",
        solution: "LE pairs a Raspberry Pi with a Camera Module 3, USB microphone, and USB speaker to handle input/output. A local LLM handles everyday queries on-device; a local vision LLM gives LE visual intelligence through the camera. A routing system escalates more demanding commands to a cloud AI of choice. The interface mixes a face UI for personality with a mirror UI for at-a-glance information.",
        learned: "This project is just getting started — work began April 14, 2026 — and I'll be adding more in-depth details soon as the system matures, including specifics on the local model stack, vision pipeline, agent loop, and hardware build."
    },
    thirtyforthirty: {
        title: "#30for30",
        subtitle: "Daily Web Project Challenge",
        role: "Designer / Developer",
        timeline: "June 1, 2026 → June 30, 2026",
        tools: "JavaScript, Canvas, WebGPU, WebXR, three.js, MediaPipe, transformers.js, Chrome Prompt API, WebRTC, Web Speech, Web Audio, Node, React",
        page: "projects/thirtyforthirty.html",
        summary: "#30for30 is a month-long challenge I set for myself in June: design, build, and ship one web project every single day, for 30 days straight. The thirty experiments range from a million-button toy to an AR séance with a local LLM, a ship you sail by blowing into your mic, on-device AI tools where nothing ever uploads, and a game you play by resizing your browser window.",
        problem: "Tutorials and long-term projects only exercise a narrow slice of web development. I wanted a forcing function that would push me through the breadth of web technologies — and make me a faster, more confident developer by building constantly instead of occasionally.",
        solution: "A hard daily deadline. Every day in June I scoped, designed, and shipped a small web project, deliberately rotating through different corners of the platform — on-device AI (WebGPU, Chrome's Prompt API), AR (WebXR), computer vision (MediaPipe, COCO-SSD), multi-device play (WebRTC), and unconventional inputs like breath, body pose, browser zoom, and window size. Ideas that failed were scrapped and replaced; thirty still had to ship.",
        learned: "The browser is drastically more capable than most sites let on — I shipped local LLMs, AR, real physics, and multi-device play with only one project of the thirty needing a server. Daily shipping also taught me ruthless scoping, and that killing a failing idea fast is cheaper than rescuing it: two builds got scrapped mid-month and replaced."
    }
};

// DOM Elements
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalOverlay = document.querySelector('.modal-overlay');
const modalClose = document.querySelector('.modal-close');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initPageLoader();
    initProjectCards();
    initProjectVideoHover();
    initScrollReveal();
    initSmoothScroll();
    initNavScroll();
    initCounterAnimation();
    initSkillTagsAnimation();
    initTypingAnimation();
});

// Page loader
function initPageLoader() {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1200);
    }
}

// Project video hover effect
function initProjectVideoHover() {
    const mediaHoverCards = document.querySelectorAll('.project-media-hover');

    mediaHoverCards.forEach(container => {
        const video = container.querySelector('.project-video');
        const card = container.closest('.project-card');

        if (video && card) {
            // Preload video
            video.load();

            card.addEventListener('mouseenter', () => {
                video.currentTime = 0;
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(() => {
                        // Autoplay was prevented, try again with muted
                        video.muted = true;
                        video.play().catch(() => {});
                    });
                }
            });

            card.addEventListener('mouseleave', () => {
                video.pause();
                video.currentTime = 0;
            });
        }
    });
}

// Project card click handlers
function initProjectCards() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.project;
            if (projectData[projectId]) {
                openModal(projectId);
            }
        });
    });
}

// Open modal with project details
function openModal(projectId) {
    const project = projectData[projectId];

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <div class="modal-meta">
                <span><strong>Role:</strong> ${project.role}</span>
                <span><strong>Timeline:</strong> ${project.timeline}</span>
                <span><strong>Tools:</strong> ${project.tools}</span>
            </div>
        </div>

        <div class="modal-section">
            <h3>Summary</h3>
            <p>${project.summary}</p>
        </div>

        <div class="modal-section">
            <h3>Problem</h3>
            <div class="modal-highlight">
                <p>${project.problem}</p>
            </div>
        </div>

        <div class="modal-section">
            <h3>Solution</h3>
            <p>${project.solution}</p>
        </div>

        <div class="modal-section">
            <h3>What I Learned</h3>
            <p>${project.learned}</p>
        </div>

        <div class="modal-actions">
            ${project.page ? `
                <a href="${project.page}" class="modal-link case-study">
                    View Full Case Study →
                </a>
            ` : ''}
            ${project.link ? `
                <a href="${project.link}" class="modal-link" target="_blank">
                    Visit Project →
                </a>
            ` : ''}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Modal event listeners
modalOverlay.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Scroll reveal animation
function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '-50px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Stagger children if it's a grid
                if (entry.target.classList.contains('project-grid')) {
                    const cards = entry.target.querySelectorAll('.project-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);

    // Observe section titles
    document.querySelectorAll('.section-title, .section-subtitle, .category-title').forEach(el => {
        observer.observe(el);
    });

    // Observe project grids
    document.querySelectorAll('.project-grid').forEach(el => {
        observer.observe(el);
    });

    // Observe stats
    document.querySelectorAll('.stat').forEach(el => {
        observer.observe(el);
    });

    // Observe about content
    document.querySelectorAll('.about-lead, .about-text p, .skills').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)';
        observer.observe(el);
    });

    // Custom handler for about elements
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.about-lead, .about-text p, .skills').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.15}s`;
        aboutObserver.observe(el);
    });
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 0;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navigation background on scroll
function initNavScroll() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const currentScroll = window.pageYOffset;

                // Add scrolled class
                if (currentScroll > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }

                // Hide/show nav on scroll direction (optional - Apple style)
                if (currentScroll > lastScroll && currentScroll > 300) {
                    nav.classList.add('hidden');
                } else {
                    nav.classList.remove('hidden');
                }

                lastScroll = currentScroll;
                ticking = false;
            });
            ticking = true;
        }
    });
}

// Counter animation for stats
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    const animateCounter = (el) => {
        const target = parseInt(el.textContent);
        const suffix = el.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 40;
        const duration = 1500;
        const stepTime = duration / 40;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                el.textContent = Math.ceil(current) + suffix;
                setTimeout(updateCounter, stepTime);
            } else {
                el.textContent = target + suffix;
            }
        };

        el.textContent = '0' + suffix;
        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    setTimeout(() => animateCounter(statNumber), 300);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat').forEach(stat => {
        observer.observe(stat);
    });
}

// Skill tags staggered animation
function initSkillTagsAnimation() {
    const skillTags = document.querySelectorAll('.skill-tags span');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tags = entry.target.querySelectorAll('span');
                tags.forEach((tag, index) => {
                    setTimeout(() => {
                        tag.classList.add('visible');
                    }, index * 50);
                });
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-tags').forEach(el => {
        observer.observe(el);
    });
}

// Typing animation for hero title
function initTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const words = ['Designer', 'Developer', 'Engineer'];
    const classes = ['designer', 'developer', 'engineer'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function setGradientClass() {
        typingElement.classList.remove(...classes);
        typingElement.classList.add(classes[wordIndex]);
    }

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            charIndex--;
            typingElement.textContent = currentWord.substring(0, charIndex);

            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setGradientClass();
                setTimeout(type, 400);
            } else {
                setTimeout(type, 50);
            }
        } else {
            charIndex++;
            typingElement.textContent = currentWord.substring(0, charIndex);

            if (charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else {
                setTimeout(type, 120);
            }
        }
    }

    setGradientClass();
    setTimeout(type, 1800);
}

// Combined parallax (scroll) + subtle 3D tilt (mouse) for hero
let heroScrollY = 0;
let heroRotateX = 0;
let heroRotateY = 0;
let heroTicking = false;

function applyHeroTransform() {
    const hero = document.querySelector('.hero-content');
    if (!hero) return;

    const opacity = Math.max(0, 1 - (heroScrollY / (window.innerHeight * 0.8)));
    const scale = Math.max(0.9, 1 - (heroScrollY * 0.0003));
    const translateY = heroScrollY * 0.3;

    hero.style.transform = `perspective(1000px) translateY(${translateY}px) scale(${scale}) rotateX(${heroRotateX}deg) rotateY(${heroRotateY}deg)`;
    hero.style.opacity = opacity;
}

window.addEventListener('scroll', () => {
    if (!heroTicking) {
        requestAnimationFrame(() => {
            heroScrollY = window.pageYOffset;
            const heroSection = document.querySelector('.hero');
            if (heroScrollY < window.innerHeight) {
                applyHeroTransform();
            }
            if (heroSection) {
                heroSection.style.setProperty('--scroll', heroScrollY * 0.1 + 'px');
            }
            heroTicking = false;
        });
        heroTicking = true;
    }
});

document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-content');
    if (!hero) return;

    const rect = hero.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    heroRotateX = (mouseY / window.innerHeight) * 2;
    heroRotateY = (mouseX / window.innerWidth) * -2;
    applyHeroTransform();
});

document.querySelector('.hero')?.addEventListener('mouseleave', () => {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        heroRotateX = 0;
        heroRotateY = 0;
        hero.style.transition = 'transform 0.5s ease';
        applyHeroTransform();
    }
});

document.querySelector('.hero')?.addEventListener('mouseenter', () => {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transition = 'transform 0.1s ease';
    }
});
