import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import CardArticle from "../components/CardArticle"
import InputSearch from "../components/InputSearch"
import useSearch from "../features/useSearch"
import Spinner from "../components/Spinner"
import Pagination from "../components/Pagination"

const Search = () => {
  const { loading, news, fetchNews, page, prevPage, nextPage, searchRef, handleSearch } = useSearch()
  const location = useLocation()

  const q = new URLSearchParams(location.search).get("q")
  const pg = new URLSearchParams(location.search).get("page")

  const urlSearch = `${window.location.origin}${window.location.pathname}?q=${q}`

  useEffect(() => {
    setTimeout(() => {
      fetchNews(q, pg)
    }, 500);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [location.search])

  return (
    <div className="container xl:px-10 md:px-8 px-4 mx-auto min-h-screen">
      <h1 className="font-medium font-serif md:text-4xl md:py-10 text-2xl py-6 lg text-center">The New York Times</h1>
      <InputSearch searchRef={searchRef} handleSearch={handleSearch} />
      {loading 
        ? <Spinner />
        : <CardArticle news={news.docs} keyword={q} />
      }
      <Pagination
        loading={loading}
        meta={news.meta}
        page={page}
        prevPage={prevPage}
        nextPage={nextPage}
        urlSearch={urlSearch}
      />
    </div>
  )
}

export default Search
