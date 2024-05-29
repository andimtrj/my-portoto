function ContactH() {
  return (
    <div className="px-[45px]">
      <h1 className="title">Say Hello!</h1>
      <div className="border-y border-hitam mt-5 py-7 flex justify-between sm:flex-col lg:flex-row md:flex-row">
        <div className="desc-title lg:text-lg md:text-sm sm:text-sm flex items-center lg:max-w-[30vw] md:max-w-[45vw] ">
          <p className="text-justify">
            Thinking to yourself "I would love to collaborate with him."
            or "Wow, can he build or design me a website like this?" then you're at the
            right place. Just send me a short message about your project,
            reason for a collab or quick hello and I'll reply.
          </p>
        </div>
        <div className="flex justify-end sm:mt-5">
          <div className="border-l sm:border-x border-hitam flex flex-col desc text-xl gap-4 lg:py-5 lg:px-32 md:py-5 md:px-10 sm:py-2 sm:px-5 sm:text-center">
            <h3 className="desc-title">Menu</h3>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">My Works</a>
          </div>
          <div className="border-l sm:border-none border-hitam flex flex-col desc text-xl gap-4 ;g:py-5 lg:px-32 md:py-5 md:px-10 sm:py-2 sm:px-5 sm:text-center">
            <h3 className="desc-title">Contact</h3>
            <a href="">Email</a>
            <a href="">LinkedIn</a>
            <a href="">My CV</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactH;
