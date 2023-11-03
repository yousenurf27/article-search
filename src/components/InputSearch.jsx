import PropTypes from "prop-types"

const InputSearch = ({searchRef, handleSearch}) => {
  return (
    <div className="md:max-w-xl w-full sm:max-w-md max-w-xs  mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input ref={searchRef} onKeyDown={handleSearch} type="search" id="default-search" className="block w-full sm:p-4 sm:pl-10 p-3 pl-9  text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 outline-none" placeholder="Type the news title" required />
        <button onClick={handleSearch} className="text-white absolute right-2.5 sm:bottom-2.5 bottom-1/2 max-sm:translate-y-1/2 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg sm:text-sm text-xs sm:px-4 sm:py-2 px-3 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 transition-all">Search</button>
      </div>
    </div>
  )
}

InputSearch.propTypes = {
  searchRef: PropTypes.object,
  handleSearch: PropTypes.func
}

export default InputSearch