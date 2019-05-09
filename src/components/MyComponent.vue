<!-- Vue component using the mapped getter -->
<template>
  <div>
    <span v-if="getItem(0)"> The first item is {{ getItem(0) }} </span>
    <button id="btn" @click="onClick">
      Click Me!
    </button>
    <button id="add" @click="addItem({ foo: 'bar' })">
      Add Item
    </button>
    <button id="fetch" @click="onFetchItems">
      Fetch Items from API
    </button>
    <pre>{{ secret }}</pre>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapMutations, mapActions } from "vuex";

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
    ...mapActions(["fetchItems"]),
    onClick() {
      this.$emit("my-event");
    },
    async onFetchItems() {
      try {
        await this.fetchItems(this.page);
        this.page += 1;
      } catch (error) {
        console.error(error);
      }
    }
  },
  data() {
    return {
      page: 0
    };
  }
});
</script>
