export const addKeyListeners = (keys) => {
  for (let key of keys) {
    key.addEventListener("click", (e) => {
      document.getElementById("calc-input").value += e.target.innerHTML;
    });
  }

  document.getElementById("calc-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      evaluarExpresion();
    }
  });

  document.getElementById("del-btn").addEventListener("click", () => {
    document.getElementById("calc-input").value = "";
  });

  document.getElementById("calc-btn").addEventListener("click", () => {
    evaluarExpresion();
  });
};

const evaluarExpresion = () => {
  document.getElementById("calc-input").value = document.getElementById(
    "calc-input"
  ).value = eval(document.getElementById("calc-input").value);
};
