import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"; // Import the specific icons
import { Link } from "react-router-dom"

interface INavigationProps {
    darkMode: boolean,
    setDarkMode: Function
}

const Navigation = (props: INavigationProps) => {
    const { darkMode, setDarkMode } = props
    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <nav className="w-full h-16 content-center dark:bg-my-gray dark:text-white">
            <div className="inline ml-8">
                HM
            </div>
            <ul className="list-none inline-flex float-right">
                <ul className="mr-8"><Link to="/articles">Articles</Link></ul>
                <ul className="mr-8"><Link to="/about">About</Link></ul>
                <ul className="mr-8"><Link to="/projects">Projects</Link></ul>
                <ul className="mr-8"><Link to="/contact">Contact</Link></ul>
                <button className="mr-8" onClick={toggleDarkMode}>
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </button>
            </ul>
        </nav>
    )
}

export default Navigation