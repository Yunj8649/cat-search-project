class ThemeCheckbox {
    constructor({ $target, onToggle }) {
      const $themeCheckbox = document.createElement("input");
      this.$themeCheckbox = $themeCheckbox;
      $themeCheckbox.type = "checkbox"
      $themeCheckbox.innerText = " 다크모드"
      $themeCheckbox.name = "theme"
      $themeCheckbox.value = "black"
      $target.appendChild($themeCheckbox);
  
      $themeCheckbox.addEventListener("click", e => {
        const checked = e.target.checked;
  
        onToggle(checked)
      })
  
      console.log("ThemeCheckbox created.", this);
    }
    render() {}
  }
  