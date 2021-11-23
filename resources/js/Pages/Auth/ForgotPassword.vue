<template>
  <auth-layout>
    <inertia-head title="Forgot Password" />
    <h2 class="text-center">Forgot Password</h2>
    <v-card
      class="d-flex justify-center align-center mx-auto pa-10"
      max-width="500"
    >
      <v-row>
        <v-col class="text-center">
          <div class="mb-4 text-sm text-gray-600 mt-10">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
          </div>
          <span
            class="v-messages theme--dark error--text subtitle-1"
            v-if="form.errors.email"
          >
           {{ form.errors.email }}
          </span>
           <span
            class="v-messages theme--dark success--text subtitle-1"
            v-if="status"
          >
           {{ status }}
          </span>
          <v-form @submit.prevent="forgotPassword">
            <v-text-field
              v-model="form.email"
              label="E-mail"
              :rules="emailRules"
            >
            </v-text-field>

            <v-btn
              color="blue"
              class="mt-5"
              :disabled="form.processing || !form.email"
              @click.prevent="forgotPassword"
            >
              Email Password Reset Link
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

props: { 
    status: String
},
  data() {
    return {
      form: this.$inertia.form({
        email: "",
      }),
      

       emailRules: [
        (v) => !!v || "E-mail is required",
      ],
    };
  },

  methods: {
    forgotPassword() {
      this.form.post(this.route("password.email"), {
        onFinish: () => this.form.reset("email"),
      });
    },
  },
};
</script>