<template>
  <div>
    <div class="modalx" tabindex="-1" role="dialog" v-if="modal">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Eliminar {{ moduleName }}</h5>
                <button @click="open" type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>¿Esta seguro que desea elminiar el elemento?</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-danger">Eliminar</button>
              </div>
            </div>
          </div>
      </div>
    <button @click="ver(id)" class="btn btn-primary">ver</button>
    <button @click="modal = true" class="btn btn-danger m-1">eliminar</button>
  </div>
</template>
<script>
  export default {
  name: 'Modal',
   props: {
    moduleName: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
   },
  data () {
    return {
      modal : false,
    }
  },
  methods: {
    open (){
      this.modal = false
    },
    ver (item){
      this.$router.push({ name: 'album', params: {id : item} })
    },
  }
}
</script>

<styles>
.modalx{
  background-color: rgba(0,0,0,.1);
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  pointer-events:none;
}
</styles>