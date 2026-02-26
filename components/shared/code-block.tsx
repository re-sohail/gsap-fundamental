'use client';

import { useState } from 'react';
import { CopyIcon, CheckIcon } from 'lucide-react';
import { Button } from '../ui/button';

interface CodeBlockProps {
  title: string;
  code: any;
}

function CodeBlock({ title, code }: CodeBlockProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }
  return (
    <div className="bg-muted w-full max-w-2xl rounded-md p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold tracking-tight uppercase">{title}</h3>
        <Button variant="ghost" size="icon" className='hover:bg-white cursor-pointer' onClick={handleCopy}>
          {isCopied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
        </Button>
      </div>
      <pre className="bg-muted rounded-md p-4">
        <code className="text-sm">{code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
