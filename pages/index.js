import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app! My name is Phillip Tran" />
        <p className="description">
          <code> I will add more projects to this page as I work on it</code>
        </p>

        
      </main>

      <Footer />
    </div>
  )
}
