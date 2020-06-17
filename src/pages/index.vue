<template>
  <div>
    <h4>this is index</h4>
    <router-view></router-view>
    <footer class="footer">
      <router-link to="/index/shouye" tag="div" active-class="select">首页</router-link>
      <router-link to="/index/mine" tag="div" active-class="select">订单</router-link>
      <router-link to="/index/order" tag="div" active-class="select">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped >
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footer div {
  width: 33.3%;
  height: 100%;
  line-height: 50px;
}
.select {
  background: orange;
}
</style>
