const headerpage = document.getElementById("headerpage");
headerpage.innerHTML = `
    <div class="container">
        <div class="bg-body-tertiary">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="col-3 d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                    <img src="../assets/img/iconecommerce.png" class="bi me-2" width="60" height="48" alt=""/>
                    <h1>eCommerce</h1>
                </a>
                <div class="nav col-6 me-lg-auto mb-2 justify-content-center mb-md-0">
                    <form class="mb-3 mb-lg-0 me-lg-3 w-75" role="search">
                    <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>
                </div>
                <ul class="nav justify-content-lg-end">
                    <li class="nav-item">
                    <a href="./login.html" class="nav-link link-dark"><button type="button" class="btn btn-outline-dark">Login</button></a>
                    </li>
                    <li class="nav-item">
                    <a href="./register.html" class="nav-link link-dark"><button type="button" class="btn btn-outline-dark">Sign up</button></a>
                    </li>
                </ul>
            </div>
        </div>
        <nav class="py-1 bg-body-tertiary">
        <div class="container d-flex flex-wrap">
        <ul class="nav me-auto">
            <li class="nav-item">
            <a href="../index.html" class="nav-link link-dark px-2 active" aria-current="page">Home</a>
            </li>
            <li class="nav-item">
            <a href="./categories.html" class="nav-link link-dark px-2">Categories</a>
            </li>
            <li class="nav-item">
            <a href="./shop.html" class="nav-link link-dark px-2">Shop</a>
            </li>
            <li class="nav-item">
            <a href="./contacts.html" class="nav-link link-dark px-2">Contacts</a>
            </li>
            <li class="nav-item">
            <a href="./faqs.html" class="nav-link link-dark px-2">FAQs</a>
            </li>
        </ul>
        <ul class="nav">
            <li class="nav-item">
            <a href="./orders.html" class="nav-link link-dark px-2"><img src="../assets/img/bill-small.png" alt=""></a>
            </li>
            <li class="nav-item">
            <a href="./wishlist.html" class="nav-link link-dark px-2"><img src="../assets/img/wishlist-small.png" alt=""></a>
            </li>
            <li class="nav-item">
            <a href="./cart.html" class="nav-link link-dark px-2"><img src="../assets/img/cart-small.png" alt=""></a>
            </li>
        </ul>
        </div>
        </nav>
    </div>
`;
