class CatBanner {
    constructor({ $target }) {
        const $bannerDiv = document.createElement("div");
        this.$bannerDiv = $bannerDiv;
        this.$bannerDiv.className = "banner"
        $target.appendChild($bannerDiv);
    }
}