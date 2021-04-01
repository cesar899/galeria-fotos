function page (path) {
    return () =>
    import(`@/views/${path}`).then(
        m => m.default || m,
        )
}
function comp (path) {
    return () =>
    import(/* webpackChunkName: '' */ `@/components/${path}`).then(
        m => m.default || m,
        )
}

export default [
    {
        path: '/',
        name: 'home',
        components: { default: page('home'), header: comp('core/appbar')},
    },
    {
        path: '/album/:id',
        name: 'album',
        components: { default: page('album'), header: comp('core/appbar')},
    },
    {
        path: '/crearAlbum',
        name: 'crearAlbum',
        components: { default: page('home/Create.vue'), header: comp('core/appbar')},
    },
    {
        path: '/crearImagen',
        name: 'crearImagen',
        components: { default: page('album/Create.vue'), header: comp('core/appbar')},
    },
    /* Errors */
    {
        path: '*',
        name: 'error-404',
        props: false,
        component: page('errors/404.vue'),
    },
]

