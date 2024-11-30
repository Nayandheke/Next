import Link from 'next/link';
import { useEffect, useState } from 'react';
import '../styles/globals.css'

interface Post {
  id: number;
  title: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className='text-4xl font-bold text-blue-600'> Home </Link>
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Posts</h1>

        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-blue-50 transition">
                  <td className="py-3 px-4 border-b">{post.id}</td>
                  <td className="py-3 px-4 border-b">{post.title}</td>
                  <td className="py-3 px-4 border-b text-center">
                    <Link
                      href={`/post/${post.id}`}
                      className="text-blue-500 underline hover:text-blue-700">
                      View Post
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Posts;
