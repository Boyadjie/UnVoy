import React from 'react';
import Link from "next/link";

const Profile: React.FC = () => {
    return (
        <div>
            <nav>
                <Link href="profile/favorites">Mes favoris</Link>-    -
                <Link href="profile/documents">Mes documents</Link>-    -
                <Link href="profile/rewards">Mes récompenses</Link>
            </nav>
        </div>
    );
};

export default Profile;