import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}