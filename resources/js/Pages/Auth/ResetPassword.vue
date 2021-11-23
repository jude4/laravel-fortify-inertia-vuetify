<template>
  <auth-layout>
    <inertia-head title="Create an account" />
    <h2 class="text-center">Reset Password</h2>
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
                !form.email ||
                !form.password ||
                !form.password_confirmation ||
                form.password_confirmation.length < 6
              "
              @click="resetPassword"
            >
              Reset Password
            </v-btn>
          </v-form>
         
        </v-col>
      </v-row>
    </v-card>
  </auth-layout>
</template>

<script>
import AuthLayout from "../../Layouts/AuthLayout.vue";
export default {
  components: { AuthLayout },
    props: { 
        token: String, 
        email: String,
    },
  data() {
    return {
      form: this.$inertia.form({
        email: this.email,
        token: this.token,
        password: "",
        password_confirmation: "",
      }),
      show1: false,
      show2: false,

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
    resetPassword() {
      this.form.post(this.route("password.update"), {
        onFinish: () => this.form.reset("password", "password_confirmation"),
      });
    },
  },
};
</script>