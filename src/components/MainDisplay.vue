<template>
  <div class="kaya-wrapper-container">
    <img class="responsive" src="../assets/test_image.png">
    <div class="content">
      <canvas class="scene scene--full" id="scene"></canvas>
      <div class="content__inner">
        <h2 class="content__title">KAYA</h2> 
		    <!-- <h3 class="content__subtitle">Quantum Mechanics</h3> -->
	    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainDisplay",
  data() {
    return {
      msg: "똥꼬야~~"
    };
  },
  mounted() {
    require("../js/threeGraphGenerator.js");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.kaya-wrapper-container {
  height: 100%;
  overflow: hidden;
}

.responsive {
  opacity: 0.5;
  width: 100%;
  max-width: 280px;
  height: auto;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.scene {
  position: absolute;
}

.content {
  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  min-height: 100vh;
  /* background: #101010 url(../assets/test_image.png) no-repeat 50% 50%; */
  /* background-color: transparent;
  background-image: url("../assets/test_image.png");
  background-repeat: no-repeat;
  background-size: 40%;
  background-position: center; */
}

.content__inner {
  grid-area: 1 / 1 / 1 / 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.content__title {
  font-family: "nexa_boldregular", sans-serif;
  font-size: 21vw;
  font-weight: bold;
  font-style: italic;
  /* color: var(--color-title); */
  color: #ffe;
  text-align: center;
  /* margin: 0; */
  margin-top: 20px;
  margin-right: 30px;
  pointer-events: none;
}

.content__subtitle {
  font-size: 1.25em;
  color: var(--color-subtitle);
  padding: 0 0.75em;
  margin: 0;
  letter-spacing: 0.5em;
  text-indent: 0.5em;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
}

.scene--full {
  width: 100%;
  height: 100vh;
}
</style>
