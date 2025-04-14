
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white p-6 text-center">
      <Head>
        <title>TVEMAX</title>
      </Head>
      <h1 className="text-5xl font-bold mb-4">Bienvenido a TVEMAX</h1>
      <p className="text-lg">Disfruta más de 4,500 canales, 20,000 películas y 1,500 series.</p>
    </div>
  );
}
