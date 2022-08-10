import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <Header />
            </aside>
            <main>
                <div className="main-content">
                    <Skills />
                </div>
                <Education />
                <Experience />
                <Projects />
                <Footer />
            </main>
        </div>
    )
}