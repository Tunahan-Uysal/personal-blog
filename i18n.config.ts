export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        newBlogpost: 'Latest Blogs',
        searchBoxSuggestion: 'Search Anything!'
      },
      tr: {
        newBlogpost: 'En Güncel Bloglar',
        searchBoxSuggestion: 'İstediğini Arat!'
      }
    }
}))