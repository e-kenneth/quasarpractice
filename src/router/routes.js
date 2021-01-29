
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'todolist', component: () => import('pages/ToDoList.vue') },
      { path: 'example', component: () => import('pages/Example.vue') },
      { path: 'list', component: () => import('pages/ExampleList.vue') },
      { path: 'button', component: () => import('pages/ExampleButton.vue') },
      { path: 'buttonnocomponent', component: () => import('pages/ExampleButtonNoComponent.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
