import React from 'react';

const FooterMobile = () => (
  <div className="w-full md:hidden lg:hidden pt-8">
    <div className="p-1 text-gray-400">
      <p className="p-2">Windhoek Ave 777, Santa Cruz de la Sierra, Mexico</p>
      <p className="p-2">+33 895 984 214</p>
      <div className="flex justify-center">
        <img
          className="p-3"
          alt="facebook"
          src="https://img.icons8.com/color/48/undefined/facebook-new.png"
        />
        <img
          className="p-3"
          alt="twitter"
          src="https://img.icons8.com/color/48/undefined/twitter-circled--v1.png"
        />
        <img
          className="p-3"
          alt="instagram"
          src="https://img.icons8.com/color-glass/48/undefined/instagram-new.png"
        />
      </div>
      <p className="p-2">Rent-a-Car 2022. All rigths reserved.</p>
    </div>
  </div>
);

export default FooterMobile;
