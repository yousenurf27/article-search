import { useRef, useState } from "react"
import { axiosNews } from "../lib/axios"

const API_KEY = import.meta.env.VITE_API_KEY

const useSearch = () => {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const searchRef = useRef()

  const fetchNews = async (q, pg) => {
    setLoading(true)
    try {
      const response = await axiosNews.get(`?q=${q}&api-key=${API_KEY}&page=${pg === null ? 0 : pg}`)
      setNews(response.data.response)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      e.preventDefault()
      const keyword = searchRef.current.value
  
      if (!keyword) return
  
      setPage(1)
      location.replace(`/search?q=${keyword}`)
    }
  }

  const prevPage = () => {
    setPage((prevState) => prevState !== 1 ? --prevState : 1)
  }

  const nextPage = () => {
    setPage((prevState) => ++prevState)
  }

  return {
    loading,
    news,
    fetchNews,
    page,
    prevPage,
    nextPage,
    searchRef,
    handleSearch
  }
}

export default useSearch