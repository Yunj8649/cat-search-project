class SearchKeyword {
  keywords = ['a', 'b'];
  onSearch = null

  constructor({ $target, onSearch }) {
    const $searchKeyword = document.createElement("div");
    $searchKeyword.className = "SearchKeyword";
    this.$searchKeyword = $searchKeyword;
    $target.appendChild($searchKeyword);

    this.onSearch = onSearch;

    console.log("SearchKeyword created.", this);
    this.render();
  }
  render() {
    const $keywords = this.keywords.map((word, idx) => {
        let $keyword = document.createElement("div");
        $keyword.className = "keyword";
        $keyword.innerText = word
        $keyword.addEventListener("click", () => this.onSearch(word));
        this.$searchKeyword.append($keyword)
    });
  }
}
