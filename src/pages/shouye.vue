<template>
  <div>
    <h4>this is shouye</h4>
    <button @click="toDian">dianying</button>
    <button>waimai</button>

    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
import { Button } from "vant";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    toDian() {
      console.log(this.$route);
      this.$router.push({ path: "/movies", query: { id: "1" } });
    }
  },
  components: {}
};
</script>

<style scoped >
</style>
