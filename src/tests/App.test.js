import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../components/Form';
import NavBar from '../NavBar';


describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Form component', () => {
  it('renders the form default values correctly', () => {
    const form = { 
      lockdownDate: new Date(2020, 2, 23), departCommuteTimeMinutes: 45, returnCommuteTimeMinutes: 45,
        prepareTimeMinutes: 30, wfhPrepMinutes: 15, checkboxes:["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Bank Holidays"]
    };
    const rendered = renderer.create(
      <Form form={form}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});

describe('NavBar component', () => {
  it('renders the default navigation bar correctly', () => {
    const rendered = renderer.create(
      <NavBar/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});