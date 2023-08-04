export const getRandomVerbs = (array, numRandomElements) => {
  const selectedElements = [];
  while (selectedElements.length < numRandomElements) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    if (!selectedElements.includes(randomElement)) {
      selectedElements.push(randomElement);
    }
  }

  return selectedElements;
};

export const getVerbForm = (value) => {
  if (value === "random") {
    return Math.random() > 0.5 ? "simplePast" : "pastParticiple";
  }

  if (value === "v2") {
    return "simplePast";
  }
  if (value === "v3") {
    return "pastParticiple";
  }
};

export const speakHandler = (text) => {
  let utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
};
