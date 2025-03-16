const textareaElement = document.querySelector("textarea.text-input");

const totalCharactersSpan = document.querySelector("span#total-characters");
const wordCountSpan = document.querySelector("span#word-count");
const sentenceCountSpan = document.querySelector("span#sentence-count");
const readingTimeSpan = document.querySelector("span#reading-time");

const controlAppConfig = document.querySelectorAll("input.config-item");
const controlAppInputs = document.querySelectorAll("input.config-item-input");
const errors = document.querySelectorAll("p.error");

class TextProcessing {
  #config = {
    excludeSpaces: false,
    enableCharacterLimit: false,
    characterLimit: Infinity,
  };

  #totalCharacters = 0;
  #wordCount = 0;
  #sentenceCount = 0;
  #readingTime = 0;
  #processed = "";

  processInput(text) {
    if (this.#config.enableCharacterLimit && text.length > this.#config.characterLimit) {
      textareaElement.value = text.substr(0, this.#config.characterLimit);
      textareaElement.classList.add("error");
      this.toggleErrors(textareaElement.id, true);
      return;
    } else {
      textareaElement.classList.remove("error");
      this.toggleErrors(textareaElement.id, false);
    }

    this.calculate(text);
    this.updateUI();

    this.#processed = text;
  }

  toggleErrors(elementId, value) {
    errors.forEach((element) => {
      if (element.id.startsWith(elementId)) {
        if (value) element.classList.remove("hidden");
        else element.classList.add("hidden");
      }
    });
  }

  toggleHiddenElements() {
    controlAppInputs.forEach((element) => {
      if (element.name === "characterLimit") {
        if (this.#config.enableCharacterLimit) element.classList.remove("hidden");
        else element.classList.add("hidden");
      }
    });
  }

  updateUI() {
    this.toggleHiddenElements();

    totalCharactersSpan.textContent = `${this.#totalCharacters < 10 ? 0 : ""}${this.#totalCharacters}`;
    wordCountSpan.textContent = `${this.#wordCount < 10 ? 0 : ""}${this.#wordCount}`;
    sentenceCountSpan.textContent = `${this.#sentenceCount < 10 ? 0 : ""}${this.#sentenceCount}`;
    readingTimeSpan.textContent = `${this.#readingTime < 1 ? "<" : ""}${Math.ceil(this.#readingTime)} ${Math.ceil(this.#readingTime) < 2 ? "minute" : "minutes"}`;
  }

  calculate(text) {
    this.#totalCharacters = this.#getCharacterCount(text);
    this.#wordCount = this.#getWordCount(text);
    this.#sentenceCount = this.#getSentenceCount(text);
    this.#readingTime = this.#getReadingTime(this.#wordCount);
  }

  updateConfig(configItem, value) {
    this.#config[configItem] = value;

    this.calculate(this.#processed);
    this.updateUI();
  }

  #getCharacterCount = (text) => (this.#config.excludeSpaces ? text.split(" ").join("").length : text.length);

  #getWordCount = (text) =>
    text
      .trim()
      .split(" ")
      .filter((item) => item !== "").length;

  #getSentenceCount = (text) => {
    let count = 0;

    while (true) {
      const current = text.indexOf(".");
      if (current === -1) break;

      text = text.substring(current + 1);
      if (current === 0) continue;

      count++;
    }

    return count;
  };

  #getReadingTime(wordCount) {
    const WPM = 225;
    return wordCount / WPM;
  }
}

const analyzeText = new TextProcessing();

textareaElement.addEventListener("input", (event) => {
  analyzeText.processInput(event.target.value);
});

controlAppConfig.forEach((configControl) => {
  configControl.addEventListener("click", (event) => {
    analyzeText.updateConfig(event.target.name, event.target.checked);
  });
});

controlAppInputs.forEach((configInput) => {
  configInput.addEventListener("change", (event) => {
    analyzeText.updateConfig(event.target.name, event.target.value);
  });
});
