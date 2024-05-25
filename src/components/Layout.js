    import { Outlet } from "react-router-dom";
    import FlashMessage from "./FlashMessage";

    const Layout = () => {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Key Performance Indicator</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">Leaderboard</a>
                            </li>
                    
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sectors
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/sectors">Sectors list</a></li>
                                    <li><a class="dropdown-item" href="/sectors/create">Add sector</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Employees
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/employees">Employees list</a></li>
                                    <li><a class="dropdown-item" href="/employees/create">Add employee</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Questions
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/questions">Question list</a></li>
                                    <li><a class="dropdown-item" href="/questions/create">Add Question</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/evaluations/create">Create Evaluation</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <FlashMessage/>
                <Outlet/>
            </div>
        );
    }

    export default Layout;