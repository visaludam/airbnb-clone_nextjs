import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Diversity & Belonging</p>
        <p>Press</p>
        <p>Policies</p>
        <p>Help</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">DISCOVER</h5>
        <p>Trust & Safety</p>
        <p>Travel Credit</p>
        <p>Gift Cards</p>
        <p>Airbnb Citizens</p>
        <p>Business Travel</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOSTING</h5>
        <p>Why Host</p>
        <p>Hospitality</p>
        <p>Responsible Hosting</p>
        <p>Community Center</p>
        <p>Host an Experience</p>
      </div>
    </div>
  );
}

export default Footer;
