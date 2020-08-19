<template>
    <div class="login">
        <div class="login__inner">
            <div class="row login__form-outer">
                <form class="col s12" @submit.prevent>
                    <div class="row">
                        <div class="input-field col-12">
                            <input id="login"
                                   type="text"
                                   class="validate"
                                   v-model="credentials.login"
                            >
                            <label for="login">Login</label>
                        </div>
                        <div class="input-field col-12">
                            <input
                                    id="password"
                                    type="text"
                                    class="validate"
                                    v-model="credentials.password"
                            >
                            <label for="password">Password</label>
                        </div>
                        <div class="login_buttons-group col-12">
                            <button class="btn waves-effect waves-light login__btn-sign-in"
                                    @click="onSignIn"
                                    type="submit"
                                    name="action">
                                Sign in
                            </button>

                            <button data-target="modal1" class="btn modal-trigger"> Sign up </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        login: '234',
        password: '123'
      }
    }
  },
  methods: {
    ...mapActions(['asyncSignIn']),
      async onSignIn() {
        const { login, password } = this.credentials;
        console.log( this.credentials, ' this.credentials');

        if (login && password) {
            try {
             const a = await this.asyncSignIn(this.credentials);
             console.log(a, 'a');
             this.$router.push('/'); // go to dashboard
            } catch (e) {
                this.$router.push('/auth');
            }
        }
      }
  }
}
</script>

<style lang="scss">
.login {
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background-color: rgb(0 0 0 / 64%);

    &__inner {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__btn-sign-in {
        margin-right: 10px;
    }

    &__form-outer {
        width: 50%;
    }
}
</style>
