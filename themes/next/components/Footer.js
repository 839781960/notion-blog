// import React from 'react'
// import React from 'react'
// import BLOG from '@/blog.config'
// import DarkModeButton from '@/components/DarkModeButton'

import React, { useState, useEffect } from 'react'
import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'

const Footer = ({ title }) => {
  const [runningTime, setRunningTime] = useState(null)

  useEffect(() => {
    const getRunningTime = () => {
      const startTime = new Date(BLOG.SINCE)
      const currentTime = new Date()
      const diffTime = Math.abs(currentTime - startTime)
      const year = Math.floor(diffTime / (365 * 24 * 60 * 60 * 1000))
      const day = Math.floor(diffTime / (24 * 60 * 60 * 1000)) - year * 365
      const hour = Math.floor(diffTime / (60 * 60 * 1000)) - year * 365 * 24 - day * 24
      const minute = Math.floor(diffTime / (60 * 1000)) - year * 365 * 24 * 60 - day * 24 * 60 - hour * 60
      const second = Math.floor(diffTime / 1000) - year * 365 * 24 * 60 * 60 - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60
      setRunningTime(`${year}年${day}天${hour}时${minute}分${second}秒`)
    }

    if (BLOG.SINCE) {
      getRunningTime()
      const interval = setInterval(() => {
        getRunningTime()
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [])

  // const currentYear = new Date().getFullYear()
  // const copyright =
  //   typeof BLOG.SINCE === 'number' && BLOG.SINCE < currentYear
  //     ? `${BLOG.SINCE}-${currentYear}`
  //     : `${currentYear}`

  return (
    <footer className='relative z-10 dark:bg-gray-800 flex-shrink-0 justify-center text-center m-auto w-full leading-6 text-sm p-6 bg-white dark:text-gray-400'>
      {/* 黑白调节按钮 */}
      {/* <DarkModeButton /> */}
      <span>
        <i className='fas fa-clock' /> 本站已运行 {runningTime}
        {/* 几几年创建 */}
        {/* <i className='fas fa-copyright' /> {`${copyright}`}{' '} */}

        {/* 爱心人名和备案连接 */}
        <span className='mx-1 animate-pulse'>
          <i className='fas fa-heart' />
        </span>{' '}
        <a href={BLOG.LINK} className='underline font-bold'>
          {BLOG.AUTHOR}
        </a>
        .<br />
        {BLOG.BEI_AN && (
          <>
            <i className='fas fa-shield-alt' />{' '}
            <a href='https://beian.miit.gov.cn/' className='mr-2'>
              {BLOG.BEI_AN}
            </a>
            <br />
          </>
        )}
        {/* 卜算子 */}
        {/* 本站总访问量71476次，本文总阅读量13556次  */}
         <span className='hidden busuanzi_container_site_pv'>
           {/* <i className='fas fa-eye' /> */}
           本站总访问量
           <span className='px-1 busuanzi_value_site_pv'>
           </span> 
           次,
         </span>

         <span className='pl-2 hidden busuanzi_container_site_uv'>
           {/* <i className='fas fa-users' />  */}
           本站总访客数
           <span className='px-1 busuanzi_value_site_uv'>
           人
             </span> 
         </span>
        <br />
        <h1>{title}</h1>
        <span className='text-xs font-serif text-gray-500 dark:text-gray-300 pwbyjcl'>
          Copyright © jcl 2023    采用
          <a href='http://creativecommons.org/licenses/by-nc/4.0/' className='underline '>
          知识共享署名-非商业性使用 4.0 国际许可协议
           {/* {BLOG.VERSION} */}
          </a>
          .
        </span>
      </span>
    </footer>
  )
}

export default Footer




// const Footer = ({ title }) => {
//   const d = new Date()
//   const currentYear = d.getFullYear()
//   const copyrightDate = (function() {
//     if (Number.isInteger(BLOG.SINCE) && BLOG.SINCE < currentYear) {
//       return BLOG.SINCE + '-' + currentYear
//     }
//     return currentYear
//   }
//   )()
//   return (
//     <footer className='relative z-10 dark:bg-gray-800 flex-shrink-0 justify-center text-center m-auto w-full leading-6 text-sm p-6 bg-white dark:text-gray-400'>
//       <DarkModeButton/>
//       <span>
//         <i className='fas fa-copyright' /> {`${copyrightDate}`} <span className='mx-1 animate-pulse'><i className='fas fa-heart' /></span> <a href={BLOG.LINK} className='underline font-bold '>{BLOG.AUTHOR}</a>.<br />
//         {BLOG.BEI_AN && <><i className='fas fa-shield-alt' /> <a href='https://beian.miit.gov.cn/' className='mr-2'>{BLOG.BEI_AN}</a><br /></>}
//         <span className='hidden busuanzi_container_site_pv'>
//           <i className='fas fa-eye' /><span className='px-1 busuanzi_value_site_pv'> </span> </span>
//         <span className='pl-2 hidden busuanzi_container_site_uv'>
//           <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span> </span>
//         <br />
//         <h1>{title}</h1>
//         <span className='text-xs font-serif  text-gray-500 dark:text-gray-300 pwbyjcl'>Powered by  <a href='https://github.com/tangly1024/NotionNext' className='underline '>NotionNext {BLOG.VERSION}</a>.</span>
//       </span>
//     </footer>
//   )
// }
// export default Footer