import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Logement from '../pages/Logement/Logement'
import Error from '../pages/Error/Error'
import Layout from '../components/Layout/Layout'

function Router() {
    return (
        <Routes>
            <Route path="/" element={
                <Layout>
                    <Home />
                </Layout>
            }
            />

            <Route path="/About" element={
                <Layout>
                    <About />
                </Layout>
            }
            />

            <Route path="/Logement/:id" element={
                <Layout>
                    <Logement />
                </Layout>                
            }
            />

            <Route path="*" element={
                <Layout>
                    <Error />
                </Layout>
            }
            />
        </Routes>
    )
}

export default Router