import SignUp from '@/components/SignUp';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div className='absolute inset-0'>
      <div className='h-full max-w-2xl mx-auto flex flex-col items-center  justify-center gap-20'>
        <Link
          href='/'
          className={cn(
            (buttonVariants({ variant: 'ghost' }),
            'self-start flex items-center -mt-20')
          )}
        >
          <ChevronLeft className='mr-2 h-4 w-4' /> Home
        </Link>
        <SignUp />
      </div>
    </div>
  );
};

export default page;
