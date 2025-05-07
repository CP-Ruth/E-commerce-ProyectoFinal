import { useParams } from "react-router"


const AdminProducts = () => {
  const {tipo} = useParams();

  return (
    <>
    {tipo 
    }
    </>
  )
}

export default AdminProducts