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
        <i>front-end and back-end web</i>
        development. <br />
        <br />I also have some experience in web design working with tools like
        Figma and familiar with some <i> design system </i> like flowbite and
        material design.
      </p>
      <p>
        My goal is to leverage my technical expertise to create impactful,
        user-friendly web applications.
      </p>

      <div className="my-8">{/* <BlogPosts /> */}</div>
    </section>
  );
}
