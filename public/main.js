var app = new Vue({
  el: '#app',
  data: {
    title: 'CommandCenter!',
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
  },
});
