import {
    FacebookShareButton,
    WhatsappShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon
  } from 'react-share';
  import React from 'react';
import '../styles/_form.scss';
import '../styles/_result.scss';

const SocialButtons = ({totalTimeSaved}) => {
    const socialURL="www.timesavedinlockdown.com";
    const socialText=`I have saved ${totalTimeSaved } by working remotely since lockdown started, click here to find out how much you've saved`;

    return(
        <div className="social-buttons-container">
        <FacebookShareButton
            url={socialURL}
            quote={`I have saved ${totalTimeSaved } by working remotely since lockdown started, click here to find out how much you've saved`}
            className="social-button"
        >
            <FacebookIcon size={24} round />
        </FacebookShareButton>
        
        <WhatsappShareButton
            url={socialURL}
            title={socialText}
            separator=": "
            className="social-button"
        >
            <WhatsappIcon size={24} round />
        </WhatsappShareButton>
        
        <TwitterShareButton
            url={socialURL}
            title={socialText}
            className="social-button"
        >
        <TwitterIcon size={24} round />
        </TwitterShareButton>
        </div>
    );
  };
export default SocialButtons;