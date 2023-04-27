import React from 'react';
import Link from "next/link";

const Quizz: React.FC = () => {
    return (
        <div>
            <Link href="quizz/1">Quizz sur les restaurants (ex)</Link>-    -
            <Link href="quizz/2">Quizz sur les hotels (ex)</Link>-    -
            <Link href="quizz/3">Quizz sur les temples (ex)</Link>
        </div>
    );
};

export default Quizz;