<script setup>
  import { ref } from 'vue'
  import html2canvas from 'html2canvas'
  const previewImage = ref('/img/user.png');
  const num = ref(1);
  const cir = ref(false);
  const laftBtn = ref(false);
  const rightBtn = ref(false);
  const imgSize = 'width: 96px; height:96px';

  const uploadImg = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = e => {
      previewImage.value = e.target.result;
    };
  };
  const downLoadImg = () => {
    const dom = document.querySelector('.ts-image');
    const config = { backgroundColor: null };
    html2canvas(dom, config).then(function (canvas) {
      const a = document.createElement("a");
      a.href = canvas
        .toDataURL("image/png", 0.92)
        .replace("image/png");
      a.download = "image.png";
      a.click();
    })
  };
  const calculator = (type) => {
    num.value = parseInt(num.value);
    if (type == 'add') {
      num.value = num.value + 1
    }
    if (type == 'min') {
      num.value = num.value - 1
    }
  };

</script>

<template>
  <div class="ts-grid tablet+:is-2-columns mobile-:is-1-columns mobile-:is-center-aligned">
    <div class="column">
      <div class="has-flex-center">
        <div class="ts-image" :class="[cir?'is-circular':'']" :style="imgSize">
          <img :src="previewImage" class="showImg" style="max-height: 100%;">
          <span class="red">
            <span class="font">{{num}}</span>
          </span>
        </div>
      </div>
      <div class="ts-divider is-section"></div>
      <div class="ts-file">
        <input @change="uploadImg($event)" type='file' accept='image/*' class="">
      </div>
      <div class="ts-content is-horizontally-fitted is-end-aligned">
        <div class="ts-button" @click="downLoadImg()">下載</div>
      </div>
    </div>

    <div class="column">
      <div>
        <label class="ts-switch">
          <input type="checkbox" v-model="cir" />
          圓角
        </label>
      </div>
      <span class="ts-text is-label has-top-spaced-small">顯示數字</span>
      <div class="ts-input has-top-spaced-small">
        <input type="number" v-model="num">
      </div>
      <div class="has-top-spaced-small">
        <button class="ts-button is-outlined is-small" @click="calculator('min')">
          <span class="ts-icon is-arrow-left-icon"></span>
        </button>
        <button class="ts-button is-outlined is-small" @click="calculator('add')">
          <span class="ts-icon is-arrow-right-icon"></span>
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped src="@/css/fakeimg.css"></style>