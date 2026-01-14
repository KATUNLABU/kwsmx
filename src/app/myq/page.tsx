'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MyQPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/manutencao');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-pink-600 mx-auto mb-4"></div>
        <p className="text-gray-600 text-lg">Redirecionando...</p>
      </div>
    </div>
  );
}
