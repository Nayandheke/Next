import Link from 'next/link';
import 'aos/dist/aos.css';
import '../styles/globals.css';

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white px-4">
    <div className="max-w-3xl text-center">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Welcome to My Next.js App
      </h1>
    </div>

    <Link
      href="/posts"
      className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-100 hover:scale-105 transition-transform duration-300">Explore Posts
    </Link>

    <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 opacity-50 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-50 rounded-full blur-3xl -z-10" />
  </div>
);

export default Home;