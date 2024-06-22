import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <ul>
            <ul><Link to="/articles">Articles</Link></ul>
            <ul><Link to="/about">About</Link></ul>
            <ul><Link to="/projects">Projects</Link></ul>
            <ul><Link to="/contact">Contact</Link></ul>
        </ul>
    )
}

export default Navigation