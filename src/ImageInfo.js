class ImageInfo {
    $imageInfo = null;
    data = null;
  
    constructor({ $target, data }) {
      const $imageInfo = document.createElement("div");
      $imageInfo.className = "ImageInfo";
      this.$imageInfo = $imageInfo;
      $target.appendChild($imageInfo);
  
      this.data = data;
  
      this.render();
    }
  
    setState(nextData) {
      this.data = nextData;
      this.render();
    }
  
    async render () {
      if (this.data.visible) {
        const { id, name, url } = this.data.image;
        
        const response = await api.fetchCat(id);
        if (!response) return;
        const { origin, temperament } = response.data;
  
        this.$imageInfo.innerHTML = `
          <div class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <button class="close">x</button>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </div>
          </div>`;
        this.$imageInfo.style.display = "block";
        
        this.$imageInfo.querySelector(".close").addEventListener("click", () => {
          this.$imageInfo.style.display = "none";
        });
        // this.$imageInfo.addEventListener("keydown", e => {
        //   if (e.keyCode === 27) {
        //     this.$imageInfo.style.display = "none";
        //   }
        // });
      } else {
        this.$imageInfo.style.display = "none";
      }
    }
  }
  