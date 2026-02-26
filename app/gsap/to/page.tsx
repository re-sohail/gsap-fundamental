'use client';

import { useEffect } from 'react';
import CodeBlock from '@/components/shared/code-block';
import BgLayout from '@/layouts/bg-layout';
import gsap from 'gsap';

function ToPage() {

  useEffect(() => {
    gsap.to('#title', {
      duration: 1,
      ease: 'power2.inOut',
      y: 100,
    });
  }, []);

  const code = `gsap.to('#title', {
    duration: 1,
    ease: 'power2.inOut',
    y: 100,
  })`;
  return (
    <BgLayout>
      <div className='w-full min-h-screen flex items-center justify-center flex-col gap-10'>
        {/* Title and description */}
        <div className='space-y-2 text-center'>
          <h1 id='title' className='text-4xl font-bold tracking-tight'>Gsap To</h1>
          <p className='text-muted-foreground mx-auto max-w-md text-base'>
            Animate a property from its current value to a new value.
          </p>
        </div>

         {/* Result */}
         <div className='w-full max-w-2xl'>
          <div className='w-full bg-muted rounded-md p-4'>
            <h1 id='title' className='text-sm font-semibold tracking-tight'>Result</h1>
          </div>
        </div>

        {/* GSAPCode */}
        <div className='w-full max-w-2xl'>
          <CodeBlock title='GSAP' code={code} />
        </div>

       
      </div>
    </BgLayout>
  );
}

export default ToPage;
