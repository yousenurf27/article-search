import InputSearch from "../components/InputSearch"
import useSearch from "../features/useSearch"

const Home = () => {
  const {searchRef, handleSearch} = useSearch()

  return (
    <div className="container xl:px-10 md:px-8 px-4 mx-auto min-h-screen flex flex-col justify-center">
      <h1 className="font-medium font-serif md:text-4xl md:pb-10 text-2xl pb-6 lg text-center">The New York Times</h1>
      <InputSearch searchRef={searchRef} handleSearch={handleSearch} />
    </div>
  )
}

export default Home