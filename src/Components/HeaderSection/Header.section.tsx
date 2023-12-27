import { FiAlignCenter, FiPlay } from 'react-icons/fi';
import Navbar from './widget/Navbar';
import Section from './widget/Section';
import Sponsor from './widget/Sponsor';
import axios from 'axios';
const https = require('https');

// const agent = new https.Agent({
//   rejectUnauthorized: false,
//   requestCert: false,
//   agent: false,
// });

export default function Header() {
  return (
    <>
      <div>
        <div className="lg:ml-[112px] lg:mr-[112px] lg:mt-[24px]  ml-[40px] mr-[40px] mt-[40px]">
          <Navbar />
          <Section />
          <Sponsor />
        </div>
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const fetchNavbar = await axios.get(
//     `https://cd52-2400-9800-370-d9e3-289c-3e08-a5-14fe.ngrok-free.app/api/navbar?populate=*`,
//     {
//       headers: {
//         'ngrok-skip-browser-warning': 'any',
//         Accept: 'application/json',
//       },
//     }
//   );

//   const fetchNavbarMenu = await axios.get(
//     `https://cd52-2400-9800-370-d9e3-289c-3e08-a5-14fe.ngrok-free.app/api/navbar?populate=*`,
//     {
//       headers: {
//         'ngrok-skip-browser-warning': 'any',
//         'Content-Type': 'application/json',
//       },
//       httpsAgent: agent,
//     }
//   );
//   console.log(`FETCH -> ${fetchNavbar}`);
//   if (
//     fetchNavbar.data.attributes === undefined ||
//     fetchNavbarMenu.data.attributes.navbarMenu === undefined
//   ) {
//     return {
//       props: {
//         dataNavbar: [],
//         dataNavbarMenu: [],
//       },
//     };
//   }

//   const dataNavbar = fetchNavbar.data.attributes.head_title;
//   const dataNavbarMenu = fetchNavbarMenu.data.data.attributes.navbarMenu;

//   return {
//     props: {
//       dataNavbar: dataNavbar || null,
//       dataNavbarMenu: dataNavbarMenu || null,
//     },
//   };
// }
