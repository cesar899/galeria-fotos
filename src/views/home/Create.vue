<template>
	<div class="card m-auto m-3" style="width: 23rem;">
		<h1 class="text-center">Crear Album</h1>
		  <div class="form-group m-3">
		    <label for="exampleInputEmail1">nombre</label>
		    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nombre">
		  </div>
		  <div class="form-group m-3">
		    <label for="exampleInputPassword1">Imagen</label>
		    <input type="file" class="form-control" id="exampleInputPassword1" placeholder="Imagen">
		  </div>
		  <button @click="crear" class="btn btn-primary m-3">crear</button>
	</div>
</template>
<script>
	export default {
	name: 'Create',
	data () {
		return {
		}
	},
	methods: {
		crear(){
			alert('creado exitosamente')
			this.$router.push({ name: 'home' })
		}
	},
}
</script>