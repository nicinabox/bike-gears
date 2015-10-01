import queryString from 'query-string'

export default {
  replace(obj) {
    window.location.hash = '/' + queryString.stringify(obj)
  },

  get() {
    var hash = window.location.hash.replace(/^#\//, '')
    if (hash) {
      return queryString.parse(hash)
    }
  }
}
