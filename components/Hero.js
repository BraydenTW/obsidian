import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20">
      <div className="flex flex-row justify-between items-center w-full">
      <div class="text-center">
  <img
    src="static/profile.jpg"
    class="mx-auto mb-4 w-32 rounded-full"
    alt="Avatar"
  />
  <h5 class="mb-2 text-xl font-medium leading-tight">John Doe</h5>
  <p class="text-gray-500">Web designer</p>
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