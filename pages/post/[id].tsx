import { useRouter } from 'next/router';
import Link from 'next/link'; 
import { useEffect, useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css"
import '../../styles/globals.css'

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-blue-600">
          <i className="fa-solid fa-spinner fa-spin mr-2"></i>Loading...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">{post.title}</h1>
        <p className="text-lg text-gray-800 mb-6 leading-relaxed">{post.body}</p>
        <Link
          href="/posts"
          className="text-white bg-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Back to Posts
        </Link>
      </div>
    </div>
  );
};

export default PostDetails;