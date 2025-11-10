import { useTheme } from '../context/ThemeContext';

interface ThemeLoaderProps {
  isLoading?: boolean;
}

export const ThemeLoader = ({ isLoading = false }: ThemeLoaderProps) => {
  const { isChanging } = useTheme();

  return (
    <div className={`theme-loader ${isChanging || isLoading ? 'active' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};