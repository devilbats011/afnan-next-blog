
import Projectstitle from "app/components/projectstitle";

export default function page() {
  return (
    <>
      <aside className="flex gap-2 justify-center p-1 mb-4">
        <Projectstitle />
      </aside>
      <div className="flex flex-col gap-10">
        <ProjectCard title={"Point Of Sales (POS)"}></ProjectCard>
        <ProjectCard
          description={
            "All-In-One Software Built For Retail Service Businesses"
          }
          title={"My Sfera Ai / Sfera Ai"}
        ></ProjectCard>
          <ProjectCard title={"Afco Advisory"}
          description={'Account & Finance Advisor Wordpress Elementor Website'}
          ></ProjectCard>
          <ProjectCard title={"Frontend React js HomePage Exercise"}
          ></ProjectCard>
          <ProjectCard title={"Html Css Vanilla js page Exercise"}
          ></ProjectCard>
      </div>
    </>
  );
}

function ProjectCard({
  children,
  title = "",
  description = "",
}: {
  children?: React.ReactNode;
  title?: any;
  description?: any;
}) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 border w-full">
      <div className="border col-span-full row-span-3 p-2.5 ">{title}</div>

      {description && <div className="col-span-full p-2.5">{description}</div>}
      <img
        className="h-full object-cover col-span-4 border relative"
        src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
      />
      <div className="col-span-full">{children}</div>
    </section>
  );
}
