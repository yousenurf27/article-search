import PropTypes from "prop-types"
import { formattedDate } from "../lib/formattedDate"

const CardArticle = ({news, keyword}) => {
  let key = 0
  return (
    <div className="md:pt-8 py-6">
      <h5 className="mb-4 md:text-2xl text-lg font-serif capitalize">Search Topic: {keyword}</h5>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {news?.map((n) => {
          return (
            <div key={++key}  className="max-w-sm mx-auto p-6 flex flex-col bg-white border shadow-xl rounded-lg font-serif">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 overflow-hidden line-clamp-2" title={n.snippet}>{n.abstract}</h5>
                <p className="mb-0 text-base overflow-hidden line-clamp-1" title={`by ${n.byline.original}`}>by {n.byline.original}</p>
                <p className="mb-5 text-xs">{formattedDate(n.pub_date)}</p>
                <p className=" mb-3 text-base overflow-hidden line-clamp-4 flex-1">{n.lead_paragraph}</p>
                <a href={n.web_url} target="_blank" className="inline-flex items-center text-gray-600 hover:underline" rel="noreferrer">
                    See detail
                    <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
                    </svg>
                </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

CardArticle.propTypes = {
  news: PropTypes.array,
  keyword: PropTypes.string
}

export default CardArticle