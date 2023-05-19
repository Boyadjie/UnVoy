import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Link href="/home/discover">Discover</Link>--
            <Link href="/home/prepare">Prepare Yourself</Link>
            <button>Selection du niveau</button>
        </div>
    );
};

export default Home;