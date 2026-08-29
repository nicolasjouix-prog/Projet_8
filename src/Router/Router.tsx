import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Logement from '../pages/Logement/Logement'
import Error from '../pages/Error/Error'
import Layout from '../components/Layout/Layout'

function Router() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={
                    <Home />
                }
                />

                <Route path="/About" element={
                    <About />
                }
                />

                <Route path="/Logement/:id" element={
                    <Logement />
                }
                />

                <Route path="*" element={
                    <Error />
                }
                />
            </Routes>
        </Layout>
    )
}

export default Router