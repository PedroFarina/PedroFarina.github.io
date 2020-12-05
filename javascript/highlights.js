function displayHighlight() {
    const section = document.getElementById("highlights");

    for (var i = 0; i < highlights.length; i++) {
        const row = createCustomElement("div", "row mb-5");
        createHighlightCard(highlights[i], row);
        section.appendChild(row);
    }
}

function createHighlightCard(highlight, row) {
    const imageBox = createCustomElement("div", "col-xs-12 col-lg-6 mb-2")
    const image = createHighlightImage(highlight);
    imageBox.appendChild(image);

    const textContainer = createCustomElement("div", "col-xs-12 col-lg-6 mb-2 d-flex flex-column justify-content-between");
    const textBox = createElement("div");

    const title = createTitle(highlight);
    textBox.appendChild(title);

    const desc = createDescription(highlight);
    textBox.appendChild(desc);

    const linkBox = createElement("div");
    const technologies = createTextGroup("Technologies: ", highlight.technologies);
    linkBox.appendChild(technologies);

    if (!!highlight.appStoreLink) {
        const appStore = createImageLink("assets/Available on the App Store.png", highlight.appStoreLink, "App Store");
        linkBox.appendChild(appStore);
    }
    if (!!highlight.gitHubLink) {
        const github = createImageLink("assets/Available on GitHub.png", highlight.gitHubLink, "GitHub", !!highlight.appStoreLink);
        linkBox.appendChild(github);
    }
    textContainer.appendChild(textBox);
    textContainer.appendChild(linkBox);

    row.appendChild(imageBox);
    row.appendChild(textContainer);
}

function createHighlightImage(highlight) {
    const img = createCustomElement("img", "width100");
    img.src = highlight.imagePath;
    img.alt = highlight.name + " Icon";
    return img
}