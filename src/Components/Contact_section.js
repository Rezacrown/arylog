import React from "react";
import Contact from "./Contact";

export default function Contact_section() {
  return (
    <div className="bg-gray-900  rounded-lg py-9">
      <div className="flex flex-wrap gap-x-4 gap-y-4  justify-center items-center py-3 px-14">
        <Contact
          icon={require("../assets/icon/facebook.png")}
          link={"https://www.facebook.com/ary.hidayat.54584"}
          className="mx-auto"
        />
        <Contact
          icon={require("../assets/icon/icons8-instagram-100.png")}
          link={"https://www.instagram.com/ry_zaza/"}
          className="mx-auto"
        />
        <Contact
          icon={require("../assets/icon/github.png")}
          link={"https://github.com/Rezacrown"}
          className="mx-auto"
        />
        <Contact
          icon={require("../assets/icon/discord.png")}
          link={"https://discord.com/channels/@ry_zaza"}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
