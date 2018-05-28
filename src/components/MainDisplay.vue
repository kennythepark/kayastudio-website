<template>
  <div>
    <canvas class="scene scene--full" id="scene"></canvas>
    <div class="content__inner">
		  <h2 class="content__title">Physics</h2>
		  <h3 class="content__subtitle">Quantum Mechanics</h3>
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
    require("../js/demo.js");
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

/* .scene {
	position: absolute;
} */

/* .scene--left {
	width: 100vmin;
	height: 100vmin;
	transform: translate3d(-50vmin,0,0);
} */

.scene--full {
  width: 100%;
  height: 100vh;
}

/* .scene--up {
	height: 150vmin;
	width: 150vmin;
	top: -50vh;
	left: 50%;
	margin-left: -75vmin;
} */
</style>
