import Projectstitle from "app/components/projectstitle";

export default function page() {
  return (
    <>
      <aside className="flex gap-2 justify-center p-1 mb-4">
        <Projectstitle />
      </aside>
      <div className="flex flex-col gap-10">
        <ProjectCard
          title={
            "Prototype Point Of Sales (POS) inspired by Loyverse Pos System ( https://loyverse.com/download-loyverse ) "
          }
          urls={[
            {
              name: "Point Of Sales (POS)",
              href: "https://nextjs-pos-peach.vercel.app/",
            },
          ]}
          description={" This Website use Next.js version 14 and Laravel  "}
        >
          <div>
            <p className="p-2.5 text-sm font-semibold">
              Note: Not fully working because the backend not being deploy (Only
              working on Afnan's PC Locally, NOT IN PRODUCTION).
            </p>
          </div>
        </ProjectCard>
        <ProjectCard
          urls={[
            {
              name: "https://app.mysfera.co/",
              href: "https://app.mysfera.co/admin/login",
            },
            {
              name: "https://partner.mysfera.co/",
              href: "https://partner.mysfera.co/admin/login",
            },
          ]}
          description={"This Website use Laravel Filament and Livewire"}
          title={
            "My Sfera Ai (All-In-One Software Built For Retail Service Businesses)"
          }
        ></ProjectCard>
        <ProjectCard
          title={"Afco Advisory"}
          urls={[
            {
              name: "https://www.afcoadvisory.com",
              href: "https://www.afcoadvisory.com/",
            },
          ]}
          description={
            "This website was built using Wordpress Elementor Website"
          }
        ></ProjectCard>
        <ProjectCard
          title={"Baituljannah"}
          urls={[
            {
              name: "https://baituljannah.ai/",
              href: "https://baituljannah.ai/",
            },
          ]}
          description={
            "Muslim Dating app. This Websites system use Laravel and Vue.js"
          }
        ></ProjectCard>
        <ProjectCard
          title={"Fun Exercise JS Vanilla 3D and animation"}
          urls={[
            {
              name: "https://afnan-dev.netlify.app ",
              href: "https://afnan-dev.netlify.app/",
            },
          ]}
          description={
            "This website use Vanilla Js and CSS. May need to wait for some time to load the page "
          }
        ></ProjectCard>
        <ProjectCard
          title={
            "Prototype website inspired by Iktisas Ingenieurs Website ( http://iktisas.com.my/   )"
          }
          urls={[
            {
              name: "https://wce-engineering.netlify.app",
              href: "https://wce-engineering.netlify.app/",
            },
          ]}
          description={
            "Learning Vue.js and Nuxt.js and firebase db by trying to replicate Iktisas Ingenieurs Website( http://iktisas.com.my/ )"
          }
        ></ProjectCard>
        <ProjectCard
          title={"My Old Profile Website"}
          urls={[
            {
              name: "https://afnan-sea-dev.netlify.app/ ",
              href: "https://afnan-sea-dev.netlify.app/",
            },
          ]}
          description={"This website use react.js"}
        ></ProjectCard>
      </div>
    </>
  );
}

function ProjectCard({
  children,
  title = "",
  description = "",
  urls = [],
}: {
  children?: React.ReactNode;
  title?: any;
  description?: any;
  urls?: { href: string; name: string }[];
}) {
  return (
    <section className="grid hover:bg-slate-700 grid-cols-2 md:grid-cols-4 border w-full transform hover:scale-110 transition duration-300">
      <div className="border col-span-full row-span-3">
        <div className="border-b font-bold p-2">{title}</div>
        {urls && (
          <ol key={"parent_urls"}>
            {urls.map((u, index) => {
              return (
                <li key={index} className="p-2 flex gap-2">
                  <p className="font-semibold text">Url:</p>
                  <a
                    className="hover:underline italic"
                    target="_blank"
                    href={u.href}
                  >
                    {u.name}
                  </a>
                </li>
              );
            })}
          </ol>
        )}
      </div>
      <div className="col-span-full">
        {children}

        {description && (
          <div className="p-2.5 col-span-full">{description}</div>
        )}
      </div>
      <img
        className="object-cover col-span-4 border relative"
        width={"100%"}
        height={480}
        src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
      />
    </section>
  );
}
