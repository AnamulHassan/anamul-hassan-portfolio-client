import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

const CallToAction = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_4lcf019', form.current, '5FlS0S6F1GHj-xNJ7')
      .then(
        result => {
          if (result.text.toLowerCase() === 'ok') {
            toast.success('Message has been sent successfully');
            e.target.reset();
          }
        },
        error => {
          if (error.text) {
            toast.error('Something went wrong, try again!');
          }
        }
      );
  };
  return (
    <section className="w-10/12 md:w-8/12 lg:w-8/12 mx-auto my-12">
      <Rotate bottom left>
        <h2
          className="text-center text-4xl font-semibold my-6"
          style={{ fontFamily: "'Sofia', cursive" }}
        >
          How can I help you?
        </h2>
      </Rotate>
      <form
        ref={form}
        onSubmit={sendEmail}
        action=""
        className="w-full text-md font-semibold"
      >
        <Fade top>
          <div>
            <label className="block mb-2 ml-4" htmlFor="name">
              Write your name
            </label>
            <input
              className="w-full rounded-md py-2 px-4 outline-none "
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
            />
          </div>
        </Fade>
        <Fade top>
          <div>
            <label className="block mb-2 ml-4" htmlFor="email">
              Write your email address
            </label>
            <input
              className="w-full rounded-md py-2 px-4 outline-none "
              type="email"
              name="email"
              id="email"
              placeholder="Your email address"
              required
            />
          </div>
        </Fade>
        <Fade top>
          <div>
            <label className="block mb-2 ml-4" htmlFor="subject">
              Subject that you want to say
            </label>
            <input
              className="w-full rounded-md py-2 px-4 outline-none"
              type="text"
              name="subject"
              required
              id="subject"
              placeholder="Subject that your want to say to me"
            />
          </div>
        </Fade>
        <Fade top>
          <div>
            <label className="block mb-2 ml-4" htmlFor="message">
              Write your message
            </label>
            <textarea
              className="w-full rounded-md py-2 px-4 outline-none"
              name="message"
              id="message"
              required
              placeholder="Write your message"
            ></textarea>
          </div>
        </Fade>
        <Fade bottom>
          <div className="w-full flex justify-end">
            <input
              className="bg-[#64feda] py-2 px-8 rounded-md text-[#0a1930] text-md font-semibold cursor-pointer mt-4 hover:bg-opacity-80 duration-300 active:translate-y-2"
              type="submit"
              value="Send message"
            />
          </div>
        </Fade>
      </form>
    </section>
  );
};

export default CallToAction;
