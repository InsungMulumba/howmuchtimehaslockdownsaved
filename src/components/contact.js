import React from 'react';
import Avatar from 'avataaars';
import '../styles/contact.scss';

const Contact = () => 
{
    return (
        <div className="contact-container" id="contact">
            <div className="contact-info">
            <Avatar
                avatarStyle='Circle'
                topType='ShortHairDreads01'
                accessoriesType='Blank'
                hairColor='Black'
                facialHairType='Blank'
                clotheType='ShirtCrewNeck'
                clotheColor='Black'
                eyeType='Default'
                eyebrowType='Default'
                mouthType='Twinkle'
                skinColor='Black'
            />
            <p className="contact-text">I'm a Front-End developer living and working in London, I wrote this project using ReactJS and SASS. Any questions or if you'd like to have a look at the code feel free to <a href="https://www.linkedin.com/in/insung-mulumba-452849a6/">connect with me on LinkedIn</a></p>
            </div>
            <p className="quote"> "It’s not that we have little time, but more that we waste a good deal of it." <br /> Seneca </p>
        </div>
    );
};
export default Contact;