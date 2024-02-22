import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link href="/about">About</Link>
            <Link href="/farm">Farm Teams</Link>
            <Link href="/code/repos">League Rules</Link>
        </div>
    )
  }
  
  export default Navbar