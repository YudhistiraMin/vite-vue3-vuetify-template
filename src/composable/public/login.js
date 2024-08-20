// loginLogic.js
import { ref } from 'vue';
import { postLogin } from '../../plugins/axios';
import { useAuthStore } from '../../stores/auth';

export function useLogin() {
	const authStore = useAuthStore();
	const form = ref({
	  username: '',
	  password: ''
	});
	const rules = ref({
	  email: [],
	  password: []
	});
	const loading = ref(false);
	const alert = ref({
	  title: "Error",
	  status: false,
	  message: "",
	  color: "error",
	  icon: "$error",
	});
  
	const handleLogin = async () => {
	  try {
		loading.value = true;
		const response = await postLogin('/auth/login', {
		  data: form.value
		});
		rules.value.email = '';
		rules.value.password = '';
		loading.value = false;
		authStore.login(response.data);
	  } catch (error) {
		loading.value = false;
		if (error.status === 422) {
		  rules.value.email = error.data.email;
		  rules.value.password = error.data.password;
		  alert.value.title = 'Perhatian';
		  alert.value.status = true;
		  alert.value.message = 'Data tidak sesuai. Silahkan dicek kembali.';
		  alert.value.color = 'warning';
		  alert.value.icon = '$warning';
		} else if (error.status === 401) {
		  alert.value.title = 'Perhatian';
		  alert.value.status = true;
		  alert.value.message = 'Pengguna tidak ditemukan';
		  alert.value.color = 'warning';
		  alert.value.icon = '$warning';
		} else {
		  alert.value.title = 'Error';
		  alert.value.status = true;
		  alert.value.message = error.data.message;
		  alert.value.color = 'error';
		  alert.value.icon = '$error';
		}
	  }
	};
  
	return {
	  form,
	  rules,
	  loading,
	  alert,
	  handleLogin
	};
  }
