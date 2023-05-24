import Link from 'next/link';

const HomePage = () => {
  const arrClient = [
    {id: "max", name: "maxim"},
    {id: "dima", name: "dima"}
  ]

  return (
    <>
    <h1>Hello Nextjs hhhh</h1>
    <ul>
    {
      arrClient.map(({id, name}) => {
        return <li key={id}><Link href={`/clients/${id}`}>{name}</Link></li>
      })
     }
    </ul>
    </>
  )
}

export default HomePage;