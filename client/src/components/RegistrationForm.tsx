
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';

export function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data: { name: string; email: string }) => {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Registration failed');
      return response.json();
    },
    onSuccess: () => {
      toast({ title: 'Registration successful!' });
      setName('');
      setEmail('');
    },
    onError: () => {
      toast({ title: 'Registration failed', variant: 'destructive' });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {mutation.isPending ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}
