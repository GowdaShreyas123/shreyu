import Image from "next/image";
import Navbar from "./Home/header";
import Sidebar from "./Home/sidebar";
import Testimonial from "./Home/home";

// import Example from "./Home/Example";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Testimonial />
    </div>
  );
}
