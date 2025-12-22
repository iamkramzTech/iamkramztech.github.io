export function Contact()
{
    return `
       <section id="contact" class="contact section">
        <!-- Section Title -->
        <div class="container section-title" data-aos="fade-up">
            <div class="text-center">
                <h2 class="h2">Contact Me</h2>
                <p class="lead">Feel free to ask</p>
            </div>
        </div><!-- End Section Title -->

        <div class="container" data-aos="fade-up" data-aos-delay="100">

            <div class="info-wrap" data-aos="fade-up" data-aos-delay="200">
                <div class="row gy-5">

                    <div class="col-lg-4">
                        <div class="info-item d-flex align-items-center">
                            <i class="bi bi-geo-alt-fill flex-shrink-0"></i>
                            <div>
                                <h3>Address</h3>
                                <p>Southern Leyte, Eastern Visayas, Philippines</p>
                            </div>
                        </div>
                    </div><!-- End Info Item -->

                    <div class="col-lg-4">
                        <div class="info-item d-flex align-items-center">
                            <i class="bi bi-telephone-fill"></i>
                            <div>
                                <h3>Call Us</h3>
                                <p><a href="tel:+639657985806">+63 965 798 5806</a></p>
                            </div> 
                        </div>
                    </div><!-- End Info Item -->

                    <div class="col-lg-4">
                        <div class="info-item d-flex align-items-center">
                            <i class="bi bi-envelope-at-fill"></i>
                            <div>
                                <h3>Email Us</h3>
                                <p><a href="mailto:markjoseph.bernaldez.dev@gmail.com">markjoseph.bernaldez.dev@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div><!-- End Info Item -->
                </div>
            </div>
        </div>
    </section>
    `;
}