import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './router.config.js'
// 创建路由
const router = createRouter({
    history: createWebHistory(''),
    routes: constantRoutes,
    scrollBehavior(_, __, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

export default router
