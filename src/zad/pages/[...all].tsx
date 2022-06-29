import { Button, Layout, Result } from "antd";
import { useNavigate } from "react-router-dom";
import ZadLayout from "../../layout/zad";

const NoFound = ()=>{
    const navigate = useNavigate();
    return <ZadLayout>
        <div className="h-full flex items-center justify-center">
            <Result 
                icon={<img src="https://sensorsdata.cn/assets/img/404_e3132d1.svg" />} 
                title={'Ooops！您的页面走丢了( T﹏T )'}
                extra={<Button type="primary" onClick={()=>{
                    navigate(`/zad`,{ replace: true })
                }}>返回首页</Button>}
            />
        </div>
    </ZadLayout>
}

export default NoFound;