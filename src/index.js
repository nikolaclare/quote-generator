function generateQuote(event) {
  event.preventDefault();
  
  new Typewriter("#quote", {
    strings: "When people are determined they can overcome anything.",
    autoStart: true,
    delay: 1,
    cursor: "",
});
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);