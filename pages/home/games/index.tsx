import React from 'react';
import Link from "next/link";

const Games: React.FC = () => {
    return (
        <div>
            <Link href="games/1">Jeu sur les restaurants (ex)</Link>-    -
            <Link href="games/2">Jeu sur les hotels (ex)</Link>-    -
            <Link href="games/3">Jeu sur les temples (ex)</Link>
        </div>
    );
};

export default Games;