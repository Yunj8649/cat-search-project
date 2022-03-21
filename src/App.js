console.log("app is running!");

class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;

    const onSearch = async(keyword) => {
      try {
        this.searchResult.setIsLoading(true);
        const response = await api.fetchCats(keyword);
        console.log('response :' ,response)
        this.searchResult.setIsLoading(false);
        this.setState(response.data);
      } catch(e) {/** */}
    }

    this.themeCheckbox = new ThemeCheckbox({
      $target,
      onToggle: check => {
        if(check) {
          document.body.classList.add("black")
        } else { 
          document.body.classList.remove("black")
        }
      }
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch
    });
    this.searchInput.$searchInput.focus()

    this.searchKeyword = new SearchKeyword({
      $target,
      onSearch
    });

    this.catBanner = new CatBanner({
      $target
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: async (image) => {
        try {
          const { id } = image;
          const response = await api.fetchCat(id);
          this.imageInfo.setState({
            visible: true,
            image: {
              ...image,
              ...response.data
            }
          });
        } catch (e) {/** */}
      },
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      },
      onClose: () => {
        this.imageInfo.setState({
          visible: false,
          image: null
        });
      }
    });
  }

  setState(nextData) {
    console.log('this :: ', this);
    this.data = nextData;
    this.searchResult.setState(nextData);
  }

}
