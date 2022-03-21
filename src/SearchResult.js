class SearchResult {
  $searchResult = null;
  data = null;
  onClick = null;
  isLoading = false;

  constructor({ $target, initialData, onClick }) {
    this.$searchResult = document.createElement("session");
    this.$searchResult.className = "SearchResult";
    $target.appendChild(this.$searchResult);

    this.data = initialData;
    this.onClick = onClick;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  setIsLoading(nextData) {
    console.log('ddd : ', nextData)
    this.isLoading = nextData;
    this.render();
  }

  render() {
    if (this.isLoading) {
      this.$searchResult.innerHTML = `<div>검색중입니다. 잠시만 기다려주세요.</div>`
      return;
    }

    if (this.data.length === 0) {
      this.$searchResult.innerHTML = `<div>검색결과가 없습니다.</div>`
    } else {
      this.$searchResult.innerHTML = this.data
      .map(
        cat => `
          <div class="item" id=${cat.id}>
            <img src=${cat.url} alt=${cat.name} />
          </div>
        `
      )
      .join("");

      this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
          this.onClick(this.data[index]);
        });
      });
    }
  }
}
