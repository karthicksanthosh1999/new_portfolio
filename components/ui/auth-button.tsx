'use client';
import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'

const AuthButton = () => {
    const { data: session } = useSession()
    return (
        <div>
            {
                session ? (
                    <>
                        <p>Signed in as {session.user?.email}</p>
                        <button onClick={() => signOut()}>Sign out</button>
                    </>
                ) : (
                    <button onClick={() => signIn("google")}>Sign in with GitHub</button>
                )
            }
        </div>
    )
}

export default AuthButton;
