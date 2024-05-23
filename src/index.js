function displayQuote(response) {
    new Typewriter("#quote", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
    let submitButton = document.querySelector("#submit-button");
    submitButton.removeAttribute("disabled");
  }

function initialQuote() {
    let quoteElement = document.querySelector("#quote");
    quoteElement.classList.remove("hidden");
    let quote = `Empower your mind,<br/>
    Unlock your potential,<br/>
    Inspire others to code,<br/>
    Learn, grow, and thrive.<br/>
    <strong>SheCodes AI</strong>`;
    
    new Typewriter("#quote", {
      strings: quote,
      autoStart: true,
      delay: 1,
    });
  }

function generateQuote(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "04aft6704ff52a4b6b603b4986c4oc2a";
    let context = "You are an inspirational quote expert and loves to read quotes by famous people. Your mission is to generate a four sentence quote in basic HTML in italics and seperate each line with a </br>. Make sure to follow the user instructions. Sign the quote with 'SheCodes AI' inside a <strong> element at the end of the quote.";
    let prompt = `User instructions: generate an inspirational quote about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let submitButton = document.querySelector("#submit-button");
    submitButton.setAttribute("disabled", "disabled");
  
    let quoteElement = document.querySelector("#quote");
    quoteElement.classList.remove("hidden");
    quoteElement.innerHTML = `<div class="generating">⏳ Generating an inspirational quote about ${instructionsInput.value}... </div>`;
    axios.get(apiUrl).then(displayQuote);
  }

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

initialQuote();