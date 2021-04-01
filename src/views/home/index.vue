<template>
	<div>
		
		<h1 class="page-description text-center">Albumes</h1>
		<div class="container">
		  <div class="row">
		    <div class="col-sm" v-for="item in images">
		      <div class="card" style="width: 18rem;" >
				  <img :src="item.img" class="card-img-top" alt="...">
				  <div class="card-body">
				    <h5 class="card-title">Album 3</h5>
				    <Modal :id="item.id" moduleName="album" :modal="true"></Modal>
				  </div>
				</div>
		    </div>
		  </div>
		</div>
		
		</div>
</template>

<script>
import { mapGetters } from 'vuex'
import Modal from '@/components/base/modal/Modal.vue'
export default {
	name: 'Home',
	components: {
      Modal
    },
	data () {
		return {
			js: 'https://lenguajejs.com/javascript/logo.svg',
			images: [
				{
					id: 1,
					img: 'https://lenguajejs.com/javascript/logo.svg'
				},
				{
					id: 2,
					img: 'https://lenguajejs.com/javascript/logo.svg'
				},
				{
					id: 3,
					img: 'https://lenguajejs.com/javascript/logo.svg'
				},
				{
					id: 4,
					img: 'https://lenguajejs.com/javascript/logo.svg'
				},
			]
		}
	},
	methods: {
	},
	mounted () {
        this.$modal.show('example')
    }

}
</script>

<style lang="css" scoped>
</style>