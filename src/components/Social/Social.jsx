import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Social = () => {
    return (
        <div className="mt-3">
          <button className="btn border-blue-500 text-blue-500">
            <FaGoogle /> Login with Google
          </button>

          <button className="btn mt-3">
            <FaGithub /> Login with GitHub
          </button>
        </div>
    );
};

export default Social;