const highlights = [
    {
        name: "Beatbots",
        description: "Dive into this journey and be prepared to dance to the rythm of the future in this local-multiplayer competitive musical game. " +
        "Play the right notes at the right time and get points, as the points increases the music gets better and your robot gets happier.",
        technologies: "SwiftUI, SpriteKit, Multipeer, AVFoundation.",
        appStoreLink: "https://apps.apple.com/gb/app/beatbots-music-in-space/id1523929259",
        gitHubLink: "https://github.com/PedroFarina/Beatbots",
        imagePath: "./assets/BeatbotsIcon.png"
    },
    {
        name: "Purple Notebook",
        description: "The best place to take down your notes during classes. Organized, intuitive and with just what you need to make the most of your classes. " +
        "Purple Notebook is available for all your devices so you can easily switch during classes.",
        technologies: "UIKit (View Code), CoreData, CloudKit, Vision, Regex and NSAttributedText.",
        appStoreLink: "https://apps.apple.com/us/app/purple-notebook/id1535269503",
        gitHubLink: "https://github.com/Pepelelipa/MacroChallenge",
        imagePath: "./assets/PurpleNotebookIcon.png"
    },
    {
        name: "Nok'",
        description: "A digital accessible doorbell using QR Code technology that notifies the user when a visitor scans and identifies himself in a web browser. " +
        "It also relies on a password for those who want to protect their doorbells.",
        technologies: "UIKit (Storyboard), CloudKit.",
        appStoreLink: "https://apps.apple.com/br/app/nok/id1478788822",
        gitHubLink: "https://github.com/PedroFarina/mc3-wojupe",
        imagePath: "./assets/NokIcon.png"
    }
]
const projects = [
    {
        name: "Swol",
        subtitle: "A Wake-On-Lan Companion.",
        description: "Swift Application that uses wake-on-lan to turn on your devices through Siri.",
        technologies: "UIKit (Storyboard), CoreData, CloudKit, SiriKit.",
        appStoreLink: "https://apps.apple.com/br/app/swol/id1502303446",
        gitHubLink: "https://github.com/PedroFarina/SWoL",
        imagePath: "./assets/SwolIcon.png"
    },
    {
        name: "Endpoints Requests",
        subtitle: "A REST API helper.",
        description: "Swift Package that uses generic types to deal with responses received from any HTTP request.",
        technologies: "Swift Package, Codable.",
        gitHubLink: "https://github.com/PedroFarina/Endpoints-Requests",
        imagePath: "./assets/SwiftPackage.png"
    },
    {
        name: "WWDC 2020",
        subtitle: "A Tower Defense Playground.",
        description: "Playground about code organization used as submission to WWDC2020.",
        technologies: "Swift Playgrounds, Entity Component, SpriteKit, GameplayKit.",
        gitHubLink: "https://github.com/PedroFarina/WWDC2020",
        imagePath: "./assets/WWDC2020.png"
    },
    {
        name: "UIGameKit",
        subtitle: "An UIKit experiment.",
        description: "A framework built using UIKit's UIDynamics creating a system that handles physics events trying to simulate SpriteKit functionalities.",
        technologies: "UIKit.",
        gitHubLink: "https://github.com/PedroFarina/UIGameKit",
        imagePath: "./assets/Swift.png"
    },
    {
        name: "Game of Life",
        subtitle: "A simulation experiment.",
        description: "Based on John Conway's Game of Life some 3D and AR experiences using its system.",
        technologies: "SceneKit, ARKit, Game Loop, Pool.",
        gitHubLink: "https://github.com/PedroFarina/Game-of-Life",
        imagePath: "./assets/GameOfLife.png"
    },
    {
        name: "Life Giver",
        subtitle: "A colorful experience.",
        description: "An UIKit puzzle game inspired by \"The Giver\" concept using UIDynamics to animate the objects. Uses UIGameKit.",
        technologies: "UIKit (Storyboard + \"ViewCode\"), Factory, CoreData.",
        appStoreLink: "https://apps.apple.com/br/app/life-giver/id1473472103",
        gitHubLink: "https://github.com/PedroFarina/Projeto-Ferias",
        imagePath: "./assets/LifeGiver.png"
    },
    {
        name: "DataConnector",
        subtitle: "A CloudKit helper.",
        description: "A Swift Package built to facilitate the connection with CloudKit.",
        technologies: "Swift Package, CloudKit.",
        gitHubLink: "https://github.com/PedroFarina/CKDataConnector",
        imagePath: "./assets/SwiftPackage.png"
    },
    {
        name: "Beat",
        subtitle: "A watchOS rythm game.",
        description: "Generates a random sequence for the user to repeat, using the indicators and the Digital Crown.",
        technologies: "WatchKit, SpriteKit.",
        gitHubLink: "https://github.com/ComputacaoMackenzie/2020-watchos-challenge-raygorina",
        imagePath: "./assets/BeatIcon.png"
    },
    {
        name: "Eve - Event Planner",
        subtitle: "An event planner experiment.",
        description: "A project with custom UIViews and design for planning events divided in different modules.",
        technologies: "UIKit (Storyboard), MapKit, Carthage, EventKit, CoreData.",
        appStoreLink: "https://apps.apple.com/br/app/eve-planejador-de-eventos/id1515940589",
        gitHubLink: "https://github.com/PedroFarina/MiniRemoto",
        imagePath: "./assets/EveIcon.png"
    },
    {
        name: "Sword Clash",
        subtitle: "A tvOS + Multipeer experiment.",
        description: "Using multipeer to connect iOS with tvOS and control up to two swords in the TV using CoreMotion.",
        technologies: "SpriteKit, Multipeer Connectivity, CoreMotion, UIKit (Storyboard).",
        gitHubLink: "https://github.com/PedroFarina/Nano-4",
        imagePath: "./assets/SwordClash.png"
    },
    {
        name: "Tokyo Jack",
        subtitle: "A Tower Defense game.",
        description: "Neo Tokyo design based tower defense game in which you have to defend the city against creatures that want your neon.",
        technologies: "SpriteKit, GameplayKit, Entity Component.",
        appStoreLink: "https://apps.apple.com/br/app/tokyo-jack/id1493019368",
        imagePath: "./assets/TokyoJackIcon.png"
    },
    {
        name: "Memory Lane",
        subtitle: "Our first App.",
        description: "A project designed to help you remember your friends and who you like going out with. Although we had not even near enoough experience at the time",
        technologies: "UIKit (Storyboard), CoreData.",
        appStoreLink: "https://apps.apple.com/br/app/memory-lane/id1463876327",
        gitHubLink: "https://github.com/PedroFarina/ourSecondApp",
        imagePath: "./assets/MemoryLane.png"
    },
    {
        name: "Slider",
        subtitle: "My first Swift Experience.",
        description: "A children's story playgroundbook used as submission to WWDC2019.",
        technologies: "Swift Playgrounds, SpriteKit.",
        gitHubLink: "https://github.com/PedroFarina/Slider",
        imagePath: "./assets/Slider.png"
    },
    {
        name: "This website",
        subtitle: "A cool portfolio.",
        description: "Front-end project to show myself for you and other people. Pixel art by: Teguh Andi Raharjo.",
        technologies: "HTML, CSS, JavaScript, Bootstrap.",
        gitHubLink: "https://github.com/PedroFarina/pedrofarina.github.io",
        imagePath: "./assets/PedroPixelArt.png"
    }
];