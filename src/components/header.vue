<template>
    <header class="container">
        <nav className="navbar">
            <router-link class="logo" to="/">MovieApp</router-link>
            <ul className="nav-menu">
                <li className="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li className="nav-item">
                    <router-link class="nav-link" to="/movies">Movies</router-link>
                </li>
                <li className="nav-item">
                    <router-link class="nav-link" to="/tv">Tv Shows</router-link>
                </li>
                <li className="nav-item">
                    <router-link class="nav-link" to="/peoples">People</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="css">
    .header {
        border-bottom: 1px solid #e2e8f0;
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.6rem 1.8rem;
    }

    .nav-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }

    .nav-item {
        margin-left: 5rem;
        list-style: none;
    }

    .nav-link {
      font-size: 1rem;
      font-weight: 400;
      color: #475569;
      text-decoration: none;
    }

    .nav-link:hover {
      color: #482ff7;
    }

    .logo {
      font-size: 1.3rem;
      font-weight: 500;
      color: #482ff7;
      text-decoration: none;
    }

    @media only screen and (max-width: 48em) {
        .nav-item {
            margin-left: 1rem;
        }
    }

    @media only screen and (max-width: 32em) {
        .navbar, .nav-menu  {
            flex-direction: column;
        }

        
        .nav-item {
            margin-left: 0;
            margin-bottom: 5px;
        }
    }
</style>