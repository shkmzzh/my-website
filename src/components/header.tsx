import Link from 'next/link';

const navList = [
  { id: 1, label: '关于我', link: '' },
  { id: 2, label: '生活动态', link: '' },
  { id: 3, label: '留言', link: '' },
];
export default function Header() {
  return (
    <header className="flex justify-between items-center md:h-header">
      <div className="text-center md:mr-20 logo">
        <Link className="inline-block cursor-pointer text-current" href={'/'}>
          <span className="leading-6 md:leading-7 tracking-wide inline-block px-3">
            shkmzzh
          </span>
        </Link>
      </div>

      <ul>
        {navList.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.link}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
