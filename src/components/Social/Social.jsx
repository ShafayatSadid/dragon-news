'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const Social = () => {

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }

  const handleGitHubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  }


  return (
    <div className="mt-3">
      <button onClick={handleGoogleSignin} className="btn border-blue-500 text-blue-500">
        <FaGoogle /> Login with Google
      </button>

      <button onClick={handleGitHubSignin} className="btn mt-3">
        <FaGithub /> Login with GitHub
      </button>

      <h2 className="text-[1.25rem] font-semibold text-[#403F3F] my-5.5">Find Us On</h2>

      <button className='btn text-[#706F6F] pr-[137px]'>
        <FaFacebook className='text-[#3B599C] ' /> Facebook
      </button>

      <button className='btn text-[#706F6F] pr-[158px] my-3'>
        <IoLogoTwitter className='text-[#58A7DE] ' /> Twitter
      </button>

      <button className='btn text-[#706F6F] pr-[132px]'>
        <FaInstagram className='text-[#D82D7E] ' /> Instagram
      </button>
    </div>
  );
};

export default Social;