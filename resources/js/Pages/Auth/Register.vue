<template>
  <auth-layout>
    <inertia-head title="Create an account" />
    <h2 class="text-center">Register</h2>
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
              v-model="form.name"
              :counter="50"
              label="name"
              :rules="nameRules"
            >
            </v-text-field>

            <v-text-field
              v-model="form.email"
              :counter="50"
              label="E-mail"
              :rules="emailRules"
            >
            </v-text-field>

            <v-text-field
              v-model="form.password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password"
              :rules="nameRules"
              :type="show1 ? 'text' : 'password'"
              name="input-10-2"
              @click:append="show1 = !show1"
            >
            </v-text-field>

            <v-text-field
              v-model="form.password_confirmation"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              label="Confirm Password"
              :rules="passwordConfirmationRules"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              @click:append="show2 = !show2"
            >
            </v-text-field>

            <v-btn
              color="blue"
              class="mt-5"
              :disabled="
                form.processing ||
                !form.name ||
                !form.email ||
                !form.password ||
                !form.password_confirmation ||
                form.password_confirmation.length < 6
              "
              @click="register"
            >
              Register
            </v-btn>
          </v-form>
          <div class="mt-10">
            <div>
              <inertia-link :href="route('welcome')">Back to home</inertia-link>
            </div>
            <div>
              Already have an account?<inertia-link :href="route('login')">
                Sign in</inertia-link
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
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      }),
      show1: false,
      show2: false,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 50) || "Name must be less than 50 characters",
      ],

      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length <= 6) || "Password must be greater than 6 characters",
      ],
    };
  },

  computed: {
    passwordConfirmationRules() {
      return [
        this.form.password === this.form.password_confirmation ||
          "Pasword must match",
        (v) => !!v || "You must confrim your password",
      ];
    },
  },

  methods: {
    register() {
      this.form.post(this.route("register"), {
        onFinish: () => this.form.reset("password", "password_confirmation"),
      });
    },
  },
};
</script>