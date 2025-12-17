import React, { Component } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './styles.scss';

class ThemeToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDark: true
        };
    }

    componentDidMount() {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            const isDark = savedTheme === 'dark';
            this.setState({ isDark });
            this.applyTheme(isDark);
        } else {
            // Default to dark theme
            this.applyTheme(true);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // Apply theme when state changes
        if (prevState.isDark !== this.state.isDark) {
            this.applyTheme(this.state.isDark);
        }
    }

    applyTheme = (isDark) => {
        const theme = isDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }

    toggleTheme = () => {
        this.setState(prevState => ({
            isDark: !prevState.isDark
        }));
    }

    render() {
        const { isDark } = this.state;

        return (
            <button
                className="theme-toggle"
                onClick={this.toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
                <div className={`theme-toggle__icon ${isDark ? 'theme-toggle__icon--dark' : 'theme-toggle__icon--light'}`}>
                    {isDark ? <FaMoon size={20} /> : <FaSun size={20} />}
                </div>
            </button>
        );
    }
}

export default ThemeToggle;
