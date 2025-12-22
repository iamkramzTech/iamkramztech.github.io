export function Services()
{
    return `
    <section id="services" class="services section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <div class="text-center">
   <h2 class="h2">Services</h2>
        <p class="lead">What I offer</p>
        </div>
     
      </div><!-- End Section Title -->

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="service-item  position-relative">
              <div class="icon">
                <i class="bi bi-laptop-fill"></i>
              </div>
              <a href="#" class="stretched-link">
                <h3>System Administration</h3>
              </a>
              <p>Installing Operating System, bootable media creation, laptop/desktop reformatting with
                        installation of necessary software and drivers.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="service-item position-relative">
              <div class="icon">
               <i class="bi bi-window-desktop"></i>
              </div>
              <a href="#" class="stretched-link">
                 <h3>Desktop App Development</h3>
              </a>
              <p>Building windows-based and cross platform desktop applications.</p>
            </div>
          </div><!-- End Service Item -->

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="service-item position-relative">
              <div class="icon">
                <i class="bi bi-code-slash"></i>
              </div>
              <a href="#" class="stretched-link">
                <h3>Freelancing</h3>
              </a>
              <p>Providing technical solutions for clients.</p>
            </div>
          </div><!-- End Service Item -->
         

        </div>

      </div>

    </section>
    `;
}