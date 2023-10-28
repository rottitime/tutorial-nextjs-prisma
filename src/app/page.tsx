import { User } from '@prisma/client'
import Image from 'next/image'

const getPosts = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/get-posts`, {
    method: 'GET',
  })

  if (!res.ok) {
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const data: User[] = await getPosts()
  // console.log({ data })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>hello world</p>
      {data.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </main>
  )
}
