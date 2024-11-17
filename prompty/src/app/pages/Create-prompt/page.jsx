'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Form from '../../components/Form'
export default function CreatePrompt() {
  const { data: session } = useSession(); // Use this to get the session data
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: '',
    tag: '',
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user?.id, // Ensure this is correctly referenced
          tag: post.tag,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Form
        type='Create'
        post={post}
        setPost={setPost}
        handleSubmit={createPrompt}
      />
    </div>
  );
}