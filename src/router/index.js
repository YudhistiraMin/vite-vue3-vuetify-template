// import { createRouter, createWebHistory } from 'vue-router';
// import MainLayout from '../components/MainLayout.vue';
// import HomeView from '../views/private/dashboard/Index.vue';
// import Login from '../views/public/login.vue';
// import NotFoundView from '../views/public/404.vue';
// import { useAuthStore } from '../stores/auth';
// import childrenRoute from './children';

// const defaultTitle = import.meta.env.VITE_APP_NAME;
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       component: MainLayout,
//       children: [
//         {
//           name: 'dashboard',
//           path: '/',
//           component: HomeView,
//           meta: {
//             title: 'Beranda',
//           }
//         }
//       ].concat(childrenRoute)
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: Login,
//       meta: {
//         title: 'Login'
//       }
//     },
//     {
//       path: '/404',
//       name: 'not-found',
//       component: NotFoundView,
//       meta: {
//         title: 'Not Found'
//       }
//     },
//     {
//       path: '/:catchAll(.*)',
//       name: 'not-found-all',
//       component: NotFoundView,
//       meta: {
//         title: 'Not Found'
//       }
//     },
//   ]
// })
// router.beforeEach(async (to, from, next) => {
//   document.title = to.meta.title ? to.meta.title + ' | ' + defaultTitle : defaultTitle;
//   const authStore = useAuthStore();
//   const isTokenExist = await authStore.getAccessToken();
//   if (to.name !== 'login' && isTokenExist === null) {
//     // Pengguna belum login, arahkan ke halaman login
//     authStore.clearCredentials();
//     next({ name: 'login' });
//   } else if (to.name === 'login' && isTokenExist !== null) {
//     // Pengguna sudah login, arahkan ke halaman dashboard
//     next({name: 'dashboard'});
//   } else if (to.name === 'login' && isTokenExist === null) {
//     // Pengguna di halaman login dan belum login, biarkan akses halaman login
//     next();
//   } else {
//     // Pengguna sudah login dan mengakses halaman lain
//     next();
//   }
// })

// export default router

// kalo statis
import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
const defaultTitle = import.meta.env.VITE_APP_NAME;
// import Dashboard from "../views/private/dashboard/Index.vue"
// import Monitoring from "../views/private/monitoring/Index.vue"
// import Inspeksi from "../views/private/inspeksi-hm/Index.vue"
// import Detail from "../views/private/report/DetailHm.vue"
// import Summary from "../views/private/report/SummaryHm.vue"
// import Last from "../views/private/report/LastHm.vue"
import Login from "../views/public/login.vue"
const routes = [
//   { path: '/dashboard', component: Dashboard },
//   { path: '/monitoring', component: Monitoring },
//   { path: '/inspecting', component: Inspeksi },
//   { path: '/report/detail', component: Detail },
//   { path: '/report/summary', component: Summary },
//   { path: '/report/last', component: Last },
  { path: '/login', component: Login },
  Login
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
