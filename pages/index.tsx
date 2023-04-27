import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>Bienvenu sur Uncover Travel !</h1>
            <header>
            <nav>
                <Link href="/">Accueil</Link>--
                <Link href="/login">Connexion</Link>--
                <Link href="/faq">faq</Link>--
                <Link href="/home">home</Link>--
                <Link href="/contact">contact</Link>--
                <Link href="/register">register</Link>--
                <Link href="/profile">profile</Link>--
            </nav>
        </header>
        </main>
    )
}
