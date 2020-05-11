import React from 'react';
import Avatar from 'avataaars';
import '../styles/_contact.scss';

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
            <p className="contact-text">I'm a Front-End developer living and working in London, this project was written using ReactJS, SASS and Jest with Heroku used for deployment. Any questions/comments/suggestions or if you'd like to have a look at the code feel free to <a href="https://www.linkedin.com/in/insung-mulumba-452849a6/">connect with me on LinkedIn</a></p>
            </div>
            <p className="footnotes">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
            <p className="footnotes">Last updated: 11/05/2020</p>
        </div>
    );
};
export default Contact;