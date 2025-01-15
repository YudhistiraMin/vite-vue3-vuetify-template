<script setup>
import { useSignUp } from '../../composable/public/signUp';

const { 
  form,
  list,
  passwordRules,
  emailRules,
  required,
  process,
  loading,
  alert,
  onSelectRole,
  handleSignUp,
} = useSignUp();

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
                          <h2 style="color: #5e35b1 !important;" class="text-h5 mt-8 font-weight-bold">Sign Up</h2>
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
                      <v-form validate-on="submit lazy" @submit.prevent="handleSignUp" class="mt-7 loginForm">
                        <div class="mb-10">
                          <v-text-field
                            :disabled="process.run" 
                            v-model="form.nomor_telepon" 
                            variant="outlined" 
                            density="comfortable"
                            label="Nomor telepon"
                            :rules="required"
                          ></v-text-field>
                          <v-select 
                            label="Roles" 
                            color="#5e35b1" 
                            :disabled="process.run" 
                            density="comfortable" 
                            v-model="form.roles" 
                            :items="list.roles"
                            variant="outlined" 
                            item-title="label" 
                            item-value="value"
                            @update:model-value="onSelectRole" 
                            :rules="required">
                          </v-select>
                          <v-text-field
                            class="mt-4 mb-8"
                            v-model="form.email"
                            :disabled="process.run" 
                            density="comfortable"
                            label="Email"
                            hide-details="auto"
                            variant="outlined"
                            :rules="emailRules"
                            color="#5e35b1"
                          ></v-text-field>
                          <v-text-field
                            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'"
                            v-model="form.password"
                            :disabled="process.run" 
                            density="comfortable"
                            label="Password"
                            color="#5e35b1"
                            hide-details="auto"
                            variant="outlined"
                            :rules="passwordRules"
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
                            Create account
                          </v-btn>
                      </v-form>
                      <div class="text-end">
                        <v-divider class="my-4"></v-divider>
                        <v-btn variant="plain" class="text-subtitle-2 text-grey-darken-1" to="login">Already have an account?</v-btn>
                      </div>
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