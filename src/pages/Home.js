import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <Navbar />
                <Header />
            </aside>
            <main>
                <div className="main-content">
                    <Skills />
                    <Projects />
                </div>
                <Footer />
            </main>
        </div>
    )
}