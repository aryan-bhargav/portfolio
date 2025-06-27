
const Resume = () => {
  const fileId = '1Q6onPe5ILHny_HQZUne3mW8-lecrEQrU';
  const previewLink = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <iframe
        src={previewLink}
        width="640"
        height="600"
        allow="autoplay"
        className="rounded-lg mt-26 w-[16rem] h-[20rem] sm:w-sm sm:h-sm md:w-md md:h-md lg:w-md lg:h-5xl shadow-lg"
        title="Resume"
      ></iframe>

      <a
        href={downloadLink}
        className= "border backdrop-blur-3xl text-black/80 dark:text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 duration-300"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
