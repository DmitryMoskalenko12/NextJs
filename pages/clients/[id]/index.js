import Link from "next/link";
import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

const clientPojectId = () => {
router.replace('/clients/[id]/[clientsprojectid]')
}
  return(
    <div>
      <h1>The Project of a Given Client</h1>
      <button onClick={clientPojectId}>Click</button>
    </div>
  )
}

export default ClientProjectsPage;