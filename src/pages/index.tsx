import { Link } from 'react-router-dom'
import { Button, Switch } from 'antd'
import { useEffect, useState } from 'react'
const App = ()=>{
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  // const isDark = Number(window.localStorage.getItem('DARKMODE')) > 0;
  // const setIsDark = (val:boolean)=>{
  //   window.localStorage.setItem('DARKMODE',Number(!!val)+"");
  //   const body = document.body;
  //   if(!!val) body.classList.add('dark');
  //   if(!val) body.classList.remove('dark');
  // }
  const [isDark,setIsDark] = useState(false);
  const darkModeHandler = ()=>{
    if (mediaQuery.matches) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }
  useEffect(()=>{
    // 初始化
    if(Number(window.localStorage.getItem('DARKMODE')) > 0) {
      setIsDark(true);
    } else {
      // 非深色 监听
      mediaQuery.addListener(darkModeHandler);
      setIsDark(mediaQuery.matches);
    }
  },[])
  useEffect(()=>{
    const body = document.body;
    if(!!isDark) body.classList.add('dark');
    if(!isDark) body.classList.remove('dark');
  },[isDark])
  return (<>
    <div className='zx-top-header'>
      <div className='flex items-center gap-4 box-border'>
        <div className='flex items-center gap-1.5'>
          <div className='leading-none'>
            <img src="/logo.svg" className='h-9'/>
          </div>
          <div className='leading-none flex flex-col gap-0.5'>
            <div className='font-bold text-primary-600'>ARVAT</div>
            <div className='font-extralight text-xs'>for Web Development</div>
          </div>
        </div>
        <div className='flex-1' />
        <a className='nav_item group flex items-center gap-1' href="https://github.com/hbsion" target="_blank">
          <span>GitHub</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.2em] w-[1.2em]" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
        <Switch checked={isDark} onChange={(e)=> { 
          setIsDark(e);
          window.localStorage.setItem("DARKMODE",Number(!!e)+"");
        }} className='toggle-dark-mode' />
      </div>
    </div>
    <div className="w-screen h-screen flex flex-col gap-4 items-center justify-center">
      <div className='flex flex-col gap-2 items-center w-max'>
        <div><img src="/logo.svg" className='w-16 h-16' /></div>
        <div className="text-2xl text-primary-600 font-extralight"><span className='font-medium'>ARVAT</span> for Web Development</div>
      </div>
      <div className="text-secondary-400 text-lg">Adonis4 + React18 + Vite2 + Antd4 + Tailwindcss3</div>
      <div className='flex flex-wrap items-center justify-center gap-2 w-[440px]'>
        <Button type="primary">Antd Button</Button>
        <Button className='
          bg-pink-500 border-pink-500 text-white rounded-none
          hover:bg-pink-400 hover:border-pink-400 hover:text-white
          active:bg-pink-400 active:border-pink-400 acitve:text-white
          focus:bg-pink-400 focus:border-pink-400 focus:text-white
        '>Tailwindcss Button</Button>
        <Button type="primary" className='btn-apply'>Apply Button</Button>
        {/* <div  className='w-full' /> */}
        <Button type="primary" className='btn-success'>Success</Button>
        <Button type="primary" className='btn-warning'>Warning</Button>
        <Button type="primary" className='btn-error'>Error</Button>
        <Button type="primary" className='btn-info'>Info</Button>
        <Button>Default</Button>
      </div>
      <Button size="large" type="primary" href="/zad/" className='rounded'>Get Started</Button>
    </div>
  </>)
}

export default App
