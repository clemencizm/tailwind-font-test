import Image from "next/image";
import iconGithub from "/public/github-mark-white.svg";
import profilPict from "/public/profil-pict.jpg";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-6xl">Tailwing fonts</h1>
        <p className="text-xl text-slate-400">Set up <em>Tailwind</em> with <em>Next JS</em> to understand how the default values of Tailwind font load and work.</p>
        <p className="text-base text-slate-100 bg-slate-700 p-4 rounded-md	">This challenge came up afer I encounter a problem loading Tailwind typography while working on my first app with Next JS, combining Tailwind with <a className="text-amber-200 underline underline-offset-4 hover:text-slate-100 hover:no-underline focus:outline-none focus:ring focus:ring-amber-200" href="https://daisyui.com/docs/layout-and-typography/">DaisyUI</a>
        </p>

        <div className="mt-20 w-full">
          <h2 className="text-4xl mb-8">Headings — Tailwind default values</h2>
          <table className="table-auto m-auto">
            <thead>
              <tr>
                <th className="text-left pr-6 p-4 pl-8">class</th>
                <th className="text-left p-4 pl-8">sample</th>
                <th className="text-left pr-6 p-4 pl-8">font size</th>
                <th className="text-left p-4 pl-8">line height</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td className="p-4 pl-8 ">text-6xl font-bold</td>
                <td className="p-4 pl-8 text-6xl font-bold w-72">h1 title multiple lines</td>
                <td className="p-4 pl-8"> 3.75rem </td>
                <td className="p-4 pl-8"> 1rem </td>
              </tr>
              <tr >
                <td className="p-4 pl-8 ">text-5xl font-bold</td>
                <td className="p-4 pl-8 text-5xl font-bold w-72">h2 title multiple lines</td>
                <td className="p-4 pl-8"> 3rem </td>
                <td className="p-4 pl-8"> 1rem </td>
              </tr>
              <tr >
                <td className="p-4 pl-8 ">text-4xl font-bold</td>
                <td className="p-4 pl-8 text-4xl font-bold w-72">h3 title multiple lines</td>
                <td className="p-4 pl-8"> 2.25rem </td>
                <td className="p-4 pl-8"> 2.5rem </td>
              </tr>
              <tr >
                <td className="p-4 pl-8 ">text-3xl font-bold</td>
                <td className="p-4 pl-8 text-3xl font-bold w-72">h4 title multiple lines</td>
                <td className="p-4 pl-8"> 1.875rem </td>
                <td className="p-4 pl-8"> 2.25rem </td>
              </tr>
              <tr >
                <td className="p-4 pl-8 ">text-2xl font-bold</td>
                <td className="p-4 pl-8 text-2xl font-bold w-72">h5 title multiple lines</td>
                <td className="p-4 pl-8"> 1.5rem </td>
                <td className="p-4 pl-8"> 2rem </td>
              </tr>
              <tr >
                <td className="p-4 pl-8 ">text-xl font-bold</td>
                <td className="p-4 pl-8 text-xl font-bold w-72">h6 title long over multiple lines</td>
                <td className="p-4 pl-8"> 1.25rem </td>
                <td className="p-4 pl-8"> 1.75rem </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-20 w-full">
          <h2 className="text-4xl mb-8">Text — Tailwind default values</h2>
          <table className="table-auto m-auto">
            <thead>
              <tr>
                <th className="text-left pr-6 p-4 pl-8">class</th>
                <th className="text-left p-4 pl-8">sample</th>
                <th className="text-left pr-6 p-4 pl-8">font size</th>
                <th className="text-left p-4 pl-8">line height</th>
              </tr>
            </thead>
            <tbody>
              <tr >
                <td className="p-4 pl-8">text-xs</td>
                <td className="text-xs p-4 pl-8 w-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit viverra posuere. Integer placerat ex ut elit commodo consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit viverra posuere. Integer placerat ex ut elit commodo consectetur.</td>
                <td className="p-4 pl-8"> 0.75rem </td>
                <td className="p-4 pl-8"> 1rem </td>
              </tr>
              <tr>
                <td className="p-4 pl-8">text-sm</td>
                <td className="text-sm p-4 pl-8 w-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit viverra posuere. Integer placerat ex ut elit commodo consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit viverra posuere. Integer placerat ex ut elit commodo consectetur.</td>
                <td className="p-4 pl-8"> 0.875rem </td>
                <td className="p-4 pl-8"> 1.25rem </td>
              </tr>
              <tr>
                <td className="pr-6 p-4 pl-8">text-base</td>
                <td className="text-base p-4 pl-8 w-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit viverra posuere. Integer placerat ex ut elit commodo consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. </td>
                <td className="p-4 pl-8"> 1rem </td>
                <td className="p-4 pl-8"> 1.5rem </td>
              </tr>
              <tr>
                <td className="p-4 pl-8">text-lg</td>
                <td className="text-lg p-4 pl-8 w-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit viverra posuere elit commodo consectetur commodo ex ut elit commodo consectetu .</td>
                <td className="p-4 pl-8"> 1.125rem </td>
                <td className="p-4 pl-8"> 1.75rem </td>
              </tr>
              <tr>
                <td className="p-4 pl-8">text-xl</td>
                <td className="text-xl p-4 pl-8 w-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit viverra posuere. Integer placerat ex ut elit ipsum dolor sit amet, consectetur adipiscing elit.</td>
                <td className="p-4 pl-8"> 1.25rem </td>
                <td className="p-4 pl-8"> 1.75rem </td>
              </tr>
              <tr>
                <td className="p-4 pl-8">text-2xl</td>
                <td className="text-2xl p-4 pl-8 w-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit viverra posuere elit commodo consectetur.</td>
                <td className="p-4 pl-8"> 1.5rem </td>
                <td className="p-4 pl-8"> 2rem </td>
              </tr>
              <tr>
                <td className="p-4 pl-8">text-3xl</td>
                <td className="text-3xl p-4 pl-8 w-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit integer blandit.</td>
                <td className="p-4 pl-8"> 1.875rem </td>
                <td className="p-4 pl-8"> 2.25rem </td>
              </tr>
              <tr>
                <td className="p-4 pl-8">text-4xl</td>
                <td className="text-4xl p-4 pl-8 w-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                <td className="p-4 pl-8"> 2.25rem </td>
                <td className="p-4 pl-8"> 2.5rem </td>
              </tr>
              <tr>
                <td className="p-4 pl-8">text-5xl</td>
                <td className="text-5xl p-4 pl-8 w-72">Lorem ipsum dolor sit amet posuere. </td>
                <td className="p-4 pl-8"> 3rem </td>
                <td className="p-4 pl-8"> 1rem </td>
              </tr>
              <tr>
                <td className="p-4 pl-8">text-6xl</td>
                <td className="text-6xl p-4 pl-8 w-72">Lorem ipsum dolor sit adipiscing elit. </td>
                <td className="p-4 pl-8"> 3.75rem </td>
                <td className="p-4 pl-8"> 1rem </td>
              </tr>
              <tr>
                <td className="p-4 pl-8">text-7xl</td>
                <td className="text-7xl p-4 pl-8 w-72">Lorem ipsum consectetur.</td>
                <td className="p-4 pl-8"> 4.5rem </td>
                <td className="p-4 pl-8"> 1rem </td>
              </tr>
              <tr>
                <td className="p-4 pl-8">text-8xl</td>
                <td className="text-8xl p-4 pl-8 w-72">Lorem ipsum elit.</td>
                <td className="p-4 pl-8"> 6rem </td>
                <td className="p-4 pl-8"> 1rem </td>
              </tr>
              <tr>
                <td className="p-4 pl-8">text-9xl</td>
                <td className="text-9xl pr-6 p-4 pl-8 w-72">Lorem ipsum elit.</td>
                <td className="p-4 pl-8"> 8rem </td>
                <td className="p-4 pl-8"> 1rem </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main >
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center border-t-2 border-slate-800 pt-10">
        <Image
          src={profilPict} // Path to the image (ensure the file exists in the 'public' directory)
          alt="profil picture"
          width={24} // Image width
          height={24} // Image height
        />
        <a className="text-amber-200 underline underline-offset-4 hover:text-slate-100 hover:no-underline focus:outline-none focus:ring focus:ring-amber-200" href="https://clemence-portfolio.framer.website/">Clémence Design + Code</a>
        <Image
          src={iconGithub} // Path to the image (ensure the file exists in the 'public' directory)
          alt="logo github"
          width={24} // Image width
          height={24} // Image height
        />
        <a className="text-amber-200 underline underline-offset-4 hover:text-slate-100 hover:no-underline focus:outline-none focus:ring focus:ring-amber-200" href="https://github.com/clemencizm">https://clemencizm.github.io/</a>
      </footer >
    </div >
  );
}
