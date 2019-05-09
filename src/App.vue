<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <my-component v-bind="secret ? { secret } : {}" v-on:my-event="onMyEvent" />
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent.vue";

export default {
  name: "app",
  components: {
    MyComponent
  },
  data() {
    return {
      secret: ""
    };
  },
  methods: {
    onMyEvent() {
      this.secret = `Message at ${new Date()}`;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
