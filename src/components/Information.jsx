import Section from "./Section";


const Information = ({title, children, image1, image2}) => {
  return (
    <Section id="how-to-use">
        <div class="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 -lg:py-16 lg:px-6">
          <div class="text-gray-500 sm:text-lg text-2xl">
            <h2 class="mb-4 h2 tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
            {children}
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src={image1} alt="office content 1"/>
              <img class="mt-4 w-full lg:mt-10 rounded-lg" src={image2} alt="office content 2"/>
              </div>
          </div>
    </Section>
  );
};

export default Information;
