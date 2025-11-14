// Nav bar

const ShowNav = () => {
  const header = document.getElementById('main-header');

  header.classList.add("bg-black/10", "backdrop-blur-lg");

  header.innerHTML = `
    <nav class="navbar text-white w-11/12 mx-auto flex items-center justify-between p-0" id="navbar">
      <!-- LEFT SIDE -->
      <div class="hover:shadow-sm px-2 py-1 rounded-sm">
        <a href="index.html" class="flex items-center space-x-2">
          <img src="./assets/Cambry_Official_logo.webp" alt="Cambry Logo" class="w-20" />
        </a>
      </div>

      <!-- RIGHT SIDE (Desktop Menu) -->
      <div class="hidden sm:flex sm:flex-row">
        <ul class="menu menu-horizontal space-x-1">
          <li><a href="index.html" class="hover:text-white hover:bg-white/6 shadow-none">
            Home
          </a></li>
          <li><a href="about-us.html" class="hover:text-white hover:bg-white/6 shadow-none">
            About Us
          </a></li>
          <li><a href="study-destination-mainpage.html" class="hover:text-white hover:bg-white/6 shadow-none">
            Study Destinations
          </a></li>
          <li tabindex="0" class="">
            <details>
              <summary class="hover:text-white hover:bg-white/6 shadow-none">
                Countries
              </summary>
              <ul class="w-56 p-2 bg-violet-700/60 text-white border border-white/50 rounded-sm">
                <li><a href="australia.html">
                    <img class="w-5" src="https://cdn1.iconfinder.com/data/icons/ensign-11/512/19_Ensign_Flag_Nation_Australia-1024.png">
                    Study in Australia
                  </a></li>
                <li><a href="malaysia.html">
                    <img class="w-5" src="https://cdn4.iconfinder.com/data/icons/world-flags-6/900/malaysia_malaysian_national_flag_country-128.png">
                    Study in Malaysia
                  </a></li>
                <li><a href="sweden.html">
                    <img class="w-5"src="https://cdn3.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality/283/sweden-128.png">
                    Study in Sweden
                  </a></li>
                <li><a href="newZealand.html">
                    <img class="w-5" src="https://cdn0.iconfinder.com/data/icons/world-flags-13/130/flag-02-128.png">
                    Study in New Zealand
                  </a></li>
                <li><a href="unitedStates.html">
                    <img class="w-5"
                      src="https://cdn1.iconfinder.com/data/icons/world-flags-13/135/flag_flags_country-03-128.png">
                    Study in United States
                  </a></li>
                <li><a href="canada.html">
                    <img class="w-5"
                      src="https://cdn3.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality/283/canada-512.png">
                    Study in Canada
                  </a></li>
                <li><a href="unitedKingdom.html">
                    <img class="w-5"
                      src="https://cdn0.iconfinder.com/data/icons/flags-of-the-world-2/128/england-3-128.png">
                    Study in UK
                  </a></li>
              </ul>
            </details>
          </li>
          <li><a href="student-services.html" class="hover:text-white hover:bg-white/6 shadow-none">
            Our Services
          </a></li>
          <li><a href="contact-us.html" class="bg-white/6 hover:text-white shadow-none">
            Contact
          </a>
          </li>
        </ul>
      </div>

      <!-- MOBILE MENU -->
      <div class="dropdown dropdown-end font_1 lg:hidden">
        <label tabindex="0" role="button" class="btn btn-ghost text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul tabindex="0"
          class="menu menu-sm dropdown-content mt-3 p-2 bg-[#201481]/80 shadow-lg  backdrop-blur-md rounded-xl w-52 right-0 border border-white/10 z-[90]">
          <li class=""><a href="index.html">Home</a></li>
          <li><a href="about-us.html">About Us</a></li>
          <li><a href="study_Destination_mainpage.html">Study Destinations</a></li>
          <li>
            <details>
              <summary>Countries</summary>
              <ul class="p-2 ">
                <li><a href="destination_Aus.html">
                    <img class="w-5"
                      src="https://cdn1.iconfinder.com/data/icons/ensign-11/512/19_Ensign_Flag_Nation_Australia-1024.png">
                    Study in Australia
                  </a></li>
                <li><a href="study_destinaation_malaysia.html">
                    <img class="w-5"
                      src="https://cdn4.iconfinder.com/data/icons/world-flags-6/900/malaysia_malaysian_national_flag_country-128.png">
                    Study in Malaysia
                  </a></li>
                <li><a href="study_destination_sweden.html">
                    <img class="w-5"
                      src="https://cdn3.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality/283/sweden-128.png">
                    Study in Sweden
                  </a></li>
                <li><a href="study_destination_nz.html">
                    <img class="w-5" src="https://cdn0.iconfinder.com/data/icons/world-flags-13/130/flag-02-128.png">
                    Study in New Zealand
                  </a></li>
                <li><a href="study_destination_usa.html">
                    <img class="w-5"
                      src="https://cdn1.iconfinder.com/data/icons/world-flags-13/135/flag_flags_country-03-128.png">
                    Study in United States
                  </a></li>
                <li><a href="study_destination_canada.html">
                    <img class="w-5"
                      src="https://cdn3.iconfinder.com/data/icons/all-national-flags-of-the-world-very-high-quality/283/canada-512.png">
                    Study in Canada
                  </a></li>
                <li><a href="destination_UK.html">
                    <img class="w-5"
                      src="https://cdn0.iconfinder.com/data/icons/flags-of-the-world-2/128/england-3-128.png">
                    Study in United Kingdom
                  </a></li>
              </ul>
            </details>
          </li>
          <li><a href="student-services.html">Our Services</a></li>
          <li><a href="contact_us.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
}

// nav scroll
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  // const nav = document.getElementById("navbar");
  if (window.scrollY > 300) {
    // When scrolled
    header.classList.add("shadow-md");
    header.classList.remove("bg-transparent", "border-transparent", "bg-white/10", "backdrop-blur-lg");
    header.classList.add("bg-violet-700/80", "border-white/10", "backdrop-blur-2xl");
  } else {
    // Back to top
    header.classList.remove("shadow-md");
    header.classList.add("bg-transparent", "border-transparent", "bg-white/10", "backdrop-blur-lg");
    header.classList.remove(
      "bg-violet-700/80",
      "border-white/10",
      "backdrop-blur-lg"
    );
  }
});

ShowNav();