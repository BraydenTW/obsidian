import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20">
      <div className="flex flex-row justify-between items-center w-full">
      <div className="text-center">
  <image
    src="public/static/profile.jpg"
    className="mx-auto mb-4 w-32 rounded-full"
    alt="Avatar"
  />
  <h5 className="mb-2 text-xl font-medium leading-tight">John Doe</h5>
  <p className="text-gray-500">Web designer</p>
</div>
        <Image
          src="/static/icons/sun.svg"
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer toggleTheme"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}