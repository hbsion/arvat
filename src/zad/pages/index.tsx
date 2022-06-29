import { Button, Layout, Dropdown, Menu, Tooltip, Card, PageHeader, Row, Col, Statistic, Space, message as Notify } from 'antd'
import { Link } from 'react-router-dom';
import ZadLayout from '../../layout/zad'
const { Header,Content } = Layout;
function App() {
  return (
    <ZadLayout>
      <div className='p-8 flex flex-col gap-5'>
        {[0,1,2,3,4,5,6,7,8,9].map(()=><Card>概况</Card>)}
      </div>
    </ZadLayout>
  );
}

export default App
