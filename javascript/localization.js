var lang = navigator.language.split('-')[0];

$(document).ready(() => {
    var langIndex = 0;
    if(lang == "pt") {
        langIndex = 1;
    }

    document.getElementById("navAboutMe").innerText = strings["_aboutMe"][langIndex];
    document.getElementById("navHighlights").innerText = strings["_highlights"][langIndex];
    document.getElementById("navProjects").innerText = strings["_projects"][langIndex];
    document.getElementById("introTitle").innerText = strings["_introTitle"][langIndex];
    document.getElementById("intro-p1").innerText = strings["_introP1"][langIndex];
    document.getElementById("intro-p2").innerText = strings["_introP2"][langIndex];
    document.getElementById("intro-p3").innerText = strings["_introP3"][langIndex];
    document.getElementById("intro-p4").innerText = strings["_introP4"][langIndex];
    document.getElementById("highlightTitle").innerHTML = strings["_highlights"][langIndex];
    document.getElementById("projectsTitle").innerHTML = strings["_projects"][langIndex];
})

const strings = {
    _aboutMe: [
        "About me",
        "Sobre mim"
    ],
    _highlights: [
        "Highlights",
        "Destaques"
    ],
    _projects: [
        "Projects",
        "Projetos"
    ],
    _introTitle: [
        "Hello there!",
        "Olá!"
    ],
    _introP1: [
        "If you're visting this page, you're probably wondering \"Who's Pedro Farina?\". And to be honest, that answer changes from time to time.",
        "Se você está visitando esta página, provavelmente está pensando \"Quem é Pedro Farina?\". E sendo honesto, essa é uma pergunta que muda de tempo em tempo."
    ],
    _introP2: [
        "For now, what I do know is that I love people, videogames and coding. I like to meet new people, and I'm always eager to find out about new technologies and how we can use it to act on our everyday lives.",
        "Bom, por enquanto o que eu sei dizer é que eu amo pessoas, video-games e programação. Eu adoro conhecer novas pessoas, e estou sempre ansioso pra conhecer novas tecnologias e aprender a usá-las para agir no nosso cotidiano."
    ],
    _introP3: [
        "I always try to be a positive person and enjoy my time with those around me, I'm always making jokes as you'll see in this portfolio. Feel free to browse here.",
        "Eu tento ser sempre uma pessoa positiva e aproveitar meu tempo com aqueles ao meu redor. Eu sou muito brincalhão e vivo fazendo piadas."
    ],
    _introP4: [
        "And if you're interested in me, well, I'm currently taken, but you can always check out my projects and send me a message.",
        "E se você está interessado em mim, bom, atualmente estou comprometido, mas pode ficar a vontade, ver meus projetos e me enviar uma mensagem."
    ]
}