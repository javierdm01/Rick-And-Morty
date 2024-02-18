import { Outlet,Link } from "react-router-dom";
export function Layout(){

    return(
        <div>
            <header>
                <nav>
                    <ul>
                       <li><Link to={'/'}>Home</Link></li>
                       <li><Link to={'/episodes'}>Episodes</Link></li>
                       <li><Link to={'/actors'}>Actors</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}