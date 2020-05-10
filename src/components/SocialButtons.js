import {
    FacebookShareButton,
    WhatsappShareButton,
    FacebookIcon,
    WhatsappIcon,
    TwitterShareButton,
    TwitterIcon
  } from 'react-share';
  import React from 'react';
import '../styles/Form.scss';
import '../styles/Result.scss';

const SocialButtons = ({totalTimeSaved}) => {
    const socialURL="https://timesavedinlockdown.com";
    const socialText=`I have saved ${totalTimeSaved } since lockdown started, click here to find out how much you've saved`;

    return(
        <div className="social-buttons-container">
        <FacebookShareButton
            url={socialURL}
            quote={`I have saved ${totalTimeSaved } since lockdown started, click here to find out how much you've saved`}
            className="social-button"
        >
            <FacebookIcon size={32} round />
        </FacebookShareButton>
        
        <WhatsappShareButton
            url={socialURL}
            title={socialText}
            separator=": "
            className="social-button"
        >
            <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        
        <TwitterShareButton
            url={socialURL}
            title={socialText}
            className="social-button"
        >
        <TwitterIcon size={32} round />
        </TwitterShareButton>
        </div>
    );

  };


export default SocialButtons;