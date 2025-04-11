import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Project Base Docs",
    description: "Godot 游戏框架",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: '简介',
                items: [{
                    text: 'Project Base 是什么？', link: 'guide/what-is-project-base'
                }]
            },
            {
                text: 'Project Base Game',
                items: [{
                    text: 'Project Base Game 是什么？', link: 'project-base-game/what-is-project-base-game.md'
                }]
            },
            {
                text: 'Project Base',
                items: []
            },
            {
                text: 'Examples',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
