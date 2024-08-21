import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className="w-full px-[12%] py-20 scroll-mt-14 bg-[url('•/images/ footer-bg-color.png')] bg-no-repeat
             bg-[length:90%_auto] bg-center font-Poppins-font text-center  text-white">
    

    {/* <h4 className="Projects-h4 text-xs text-center mb-2  2xl:mx-customX py-1 z-10 text-white bg-[rgba(25,17,51,0.5)]
               border border-[rgba(248,246,254,0.2)] rounded-full hover:bg-[rgba(111,65,210,0.25)]
               hover:shadow-inner hover:shadow-[rgba(111,65,210,0.5)] lg:text-xs 2xl:text-xs">
            
            🌍 Connect with me
    </h4> */}

    <h4 className="Projects-h4 text-custom-xs z-10 text-white bg-[rgba(25,17,51,0.5)] 
                   border border-[rgba(248,246,254,0.2)] rounded-full mb-1 px-5 pt-1 pb-1 inline-block 
                   relative hover:shadow-inner hover:shadow-[rgba(111,65,210,0.5)]
                   lg:text-xs 2xl:text-xs">

            🌍 &nbsp;Connect with me
    </h4> 

    <h2 className="text-center font-bold text-5xl mt-8"><span className='text-transparent bg-gradient-to-r bg-clip-text from-cyan-500 to-pink-500'>Get in touch</span></h2> 
    <p className="text-center max-w-2x1 mx-auto mt-5 mb-12"><span className=''>I'd love to hear from you!
    If you have any questions, comments or feedback, please use the form below. </span></p>
   
    <form action="" className="max-w-2x1 xl:mx-[20%]">
        
        <div className="grid md:grid-cols-2 mx-auto items-center gap-5 w-auto">
            <div className="relative h-12 w-full min-w-[200px]">
                <input className="peer h-full w-full rounded-[7px] 
                       border bg-slate-950 border-white border-t-transparent 
                       bg-transparent px-3 py-2.5 font-sans text-sm
                       font-normal text-blue-gray-700 outline outline-0 
                       transition-all placeholder-shown:border
                       placeholder-shown:border-white placeholder-shown:border-t-white
                       focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 
                       disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" " />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute
                                  left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
                                  text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none 
                                  before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 
                                  before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all 
                                  after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 
                                  after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white 
                                  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]
                                  peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent 
                                  peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight
                                  peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2
                                  peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2
                                  peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent
                                  peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Name
                </label>
            </div>

            <div className="relative h-12 w-full min-w-[200px]">
                <input className="peer h-full w-full rounded-[7px] 
                       border bg-slate-950 border-white border-t-transparent 
                       bg-transparent px-3 py-2.5 font-sans text-sm
                       font-normal text-blue-gray-700 outline outline-0 
                       transition-all placeholder-shown:border
                       placeholder-shown:border-white placeholder-shown:border-t-white
                       focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 
                       disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" " />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute
                                  left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate
                                  text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none 
                                  before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 
                                  before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all 
                                  after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 
                                  after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white 
                                  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]
                                  peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent 
                                  peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight
                                  peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2
                                  peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2
                                  peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent
                                  peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Email
                </label>
            </div>

            
        </div>

        <div className='pb-20 py-5'>
            <textarea id="message" rows="8" class="block p-2.5 w-full text-sm text-white bg-slate-950 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
            <button type="submit" class="inline-flex gap-3 p-2 px-5 mt-5 items-end bg-blue-700 text-white rounded-full cursor-pointer hover:bg-blue-600 dark:text-blue-500 dark:hover:bg-gray-600">
            <span class="">Send message</span>
            <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
            </svg>
        </button>
        </div>

    </form>
    </div>
  )
}

export default Contact