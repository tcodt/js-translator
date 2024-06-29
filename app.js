const translateText = () => {
  const input_text = document.getElementById("input_text").value;
  const output_text = document.getElementById("output_text");
  const select_target_lang =
    document.getElementById("select_target_lang").value;
  const select_lang = document.getElementById("select_lang").value;

  if (input_text.trim() === "") {
    Toastify({
      text: "لطفا فیلد را پر کنید",

      duration: 3000,
    }).showToast();
  }

  googleTranslateApi(input_text, select_lang, select_target_lang).then(
    (res) => (output_text.value = res.text)
  );
};

const clearFeild = () => {
  input_text.value = "";
  output_text.value = "";
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
