import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
        <div className="container">
            <div className="logo">
                <Link href="/">C & B Fantasy Baseball League</Link>
            </div>
        </div>
    </header>
  )
}

export default Header