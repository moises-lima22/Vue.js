const helloWorldComponent = {
  template: `
      <div class="component">
        Hello, World!
      </div>
    `,
};

const vm = new Vue({
  el: "#app",
  data: {
    title: "Helo, World!",
    text: "Texto da primeira instância",
  },
  components: {
    "hello-world": helloWorldComponent,
  },
});
