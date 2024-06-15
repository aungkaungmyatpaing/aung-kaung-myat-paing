"use client";

import ContactPage from "@/components/contact";
import ProductPage from "@/components/product";
import ProfilePage from "@/components/profile";

function HomeIndexPage() {
  return (
    <div className="w-full flex justify-center mx-auto h-auto p-5">
      <div className="container w-full flex justify-center gap-5">
        <ProfilePage />
        <ProductPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default HomeIndexPage;
