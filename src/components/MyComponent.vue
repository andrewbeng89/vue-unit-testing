<!-- Vue component using the mapped getter -->
<template>
  <div>
    <span> The first item is {{ getItem(0) }} </span>
    <button id="btn" @click="onClick">
      Click Me!
    </button>
    <button @click="addItem({ foo: 'bar' })">
      Add Item
    </button>
    <pre>{{ secret }}</pre>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  props: {
    secret: {
      type: String,
      required: false,
      default: "No secret..."
    }
  },
  computed: {
    ...mapGetters(["getItem"])
  },
  methods: {
    ...mapMutations(["addItem"]),
    onClick() {
      this.$emit("my-event");
    }
  }
});
</script>
