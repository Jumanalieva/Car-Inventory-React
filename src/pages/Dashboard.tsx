import DataTable from '../components/DataTable'
import backgroundImage from '../assets/images/ocean.jpeg'

function Dashboard() {
  return (
    <div style={{backgroundImage: `url(${backgroundImage})`,  backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh'}}>
      <DataTable />
    </div>
  )
}

export default Dashboard
