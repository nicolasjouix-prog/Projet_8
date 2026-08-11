import type { ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout