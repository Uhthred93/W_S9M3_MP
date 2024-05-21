import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('darkMode', false);

    return [isDarkMode, setIsDarkMode]
};

export default useDarkMode;