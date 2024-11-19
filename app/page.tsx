import MyName from "./components/myname";

export default function Page() {
  return (
    <section>
      <div className="mb-8 relative font-semibold tracking-tighter">
        <MyName />
      </div>
      <p className="mb-4">
        Hi & peace upon you, I'm
        <b>
          <i> Afnan </i>
        </b>
        , I am a passionate web programmer with years of experience in both{" "}
        <i>front-end and back-end web</i> development. <br />
        <br />I also have some experience in web design working with tools like
        Figma and familiar with some <i> design system </i> like flowbite and
        material design.
      </p>
      <p>
        My goal is to leverage my technical expertise to create impactful,
        user-friendly web applications.
      </p>
      <div className="sm:mt-6 mt-10 text-sm sm:text-base ">
        Email me :
        <a href="mailto:wanafnanharizwz@gmail.com" className="font-semibold italic px-2">
          wanafnanharizwz@gmail.com
        </a>
      </div>
    </section>
  );
}
