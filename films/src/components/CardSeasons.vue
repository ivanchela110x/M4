<script setup>
defineProps({
  card: Object,
});
</script>

<template>
  <div>
    <img
        :src="card.img"
    />
    <nav>
      <h2>{{ card.title }}</h2>
      <p>{{ card.desc }}</p>
    </nav>
  </div>
</template>

<style scoped>
div {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 3fr;
}
img {
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 16px;
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h2 {
  font-size: 30px;
}
 p {
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
}
</style>
/* https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/5a652fb0-3b04-4d9b-bec4-4d249075a811/1920x */