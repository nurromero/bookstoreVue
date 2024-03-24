const baseUri = "https://anbo-restbookquerystring.azurewebsites.net/api/Books";


Vue.createApp({
 
  data() {
    return {
      books: [],
      error: null,
    };
  },
  methods: {
    async getBooks() {
      try {
        const response = await axios.get(baseUri); 
        this.books = response.data;
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
  },
 

  
}).mount('#app')