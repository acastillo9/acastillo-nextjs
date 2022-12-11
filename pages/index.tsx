import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andrés Castillo</title>
        <meta name="description" content="Andrés Castillo Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="bg-maize-crayola">
          <div className="container mx-auto">
            <div className="logo flex justify-between items-end">
              <div className="p-2 m-4 border-4 border-rich-black flex">
                <h1 className="text-3xl font-bold p-3 bg-rich-black text-maize-crayola">
                  _ACastillo
                </h1>
              </div>
              <h2 className="mb-4 font-bold text-xl	">Web Developer</h2>
            </div>
          </div>
        </header>
      </main>
    </div>
  )
}
