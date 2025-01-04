import Container from "../ui/container";

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <footer className="bg-background py-8 text-foreground">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="w-full md:w-1/2">
            <h6 className="mb-2 font-bold uppercase">About Us</h6>
            <p className="mb-4">
              We provide advanced tracking solutions for businesses around the
              globe. Click{" "}
              <a href="/about-us" className="text-primary hover:underline">
                here
              </a>{" "}
              to learn more.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h6 className="mb-2 font-bold uppercase">Contact Us</h6>
            <ul className="mb-4">
              <li>
                <a href="/contact" className="text-primary hover:underline">
                  Contact Page
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-services"
                  className="text-primary hover:underline"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-4 px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} TrackingAcademy. All rights reserved.
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
