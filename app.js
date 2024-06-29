const translateText = () => {
  const input_text = document.getElementById("input_text").value;
  const output_text = document.getElementById("output_text");

  googleTranslateApi(input_text, "en", "fil").then(
    (res) => (output_text.value = res.text)
  );
};

// Google Translate API
const googleTranslateApi = (text, sourceLang, targetLang) => {
  return fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(
      text
    )}`
  )
    .then((response) => response.json())
    .then((data) => ({
      text: data[0][0][0],
    }));
};
