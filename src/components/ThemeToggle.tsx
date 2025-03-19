'use client';
import { useState, useEffect } from 'react';

const useTheme = () => {
  const storedTheme = localStorage.getItem('theme') || 'system';
  const [theme, setTheme] = useState(storedTheme);

  // 检测系统主题
  const detectSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  };

  useEffect(() => {
    if (theme === 'system') {
      const systemTheme = detectSystemTheme();
      setTheme(systemTheme);
    } else {
      document.body.className = theme;
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // 切换主题
  const toggleTheme = () => {
    switch (theme) {
      case 'light':
        setTheme('dark');
        break;
      case 'dark':
        setTheme('system');
        break;
      default:
        setTheme('light');
        break;
    }
  };

  return {
    theme,
    toggleTheme,
  };
};

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <p>当前主题: {theme}</p>
      <button onClick={toggleTheme}>切换主题</button>
    </div>
  );
}
