import Projectstitle from "app/components/projectstitle";

export default function page() {
  return (
    <>
      <aside className="flex gap-2 justify-center p-1 mb-10">
        <Projectstitle />
      </aside>
      <div className="flex flex-col gap-10">
        <ProjectCard
          urls={[
            {
              name: "https://afnan-hutang.netlify.app",
              href: "https://afnan-hutang.netlify.app/calendar",
            },
          ]}
          description={"Personal Hutang with friend and family website"}
          title={
            "Afnan's hutang system"
          }
          imgSrc="/images/afnan-hutang-netlify.png"
        ></ProjectCard>

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
          imgSrc="/images/sfera-ai.png"
        ></ProjectCard>

        <ProjectCard
          title={
            "Prototype Point Of Sales (POS) inspired by Loyverse Pos System ( https://loyverse.com/download-loyverse ) "
          }
          imgSrc="/images/pos.png"
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
          title={"Afco Advisory"}
        imgSrc="/images/afco.png"
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
          imgSrc="/images/bj.png"
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
          imgSrc="/images/3d-fun-js.png"
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
          imgSrc="/images/afnan-old-profile.png"
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
  imgSrc,
}: {
  children?: React.ReactNode;
  title?: any;
  description?: any;
  urls?: { href: string; name: string }[];
  imgSrc?: string;
}) {
  return (
    <section className="my-1 hover:my-4 transition-all grid hover:bg-slate-700 grid-cols-2 md:grid-cols-4 border rounded w-full transform hover:scale-110 transition duration-300">
      <div className=" border-b col-span-full row-span-3">
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
      {imgSrc && (
        <img
          className="object-cover col-span-4 border relative"
          alt="img"
          width={"100%"}
          style={{
            height: "390px",
            backgroundSize: 'cover',
          }}
          src={imgSrc}
        />
      )}
    </section>
  );
}
