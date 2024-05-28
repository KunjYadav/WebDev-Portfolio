import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Hello! I'm Kunj Yadav, a Mechanical Engineer graduate eager to
            kickstart my career in the dynamic field of technology. My academic
            journey has equipped me with strong problem-solving skills and a
            foundation in web development. I specialize in using technologies
            like React, NodeJS, ExpressJS, JavaScript, HTML, and CSS to create
            robust and visually appealing web applications. Passionate about
            staying updated with the latest trends, I'm ready to contribute
            fresh ideas and learnings to innovative projects. Let's build
            something amazing together!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
