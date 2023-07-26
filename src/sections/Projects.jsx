import ProjectsCard from "../components/ProjectsCard";

const Projects = () => {
  return (
    <>
      <div className="bg-atlassianBlue my-10 md:my-12">
        <div className="mt-12 md:mt-2" id="services">
          <div className="container mx-auto px-4 md:px-2 pt-4" id="projects">
            <div className="font-inter text-sm lg:text-base text-black font-extrabold my-2 md:my-3">
              SHOWCASE
            </div>
            <div className="font-poppins text-xl lg:text-2xl text-white font-bold">
              Side Projects
            </div>
            <div className="flex flex-col md:flex-row gap-6 pt-8 pb-4 items-center justify-center">
              <ProjectsCard
                title="Cine Pass"
                description="A user-friendly movie ticket booking front-end web app, providing descriptive movie details.Integrated real time movie information from TMDB API."
              />
              <ProjectsCard
                title="Mapty"
                description="Enable users to log their workouts by saving the type of workouts, distance & duration by selecting the precise spot where they want to work out in the map."
              />
              <ProjectsCard
                title="Tasky"
                description="Enable users to save their tasks with optimized descriptions, including the task image, title, category & description and help users to review their tasks."
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 pb-12 items-center justify-center">
              <ProjectsCard
                title="Natours"
                description="Made with Sass with improved functionality. The main aim of the project is to showcase the hidden features of CSS and Sass which helps to build micro-animations."
              />
              <ProjectsCard
                title="Space X Clone"
                description="Recreated Space X website including Homepage, menu and some inner pages, also created some micro animations with the help of the CSS keyframes."
              />
              <ProjectsCard
                title="Guess My Number"
                description="A single player game which enables users to guess the number between 1 and 20. This project was built to learn the essence of JS ie. JavaScript"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
