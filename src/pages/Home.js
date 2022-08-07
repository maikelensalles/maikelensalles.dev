import { Navbar } from '../components/Navbar';
import { About } from '../components/About';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <Navbar />
            </aside>
            <main>
                <div className="main-content">
                    <About />
                </div>
                <Education />
                <Experience />
                <Projects />
                <Footer />
            </main>
        </div>
    )
}