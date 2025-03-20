'use client';
import { useState, useEffect } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState<string>('system');
  
    // 仅在客户端获取 localStorage
    useEffect(() => {
      const storedTheme = localStorage.getItem('theme') || 'system';
      setTheme(storedTheme);
    }, []);
  
    // 检测系统主题
    const detectSystemTheme = () => {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    };
  
    useEffect(() => {
      if (theme === 'system') {
        const systemTheme = detectSystemTheme();
        document.documentElement.className = systemTheme;
        // document.documentElement.style.colorScheme = systemTheme;
      } else {
        document.documentElement.className = theme;
        // document.documentElement.style.colorScheme = theme;
      }
      localStorage.setItem('theme', theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };
  
    return { theme, toggleTheme };
  };

const updateView = (event: { clientX: any; clientY: any; }, toggleTheme: { (): void; (): void; }, currentTheme: string) => {
  // 判断 View Transition API 是否可用
  if (!(document as any).startViewTransition) {
    // 若不支持则直接切换主题
    toggleTheme();
    return;
  }

  const x = event.clientX;
  const y = event.clientY;
  // 计算从点击点到屏幕四角最远的距离作为最终半径
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  // 启动 View Transition
  const transition = (document as any).startViewTransition(() => {
    toggleTheme();
  });

  // 在过渡就绪后执行动画
  transition.ready.then(() => {
    // 根据当前主题决定扩散方向：如果当前为 light，则扩散黑色（即即将变为 dark），反之亦然
    // 这里我们用 theme 的值来决定 clipPath 的应用
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];
    document.documentElement.animate(
      {
        clipPath: currentTheme == 'light'
          ? clipPath  // 从0到大圆，变为 dark 背景
          : [...clipPath].reverse(), // 从大圆到0，变为 light 背景
      },
      {
        duration: 400,
        easing: 'ease-in',
        // 根据扩散的前后状态选择伪元素
        pseudoElement: currentTheme == 'light'
          ? '::view-transition-new(root)'
          : '::view-transition-old(root)',
      }
    );
  });
};

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  // 包装点击事件，传入 event 对象和当前主题
  const handleClick = (event: any) => {
    updateView(event, toggleTheme, theme);
  };

  return (
    <div>
      <p>当前主题: {theme}</p>
      <button onClick={handleClick}>切换主题</button>
    </div>
  );
}
