// footer

const showFooter = () => {
  const footer = document.getElementById('footer');

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-6">
      <div class="  rounded-sm p-6 md:p-8">
        <!-- top section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <!-- contact text -->
          <div class="p-4 rounded-sm bg-white/6 backdrop-blur-sm">
            <div class="pl-2">
              <h2 class="text-3xl md:text-4xl font-extrabold text-yellow-300 mb-4">
                Contact Info
              </h2>
              <div class="space-y text-white/90 sm:text-base text-sm">
                <p class="flex items-start gap-3">
                  <span class="text-yellow-300 text-lg"><i class="fa-solid fa-phone-volume"></i></span>
                  <span>+880 1730-589112</span>
                </p>

                <p class="flex items-start gap-3">
                  <span class="text-yellow-300 text-lg"><i class="fa-solid fa-envelope"></i></span>
                  <span>cambry.bd@gmail.com</span>
                </p>

                <p class="flex items-start gap-3">
                  <span class="text-yellow-300 text-lg"><i class="fa-solid fa-map-location-dot"></i></span>
                  <span>H# 398 (1st Floor), R# 29, Mohakhali DOHS, Dhaka-1212, Bangladesh</span>
                </p>

                <p class="flex items-start gap-3">
                  <span class="text-yellow-300 text-lg"><i class="fa-solid fa-clock"></i></span>
                  <span>Saturday - Thursday: 10:00 AM to 06:00 PM</span>
                </p>

                <div class="mt-4 flex items-center gap-3">
                  <a class="inline-flex items-center justify-center w-9 h-9 bg-yellow-400 text-blue-900 rounded-sm shadow" href="#" aria-label="facebook"><i class="fa-brands fa-facebook-f"></i></a>
                  <a class="inline-flex items-center justify-center w-9 h-9 bg-yellow-400 text-blue-900 rounded-sm shadow" href="#" aria-label="linkedin"><i class="fa-brands fa-linkedin-in"></i></a>
                  <a class="inline-flex items-center justify-center w-9 h-9 bg-yellow-400 text-blue-900 rounded-sm shadow" href="#" aria-label="youtube"><i class="fa-brands fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
          <!-- Contact Form -->
          <div class="p-4 rounded-sm bg-white/6 backdrop-blur-sm">
            <div class="contact-form">
              <p class="text-white/90 mb-4 sm:text-base text-sm">
                Have questions? We’re here to help! Fill out the form. We shall reach out to you as soon as possible.
              </p>

              <form class="w-full">
                <div class="grid grid-cols-12 gap-3">
                  <div class="col-span-12">
                    <input id="name" name="name" type="text" placeholder="Name" class="w-full sm:h-10 h-8 sm:text-base text-sm px-3 placeholder-gray-600 bg-white/90 border-none rounded-sm focus:outline-none" />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <input id="phone" name="phone" type="tel" placeholder="Phone" class="w-full sm:h-10 h-8 sm:text-base text-sm px-3 placeholder-gray-600 bg-white/90 border-none rounded-sm focus:outline-none" />
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <input id="email" name="email" type="email" placeholder="Email" class="w-full sm:h-10 h-8 sm:text-base text-sm px-3 placeholder-gray-600 bg-white/90 border-none rounded-sm focus:outline-none" />
                  </div>

                  <div class="col-span-12">
                    <textarea id="message" name="message" rows="5" placeholder="Message" class="w-full sm:text-base text-sm px-3 py-3 placeholder-gray-600 bg-white/90 border-none rounded-sm resize-none focus:outline-none"></textarea>
                  </div>
                  <div class="col-span-12">
                    <button type="submit" class="btn sm:btn-md btn-sm w-full border-none shadow-none text-white bg-yellow-400 hover:bg-yellow-300">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- bottom section -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <div class="p-4 rounded-sm bg-white/6 backdrop-blur-sm">
            <div class="mb-4">
              <div class="text-yellow-300 font-extrabold text-lg">
                <img class="w-30" src="./assets/Cambry_Official.png">
              </div>
              <p class="text-sm text-white/85 mt-2">Your trusted partner since 2009, offering study abroad consultancy, having 600+ partner institutes globally.</p>
            </div>
          </div>
          <div class="p-4 rounded-sm bg-white/6 backdrop-blur-sm">
            <h3 class="text-yellow-300 font-semibold mb-3">Explore</h3>
            <ul class="space-y-2 text-white/90 text-sm">
              <li><a href="#" class="hover:underline">Home</a></li>
              <li><a href="#" class="hover:underline">Study Destinations</a></li>
              <li><a href="#" class="hover:underline">Student Services</a></li>
              <li><a href="#" class="hover:underline">About Cambry</a></li>
            </ul>
          </div>
          <div class="text-sm p-4 rounded-sm bg-white/6 backdrop-blur-sm">
            <h3 class="text-yellow-300 font-semibold mb-3">Visit</h3>
            <p class="text-white/90 mb-3">H# 398 (1st Floor), R# 29, Mohakhali DOHS, Dhaka-1212, Bangladesh</p>
            <h4 class="text-yellow-300 font-semibold mb-2">Let's Talk</h4>
            <p class="text-white/90"><i class="fa-solid fa-phone-volume pr-2"></i> +880 1730-589112</p>
            <p class="text-white/90"><i class="fa-solid fa-envelope pr-2"></i> cambry.bd@gmail.com</p>
          </div>
          <div class="p-4 rounded-sm bg-white/6 backdrop-blur-sm">
            <h3 class="text-yellow-300 font-semibold mb-3">Opening Hours</h3>
            <ul class="text-white/90 text-sm space-y-1">
              <li>SAT: 10:00 AM – 06:00 PM</li>
              <li>SUN: 10:00 AM – 06:00 PM</li>
              <li>MON: 10:00 AM – 06:00 PM</li>
              <li>TUES: 10:00 AM – 06:00 PM</li>
              <li>WED: 10:00 AM – 06:00 PM</li>
            </ul>
          </div>
          <div class="p-4 rounded-sm bg-white/6 backdrop-blur-sm">
            <h3 class="text-yellow-300 font-semibold mb-3">Legal</h3>
            <ul class="text-white/90 text-sm space-y-2 mb-3">
              <li><a href="#" class="hover:underline">Privacy Policy</a></li>
              <li><a href="#" class="hover:underline">Terms &amp; Conditions</a></li>
            </ul>
            <div class="text-sm text-white/90">
              <div class="mb-2 font-semibold text-yellow-300">Social</div>
              <div class="flex items-center gap-2">
                <a class="inline-flex items-center justify-center w-8 h-8 bg-white text-blue-900 rounded-sm" href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a class="inline-flex items-center justify-center w-8 h-8 bg-white text-blue-900 rounded-sm" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a class="inline-flex items-center justify-center w-8 h-8 bg-white text-blue-900 rounded-sm" href="#"><i class="fa-brands fa-youtube"></i></a>
              </div>
              <p class="text-xs text-white/70 mt-3">
                Copyright © Cambry 2025 | Developed by TechWisdom Web Solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

showFooter();