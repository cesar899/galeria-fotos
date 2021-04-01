<template>
	<div>
		<img  width="300px" alt="Vue logo" src="@/assets/img/logo.png">
    <h1>Login</h1>
    <form @submit="login($event)">
    <input v-model="form.email" name="email" type="email" placeholder="ecribe tu email">
    <input v-model="form.password" name="password" type="password" placeholder="ecribe tu contraseña">
    <button type="submit">enviar</button>
    </form>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
export default {

  name: 'Login',
  data () {
    return {
    form: {
        email: '',
        password: ''
      }
    }
  },
   methods: {
    async login (e) {
      e.preventDefault()
      this.setOverlay(true)
      try {
      await this.$store.dispatch('login', this.form)
      this.$router.push({ name: 'home' })
      this.setOverlay(false)
      } catch (error) {
      this.setOverlay(false)
        console.log(error)
      }
      },
    ...mapActions({
      setOverlay: 'setOverlay'
    })
    },
}
</script>

<style lang="css" scoped>
</style>