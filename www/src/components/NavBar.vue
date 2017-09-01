<template>
    <div class="align-things">

        <nav class="navbar navbar-default">

            <div class="navbar-header align-things">

                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-header-collapse">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                </button>

                <a href="#" class="navbar-brand">
                    <p>Kanban</p>
                </a>

                <form class="align-things">
                    <input v-model="login.email" class="form-control" type="text" name="usernameBox" placeholder="Email">
                    <input v-model="login.password" class="form-control" type="password" name="passwordBox" placeholder="Password">
                    <button class="btn btn-primary" type="submit">Login</button>
                </form>

                <router-link class="btn btn-primary" :to="{name: 'SignUp'}">Sign Up</router-link>

            </div>
        </nav>

    </div>
</template>

<script>
    export default {
        name: 'navbar',

        data() {
            return {
                loginInfo: {
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login',this.loginInfo)
            }
        },
        computed: {
            user() {
                return this.$store.state.user.name
            }
        }
    }

</script>

<style>
    .align-things {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .btn {
        margin-left: 5px;
    }

    input {
        margin-left: 5px;
    }

    nav {
        width: 100%;
    }
</style>