<script setup>
import { useLogin } from '../../composable/public/login';

const { form, rules, loading, alert, handleLogin } = useLogin();

</script>
<template>
  <div>
    <v-row class="h-screen" no-gutters>
      <v-col cols="12" class="d-flex align-center bg-lightprimary">
        <v-container>
          <div class="pa-7 pa-sm-12">
            <v-row justify="center">
              <v-col cols="12" lg="10" xl="6" md="7">
                <v-card elevation="0" class="loginBox box-shadow">
                  <v-card>
                    <v-card-text class="pa-9">
                      <v-row>
                        <v-col cols="12" class="text-center">
                          <!-- bagusan kasih logo -->
                          <!-- <span class="font-weight-bold title">GenTrack Login</span>  -->
                          <!-- end bagusan kasih logo -->
                          <h2 style="color: #5e35b1 !important;" class="text-h5 mt-8 font-weight-bold">Hi, Welcome Back</h2>
                          <h4 class="text-disabled text-subtitle-1 mt-3">Enter your credentials to continue</h4>
                        </v-col>
                      </v-row>
                      <v-alert 
                        v-if="alert.status" 
                        :color="alert.color" 
                        :icon="alert.icon" 
                        :title="alert.title"
                        class="mt-3 text-left" 
                        :text="alert.message">
                      </v-alert>
                      <v-form validate-on="submit lazy" @submit.prevent="handleLogin" class="mt-7 loginForm">
                        <div class="mb-10">
                          <v-text-field
                            class="mt-4 mb-8"
                            v-model="form.username"
                            density="comfortable"
                            label="Email / Username"
                            hide-details="auto"
                            variant="outlined"
                            color="#5e35b1"
                            :error-messages="rules.email"
                          ></v-text-field>
                          <v-text-field
                            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'"
                            v-model="form.password"
                            density="compact"
                            label="Password"
                            color="#5e35b1"
                            hide-details="auto"
                            variant="outlined"
                            :error-messages="rules.password"
                            @click:append-inner="showPassword = !showPassword"
                          ></v-text-field>
                        </div>
                        <v-btn 
                          color="#5e35b1" 
                          :loading="loading"
                          block 
                          class="mt-10 text-capitalize" 
                          variant="flat" 
                          size="large" 
                          text="Login"
                          :disabled="valid" 
                          type="submit">
                            Sign In
                          </v-btn>
                      </v-form>

                    </v-card-text>
                  </v-card>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="css">
.loginBox {
  max-width: 420px;
  margin: 0 auto;
  border-radius: 12px !important;
}

.loginForm .v-text-field .v-field--active input {
	 font-weight: 500;
}
 </style>