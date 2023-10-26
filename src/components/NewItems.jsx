import React from 'react'

const NewItems = (props) => {
  const {title,description,imgUrl,newsUrl} = props
  return (
    <section className='container mx-auto'>
      <div>
          <div className="relative flex flex-col text-gray-700 bg-stone-100 shadow-md w-96 rounded-xl bg-clip-border">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
              <img
                src={imgUrl}
                alt="img-blur-shadow"
                layout="fill"
              />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {title}...
              </h5>
              <p className="block font-sans text-base antialiased leading-relaxed text-inherit">
                {description}
              </p>
            </div>
            <div className="p-6 pt-0">
            <a href={newsUrl} target='-blank' className="text-white bg-[#ed4a60] hover:bg-red-800 focus:ring-4 focus:ring-blue-300 text-xs rounded-lg px-5 py-2.5 mr-2 mb-2 font-bold uppercase">Read more</a>
            </div>
          </div>
      </div>
    </section>
  )
}

export default NewItems