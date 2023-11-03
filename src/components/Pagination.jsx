import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Pagination = ({loading, meta, page, prevPage, nextPage, urlSearch}) => {
  let button
  if (loading) {
    button = <div className="inline-flex mt-2 xs:mt-0">
                  <button disabled className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-500 rounded-l cursor-not-allowed">
                      Prev
                  </button>
                  <button disabled className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-500 border-0 border-l border-gray-700 rounded-r cursor-not-allowed">
                      Next
                  </button>
              </div>
  } else {
    button = <div className="inline-flex mt-2 xs:mt-0">
                  {page !== 1
                    ? <>
                        <Link to={page !== 2 ? `${urlSearch}&page=${page - 1}` : `${urlSearch}`} onClick={() => page !== 0 && prevPage()} className={`flex items-center justify-center sm:px-4 sm:h-10 px-3 h-9 sm:text-base text-sm font-medium ${page === 0 ? "text-gray-400 bg-gray-700 cursor-default" : "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} rounded-l`}>
                            Prev
                        </Link>
                        <Link to={`${urlSearch}&page=${page + 1}`} onClick={() => nextPage()} className="flex items-center justify-center sm:px-4 sm:h-10 px-3 h-9 sm:text-base text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                        </Link>
                      </>
                    : <>
                        <button onClick={() => page !== 1 && prevPage()} disabled={page === 1 ? true : false} className={`flex items-center justify-center sm:px-4 sm:h-10 px-3 h-9 sm:text-base text-sm font-medium ${page === 1 ? "text-gray-400 bg-gray-700 cursor-default" : "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} rounded-l`}>
                            Prev
                        </button>
                        <Link to={`${urlSearch}&page=${page + 1}`} onClick={() => nextPage()} className="flex items-center justify-center sm:px-4 sm:h-10 px-3 h-9 sm:text-base text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                        </Link>
                      </>
                  }
              </div>
  }
  return (
    <div className="flex flex-col items-center py-8">
      <span className="sm:text-base text-sm text-black ">
          Page <span className="font-semibold text-black">{page}</span> of <span className="font-semibold text-black">{ !loading && Math.floor(meta?.hits / 10)}</span>
      </span>
      {button}
    </div>
  )
}

Pagination.propTypes = {
  loading: PropTypes.bool,
  meta: PropTypes.object,
  page: PropTypes.number,
  prevPage: PropTypes.func,
  nextPage: PropTypes.func,
  urlSearch: PropTypes.string
}

export default Pagination