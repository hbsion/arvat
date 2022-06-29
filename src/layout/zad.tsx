import { Button, Layout, Dropdown, Menu, Tooltip, Card, PageHeader, Row, Col, Statistic, Space, message as Notify } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
const ZadLayout = (props:any) => {
    const { children } = props || {};
    const { pathname } = useLocation();
    const PRE = pathname.split("/").slice(0,2).join("/");
    const PRE_M = pathname.split("/").slice(0,3).join("/");
    const PRE_M_S = pathname.split("/").slice(0,4).join("/");
    const active_keys = [PRE,PRE_M,PRE_M_S];
    const navigate = useNavigate();
  return (
    <Layout className='h-screen bg-secondary-100 flex flex-col min-w-[1080px]'>
      <Header className='zx-header sticky top-0 z-50'>
        <div className="
        flex items-center
        gap-4
        h-9 border-0 border-b border-solid border-slate-100 box-border">
          <div className='flex items-center leading-none gap-1'>
            <img src="/logo.svg" className='w-6 h-6' />
            <Link to='/zad' className='font-medium text-xl text-primary-600'>
              ARVAT
            </Link>
          </div>
          <Dropdown overlay={<Menu>
            <Card className='w-[240px]' bordered={false} bodyStyle={{padding:14}}>
              <div className='flex flex-col gap-2'>
                <Button block className='btn-light active h-9'>知希回传</Button>
                <Button block className='btn-light h-9'>同步微信</Button>
              </div>
            </Card>
          </Menu>}>
            <div className='
              text-secondary-600 text-sm cursor-pointer flex items-center leading-0 gap-1
              group
            '>
              <span>知希回传</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="
                h-[1em] w-[1em]
                transition-all
                group-hover:rotate-180 group-hover:text-primary-600
              " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </Dropdown>
          <div className='flex-1' />
          <Tooltip title="帮助中心">
            <a className='text-secondary-600 leading-0' href="/help">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.2em] w-[1.2em]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </a>
          </Tooltip>
          <Tooltip title="平台管理">
            <a className='text-secondary-600 leading-0' href="/platform">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.2em] w-[1.2em]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
              </svg>
            </a>
          </Tooltip>
          <Dropdown
          trigger={['click']}
          className='group'
          overlay={()=>
            <Menu items={[
              {
                key:"account",
                label:"个人中心",
                icon:<svg xmlns="http://www.w3.org/2000/svg" className="h-[1.4em] w-[1.4em] text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              },
              {
                key:"password",
                label:"修改密码",
                icon:<svg xmlns="http://www.w3.org/2000/svg" className="h-[1.4em] w-[1.4em] text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              },
              {
                key:"logout",
                label:"退出",
                icon:<svg xmlns="http://www.w3.org/2000/svg" className="h-[1.4em] w-[1.4em] text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              }
            ]}/>}>
            <div className="px-0 flex items-center gap-2 text-secondary-600 text-sm cursor-pointer">
              <span className='font-medium'>13800138000</span>
              <span>分析师</span>
              <svg xmlns="http://www.w3.org/2000/svg" className={`
                h-[1em] w-[1em] transition-all
              `} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </Dropdown>
        </div>
        {/* 菜单 */}
        <div className='flex items-center w-full h-12 box-border gap-1'>
          <div className='leading-0 text-primary-600 hover:bg-primary-500 hover:text-white p-1 rounded cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.4em] w-[1.4em]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <div className='w-px bg-secondary-200 h-6'/>
          <Menu
          mode="horizontal"
          className='text-base border-0 top-nav'
          selectedKeys={active_keys || ['/']}
          triggerSubMenuAction={'hover'}
        //   onClick={(e)=>{
        //     navigate(e.key,{});
        //   }}
          items={[
            {
            //   label:"概况",
              label:<Link to={PRE+'/'}>概况</Link>,
              key:PRE+'/'
            },
            {
              label:"报表",
              key:'report',
              children:[
                {
                  label:<Link to={PRE+'/report/list'}>报表列表</Link>,
                  key:PRE+'/report/list'
                },
                {
                  label:<Link to={PRE+'/report/origin'}>数据源管理</Link>,
                  key:PRE+'/report/origin'
                }
              ]
            },
            {
              label:<Link to={PRE+'/follow'}>渠道追踪</Link>,
              key:PRE+'/follow'
            },
            {
              label:<Link to={PRE+'/user'}>用户管理</Link>,
              key:PRE+'/user'
            },
            {
              label:<Link to={PRE+'/page'}>页面管理</Link>,
              key:PRE+'/page'
            },
            {
              label:<Link to={PRE+'/platform'}>渠道授权</Link>,
              key:PRE+'/platform'
            },
            {
              label:"项目设置",
              key:PRE+'/system',
              children:[
                {
                    //   label:"基本设置",
                    label:<Link to={PRE+'/system/base'}>基本设置</Link>,
                    key:PRE+'/system/base',
                }
              ]
            },
          ]} />
        </div>
      </Header>
      <Content className="flex-1">
        <Layout className='h-full'>
            <Sider theme='light' className='relative z-40'>
                <Menu
                selectedKeys={['origin/two']}
                openKeys={['origin']}
                mode="inline"
                className='bg-white zx-left-sider'
                items={[
                    {
                        label:"元数据管理",
                        key:"origin",
                        children:[
                            {
                                label:"元事件",key:"origin/one"
                            },
                            {
                                label:"事件属性",key:"origin/two"
                            },
                            {
                                label:"用户属性",key:"origin/three"
                            },
                            {
                                label:"维度表",key:"origin/four"
                            },
                            {
                                label:"物品属性",key:"origin/five"
                            }
                        ]
                    }
                ]}/>
            </Sider>
            <Content className='h-full overflow-auto'>
                {children}
            </Content>
        </Layout>
      </Content>
    </Layout>
  );
}
export default ZadLayout
