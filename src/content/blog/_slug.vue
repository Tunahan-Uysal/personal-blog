<script>

export default {
    async asyncData({ $content }) {
        const article = await $content('', {deep: true})
        .only(['title', 'description', 'img', 'slug'])
        .sortBy('createdAt', 'asc')
        .fetch()

        return { article }
    }
}
</script>