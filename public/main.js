var app = new Vue({
  el: '#app',
  data: {
    title: 'CommandCenter!',
    saveBookmark: {
      name: 'asd',
      url: 'sss',
      category: 'sddd'
    },
    savedLinks: [
      { name: 'something', url: 'https://google.ca', group: null },
      { name: 'something2', url: 'https://google.ca', group: null },
      { name: 'something3', url: 'https://google.ca', group: null },
      { name: 'something4', url: 'https://google.ca', group: null },
      { name: 'something5', url: 'https://google.ca', group: null },
      { name: 'something6', url: 'https://google.ca', group: null },
      { name: 'something7', url: 'https://google.ca', group: null },
      { name: 'something8', url: 'https://google.ca', group: null },
      { name: 'something9', url: 'https://google.ca', group: null },
      { name: 'something10', url: 'https://google.ca', group: null },
      { name: 'something11', url: 'https://google.ca', group: null }
    ]
  },
  methods: {
    async exec() {
      console.log('exec!!');
      try {
        let res = await axios.post('/exec');
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    openTicket($event) {
      console.log('event', $event);
      $event.srcElement.value = '';
      // do something
    },
    async createBookmark() {
      // axios
      //   .post(
      //     '/bookmark/save',
      //     {
      //       name: this.saveBookmark.name,
      //       url: this.saveBookmark.url,
      //       category: this.saveBookmark.category
      //     },
      //     {
      //       headers: {
      //         Accept: 'application/json',
      //         'Content-Type': 'application/json'
      //       }
      //     }
      //   )
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(err => {
      //     console.log(err.response.data);
      //   });
      try {
        let res = await axios.post('/bookmark/save', {
          name: this.saveBookmark.name,
          url: this.saveBookmark.url,
          category: this.saveBookmark.category
        });
        console.log(res.data);
      } catch (error) {
        console.log(error.response);
      }
    }
  }
});
