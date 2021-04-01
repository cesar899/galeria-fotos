<template>
	<div>
		<h1 class="page-description text-center">Imagenes {{id}}</h1>
		<div class="container">
			<div class="right">
			    <button class="btn btn-outline-primary my-2 my-sm-0" >Search</button>
			    <input  type="search" placeholder="Search" aria-label="Search">
				<button @click="crear" class="btn btn-primary mx-3">crear Imagen</button>
			</div>
		  <div class="row">
		    <div class="col-sm" v-for="item in images">
		      <div class="card" style="width: 18rem;">
		    		<h2 class="text-center">{{item.name}}</h2>
				  	<img :src="item.img" class="card-img-top" alt="...">
				  	<div class="modalx" tabindex="-1" rol
				    <Modal :id="item.id" moduleName="imagen" :modal="true"></Modal>
				</div>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
import Modal from '@/components/base/modal/ModalImagenEliminar.vue'
export default {
	name: 'album',
	components: {
      Modal
    },
	data () {
		return {
			 modal : false,
			id : this.$route.params.id,
			images: [
				{
					id: 1,
					name: "imagen 1",
					img: 'https://lenguajejs.com/javascript/logo.svg'
				},
				{
					id: 2,
					name: "imagen 2",
					img: 'https://lenguajejs.com/javascript/logo.svg'
				},
				{
					id: 3,
					name: "imagen 3",
					img: 'https://lenguajejs.com/javascript/logo.svg'
				},
				{
					id: 4,
					name: "imagen 4",
					img: 'https://lenguajejs.com/javascript/logo.svg'
				},
			]
		}
	},
	methods: {
		ver (){
			alert("epale")
			this.$router.push({ name: 'album', params: {id: this.id} })
		},
		crear(){
			this.$router.push({ name: 'crearImagen'})
		}
	}
}
</script>

<style lang="css" scoped>
.right{
	display: flex;
    flex-direction: row-reverse;
    margin:10px;
}
</style>