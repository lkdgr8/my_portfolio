document.getElementById("header").innerHTML = `
<div class="preloader">
    <div class="inner">
        <figure class="logo"><img class="logo-aside" src="images/logo.png" alt="5W&N"></figure>
        <span class="percentage" id="percentage">0</span>
    </div>
    <!-- end inner -->
    <div class="loader-progress" id="loader-progress"> </div>
    <!-- end loader-progress -->
</div>
<!-- end preloader -->
<div class="transition-overlay"></div>
<!-- end transition-overlay -->
<!-- mobile menu -->
<div class="navigation-menu">
    <div class="inner">
        <div class="side-menu">
            <ul>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="case-studies.html">Case Studies</a></li>
                <li><a href="know-us.html">Know Us</a></li>
                <!-- <li><a href="blog.html">Blog</a></li> -->
                <li><a href="our-culture.html">Our Culture</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </div>
        <!-- end side-menu -->
        <div class="sides">
            <div id="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2055.549081981799!2d72.90782658239583!3d19.112300946286318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7e781555555%3A0xc6c460efa50ba5cf!2sSeraphyq%20Futureverse!5e0!3m2!1sen!2sin!4v1684324114619!5m2!1sen!2sin"
                    width="600" height="450" style="border:0" allowfullscreen></iframe>
            </div>
            <!-- end map -->
            <figure>
                <iframe width="1000" height="600"
                    src="https://www.youtube.com/embed/u7VPzAs9G1c?si=7G8TjrwUiw7CFVzq"></iframe>
                <a href="#map" data-fancybox><img src="images/icon-map-marker.svg" alt="5W&N"></a>
            </figure>
        </div>
        <!-- end sides -->
        <div class="sides">
            <!-- <h2> <span class="cp-name">5W&N</span>is a creative portfolio <strong>Marketing</strong></h2> -->
            <div class="main-menu menu-items">
                <ul>
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="know-us.html">Know Us</a></li>
                    <!-- <li><a href="blog.html">Blog</a></li> -->
                    <li><a href="our-culture.html">Our Culture</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
        <!-- end sides -->
    </div>
    <!-- end inner -->
</div>
<!-- end navigation-menu -->
<aside class="left-side">
    <div class="logo">
        <img class="logo-aside" src="images/logo-symbol.jpg" alt="5W&N">
    </div>
    <ul>
        <!-- <li><a href="javascript:void(0)">FACEBOOK</a></li> -->
        <li><a href="https://www.instagram.com/5wn.marketing/" target="_blank">INSTAGRAM </a></li>
        <li><a href="https://www.linkedin.com/company/5wn/" target="_blank">LINKEDIN </a></li>
    </ul>
    <a href="#top" class="gotop"><img src="images/icon-gotop.svg" alt="5W&N"></a>
</aside>
<!-- end left-side -->
<!-- desktop header -->
<header class="header">
    <nav class="navbar">
        <div class="inner">
            <div class="logo"> <a href="index.html"><img class="logo-aside" src="images/logo.png" alt="5W&N"></a> </div>
            <!-- end logo -->
            <div class="phone"> T: <a href="tel:918879055855">+91 8879 055 855</a> </div>
            <!-- end phone -->
            <div class="main-menu">
                <ul>
                    <li><a href="case-studies.html">Case Studies</a></li>
                </ul>
            </div>
            <!-- end main-menu -->
            <div class="hamburger-menu" id="hamburger-menu">
                <div class="burger">
                    <svg id="burger-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                        <title>Show / Hide Navigation</title>
                        <rect class="burger-svg__base" width="50" height="50" />
                        <g class="burger-svg__bars">
                            <rect class="burger-svg__bar burger-svg__bar-1" x="14" y="18" width="22" height="2" />
                            <rect class="burger-svg__bar burger-svg__bar-2" x="14" y="24" width="22" height="2" />
                            <rect class="burger-svg__bar burger-svg__bar-3" x="14" y="30" width="22" height="2" />
                        </g>
                    </svg>
                </div>
                <!-- end burger -->
            </div>
            <!-- end hamburger-menu -->
        </div>
        <!-- end inner -->
    </nav>
    <!-- end navbar -->
</header>
<!-- arrow-up-mobile -->
<div class="d-block d-sm-none mob-arrow">
    <a href="#top" class="gotop"><img src="images/icon-gotop.svg" alt="5W&N"></a>
</div>
<!-- end header -->
`