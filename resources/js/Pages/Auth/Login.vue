<template>
  <auth-layout>
    <inertia-head title="Login to your Dashboard" />
    <h2 class="text-center">Login</h2>
    <v-card
      class="d-flex justify-center align-center mx-auto pa-10"
      max-width="500"
    >
      <v-row>
        <v-col class="text-center">
          <span
            class="v-messages theme--dark error--text subtitle-1"
            v-if="form.errors.email"
          >
            {{ form.errors.email }}
          </span>
          <v-form>
            <v-text-field
              v-model="form.email"
              :counter="50"
              label="E-mail"
              :rules="emailRules"
            >
            </v-text-field>

            <v-text-field
              v-model="form.password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password"
              :type="show ? 'text' : 'password'"
              name="input-10-2"
              @click:append="show = !show"
            >
            </v-text-field>

            <v-btn
              color="blue"
              class="mt-5"
              :disabled="form.processing || !form.email || !form.password"
              @click="login"
            >
              Login
            </v-btn>
          </v-form>
          <div class="mt-10">
            <div>
              <inertia-link :href="route('welcome')">Back to home</inertia-link>
            </div>
            <div>
              Don't have an account?<inertia-link :href="route('register')">
                Create account</inertia-link
              >
            </div>
            <div>
              <inertia-link :href="route('password.request')"> forget password</inertia-link>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </auth-layout>
</template>

<script>
import AuthLayout from "../../Layouts/AuthLayout.vue";
export default {
  components: { AuthLayout },

  data() {
    return {
      form: this.$inertia.form({
        email: "",
        password: "",
      }),
      show: false,

      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },

  methods: {
    login() {
      this.form.post(this.route("login"), {
        onFinish: () => this.form.reset("password", "email"),
      });
    },
  },
};
</script>