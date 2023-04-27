import React from 'react';
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <div>
        <Link href="home/quizz">Voir les quizz</Link>-    -
        <Link href="home/games">Voir les jeux</Link>-    -
        <Link href="home/map">Voir la carte</Link>-    -
        </div>
    );
};

export default Home;