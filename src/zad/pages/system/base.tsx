import { Button, Layout, Dropdown, Menu, Tooltip, Card, PageHeader, Row, Col, Statistic, Space, message as Notify } from 'antd'
import { Link } from 'react-router-dom';
import ZadLayout from '../../../layout/zad';
const { Header,Content } = Layout;
function SystemBase() {
  return (
    <ZadLayout>
        <PageHeader 
            title={<span className='text-secondary-700 text-2xl'>基本设置</span>}
            className="px-8"
            extra={<Button className='text-secondary-700 text-[12px] flex items-center' icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.2em] w-[1.2em] leading-0 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
            </svg>
            } onClick={()=>{
            Notify.info("开发中")
            }}>复制版本信息</Button>}
        />
        <div className='px-8'>
            <Card className='shadow-zx' bordered={false}>
            <Row gutter={[20,20]}>
                <Col span={24}>
                <h3 className='text-black py-0 m-0'>知希回传</h3>
                </Col>
                <Col span={6}>
                <Statistic title={<Space className='text-sm font-medium'  align='center'>
                    <div className='w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center leading-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.3em] w-[1.3em]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className='text-secondary-500'>已用事件量</div>
                </Space>} 
                value={'2.19 亿'} 
                valueStyle={{
                    fontWeight:"bold"
                }}
                className="font-DIN"
                />
                </Col>
                <Col span={6}>
                <Statistic title={<Space className='text-sm font-medium'  align='center'>
                    <div className='w-7 h-7 rounded-full bg-green-100 text-green-600 flex items-center justify-center leading-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.3em] w-[1.3em]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
                    </svg>
                    </div>
                    <div className='text-secondary-500'>元事件量</div>
                </Space>} 
                value={426} 
                valueStyle={{
                    fontWeight:"bold"
                }}
                className="font-DIN"
                />
                </Col>
                <Col span={6}>
                <Statistic title={<Space className='text-sm font-medium' align='center'>
                    <div className='w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center leading-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.3em] w-[1.3em]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className='text-secondary-500'>事件属性数量</div>
                </Space>} 
                value={614} 
                valueStyle={{
                    fontWeight:"bold"
                }}
                className="font-DIN"
                />
                </Col>
                <Col span={6}>
                <Statistic title={<Space className='text-sm font-medium' align='center'>
                    <div className='w-7 h-7 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center leading-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.3em] w-[1.3em]" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    </div>
                    <div className='text-secondary-500'>用户属性数量</div>
                </Space>} 
                value={87} 
                valueStyle={{
                    fontWeight:"bold"
                }}
                className="font-DIN"
                />
                </Col>


                <Col span={6}>
                <Statistic title={<Space className='text-sm font-medium' align='center'>
                    <div className='w-7 h-7 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center leading-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.3em] w-[1.3em]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    </div>
                    <div className='text-secondary-500'>成员数量</div>
                </Space>} 
                value={"8.47 万"} 
                valueStyle={{
                    fontWeight:"bold"
                }}
                className="font-DIN"
                />
                </Col>
                <Col span={6}>
                <Statistic title={<Space className='text-sm font-medium' align='center'>
                    <div className='w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center leading-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.3em] w-[1.3em]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    </div>
                    <div className='text-secondary-500'>到期时间</div>
                </Space>} 
                value={'2030-12-01'} 
                valueStyle={{
                    fontWeight:"bold"
                }}
                className="font-DIN"
                />
                </Col>
            </Row>
            </Card>
        </div>
    </ZadLayout>
  );
}

export default SystemBase
