<template>
  <b-carousel
    :arrow="arrow"
    :repeat="arrowBoth"
    :arrow-hover="arrowHover"
    :icon-pack="iconPack"
    :icon-prev="iconPrev"
    :icon-next="iconNext"
    :icon-size="iconSize"
  >
    <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <img :src="getImgUrl(i)">
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      arrow: true,
      arrowBoth: false,
      arrowHover: false,
      iconPack: "mdi",
      iconPrev: "arrow-left",
      iconNext: "arrow-right",
      iconSize: "",
      carousels: [
        { title: "Slide 1", color: "info" },
        { title: "Slide 2", color: "success" },
        { title: "Slide 3", color: "warning" },
        { title: "Slide 4", color: "danger" },
      ],
    };
  },
  methods:{
      getImgUrl(value) {
          return `https://picsum.photos/id/43${value}/1230/400`
      }
  }
};
</script>

<style>
</style>