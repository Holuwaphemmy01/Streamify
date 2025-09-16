import { useThemeStore } from "../store/useThemeStore";

const HomePage = () => {
    const {theme, useTheme } = useThemeStore();
  return (
    <div>
      <h1 className='text-5xl' data-theme={theme}>Welcome to the Home Page</h1>
    </div>
  )
}

export default HomePage
