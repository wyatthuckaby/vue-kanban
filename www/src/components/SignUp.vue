<template>
    <div>
        <h3>Create Account</h3>
        <form @submit.prevent="signup">
            <div class="row align-things">
                <label class="col-sm-2 col-form-label">Name:</label>
                <div class="col-sm-10">
                    <input v-model="signupInfo.name" class="form-control" type="text" placeholder="Name">
                </div>
            </div>

            <div class="row align-things">
                <label class="col-sm-2 col-form-label">Email Address:</label>
                <div class="col-sm-10">
                    <input v-model="signupInfo.email" class="form-control" type="text" placeholder="Email">
                </div>
            </div>

            <div class="row align-things">
                <label class="col-sm-2 col-form-label">Password:</label>
                <div class="col-sm-10">
                    <input v-model="signupInfo.password" class="form-control" type="password" placeholder="Password">
                </div>
            </div>
            <button class="btn btn-primary" type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'signup',

        data() {
            return {
                signupInfo: {
                    name: "",
                    email: "",
                    password: ""
                }
            }
        },

        computed: {
        },
        methods: {
            signup(){
                this.$store.dispatch('register', this.signupInfo)
            }
        }
    }

</script>

<style scoped>
div {
    padding: 5px;
}
h3 {
    margin-bottom: 30px;
}
input {
    max-width: 95%;
}
form {
    padding: 50px;
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px lightgray;
}
</style>