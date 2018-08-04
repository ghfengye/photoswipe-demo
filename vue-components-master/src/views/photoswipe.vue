<template>
   <div class="eye_image">
      <template v-for="(item,index) in items">
        <div class="eye-item" :key="index">
          <div class="img-wrapper">
            <img :src="item.src" @load="loaded($event, index)" class="preview-img" @click="$preview.open(index, previewList)">
          </div>
        </div>
      </template>
    </div>
</template>
<script>
export default {
  data() {
    return {
      previewList: [],
      items: [
        {
          src: "https://placekitten.com/600/400",
          w: 600,
          h: 400,
          createTime: "2018.09.08",
          eyeSide: 1
        },
        {
          src: "https://placekitten.com/1200/900",
          w: 1200,
          h: 900,
          createTime: "2018.09.08",
          eyeSide: 1
        },
        {
          src: "https://placekitten.com/800/400",
          w: 1200,
          h: 900,
          createTime: "2018.09.08",
          eyeSide: 1
        },
        {
          src: "https://placekitten.com/1200/1200",
          w: 1200,
          h: 900,
          createTime: "2018.09.08",
          eyeSide: 1
        }
      ]
    };
  },
  methods: {
    loaded(event, index) {
      var img = event.currentTarget;
      this.previewList[index] = Object.assign(
        {},
        {
          src: img.src,
          w: img.naturalWidth,
          h: img.naturalHeight
        }
      );
    }
  }
};
</script>
<style  scoped>
.eye_image {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}
.eye-item {
  width: 200px;
  margin-top: 14px;
  cursor: pointer;
}
img {
  width: 100%;
}
.img-wrapper {
  text-align: center;
  background: #000;
}
</style>
