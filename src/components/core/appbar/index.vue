<template>
  <div >
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <p class="nav-link active" aria-current="page">GaleriAPP</p>
        </li>
		<li class="nav-item dropdown">
			<button @click="createAlbum" type="button" class="btn btn-primary">crear album</button>
			<!-- <button type="button" class="btn btn-primary"></button>
			-
			<button type="button" class="btn btn-primary">subir imagenes</button> -->
		</li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {

  name: 'AppBar',

  data () {
    return {

    }
  },
  methods: {
    createAlbum () {
      this.$router.push({ name: 'crearAlbum'})
    }
  }
}
</script>

<style lang="css" scoped>
</style>