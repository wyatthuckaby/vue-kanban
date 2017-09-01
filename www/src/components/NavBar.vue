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

                <div>
                    <div v-if="user.name != null">
                        {{user.name}}
                        <span class="btn btn-primary" @click="logout">Logout</span>
                    </div>
                    <div v-else class="align-things">
                        <form @submit.prevent="login" class="align-things">
                            <input v-model="loginInfo.email" class="form-control" type="text" placeholder="Email">
                            <input v-model="loginInfo.password" class="form-control" type="password" placeholder="Password">
                            <button class="btn btn-primary" type="submit">Login</button>
                        </form>
                        <router-link class="btn btn-primary" :to="{name: 'SignUp'}">Sign Up</router-link>
                    </div>
                </div>


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
                this.$store.dispatch('login', JSON.parse(JSON.stringify(this.loginInfo)));
                this.loginInfo = {
                    email: "",
                    password: ""
                }
            },
            logout() {
                this.$store.dispatch('logout');
            }
        },
        mounted() {
            this.$store.dispatch('authenticate')
        },
        computed: {
            user() {
                console.log("user comp", this.$store.state.loggedIn)
                return this.$store.state.loggedIn
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